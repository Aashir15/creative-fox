"use client";

import {
    ArrowUpRight,
    Check,
    ChevronDown,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const contactServices = [
    "Web Design",
    "Web Development",
    "Brand Identity",
    "E-commerce",
    "Digital Marketing",
    "Social Media",
    "SEO",
    "AI Solutions",
    "Other",
];

const projectBudgets = [
    "$1,000 – $3,000",
    "$3,000 – $7,000",
    "$7,000 – $15,000",
    "$15,000+",
    "Not sure yet",
];

const contactDetails = [
    {
        id: 1,
        label: "Email us",
        value: "hello@cloudmindstechllc.com",
        href: "mailto:hello@cloudmindstechllc.com",
        icon: "mail",
    },
    {
        id: 2,
        label: "Call us",
        value: "+92 337 2111623",
        href: "tel:+923372111623",
        icon: "phone",
    },
    {
        id: 3,
        label: "Our location",
        value: "Karachi, Pakistan",
        href: null,
        icon: "location",
    },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const initialForm = {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
};

const iconMap = {
    mail: Mail,
    phone: Phone,
    location: MapPin,
};

export default function ContactPage() {
    const pageRef = useRef(null);

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [serverMessage, setServerMessage] = useState("");

    useGSAP(
        () => {
            const timeline = gsap.timeline();

            timeline
                .from(".contact-badge", {
                    y: 20,
                    autoAlpha: 0,
                    duration: 0.6,
                    ease: "power3.out",
                })
                .from(
                    ".contact-title-line",
                    {
                        yPercent: 110,
                        autoAlpha: 0,
                        duration: 1,
                        stagger: 0.12,
                        ease: "power4.out",
                    },
                    "-=0.25"
                )
                .from(
                    ".contact-intro",
                    {
                        y: 30,
                        autoAlpha: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.55"
                )
                .from(
                    ".contact-info-card",
                    {
                        y: 30,
                        autoAlpha: 0,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: "power3.out",
                    },
                    "-=0.45"
                )
                .from(
                    ".contact-form-panel",
                    {
                        x: 60,
                        autoAlpha: 0,
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.9"
                );
        },
        {
            scope: pageRef,
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((current) => ({
                ...current,
                [name]: "",
            }));
        }

        if (status !== "idle") {
            setStatus("idle");
            setServerMessage("");
        }
    };

    const validateForm = () => {
        const nextErrors = {};

        if (!form.name.trim()) {
            nextErrors.name = "Please enter your name.";
        }

        if (!form.email.trim()) {
            nextErrors.email = "Please enter your email.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!form.service) {
            nextErrors.service = "Please select a service.";
        }

        if (!form.message.trim()) {
            nextErrors.message = "Please tell us about your project.";
        } else if (form.message.trim().length < 20) {
            nextErrors.message =
                "Please provide at least 20 characters about your project.";
        }

        return nextErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus("loading");
        setServerMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Unable to send your message.");
            }

            setStatus("success");
            setServerMessage(
                data.message || "Thanks! We’ll get back to you shortly."
            );
            setForm(initialForm);
            setErrors({});
        } catch (error) {
            setStatus("error");
            setServerMessage(
                error.message || "Something went wrong. Please try again."
            );
        }
    };

    return (
        <main
            ref={pageRef}
            className="overflow-hidden px-3 pb-3 pt-4 sm:px-5 sm:pb-5"
        >
            <section
                className="
          relative mx-auto max-w-500 px-4 md:px-8 mt-38 overflow-hidden
          rounded-[30px] border border-black/8
          bg-[#f7f7f5] py-12
          shadow-[0_24px_80px_rgba(7,0,11,0.06)]
          sm:rounded-[38px] sm:px-8 sm:py-16
          lg:min-h-[calc(100vh-120px)] lg:px-12 lg:py-20
        "
            >
                {/* Background decoration */}
                <div className="pointer-events-none absolute -left-32 -top-32 h-105 w-105 rounded-full bg-pink/10 blur-[120px]" />

                <div className="pointer-events-none absolute -bottom-48 right-0 h-125 w-125 rounded-full bg-purple-500/10 blur-[140px]" />

                <div className="pointer-events-none absolute right-[12%] top-[12%] hidden h-32 w-32 rounded-full border border-black/8 lg:block" />

                <div className="relative z-9 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
                    {/* Left side */}
                    <div className="flex flex-col">
                        <div>
                            <span className="contact-badge badge">
                                Start a conversation
                            </span>

                            <h1 className="mt-5 overflow-hidden text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-black sm:text-6xl lg:text-[78px] xl:text-[92px]">
                                <span className="contact-title-line block">
                                    Let’s build
                                </span>

                                <span className="contact-title-line block">
                                    something
                                </span>

                                <span className="contact-title-line block text-pink">
                                    remarkable.
                                </span>
                            </h1>

                            <p className="contact-intro mt-7 max-w-xl text-base leading-relaxed text-grey sm:text-lg">
                                Tell us about your idea, challenge, or next big move. We’ll help
                                you turn it into a clear strategy and a digital experience that
                                creates real impact.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="mt-10 space-y-3 lg:mt-auto lg:pt-16">
                            {contactDetails.map((item) => {
                                const Icon = iconMap[item.icon];

                                const content = (
                                    <>
                                        <span
                                            className="
                        flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-full bg-pink/10 text-pink
                        transition-all duration-300
                        group-hover:bg-pink group-hover:text-white!
                      "
                                        >
                                            <Icon size={19} />
                                        </span>

                                        <span>
                                            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-grey">
                                                {item.label}
                                            </span>

                                            <span className="mt-1 block text-sm font-medium text-black sm:text-base">
                                                {item.value}
                                            </span>
                                        </span>

                                        {item.href && (
                                            <ArrowUpRight
                                                size={18}
                                                className="
                          ml-auto text-black/30
                          transition-all duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:text-pink
                        "
                                            />
                                        )}
                                    </>
                                );

                                if (item.href) {
                                    return (
                                        <a
                                            key={item.id}
                                            href={item.href}
                                            className="
                        contact-info-card group flex items-center gap-4
                        rounded-[22px] border border-black/8
                        bg-white/70 px-4 py-4
                        backdrop-blur-xl
                        transition-all duration-300
                        hover:-translate-y-0.5 hover:border-pink/25
                        hover:shadow-[0_16px_45px_rgba(7,0,11,0.07)]
                      "
                                        >
                                            {content}
                                        </a>
                                    );
                                }

                                return (
                                    <div
                                        key={item.id}
                                        className="
                      contact-info-card group flex items-center gap-4
                      rounded-[22px] border border-black/8
                      bg-white/70 px-4 py-4
                      backdrop-blur-xl
                    "
                                    >
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact form */}
                    <div
                        className="
              contact-form-panel relative overflow-hidden
              rounded-[28px] border border-white/70
              bg-white/80 p-5
              shadow-[0_30px_90px_rgba(7,0,11,0.10)]
              backdrop-blur-2xl
              sm:rounded-[36px] sm:p-8
              lg:p-10 xl:p-12
            "
                    >
                        <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-pink/8 blur-[90px]" />

                        <div className="relative z-9">
                            <div className="flex flex-col gap-4 border-b border-black/8 pb-7 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink">
                                        Project inquiry
                                    </p>

                                    <h2 className="mt-3 text-3xl font-medium tracking-[-0.045em] text-black sm:text-4xl">
                                        Tell us about your project.
                                    </h2>
                                </div>

                                <span className="text-sm text-grey">
                                    Usually replies within 24 hours
                                </span>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                className="mt-8 space-y-6"
                            >
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <FormField
                                        label="Your name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="John Smith"
                                        error={errors.name}
                                        required
                                    />

                                    <FormField
                                        label="Email address"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        error={errors.email}
                                        required
                                    />

                                    <FormField
                                        label="Phone number"
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+92 300 0000000"
                                    />

                                    <FormField
                                        label="Company name"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Your company"
                                    />

                                    <SelectField
                                        label="What can we help with?"
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        options={contactServices}
                                        placeholder="Select a service"
                                        error={errors.service}
                                        required
                                    />

                                    <SelectField
                                        label="Estimated budget"
                                        name="budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        options={projectBudgets}
                                        placeholder="Select your budget"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2.5 block text-sm font-medium text-black"
                                    >
                                        Tell us about your project
                                        <span className="ml-1 text-pink">*</span>
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={6}
                                        placeholder="Tell us about your goals, requirements, timeline, and anything else we should know..."
                                        className={`
                      min-h-37 w-full resize-none
                      rounded-[20px] border bg-[#f7f7f5]
                      px-4 py-4 text-sm text-black
                      outline-none transition-all duration-300
                      placeholder:text-black/30
                      focus:bg-white focus:ring-4
                      ${errors.message
                                                ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                                                : "border-black/8 focus:border-pink focus:ring-pink/10"
                                            }
                    `}
                                    />

                                    {errors.message && (
                                        <p className="mt-2 text-xs text-red-500">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {serverMessage && (
                                    <div
                                        role="status"
                                        className={`
                      flex items-start gap-3 rounded-2xl border px-4 py-4
                      text-sm
                      ${status === "success"
                                                ? "border-green-200 bg-green-50 text-green-700"
                                                : "border-red-200 bg-red-50 text-red-600"
                                            }
                    `}
                                    >
                                        {status === "success" && (
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white!">
                                                <Check size={14} />
                                            </span>
                                        )}

                                        <span>{serverMessage}</span>
                                    </div>
                                )}

                                <div className="flex flex-col gap-4 border-t border-black/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="max-w-sm text-xs leading-relaxed text-grey">
                                        By submitting this form, you agree that we may contact you
                                        regarding your project.
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="
                      group relative inline-flex min-h-14 items-center
                      justify-center gap-3 overflow-hidden
                      rounded-full bg-pink px-7
                      text-sm font-semibold text-white!
                      shadow-[0_14px_35px_rgba(253,2,106,0.25)]
                      transition-all duration-300
                      hover:-translate-y-0.5 hover:bg-black
                      hover:shadow-[0_18px_45px_rgba(7,0,11,0.18)]
                      disabled:pointer-events-none disabled:opacity-60
                    "
                                    >
                                        <span className="relative z-9">
                                            {status === "loading"
                                                ? "Sending message..."
                                                : "Send inquiry"}
                                        </span>

                                        {status === "loading" ? (
                                            <span className="relative z-9 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                        ) : (
                                            <Send
                                                size={17}
                                                className="relative z-9 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        )}

                                        <span className="absolute left-[-120%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom trust section */}
            <section className="mx-auto max-w-500 px-4 md:px-8 mt-22">
                <div className="grid gap-8 border-y border-black/8 py-10 sm:grid-cols-3 sm:gap-4">
                    <TrustItem
                        number="24h"
                        title="Average response"
                        text="We review every inquiry and respond as quickly as possible."
                    />

                    <TrustItem
                        number="100%"
                        title="Custom approach"
                        text="Every proposal is shaped around your goals and requirements."
                    />

                    <TrustItem
                        number="01"
                        title="Dedicated team"
                        text="One focused team from strategy through launch and growth."
                    />
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-grey">
                        Prefer email? Write directly to{" "}
                        <a
                            href="mailto:hello@cloudmindstechllc.com"
                            className="font-medium text-black underline decoration-pink underline-offset-4 transition hover:text-pink"
                        >
                            hello@cloudmindstechllc.com
                        </a>
                    </p>

                    <Link
                        href="/"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-black transition hover:text-pink"
                    >
                        Return to home
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function FormField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    required = false,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2.5 block text-sm font-medium text-black"
            >
                {label}

                {required && <span className="ml-1 text-pink">*</span>}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
          min-h-14 w-full rounded-[18px]
          border bg-[#f7f7f5] px-4
          text-sm text-black outline-none
          transition-all duration-300
          placeholder:text-black/30
          focus:bg-white focus:ring-4
          ${error
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-black/8 focus:border-pink focus:ring-pink/10"
                    }
        `}
            />

            {error && (
                <p className="mt-2 text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

function SelectField({
    label,
    name,
    value,
    onChange,
    options,
    placeholder,
    error,
    required = false,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2.5 block text-sm font-medium text-black"
            >
                {label}

                {required && <span className="ml-1 text-pink">*</span>}
            </label>

            <div className="relative">
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`
            min-h-14 w-full appearance-none
            rounded-[18px] border bg-[#f7f7f5]
            px-4 pr-12 text-sm outline-none
            transition-all duration-300
            focus:bg-white focus:ring-4
            ${value ? "text-black" : "text-black/35"
                        }
            ${error
                            ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                            : "border-black/8 focus:border-pink focus:ring-pink/10"
                        }
          `}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>

                    {options.map((option) => (
                        <option
                            key={option}
                            value={option}
                            className="text-black"
                        >
                            {option}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40"
                />
            </div>

            {error && (
                <p className="mt-2 text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

function TrustItem({ number, title, text }) {
    return (
        <div className="border-black/8 sm:border-r sm:px-7 sm:last:border-r-0">
            <p className="text-4xl font-medium tracking-tighter text-pink sm:text-5xl">
                {number}
            </p>

            <h3 className="mt-4 text-lg font-medium text-black">
                {title}
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-grey">
                {text}
            </p>
        </div>
    );
}