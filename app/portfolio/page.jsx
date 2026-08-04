"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import PrimaryBtn from "../../components/PrimaryBtn";


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
        <>
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
                </div>

            </section>
        </>
      

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