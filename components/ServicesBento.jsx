"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import {
    Braces,
    Palette,
    Megaphone,
    ArrowUpRight,
} from "lucide-react";


import { services } from "../data/services";

const iconMap = {
    Development: Braces,
    Design: Palette,
    "Digital Marketing": Megaphone,
};

const featuredServices = [
    "cms-website-development",
    "ui-ux-design",
];

const homeServices = services.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    href: `/services/${service.slug}`,
    icon: iconMap[service.category],
    className: featuredServices.includes(service.slug)
        ? "md:col-span-2 md:row-span-2"
        : "md:col-span-1",
}));


function ServiceCard({ service }) {
    const cardRef = useRef(null);
    const iconRef = useRef(null);
    const arrowRef = useRef(null);

    const Icon = service.icon;

    const handleMouseMove = (event) => {
        if (!cardRef.current) return;

        const bounds = cardRef.current.getBoundingClientRect();

        cardRef.current.style.setProperty(
            "--mouse-x",
            `${event.clientX - bounds.left}px`
        );

        cardRef.current.style.setProperty(
            "--mouse-y",
            `${event.clientY - bounds.top}px`
        );
    };

    const handleMouseEnter = () => {
        gsap.to(iconRef.current, {
            rotate: -8,
            scale: 1.08,
            duration: 0.45,
            ease: "back.out(1.8)",
            overwrite: "auto",
        });

        gsap.to(arrowRef.current, {
            rotate: 45,
            scale: 1.06,
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(iconRef.current, {
            rotate: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
        });

        gsap.to(arrowRef.current, {
            rotate: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    return (
        <article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`
        service-card group relative min-h-77
        overflow-hidden rounded-[28px]
        border border-black/8 bg-white
        p-6 shadow-[0_12px_45px_rgba(7,0,11,0.05)]
        sm:min-h-85 sm:rounded-[34px] sm:p-8
        lg:p-9
        ${service.className}
      `}
        >
            {/* Cursor spotlight */}
            <div
                className="
          pointer-events-none absolute inset-0 z-0
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
                style={{
                    background:
                        "radial-gradient(420px circle at var(--mouse-x) var(--mouse-y), rgba(253, 2, 106, 0.13), transparent 44%)",
                }}
            />

            {/* Background accent */}
            <div
                className={`
          pointer-events-none absolute -right-16 -top-16
          h-48 w-48 rounded-full blur-2xl
          transition-all duration-700
          group-hover:scale-125
          ${service.accent}
        `}
            />

            <Link
                href={service.href}
                className="relative z-10 flex h-full min-h-64 flex-col sm:min-h-69"
            >
                <div className="flex items-start justify-between gap-4">
                    <div
                        ref={iconRef}
                        className={`
              flex h-14 w-14 items-center justify-center
              rounded-2xl ${service.accent}
              text-black
              sm:h-16 sm:w-16
            `}
                    >
                        <Icon size={27} strokeWidth={1.7} />
                    </div>

                    {/* <span className="text-xs font-semibold tracking-[0.16em] text-black/35">
                        {service.id}
                    </span> */}
                </div>

                <div className="mt-auto pt-12">
                    <h3
                        className="
              max-w-130 text-2xl font-medium
              leading-[1.02] tracking-[-0.045em]
              text-black sm:text-3xl
              lg:text-[38px]
            "
                    >
                        {service.title}
                    </h3>

                    <div className="mt-5 flex items-end justify-between gap-5">
                        <p className="max-w-117 text-sm leading-relaxed text-grey sm:text-base">
                            {service.description}
                        </p>

                        <span
                            ref={arrowRef}
                            className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-full border border-black/10
                bg-white text-black
                shadow-[0_8px_24px_rgba(7,0,11,0.07)]
                transition-colors duration-300
                group-hover:border-pink
                group-hover:bg-pink
                group-hover:text-white!
                sm:h-14 sm:w-14
              "
                        >
                            <ArrowUpRight size={20} />
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default function ServicesBento() {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            gsap.from(".services-heading > *", {
                y: 45,
                autoAlpha: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 82%",
                    once: true,
                },
            });

            gsap.from(".service-card", {
                y: 70,
                autoAlpha: 0,
                scale: 0.97,
                duration: 0.9,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 85%",
                    once: true,
                },
            });
        },
        {
            scope: sectionRef,
        }
    );

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden py-16 md:py-24 lg:py-32"
        >
            <div className="mx-auto max-w-500 px-4 md:px-8">
                <div className="services-heading grid gap-7 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                    <div>
                        <span className="badge">What We Do</span>

                        <h2 className="heading">
                            Everything your brand
                            <br className="hidden sm:block" />
                            needs to grow.
                        </h2>
                    </div>

                    <div className="lg:justify-self-end">
                        <p className="max-w-md text">
                            From strategy and identity to technology and marketing, we build
                            complete digital experiences that create measurable impact.
                        </p>

                        <Link
                            href="/services"
                            className="
                group mt-6 inline-flex items-center gap-3
                border-b border-black pb-1
                text-sm font-semibold text-black
                transition-colors duration-300
                hover:border-pink hover:text-pink
              "
                        >
                            Explore all services

                            <ArrowUpRight
                                size={17}
                                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                            />
                        </Link>
                    </div>
                </div>

                <div className="services-grid mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
                    {homeServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}