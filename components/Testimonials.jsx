"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { testimonials } from "../data/testimonials";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AUTOPLAY_DELAY = 6000;

export default function Testimonials() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const progressRef = useRef(null);
    const autoplayRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const activeTestimonial = testimonials[activeIndex];

    useGSAP(
        () => {
            gsap.from(".testimonial-heading > *", {
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

            gsap.from(".testimonial-shell", {
                y: 70,
                autoAlpha: 0,
                scale: 0.98,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonial-shell",
                    start: "top 85%",
                    once: true,
                },
            });
        },
        {
            scope: sectionRef,
        }
    );

    const animateToTestimonial = useCallback(
        (nextIndex) => {
            if (
                isAnimating ||
                nextIndex === activeIndex ||
                !contentRef.current ||
                !imageRef.current
            ) {
                return;
            }

            setIsAnimating(true);

            const timeline = gsap.timeline({
                onComplete: () => {
                    setIsAnimating(false);
                },
            });

            timeline
                .to(
                    contentRef.current,
                    {
                        y: -25,
                        autoAlpha: 0,
                        duration: 0.35,
                        ease: "power3.in",
                    },
                    0
                )
                .to(
                    imageRef.current,
                    {
                        scale: 1.05,
                        autoAlpha: 0,
                        duration: 0.35,
                        ease: "power3.in",
                    },
                    0
                )
                .call(() => {
                    setActiveIndex(nextIndex);
                })
                .set(contentRef.current, {
                    y: 28,
                })
                .set(imageRef.current, {
                    scale: 0.96,
                })
                .to(
                    contentRef.current,
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.65,
                        ease: "power4.out",
                    },
                    0.42
                )
                .to(
                    imageRef.current,
                    {
                        scale: 1,
                        autoAlpha: 1,
                        duration: 0.7,
                        ease: "power4.out",
                    },
                    0.42
                );
        },
        [activeIndex, isAnimating]
    );

    const showNext = useCallback(() => {
        const nextIndex = (activeIndex + 1) % testimonials.length;
        animateToTestimonial(nextIndex);
    }, [activeIndex, animateToTestimonial]);

    const showPrevious = useCallback(() => {
        const previousIndex =
            (activeIndex - 1 + testimonials.length) % testimonials.length;

        animateToTestimonial(previousIndex);
    }, [activeIndex, animateToTestimonial]);

    useEffect(() => {
        if (!progressRef.current) return;

        gsap.killTweensOf(progressRef.current);

        gsap.set(progressRef.current, {
            scaleX: 0,
            transformOrigin: "left center",
        });

        if (isPaused) return;

        gsap.to(progressRef.current, {
            scaleX: 1,
            duration: AUTOPLAY_DELAY / 1000,
            ease: "none",
        });
    }, [activeIndex, isPaused]);

    useEffect(() => {
        if (isPaused) return;

        autoplayRef.current = window.setTimeout(() => {
            showNext();
        }, AUTOPLAY_DELAY);

        return () => {
            window.clearTimeout(autoplayRef.current);
        };
    }, [activeIndex, isPaused, showNext]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                showPrevious();
            }

            if (event.key === "ArrowRight") {
                showNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [showNext, showPrevious]);

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden py-16 md:py-22"
        >
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="testimonial-heading grid gap-7 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                    <div>
                        <span className="badge">Client Stories</span>

                        <h2 className="heading">
                            Trusted by brands
                            <br className="hidden sm:block" />
                            built to lead.
                        </h2>
                    </div>

                    <p className="max-w-md text lg:justify-self-end">
                        Long-term partnerships are built through honest communication,
                        strong ideas, and work that creates real impact.
                    </p>
                </div>

                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="
            testimonial-shell relative mt-12 overflow-hidden
            rounded-[30px] bg-[#111111]
            text-white sm:rounded-[38px]
            lg:mt-16 lg:rounded-[46px]
          "
                >
                    <div className="grid min-h-170 lg:grid-cols-[0.9fr_1.1fr]">
                        {/* Client image */}
                        <div className="relative min-h-95 overflow-hidden lg:min-h-full">
                            <div
                                ref={imageRef}
                                className="absolute inset-0 will-change-transform"
                            >
                                <Image
                                    key={activeTestimonial.id}
                                    src={activeTestimonial.image}
                                    alt={`${activeTestimonial.name}, ${activeTestimonial.role} at ${activeTestimonial.company}`}
                                    fill
                                    priority={activeIndex === 0}
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-black/20" />

                            <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs font-medium text-white! backdrop-blur-xl sm:bottom-7 sm:left-7">
                                {activeTestimonial.project}
                            </div>
                        </div>

                        {/* Review content */}
                        <div className="relative flex flex-col p-6 sm:p-9 lg:p-12 xl:p-16">
                            <Quote
                                size={66}
                                strokeWidth={1.2}
                                className="text-pink"
                            />

                            <div
                                ref={contentRef}
                                className="flex h-full flex-col will-change-transform"
                            >
                                <div className="mt-8 flex gap-1">
                                    {Array.from({
                                        length: activeTestimonial.rating,
                                    }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={17}
                                            fill="currentColor"
                                            className="text-[#ffbf47]"
                                        />
                                    ))}
                                </div>

                                <blockquote className="mt-7 max-w-187 text-2xl font-medium leading-[1.18] tracking-[-0.035em] text-white! md:text-[40px]">
                                    “{activeTestimonial.quote}”
                                </blockquote>

                                <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-7 lg:mt-auto">
                                    <div>
                                        <p className="text-lg font-semibold text-white!">
                                            {activeTestimonial.name}
                                        </p>

                                        <p className="mt-1 text-sm text-white/50">
                                            {activeTestimonial.role},{" "}
                                            {activeTestimonial.company}
                                        </p>
                                    </div>

                                    <span className="text-sm font-medium text-white/40">
                                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                        {String(testimonials.length).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-between gap-5">
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={showPrevious}
                                        disabled={isAnimating}
                                        aria-label="Previous testimonial"
                                        className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full border border-white/15
                      bg-white/5 text-white!
                      transition-all duration-300
                      hover:border-pink hover:bg-pink
                      disabled:pointer-events-none disabled:opacity-50
                    "
                                    >
                                        <ArrowLeft size={19} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={showNext}
                                        disabled={isAnimating}
                                        aria-label="Next testimonial"
                                        className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full border border-white/15
                      bg-white/5 text-white!
                      transition-all duration-300
                      hover:border-pink hover:bg-pink
                      disabled:pointer-events-none disabled:opacity-50
                    "
                                    >
                                        <ArrowRight size={19} />
                                    </button>
                                </div>

                                <div className="flex items-center gap-2">
                                    {testimonials.map((testimonial, index) => (
                                        <button
                                            key={testimonial.id}
                                            type="button"
                                            onClick={() => animateToTestimonial(index)}
                                            aria-label={`View testimonial from ${testimonial.name}`}
                                            className={`
                        relative overflow-hidden rounded-full
                        transition-all duration-300
                        ${index === activeIndex
                                                    ? "h-12 w-12 ring-2 ring-pink ring-offset-2 ring-offset-[#111111]"
                                                    : "h-10 w-10 opacity-45 hover:opacity-100"
                                                }
                      `}
                                        >
                                            <Image
                                                src={testimonial.image}
                                                alt=""
                                                fill
                                                sizes="48px"
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Auto-play progress */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
                        <div
                            ref={progressRef}
                            className="h-full w-full origin-left bg-pink"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}