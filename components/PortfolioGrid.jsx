"use client";

import {
    portfolio,
    portfolioFilters,
} from "../data/portfolio";

export default function PortfolioGrid() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects =
        activeFilter === "All"
            ? portfolio
            : portfolio.filter(
                (project) => project.category === activeFilter
            );

    return (
        <section>
            <div>
                <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none [&::-webkit-scrollbar]:hidden">
                    {portfolioFilters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            className={`
                shrink-0 rounded-full border px-5 py-2.5
                text-sm font-medium transition-all duration-300
                ${activeFilter === filter
                                    ? "border-black bg-black text-white!"
                                    : "border-black/10 bg-white text-black hover:border-black/30"
                                }
              `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="mt-12 grid gap-x-7 gap-y-14 md:grid-cols-2 md:gap-y-20 lg:mt-16 lg:gap-x-10">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}



import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProjectCard({ project, index }) {
    
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const cursorRef = useRef(null);

    useGSAP(
        () => {
            if (!cardRef.current) return;

            gsap.fromTo(
                cardRef.current,
                {
                    y: 70,
                    autoAlpha: 0,
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 88%",
                        once: true,
                    },
                }
            );

            if (cursorRef.current) {
                gsap.set(cursorRef.current, {
                    scale: 0,
                    autoAlpha: 0,
                });
            }
        },
        {
            scope: cardRef,
            dependencies: [project.id],
            revertOnUpdate: true,
        }
    );

    const handleMouseMove = (event) => {
        if (!cardRef.current || !cursorRef.current) return;

        const bounds = cardRef.current.getBoundingClientRect();

        gsap.to(cursorRef.current, {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
        });
    };

    const handleMouseEnter = () => {
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                scale: 1.06,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto",
            });
        }

        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                scale: 1,
                autoAlpha: 1,
                duration: 0.3,
                ease: "back.out(1.7)",
                overwrite: "auto",
            });
        }
    };

    const handleMouseLeave = () => {
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto",
            });
        }

        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                scale: 0,
                autoAlpha: 0,
                duration: 0.25,
                ease: "power2.out",
                overwrite: "auto",
            });
        }
    };

    return (
        <article
            ref={cardRef}
            className={`group relative ${index % 2 === 1 ? "lg:mt-18" : ""
                }`}
        >
            <Link
                href={`/case-studies/${project.slug}`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="block cursor-none max-lg:cursor-pointer"
            >
                <figure
                    className={`
        relative overflow-hidden
        rounded-[26px]
        sm:rounded-[34px]
        lg:rounded-[42px]
        ${project.background}
    `}
                >
                    <div className="relative overflow-hidden">
                        <div
                            ref={imageRef}
                            className="relative aspect-4/3 w-full overflow-hidden will-change-transform"
                        >
                            <Image
                                src={project.image}
                                alt={`${project.title} project`}
                                fill
                                priority={index < 2}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className=""
                            />
                        </div>

                        <span className="absolute left-5 top-5 z-10 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-medium text-white! backdrop-blur-xl sm:left-7 sm:top-7">
                            {String(project.id).padStart(2, "0")}
                        </span>

                        <div
                            ref={cursorRef}
                            className="
                pointer-events-none absolute left-0 top-0 z-20
                hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2
                items-center justify-center rounded-full
                bg-pink text-center text-xs font-semibold
                uppercase tracking-[0.12em] text-white!
                shadow-[0_15px_45px_rgba(253,2,106,0.35)]
                lg:flex
            "
                        >
                            View
                            <br />
                            project
                        </div>
                    </div>
                </figure>

                <div className="mt-5 flex items-start justify-between gap-5 sm:mt-6">
                    <div>
                        <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-grey">
                            <span>{project.category}</span>
                            <span className="h-1 w-1 rounded-full bg-pink" />
                            <span>{project.year}</span>
                        </div>

                        <h3 className="text-2xl font-medium tracking-[-0.04em] text-black sm:text-3xl lg:text-[38px]">
                            {project.title}
                        </h3>

                        <p className="mt-2 text-sm text-grey sm:text-base">
                            {project.service}
                        </p>
                    </div>

                    <span
                        aria-hidden="true"
                        className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-full border border-black/10 bg-white text-black
                    transition-all duration-300
                    group-hover:rotate-45 group-hover:border-pink
                    group-hover:bg-pink group-hover:text-white!
                    sm:h-14 sm:w-14
                "
                    >
                        <ArrowUpRight size={20} />
                    </span>
                </div>
            </Link>
        </article>
    );
}