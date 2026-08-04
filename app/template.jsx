"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Template({ children }) {
    const templateRef = useRef(null);
    const coverRef = useRef(null);
    const pageRef = useRef(null);

    useLayoutEffect(() => {
        window.history.scrollRestoration = "manual";

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, []);

    useGSAP(
        () => {
            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            gsap.set(coverRef.current, {
                autoAlpha: 1,
                scaleY: 1,
                transformOrigin: "top center",
            });

            gsap.set(pageRef.current, {
                autoAlpha: 0,
            });

            timeline
                .to(coverRef.current, {
                    scaleY: 0,
                    duration: 0.85,
                    ease: "power4.inOut",
                })
                .to(
                    pageRef.current,
                    {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power4.out",
                    },
                    "-=0.48"
                );
        },
        {
            scope: templateRef,
        }
    );

    return (
        <div ref={templateRef}>
            {/* Page transition cover */}
            <div
                ref={coverRef}
                aria-hidden="true"
                className="
          pointer-events-none fixed inset-0
          z-22 bg-white
          will-change-transform
        "
            />

            {/* New route content */}
            <div
                ref={pageRef}
                className="min-h-screen will-change-[transform,opacity]"
            >
                {children}
            </div>
        </div>
    );
}