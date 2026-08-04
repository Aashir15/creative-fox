"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";

const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
];

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/people/Cloud-Minds-Tech/61574807023512/",
        icon: "ri-facebook-fill",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/cloud_minds_tech/",
        icon: "ri-instagram-line",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/cloud-minds-tech-llc",
        icon: "ri-linkedin-fill",
    },
    {
        name: "X",
        href: "https://x.com/CloudsMindsTech",
        icon: "ri-twitter-x-fill",
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const trackEvent = (eventName) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName);
        }
    };

    return (
        <footer className="px-3 pb-3 pt-12 sm:px-5 sm:pb-5 md:pt-20">
            <div
                className="
          relative mx-auto max-w-500 px-4 md:px-8 overflow-hidden
          rounded-[30px] border border-black/8
          bg-[#f7f7f5]
          shadow-[0_24px_80px_rgba(7,0,11,0.08)]
          sm:rounded-[38px]
        "
            >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink/10 blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-purple-500/8 blur-[110px]" />

                <div className="relative z-9 px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
                    {/* Top CTA */}
                    <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-14">
                        <div>
                            <span className="badge">Let’s work together</span>

                            <h2 className="mt-4 heading">
                                Have a project in mind?
                                <br className="hidden sm:block" />
                                Let’s make it real.
                            </h2>
                        </div>

                        <PrimaryBtn className="mt-4" href="/contact-us">
                            Get Started
                        </PrimaryBtn>
                    </div>

                    {/* Main footer */}
                    <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1fr] lg:gap-14 lg:py-14">
                        {/* Brand */}
                        <div>
                            <Link href="/" className="inline-flex items-center">
                                <Image
                                    src="/assets/cloud-mind-tech.png"
                                    alt="Creative Fox"
                                    width={500}
                                    height={200}
                                    sizes="160px"
                                    className="h-auto w-37 object-contain sm:w-42"
                                />
                            </Link>

                            <p className="mt-5 max-w-md text-sm leading-7 text-grey sm:text-base">
                                Creative Fox creates thoughtful digital experiences through
                                strategy, branding, design, development, and growth-focused
                                marketing.
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="
                      group flex h-11 w-11 items-center justify-center
                      rounded-full border border-black/10
                      bg-white text-black
                      shadow-[0_8px_24px_rgba(7,0,11,0.05)]
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-pink
                      hover:bg-pink hover:text-white!
                    "
                                    >
                                        <i
                                            className={`${social.icon} text-lg transition-transform duration-300 group-hover:scale-110`}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Company links */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-grey">
                                Company
                            </p>

                            <ul className="mt-6 space-y-4">
                                {companyLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="
                        group inline-flex items-center gap-3
                        text-base font-medium text-black/65
                        transition-colors duration-300
                        hover:text-black
                      "
                                        >
                                            <span
                                                className="
                          flex h-6 w-6 -translate-x-2 items-center
                          justify-center rounded-full bg-pink
                          text-white! opacity-0
                          transition-all duration-300
                          group-hover:translate-x-0 group-hover:opacity-100
                        "
                                            >
                                                <ArrowUpRight size={13} />
                                            </span>

                                            <span className="-ml-9 transition-all duration-300 group-hover:ml-0">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-grey">
                                Get in touch
                            </p>

                            <p className="mt-6 max-w-md text-sm leading-7 text-grey sm:text-base">
                                Tell us what you are building, where you are stuck, or what you
                                want to improve. Our team will help you plan the next step.
                            </p>

                            <div className="mt-7 space-y-6">
                                <a
                                    href="tel:+923372111623"
                                    onClick={() => trackEvent("phone_click")}
                                    className="
                    group flex items-center gap-4 rounded-2xl
                   text-sm text-black
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink/10 text-pink transition-colors duration-300 group-hover:bg-pink group-hover:text-white!">
                                        <Phone size={18} />
                                    </span>

                                    <span>+92 337 2111623</span>
                                </a>

                                <a
                                    href="mailto:hello@cloudmindstechllc.com"
                                    onClick={() => trackEvent("email_click")}
                                    className="
                   group flex items-center gap-4 rounded-2xl
                   text-sm text-black
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink/10 text-pink transition-colors duration-300 group-hover:bg-pink group-hover:text-white!">
                                        <Mail size={18} />
                                    </span>

                                    <span className="break-all">
                                        hello@creativefox.com
                                    </span>
                                </a>

                                <div
                                    className="
                    group flex items-center gap-4 rounded-2xl
                   text-sm text-black
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink/10 text-pink">
                                        <MapPin size={18} />
                                    </span>

                                    <span>Karachi, Pakistan</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div
                        className="
              flex flex-col gap-5 border-t border-black/10
              pt-6 text-sm text-grey
              md:flex-row md:items-center md:justify-between
            "
                    >
                        <p>
                            © {currentYear} Creative Fox. All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link
                                href="/privacy"
                                className="transition-colors duration-300 hover:text-black"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/term"
                                className="transition-colors duration-300 hover:text-black"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Large footer word */}
                <div className="relative z-9 overflow-hidden border-t border-black/8 px-5 pb-2 pt-4 sm:px-8">
                    <p
                        className="
              whitespace-nowrap text-center uppercase
              text-[16vw] font-medium leading-none
              tracking-[-0.075em] text-black/5
              lg:text-[13vw]
            "
                    >
                        Creative Fox
                    </p>
                </div>
            </div>
        </footer>
    );
}