"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";

import { services } from "../../data/services";
import PrimaryBtn from "../../components/PrimaryBtn";

export default function ServicesPage() {

    gsap.registerPlugin(useGSAP);

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
                <h1 className="heading">
                    <span className="block overflow-hidden">
                        <span className="hero-title-line block">
                            Your source
                        </span>
                    </span>

                    <span className="block overflow-hidden">
                        <span className="hero-title-line block">
                            for all things digital
                        </span>
                    </span>
                </h1>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                <div className="relative aspect-16/7 min-h-80 overflow-hidden rounded-[28px] bg-black sm:rounded-[38px]">
                    <Image
                        src="/assets/service-cover.avif"
                        alt="Creative Fox digital services"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/45 via-black/10 to-transparent" />

                    <div className="absolute bottom-6 left-6 max-w-lg sm:bottom-10 sm:left-10">
                        <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/65">
                            Full-service digital agency
                        </p>

                        <p className="mt-3 text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                            Everything required to build, launch and grow your digital
                            presence.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="mb-12 max-w-3xl md:mb-20">
                        <span className="badge">What we do</span>

                        <h2 className="heading">
                            Expertise designed around your growth.
                        </h2>
                    </div>

                    <div className="space-y-20 lg:space-y-28">
                        {services.map((service, index) => {
                            const imageFirst = index % 2 === 0;

                            return (
                                <article
                                    key={service.slug}
                                    className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                                >
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className={`
                      group relative aspect-4/3 overflow-hidden
                      rounded-[26px] sm:rounded-[36px]
                      ${imageFirst ? "lg:order-1" : "lg:order-2"}
                    `}
                                    >
                                        <Image
                                            src={service.heroImage}
                                            alt={`${service.title} service`}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                                        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                                            {service.category}
                                        </span>
                                    </Link>

                                    <div
                                        className={
                                            imageFirst ? "lg:order-2" : "lg:order-1"
                                        }
                                    >
                                        {/* <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pink">
                                            {String(index + 1).padStart(2, "0")}
                                        </p> */}

                                        <h2 className="mt-4 text-4xl font-medium leading-[0.98] tracking-tighter text-black md:text-5xl">
                                            {service.shortTitle}
                                        </h2>

                                        <p className="mt-6 max-w-xl text-base leading-relaxed text-grey md:text-lg">
                                            {service.excerpt}
                                        </p>

                                        <div className="my-7 flex flex-wrap gap-2">
                                            {service.highlights.map((highlight) => (
                                                <span
                                                    key={highlight}
                                                    className="rounded-full border border-black/10 bg-[#f7f7f5] px-4 py-2 text-sm text-black"
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>

                                        <PrimaryBtn className="mt-4" href={`/services/${service.slug}`} >
                                            Get Started
                                        </PrimaryBtn>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                <div className="grid gap-8 rounded-4xl bg-black p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/50">
                            Have something in mind?
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[0.98] tracking-tighter text-white sm:text-5xl lg:text-[64px]">
                            Let’s create something remarkable together.
                        </h2>
                    </div>

                    <PrimaryBtn className="mt-4" href="/contact-us">
                        Get Started
                    </PrimaryBtn>
                </div>
            </section>
        </>
    );
}