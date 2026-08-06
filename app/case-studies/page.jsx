"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import PrimaryBtn from "../../components/PrimaryBtn";
import PortfolioGrid from "../../components/PortfolioGrid";

gsap.registerPlugin(useGSAP);

export default function CaseStudies() {
    const heroRef = useRef(null);

    useGSAP(
        () => {
            gsap.timeline({
                defaults: {
                    ease: "power4.out",
                },
            })
                .from(".hero-title-line", {
                    yPercent: 115,
                    autoAlpha: 0,
                    duration: 1.05,
                    stagger: 0.13,
                })
                .from(
                    ".hero-button",
                    {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.7,
                    },
                    "-=0.55"
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
                className="mx-auto mt-38 max-w-500 px-6"
            >
                <h1 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-[114px]">
                    <span className="block overflow-hidden">
                        <span className="hero-title-line block">
                            We’re Moving
                        </span>
                    </span>

                    <span className="block overflow-hidden">
                        <span className="hero-title-line block">
                            Brands to Action
                        </span>
                    </span>
                </h1>

                <div className="hero-button mt-4">
                    <PrimaryBtn href="/contact-us">
                        Get Started
                    </PrimaryBtn>
                </div>
            </section>

            <section className="mx-auto max-w-500 px-6 py-16 md:py-22">
                <PortfolioGrid />
            </section>
        </>
    );
}