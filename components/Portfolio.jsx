"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    portfolioFilters,
    portfolio,
} from "../data/portfolio";
import PrimaryBtn from "./PrimaryBtn";


gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProjectCard({
    project,
    index,
    onOpen,
}) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const cursorRef = useRef(null);

    const { contextSafe } = useGSAP(
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

            gsap.set(cursorRef.current, {
                scale: 0,
                autoAlpha: 0,
            });
        },
        {
            scope: cardRef,
            dependencies: [project.id],
            revertOnUpdate: true,
        }
    );

    const handleMouseMove = contextSafe((event) => {
        if (!cardRef.current || !cursorRef.current) return;

        const bounds = cardRef.current.getBoundingClientRect();

        gsap.to(cursorRef.current, {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto",
        });
    });

    const handleMouseEnter = contextSafe(() => {
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
    });

    const handleMouseLeave = contextSafe(() => {
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
    });

    return (
        <article
            ref={cardRef}
            className={`
        group relative
        ${index % 2 === 1 ? "lg:mt-28" : ""}
      `}
        >
            <button
                type="button"
                onClick={() => onOpen(project)}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label={`View ${project.title} project`}
                className="block w-full cursor-none text-left max-lg:cursor-pointer"
            >
                <div
                    className={`
            relative overflow-hidden rounded-[26px]
            sm:rounded-[34px] lg:rounded-[42px]
            ${project.background}
          `}
                >
                    <div className="relative aspect-4/3 overflow-hidden sm:aspect-5/4">
                        <div className="relative aspect-4/3 overflow-hidden sm:aspect-5/4">
                            <div
                                ref={imageRef}
                                className="absolute inset-0 will-change-transform"
                            >
                                <Image
                                    src={project.image}
                                    alt={`${project.title} project`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                        <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl sm:left-7 sm:top-7">
                            {String(project.id).padStart(2, "0")}
                        </span>


                        <div
                            ref={cursorRef}
                            className="
                pointer-events-none absolute left-0 top-0 z-22
                hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2
                items-center justify-center rounded-full
                bg-pink text-center text-xs font-semibold
                uppercase tracking-[0.12em] text-white
                shadow-[0_15px_45px_rgba(253,2,106,0.35)]
                lg:flex
              "
                        >
                            View
                            <br />
                            project
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-5 sm:mt-6">
                    <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-grey">
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
                        className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-full border border-black/10 bg-white text-black
              transition-all duration-300
              group-hover:rotate-45 group-hover:border-pink
              group-hover:bg-pink group-hover:text-white
              sm:h-14 sm:w-14
            "
                    >
                        <ArrowUpRight size={20} />
                    </span>
                </div>
            </button>
        </article>
    );
}

