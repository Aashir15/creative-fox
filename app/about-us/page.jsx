"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import PrimaryBtn from "../../components/PrimaryBtn";
import PartnersMarquee from "../../components/PartnersMarquee";
import Testimonials from "../../components/Testimonials";
import PortfolioGrid from "../../components/PortfolioGrid";

gsap.registerPlugin(useGSAP);

const stats = [
    {
        value: 1,
        suffix: "",
        label: "Integrated team across design, development & marketing",
    },
    {
        value: 10,
        suffix: "+",
        label: "Years building digital experiences",
    },
    {
        value: 100,
        suffix: "%",
        label: "Strategy-led and tailored execution",
    },
];

const reasons = [
    "One team across design, development and marketing.",
    "Strategy-led execution instead of one-size-fits-all solutions.",
    "Modern tools and scalable technology.",
    "Clear communication and structured project delivery.",
    "Long-term support beyond launch.",
];

function AnimatedCounter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = counterRef.current;

        if (!element) return;

        let animationFrameId;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasAnimated.current) return;

                hasAnimated.current = true;

                const duration = 1500;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    const easedProgress = 1 - Math.pow(1 - progress, 3);

                    setCount(Math.floor(easedProgress * value));

                    if (progress < 1) {
                        animationFrameId = requestAnimationFrame(animate);
                    } else {
                        setCount(value);
                    }
                };

                animationFrameId = requestAnimationFrame(animate);
                observer.disconnect();
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [value]);

    return (
        <span ref={counterRef}>
            {count}
            {suffix}
        </span>
    );
}

export default function AboutUs() {
    const heroRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            timeline
                .from(".about-title-line", {
                    yPercent: 115,
                    autoAlpha: 0,
                    duration: 1.05,
                    stagger: 0.13,
                })
                .from(
                    ".about-description",
                    {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.7,
                    },
                    "-=0.55"
                )
                .from(
                    ".about-button",
                    {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.7,
                    },
                    "-=0.5"
                )
                .from(
                    imageRef.current,
                    {
                        y: 80,
                        scale: 0.96,
                        autoAlpha: 0,
                        duration: 1.15,
                    },
                    "-=0.4"
                );
        },
        {
            scope: heroRef,
        }
    );

    return (
        <>
            {/* Hero */}
            <section
                ref={heroRef}
                className="mx-auto mt-38 max-w-7xl px-6"
            >
                <div className="max-w-5xl">
                    <h1 className="heading">
                        <span className="block overflow-hidden">
                            <span className="about-title-line block">
                                We’re a Digital Agency
                            </span>
                        </span>

                        <span className="block overflow-hidden">
                            <span className="about-title-line block">
                                Built to Create, Build & Grow.
                            </span>
                        </span>
                    </h1>

                    <p className="about-description mt-6 max-w-3xl text-lg leading-relaxed text-grey md:text-xl">
                        We combine creative thinking, technology and performance
                        marketing to help businesses compete in a digital-first world.
                    </p>

                    <div className="about-button">
                        <PrimaryBtn className="mt-7" href="/contact-us">
                            Start a Project
                        </PrimaryBtn>
                    </div>
                </div>

                <div className="mt-10">
                    <div
                        ref={imageRef}
                        className="
                            relative h-77 overflow-hidden rounded-[22px]
                            will-change-transform
                            sm:h-107 sm:rounded-[28px]
                            lg:h-125
                        "
                    >
                        <Image
                            src="/assets/qa-services.jpg"
                            alt="Digital agency team collaborating on creative and technology projects"
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1400px"
                            className="object-cover"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="mt-16">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                        <div>
                            <span className="badge">Who We Are</span>
                        </div>

                        <div>
                            <h2 className="heading">
                                Creative, technical and growth expertise under one roof.
                            </h2>

                            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-grey md:text-xl">
                                We are a Pakistan-based digital agency working with
                                businesses and teams internationally. Our expertise
                                spans branding, UI/UX design, web and software
                                development, mobile apps and digital marketing.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-1 border-y border-black/10 sm:grid-cols-3 lg:mt-24">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="
                                    flex flex-col gap-3 border-b border-black/10
                                    px-2 py-10
                                    last:border-b-0
                                    sm:border-b-0 sm:border-r sm:px-7
                                    sm:last:border-r-0
                                    lg:flex-row lg:items-center lg:gap-7
                                    lg:px-10 lg:py-14
                                "
                            >
                                <p className="shrink-0 text-5xl font-medium tracking-tighter text-black lg:text-7xl">
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                    />
                                </p>

                                <p className="max-w-55 text-base leading-snug text-grey lg:text-lg">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="border-t border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                        <div>
                            <span className="badge">Our Approach</span>
                        </div>

                        <div className="max-w-4xl">
                            <h2 className="heading">
                                Design, technology and marketing should work together.
                            </h2>

                            <p className="mt-7 text-lg leading-relaxed text-grey md:text-xl">
                                We believe great digital work happens when design,
                                technology and marketing work together. Instead of
                                treating each service as a separate task, we connect
                                the entire customer journey — from first impression to
                                conversion and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="bg-[#f8f8f6]">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                        <div>
                            <span className="badge">Why Us</span>

                            <h2 className="heading mt-6">
                                Built around better outcomes, not just deliverables.
                            </h2>
                        </div>

                        <div className="border-t border-black/10">
                            {reasons.map((reason, index) => (
                                <div
                                    key={reason}
                                    className="flex gap-6 border-b border-black/10 py-7 md:items-center"
                                >
                                    <span className="shrink-0 text-sm text-black/40">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="text-xl leading-snug text-black md:text-2xl">
                                        {reason}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <div className="max-w-5xl">
                        <span className="badge">Our Mission</span>

                        <h2 className="heading mt-6">
                            To help ambitious businesses turn ideas into high-quality
                            digital experiences that look better, work better and
                            perform better.
                        </h2>
                    </div>
                </div>
            </section>

            <PartnersMarquee />

            {/* Selected Work */}
            <section className="bg-[#f8f8f6]">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="max-w-180">
                        <span className="badge">Selected Work</span>

                        <h2 className="heading">
                            Projects built to move brands forward.
                        </h2>
                    </div>

                    <PortfolioGrid />
                </div>
            </section>

            <Testimonials />

            {/* CTA */}
            <section className="border-t border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <div className="max-w-4xl">
                            <span className="badge">Start a Project</span>

                            <h2 className="heading mt-6">
                                Ready to build something better?
                            </h2>
                        </div>

                        <PrimaryBtn href="/contact-us">
                            Start a Project
                        </PrimaryBtn>
                    </div>
                </div>
            </section>
        </>
    );
}