"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

const partners = [
    {
        name: "Low Payment",
        image: "/assets/low.png",
        link: "https://www.lowwpayments.com/en",
    },
    {
        name: "Link Up Dealer",
        image: "/assets/link-up.png",
        link: "https://www.linkupdealer.com",
    },
    {
        name: "Merchant Business",
        image: "/assets/merchant.png",
        link: "https://www.merchantbusinesses.com",
    },
    {
        name: "Deluxe Packaging",
        image: "/assets/delux.png",
        link: "https://deluxe-packageing.netlify.app",
    },
    {
        name: "Peptide Therapy",
        image: "/assets/peptitide.png",
        link: "https://peptide-therapy.netlify.app",
    },
];

function PartnerItem({ partner }) {
    const itemRef = useRef(null);
    const textRef = useRef(null);
    const logoRef = useRef(null);
    const circleRef = useRef(null);

    useGSAP(
        () => {
            if (!logoRef.current) return;

            gsap.set(logoRef.current, {
                autoAlpha: 0,
                scale: 0.75,
                y: 18,
            });
        },
        {
            scope: itemRef,
        }
    );

    const handleMouseEnter = () => {
        const targets = [
            textRef.current,
            logoRef.current,
            circleRef.current,
        ].filter(Boolean);

        gsap.killTweensOf(targets);

        if (textRef.current) {
            gsap.to(textRef.current, {
                autoAlpha: 0,
                y: -20,
                duration: 0.35,
                ease: "power3.out",
            });
        }

        if (logoRef.current) {
            gsap.to(logoRef.current, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
            });
        }

        if (circleRef.current) {
            gsap.to(circleRef.current, {
                scale: 1.08,
                rotate: 6,
                duration: 0.5,
                ease: "power3.out",
            });
        }
    };

    const handleMouseLeave = () => {
        const targets = [
            textRef.current,
            logoRef.current,
            circleRef.current,
        ].filter(Boolean);

        gsap.killTweensOf(targets);

        if (logoRef.current) {
            gsap.to(logoRef.current, {
                autoAlpha: 0,
                scale: 0.75,
                y: 18,
                duration: 0.3,
                ease: "power3.in",
            });
        }

        if (textRef.current) {
            gsap.to(textRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                delay: 0.08,
                ease: "power3.out",
            });
        }

        if (circleRef.current) {
            gsap.to(circleRef.current, {
                scale: 1,
                rotate: 0,
                duration: 0.45,
                ease: "power3.out",
            });
        }
    };

    return (
        <a
            ref={itemRef}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label={`View ${partner.name} project`}
            className="
            group relative mx-3
            flex h-30 min-w-67
            cursor-pointer items-center justify-center
            overflow-hidden
        "
        >
          
            <span
                ref={textRef}
                className="
          relative z-10 whitespace-nowrap
          text-2xl
          tracking-[-0.04em]
          text-grey"
            >
                {partner.name}
            </span>

            <div
                ref={logoRef}
                className="
          invisible absolute inset-0 z-20
          flex items-center justify-center
          px-8
        "
            >
                <div className="relative h-17 w-47 sm:h-25 sm:w-60">
                    <Image
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(max-width: 640px) 190px, 240px"
                        className="object-contain"
                    />
                </div>
            </div>
        </a>
    );
}

export default function PartnersMarquee() {
    return (
        <section className="overflow-hidden py-12 md:py-20">
            <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
                <span className="badge">Our Partners</span>

                <h2 className="heading">
                    Brands we have worked with
                </h2>

                <p className="text mt-2">
                    Hover over a brand name to reveal its logo.
                </p>
            </div>

            <Marquee
                speed={45}
                gradient={false}
                autoFill
            >
                {partners.map((partner) => (
                    <div
                        key={partner.name}
                        className="flex items-center"
                    >
                        <PartnerItem partner={partner} />

                        <div className="mx-8 flex items-center justify-center">
                            <div className="h-2.5 w-2.5 rotate-45 bg-pink" />
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}