function ProjectLightbox({
    project,
    projects,
    onClose,
    onChange,
}) {
    const overlayRef = useRef(null);
    const panelRef = useRef(null);
    const contentRef = useRef(null);

    const [activeImage, setActiveImage] = useState(0);
    const [isClosing, setIsClosing] = useState(false);

    const gallery =
        project?.gallery?.length > 0
            ? project.gallery
            : [project?.image];

    const projectIndex = projects.findIndex(
        (item) => item.id === project?.id
    );

    const openAnimation = useCallback(() => {
        if (
            !overlayRef.current ||
            !panelRef.current ||
            !contentRef.current
        ) {
            return;
        }

        const timeline = gsap.timeline();

        timeline
            .fromTo(
                overlayRef.current,
                {
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                    duration: 0.35,
                    ease: "power2.out",
                }
            )
            .fromTo(
                panelRef.current,
                {
                    yPercent: 10,
                    scale: 0.97,
                    autoAlpha: 0,
                },
                {
                    yPercent: 0,
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.75,
                    ease: "power4.out",
                },
                0.05
            )
            .fromTo(
                contentRef.current.children,
                {
                    y: 25,
                    autoAlpha: 0,
                },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.55,
                    stagger: 0.08,
                    ease: "power3.out",
                },
                0.3
            );
    }, []);

    useGSAP(
        () => {
            openAnimation();
        },
        {
            scope: overlayRef,
            dependencies: [project?.id],
            revertOnUpdate: true,
        }
    );

    useEffect(() => {
        setActiveImage(0);
    }, [project?.id]);

    const closeLightbox = useCallback(() => {
        if (
            isClosing ||
            !overlayRef.current ||
            !panelRef.current
        ) {
            return;
        }

        setIsClosing(true);

        gsap
            .timeline({
                onComplete: onClose,
            })
            .to(panelRef.current, {
                yPercent: 6,
                scale: 0.98,
                autoAlpha: 0,
                duration: 0.4,
                ease: "power3.in",
            })
            .to(
                overlayRef.current,
                {
                    autoAlpha: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                },
                0.12
            );
    }, [isClosing, onClose]);

    const showPreviousProject = useCallback(() => {
        const previousIndex =
            (projectIndex - 1 + projects.length) % projects.length;

        onChange(projects[previousIndex]);
    }, [onChange, projectIndex, projects]);

    const showNextProject = useCallback(() => {
        const nextIndex = (projectIndex + 1) % projects.length;

        onChange(projects[nextIndex]);
    }, [onChange, projectIndex, projects]);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                showPreviousProject();
            }

            if (event.key === "ArrowRight") {
                showNextProject();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        closeLightbox,
        showNextProject,
        showPreviousProject,
    ]);

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeLightbox();
        }
    };

    if (!project) return null;

    return (
        <div
            ref={overlayRef}
            onMouseDown={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} project preview`}
            className="
        fixed inset-0 z-22
        flex items-center justify-center
        bg-black/60 p-2
        opacity-0 backdrop-blur-xl
        sm:p-4 lg:p-6
      "
        >
            <div
                ref={panelRef}
                className="
          relative flex max-h-[96dvh] w-full
          max-w-375 flex-col
          overflow-hidden rounded-[26px]
          bg-[#f7f7f5]
          opacity-0
          shadow-[0_40px_120px_rgba(0,0,0,0.35)]
          sm:rounded-[34px]
          lg:grid lg:grid-cols-[1.4fr_0.6fr]
        "
            >
                <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close project"
                    className="
            absolute right-4 top-4 z-22
            flex h-11 w-11 items-center justify-center
            rounded-full border border-white/30
            bg-black/35 text-white
            backdrop-blur-xl
            transition duration-300
            hover:rotate-90 hover:bg-pink
            sm:right-6 sm:top-6
          "
                >
                    <X size={20} />
                </button>

                {/* Main image area */}
                <div className="relative min-h-[45dvh] overflow-hidden bg-black lg:min-h-[90dvh]">
                    <Image
                        key={`${project.id}-${activeImage}`}
                        src={gallery[activeImage]}
                        alt={`${project.title} showcase image ${activeImage + 1}`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        className="object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                        <div className="rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                            {String(activeImage + 1).padStart(2, "0")} /{" "}
                            {String(gallery.length).padStart(2, "0")}
                        </div>

                        {gallery.length > 1 && (
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    aria-label="Previous image"
                                    onClick={() =>
                                        setActiveImage(
                                            (current) =>
                                                (current - 1 + gallery.length) %
                                                gallery.length
                                        )
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-xl transition hover:bg-pink"
                                >
                                    <ArrowLeft size={18} />
                                </button>

                                <button
                                    type="button"
                                    aria-label="Next image"
                                    onClick={() =>
                                        setActiveImage(
                                            (current) =>
                                                (current + 1) % gallery.length
                                        )
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-xl transition hover:bg-pink"
                                >
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Project information */}
                <div className="overflow-y-auto">
                    <div
                        ref={contentRef}
                        className="flex min-h-full flex-col p-6 sm:p-8 lg:p-10 xl:p-12"
                    >
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-grey">
                            <span>{project.category}</span>
                            <span className="h-1 w-1 rounded-full bg-pink" />
                            <span>{project.year}</span>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm text-grey">
                                Selected project
                            </p>

                            <h2 className="mt-3 text-4xl font-medium leading-[0.95] tracking-tighter text-black sm:text-5xl lg:text-[58px]">
                                {project.title}
                            </h2>

                            <p className="mt-4 text-base font-medium text-black/70">
                                {project.service}
                            </p>
                        </div>

                        <p className="mt-8 text-base leading-relaxed text-grey lg:text-lg">
                            {project.description}
                        </p>

                        <div className="mt-10 border-t border-black/10 pt-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-grey">
                                Services
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.services.map((service) => (
                                    <span
                                        key={service}
                                        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        {gallery.length > 1 && (
                            <div className="mt-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-grey">
                                    Project gallery
                                </p>

                                <div className="mt-4 grid grid-cols-3 gap-2">
                                    {gallery.map((image, index) => {
                                        const isActive = activeImage === index;

                                        return (
                                            <button
                                                key={`${image}-${index}`}
                                                type="button"
                                                onClick={() => setActiveImage(index)}
                                                aria-label={`Open project image ${index + 1}`}
                                                className={`
                          relative aspect-4/3 overflow-hidden
                          rounded-xl border-2
                          transition duration-300
                          ${isActive
                                                        ? "border-pink"
                                                        : "border-transparent opacity-60 hover:opacity-100"
                                                    }
                        `}
                                            >
                                                <Image
                                                    src={image}
                                                    alt=""
                                                    fill
                                                    sizes="120px"
                                                    className="object-cover"
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                            <button
                                type="button"
                                onClick={showPreviousProject}
                                className="group inline-flex items-center gap-2 text-sm font-medium text-grey transition hover:text-black"
                            >
                                <ArrowLeft
                                    size={17}
                                    className="transition-transform group-hover:-translate-x-1"
                                />
                                Previous
                            </button>

                            <span className="text-xs font-medium text-grey">
                                {String(projectIndex + 1).padStart(2, "0")} /{" "}
                                {String(projects.length).padStart(2, "0")}
                            </span>

                            <button
                                type="button"
                                onClick={showNextProject}
                                className="group inline-flex items-center gap-2 text-sm font-medium text-grey transition hover:text-black"
                            >
                                Next
                                <ArrowRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const sectionRef = useRef(null);

    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    useGSAP(
        () => {
            gsap.from(".portfolio-heading > *", {
                y: 50,
                autoAlpha: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
            });
        },
        {
            scope: sectionRef,
        }
    );

    const filteredProjects =
        activeFilter === "All"
            ? portfolio
            : portfolio.filter(
                (project) => project.category === activeFilter
            );

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <>
            <section
                ref={sectionRef}
                className="overflow-hidden bg-[#f8f8f6] py-16 md:py-24 lg:py-32"
            >
                <div className="mx-auto max-w-500 px-4 md:px-8">
                    <div className="portfolio-heading grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                        <div>
                            <span className="badge">Selected Work</span>

                            <h2 className="heading">
                                Work designed to
                                <br />
                                move brands forward.
                            </h2>
                        </div>

                        <div className="lg:justify-self-end">
                            <p className="max-w-md text">
                                We combine strategy, design, and technology to
                                create memorable digital experiences with a
                                measurable business impact.
                            </p>

                            <Link
                                href="/portfolio"
                                className="
                  group mt-6 inline-flex items-center gap-3
                  border-b border-black pb-1
                  text-sm font-semibold text-black
                  transition-colors duration-300
                  hover:border-pink hover:text-pink
                "
                            >
                                Explore all projects

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 flex gap-2 overflow-x-auto pb-3 scrollbar-none [&::-webkit-scrollbar]:hidden md:mt-14">
                        {portfolioFilters.map((filter) => {
                            const isActive = activeFilter === filter;

                            return (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => handleFilterChange(filter)}
                                    className={`
                    shrink-0 rounded-full border px-5 py-2.5
                    text-sm font-medium
                    transition-all duration-300
                    ${isActive
                                            ? "border-black bg-black text-white"
                                            : "border-black/10 bg-white text-black hover:border-black/30"
                                        }
                  `}
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-10 grid gap-x-7 gap-y-14 md:grid-cols-2 md:gap-y-20 lg:mt-16 lg:gap-x-10">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onOpen={setSelectedProject}
                            />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="mt-16 rounded-[30px] border border-black/10 bg-white px-6 py-20 text-center">
                            <p className="text-lg text-grey">
                                No projects found in this category.
                            </p>
                        </div>
                    )}

                    <div className="mt-16 flex justify-center md:mt-24">
                        <PrimaryBtn href="/contact-us">
                            Get Started
                        </PrimaryBtn>
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectLightbox
                    project={selectedProject}
                    projects={portfolio}
                    onChange={setSelectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}