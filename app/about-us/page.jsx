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
        value: 100,
        suffix: "%",
        label: "In-house & independent",
    },
    {
        value: 10,
        suffix: "+",
        label: "Years crafting digital experiences",
    },
    {
        value: 80,
        suffix: "+",
        label: "Awards from Awwwards, FWA & CSS Design Awards",
    },
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
                    ".about-button",
                    {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.7,
                    },
                    "-=0.55"
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
            <section
                ref={heroRef}
                className="mx-auto mt-38 max-w-7xl px-6"
            >
                <div>
                    <h1 className="heading">
                        <span className="block overflow-hidden">
                            <span className="about-title-line block">
                                We Build,
                            </span>
                        </span>

                        <span className="block overflow-hidden">
                            <span className="about-title-line block">
                                We Innovate
                            </span>
                        </span>
                    </h1>

                    <div className="about-button">
                        <PrimaryBtn className="mt-4" href="/contact-us">
                            Get Started
                        </PrimaryBtn>
                    </div>
                </div>

                <div className="mt-7">
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
                            src="/assets/hero.png"
                            alt="Creative team collaborating in an office"
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1400px"
                            className="object-cover"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="max-w-260">
                        <h2 className="heading">
                            Creative Fox is a digital agency. We craft impactful
                            experiences with talented people and bold ideas.
                        </h2>
                    </div>

                    <div className="mt-14 grid grid-cols-1 border-y border-black/10 sm:grid-cols-3 lg:mt-20">
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

                                <p className="max-w-50 text-base leading-snug text-grey lg:text-lg">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="ml-auto mt-16 max-w-212 md:mt-24">
                        <p className="text-right text-xl leading-relaxed tracking-[-0.02em] text-black/70 sm:text-2xl lg:text-3xl">
                            We have had the pleasure of collaborating with brands you
                            will probably recognize. No matter the size of the challenge,
                            our team remains focused on creating thoughtful, exciting,
                            and effective digital work.
                        </p>
                    </div>
                </div>
            </section>

            <PartnersMarquee />

            <section className="bg-[#f8f8f6]">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="max-w-180">
                        <span className="badge">Selected Work</span>

                        <h1 className="heading">
                            Projects built to move brands forward.
                        </h1>
                    </div>

                    <PortfolioGrid />

                </div>
            </section>

            <Testimonials />
        </>
    );
}