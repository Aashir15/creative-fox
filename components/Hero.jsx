"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import PrimaryBtn from "./PrimaryBtn";


gsap.registerPlugin(useGSAP);

const stats = [
    {
        value: 95,
        suffix: "%",
        label: "Client Retention Rate",
    },
    {
        value: 300,
        suffix: "+",
        label: "Brands We’ve Helped",
    },
    {
        value: 50,
        suffix: "K+",
        label: "Qualified Leads Generated",
    },
];

function AnimatedCounter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = counterRef.current;

        if (!element) return;

        let animationFrame;

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
                        animationFrame = requestAnimationFrame(animate);
                    } else {
                        setCount(value);
                    }
                };

                animationFrame = requestAnimationFrame(animate);
                observer.disconnect();
            },
            {
                threshold: 0.35,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();

            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
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

export default function Hero() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const badgeRef = useRef(null);

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            });

            timeline
                .from(".hero-title-line", {
                    yPercent: 115,
                    autoAlpha: 0,
                    duration: 1.05,
                    stagger: 0.13,
                })
                .from(
                    ".hero-description",
                    {
                        y: 30,
                        autoAlpha: 0,
                        duration: 0.75,
                    },
                    "-=0.65"
                )
                .from(
                    ".hero-button",
                    {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.7,
                    },
                    "-=0.55"
                )
                .from(
                    ".hero-stat",
                    {
                        y: 30,
                        autoAlpha: 0,
                        duration: 0.7,
                        stagger: 0.1,
                    },
                    "-=0.4"
                )
                .from(
                    imageRef.current,
                    {
                        y: 80,
                        scale: 0.96,
                        autoAlpha: 0,
                        duration: 1.15,
                    },
                    "-=0.45"
                )
                .from(
                    badgeRef.current,
                    {
                        scale: 0,
                        rotate: -30,
                        autoAlpha: 0,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                    },
                    "-=0.65"
                );
        },
        {
            scope: sectionRef,
        }
    );

    return (
        <section
            ref={sectionRef}
            className="mx-auto max-w-500 px-4 md:px-8 mt-38 overflow-hidden"
        >
            {/* Top content */}
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_260px] lg:gap-14">
                <div>
                    <h1 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-[114px]">
                        <span className="block overflow-hidden">
                            <span className="hero-title-line block">
                                Leading Full-Service
                            </span>
                        </span>

                        <span className="block overflow-hidden">
                            <span className="hero-title-line block">
                                <TextSlider />
                            </span>
                        </span>
                    </h1>

                    <div className="hero-button">
                        <PrimaryBtn className="mt-4" href="/contact-us">
                            Get Started
                        </PrimaryBtn>
                    </div>
                </div>

                <p className="hero-description text-base leading-relaxed text-grey lg:justify-self-end">
                    We help brands attract the right audience, boost conversions, and
                    scale faster with proven digital strategies.
                </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid max-w-180 grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8 lg:mt-12">
                {stats.map((stat) => (
                    <div key={stat.label} className="hero-stat">
                        <p className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                            />
                        </p>

                        <p className="mt-1 text-xs text-grey sm:text-sm">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Hero image */}
            <div className="relative mt-7">
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
                        alt="Digital marketing team working together"
                        fill
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1400px"
                        className="object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating rotating badge */}
                <div
                    ref={badgeRef}
                    className="
            absolute -top-14 right-3 z-9
            flex h-28 w-28 items-center justify-center
            rounded-full bg-pink
            shadow-[0_18px_45px_rgba(253,2,106,0.32)]
            will-change-transform
            sm:-top-20 sm:right-8 sm:h-36 sm:w-36
            lg:right-14 lg:h-41 lg:w-41
          "
                >
                    <svg
                        viewBox="0 0 160 160"
                        className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]"
                        aria-hidden="true"
                    >
                        <defs>
                            <path
                                id="marketingBadgePath"
                                d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
                            />
                        </defs>

                        <text
                            fill="white"
                            fontSize="10.5"
                            fontWeight="600"
                            letterSpacing="0.8"
                        >
                            <textPath
                                href="#marketingBadgePath"
                                startOffset="0%"
                            >
                                DIGITAL GROWTH • BETTER RESULTS • HIGHER CONVERSIONS •
                            </textPath>
                        </text>
                    </svg>

                    <div className="relative z-9 flex h-[52%] w-[52%] items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                        <span className="translate-y-1 text-[42px] font-semibold leading-none text-white! sm:text-[54px] lg:text-[62px]">
                            ✦
                        </span>
                    </div>

                    <div className="pointer-events-none absolute inset-1 rounded-full border border-white/20" />
                </div>
            </div>
        </section>
    );
}

const words = [
    "Digital Agency",
    "Tech Agency",
    "Branding Agency",
    "Social Media Agency",
    "Web Agency",
];

function TextSlider() {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const items = gsap.utils.toArray(
                containerRef.current.querySelectorAll(".slider-word")
            );

            if (!items.length) return;

            let currentIndex = 0;
            let delayedCall;

            // Hide every word first
            gsap.set(items, {
                yPercent: 110,
                autoAlpha: 0,
            });

            // Display the first word
            gsap.set(items[0], {
                yPercent: 0,
                autoAlpha: 1,
            });

            const changeWord = () => {
                const currentItem = items[currentIndex];
                const nextIndex = (currentIndex + 1) % items.length;
                const nextItem = items[nextIndex];

                // Prepare only the next word below the visible area
                gsap.set(nextItem, {
                    yPercent: 110,
                    autoAlpha: 0,
                });

                const timeline = gsap.timeline({
                    onComplete: () => {
                        // Reset the old word
                        gsap.set(currentItem, {
                            yPercent: 110,
                            autoAlpha: 0,
                        });

                        currentIndex = nextIndex;

                        // Keep the new word visible, then continue
                        delayedCall = gsap.delayedCall(1.8, changeWord);
                    },
                });

                // Both animations happen at exactly the same time
                timeline
                    .to(
                        currentItem,
                        {
                            yPercent: -110,
                            autoAlpha: 0,
                            duration: 0.65,
                            ease: "power3.inOut",
                        },
                        0
                    )
                    .to(
                        nextItem,
                        {
                            yPercent: 0,
                            autoAlpha: 1,
                            duration: 0.65,
                            ease: "power3.inOut",
                        },
                        0
                    );
            };

            delayedCall = gsap.delayedCall(1.8, changeWord);

            return () => {
                delayedCall?.kill();
                gsap.killTweensOf(items);
            };
        },
        {
            scope: containerRef,
        }
    );

    return (
        <span
            ref={containerRef}
            className="relative block h-[1.08em] overflow-hidden"
        >
            {words.map((word) => (
                <span
                    key={word}
                    className="slider-word invisible absolute inset-0 flex items-center whitespace-nowrap will-change-transform"
                >
                    {word}
                </span>
            ))}
        </span>
    );
}