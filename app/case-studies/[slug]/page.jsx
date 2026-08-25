import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { portfolio } from "../../../data/portfolio";
import PrimaryBtn from "../../../components/PrimaryBtn";

export function generateStaticParams() {
    return portfolio.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const project = portfolio.find(
        (item) => item.slug === slug
    );

    if (!project) {
        return {
            title: "Project not found",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;

    const project = portfolio.find(
        (item) => item.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="pt-18">
            {/* Project heading */}
            <section className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                <Link
                    href="/case-studies"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-grey transition hover:text-black"
                >
                    <ArrowLeft
                        size={17}
                        className="transition-transform group-hover:-translate-x-1"
                    />
                    Back to Case Studies
                </Link>

                <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-grey">
                            <span>{project.category}</span>
                            <span className="h-1 w-1 rounded-full bg-pink" />
                            <span>{project.year}</span>
                        </div>

                        <h1 className="mt-5 text-5xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[110px]">
                            {project.title}
                        </h1>
                    </div>

                    <div className="lg:justify-self-end">
                        <p className="text-lg font-medium text-black">
                            {project.service}
                        </p>

                        <p className="mt-4 max-w-md text-base leading-relaxed text-grey md:text-lg">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main image */}
            <section className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="relative aspect-video overflow-hidden rounded-[28px] sm:rounded-[38px]">
                    <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Challenge and solution */}
            <section className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                <div className="grid gap-12 md:grid-cols-2 md:gap-20">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-pink">
                            The challenge
                        </p>

                        <p className="mt-5 text-2xl leading-relaxed tracking-tight text-black sm:text-3xl">
                            {project.challenge}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-pink">
                            Our solution
                        </p>

                        <p className="mt-5 text-2xl leading-relaxed tracking-tight text-black sm:text-3xl">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="bg-black py-16 text-white md:py-24">
                <div className="mx-auto max-w-400 px-4 md:px-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                        Project impact
                    </p>

                    <div className="mt-10 grid gap-8 sm:grid-cols-3">
                        {project.results.map((result) => (
                            <div
                                key={result.label}
                                className="border-t border-white/15 pt-6"
                            >
                                <p className="text-5xl font-medium tracking-tighter text-white md:text-7xl">
                                    {result.value}
                                </p>

                                <p className="mt-3 text-sm text-white/50 md:text-base">
                                    {result.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {/* <section className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                <div className="grid gap-5">
                    {project.gallery.map((image, index) => (
                        <div
                            key={`${image}-${index}`}
                            className="relative aspect-video overflow-hidden rounded-[26px] sm:rounded-[36px]"
                        >
                            <Image
                                src={image}
                                alt={`${project.title} gallery image ${index + 1}`}
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Services and CTA */}
            <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
                <div className="grid gap-10 rounded-[30px] bg-[#f7f7f5] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-grey">
                            Services delivered
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
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

                    <PrimaryBtn className="mt-4" href="/contact-us">
                        Start a Project
                    </PrimaryBtn>
                </div>
            </section>
        </main>
    );
}