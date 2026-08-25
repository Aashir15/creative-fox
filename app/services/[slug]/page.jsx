import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    Check,
    Plus,
} from "lucide-react";
import { notFound } from "next/navigation";

import {
    getServiceBySlug,
    services,
} from "../../../data/services";
import PrimaryBtn from "../../../components/PrimaryBtn";

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service not found",
        };
    }

    return {
        title: service.title,
        description: service.excerpt,
    };
}

export default async function ServiceDetailsPage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const relatedServices = services
        .filter((item) => item.slug !== service.slug)
        .slice(0, 2);

    return (
        <>
            <section className="mx-auto max-w-7xl px-6 py-16 md:py-22 mt-18">
                <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-grey transition hover:text-black"
                >
                    <ArrowLeft
                        size={17}
                        className="transition-transform group-hover:-translate-x-1"
                    />

                    Back to services
                </Link>

                <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:items-end">
                    <div>
                        <span className="badge">{service.category}</span>

                        <h1 className="heading">
                            {service.title}
                        </h1>
                    </div>

                    <div className="lg:justify-self-end">
                        <p className="max-w-md text-base leading-relaxed text-grey md:text-lg">
                            {service.description}
                        </p>

                        <PrimaryBtn className="mt-4" href="/contact-us">
                            Get Started
                        </PrimaryBtn>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6">
                <div className="relative aspect-16/8 min-h-90 overflow-hidden rounded-[28px] sm:rounded-[40px]">
                    <Image
                        src={service.showcaseImage}
                        alt={`${service.title} showcase`}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 sm:bottom-9 sm:left-9">
                        {service.highlights.map((highlight) => (
                            <span
                                key={highlight}
                                className="rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl"
                            >
                                {highlight}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                <div className="grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-pink">
                        {service.intro.eyebrow}
                    </p>

                    <div>
                        <h2 className="text-4xl font-medium leading-[0.98] tracking-tighter text-black sm:text-5xl lg:text-[68px]">
                            {service.intro.title}
                        </h2>

                        <p className="mt-7 max-w-3xl text-base leading-relaxed text-grey md:text-lg">
                            {service.intro.text}
                        </p>
                    </div>
                </div>
            </section>

            {/* Showcase */}
            {/* <section className="mx-auto max-w-[2000px] px-4 md:px-8">
                <div className="relative aspect-[16/8] overflow-hidden rounded-[28px] bg-[#f7f7f5] sm:rounded-[40px]">
                    <Image
                        src={service.showcaseImage}
                        alt={`${service.title} digital experience`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
            </section> */}

            <section>
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="max-w-4xl">
                        <span className="badge">Why it matters</span>

                        <h2 className="heading">
                            Built to improve more than appearance.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {service.benefits.map((benefit, index) => (
                            <article
                                key={benefit.title}
                                className="rounded-[26px] border border-black/8 bg-[#f7f7f5] p-6 sm:p-8"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink text-white">
                                        <Check size={18} />
                                    </span>

                                    <span className="text-sm font-medium text-black/30">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="mt-12 text-2xl font-medium tracking-[-0.035em] text-black">
                                    {benefit.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-grey">
                                    {benefit.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f7f7f5]">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="max-w-4xl">
                        <span className="badge">Solutions</span>

                        <h2 className="heading">
                            Services shaped around your requirements.
                        </h2>
                    </div>

                    <div className="mt-14 space-y-16">
                        {service.platforms.map((platform, index) => (
                            <article
                                key={platform.title}
                                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                            >
                                <div
                                    className={`relative aspect-4/3 overflow-hidden rounded-[26px] bg-white sm:rounded-[36px] ${index % 2 === 1 ? "lg:order-2" : ""
                                        }`}
                                >
                                    <Image
                                        src={platform.image}
                                        alt={platform.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    {/* <p className="text-sm font-semibold text-pink">
                                        {String(index + 1).padStart(2, "0")}
                                    </p> */}

                                    <h3 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.045em] text-black sm:text-5xl">
                                        {platform.title}
                                    </h3>

                                    <p className="mt-6 max-w-xl text-base leading-relaxed text-grey md:text-lg">
                                        {platform.description}
                                    </p>

                                    <Link
                                        href="/contact-us"
                                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-pink"
                                    >
                                        Discuss your project
                                        <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
                        <div>
                            <span className="badge">Our process</span>

                            <h2 className="heading">
                                Clear thinking at every step.
                            </h2>
                        </div>

                        <p className="max-w-md text-base leading-relaxed text-grey md:text-lg lg:justify-self-end">
                            A collaborative process keeps decisions focused, progress clear
                            and the final result aligned with your business.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {service.process.map((step) => (
                            <article
                                key={step.number}
                                className="flex min-h-75 flex-col rounded-[26px] border border-black/8 bg-white p-6 shadow-[0_15px_45px_rgba(7,0,11,0.05)] sm:p-8"
                            >
                                <span className="text-sm font-semibold text-pink">
                                    {step.number}
                                </span>

                                <div className="mt-auto pt-16">
                                    <h3 className="text-2xl font-medium tracking-[-0.035em] text-black">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-grey">
                                        {step.text}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-black">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-pink">
                        Industry experience
                    </span>

                    <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[0.98] tracking-tighter text-white sm:text-5xl lg:text-[68px]">
                        Digital experiences designed for different markets.
                    </h2>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {service.industries.map((industry) => (
                            <div
                                key={industry}
                                className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-5 py-5 text-white"
                            >
                                <span>{industry}</span>
                                <span className="h-2 w-2 rounded-full bg-pink" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-350 px-6 py-16 md:py-22">
                    <div className="text-center">
                        <span className="badge">Frequently asked</span>

                        <h2 className="heading">
                            A few useful answers.
                        </h2>
                    </div>

                    <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
                        {service.faq.map((item) => (
                            <details key={item.question} className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-xl font-medium text-black sm:text-2xl">
                                    {item.question}

                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition group-open:rotate-45 group-open:bg-pink group-open:text-white">
                                        <Plus size={18} />
                                    </span>
                                </summary>

                                <p className="max-w-3xl pb-7 pr-14 leading-relaxed text-grey md:text-lg">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f7f7f5]">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <span className="badge">More expertise</span>
                            <h2 className="heading">Related services</h2>
                        </div>

                        <Link
                            href="/services"
                            className="hidden items-center gap-2 text-sm font-semibold text-black transition hover:text-pink sm:inline-flex"
                        >
                            View all services
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {relatedServices.map((relatedService) => (
                            <Link
                                key={relatedService.slug}
                                href={`/services/${relatedService.slug}`}
                                className="group relative aspect-16/10 overflow-hidden rounded-[28px]"
                            >
                                <Image
                                    src={relatedService.heroImage}
                                    alt={relatedService.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                    <p className="text-sm text-white/60">
                                        {relatedService.category}
                                    </p>

                                    <div className="mt-2 flex items-end justify-between gap-5">
                                        <h3 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                                            {relatedService.shortTitle}
                                        </h3>

                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45 group-hover:bg-pink group-hover:text-white">
                                            <ArrowUpRight size={19} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 md:py-22">
                <div className="rounded-[30px] bg-pink p-7 sm:p-10 lg:p-16">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/65">
                        Ready when you are
                    </p>

                    <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                        <h2 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-tighter text-white sm:text-5xl lg:text-[68px]">
                            Let’s build a digital experience that moves your business
                            forward.
                        </h2>

                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                        >
                            Start a project
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}