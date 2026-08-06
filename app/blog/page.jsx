"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
    ArrowRight,
    CalendarDays,
    Clock3,
    Search,
} from "lucide-react";

import { blogPosts } from "../../data/blogPosts";


gsap.registerPlugin(useGSAP);

export default function Blog() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const featuredPost =
        blogPosts.find((post) => post.featured) ?? blogPosts[0];

    const categories = [
        "All",
        ...new Set(blogPosts.map((post) => post.category)),
    ];

    const filteredPosts = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return blogPosts.filter((post) => {
            const matchesCategory =
                activeCategory === "All" ||
                post.category === activeCategory;

            const matchesSearch =
                !normalizedSearch ||
                post.title.toLowerCase().includes(normalizedSearch) ||
                post.excerpt.toLowerCase().includes(normalizedSearch) ||
                post.category.toLowerCase().includes(normalizedSearch);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    if (!featuredPost) {
        return null;
    }

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
                className="mx-auto mt-38 max-w-500 px-6"
            >
                <h1 className="text-4xl font-medium leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-[114px]">
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

            <section>
                <div className="mx-auto max-w-500 px-6 py-16 md:py-22">

                    <article
                        className="
              group  grid overflow-hidden
              rounded-[28px] border border-black/8
              bg-[#f7f7f5]
              shadow-[0_18px_60px_rgba(7,0,11,0.06)]
              sm:rounded-[38px]
               lg:grid-cols-2
            "
                    >
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="relative min-h-80 overflow-hidden lg:min-h-140"
                        >
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                            <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-medium text-white! backdrop-blur-xl sm:left-7 sm:top-7">
                                Featured · {featuredPost.category}
                            </span>
                        </Link>

                        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-16">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-grey">
                                <span className="flex items-center gap-2">
                                    <CalendarDays size={16} />
                                    {featuredPost.date}
                                </span>

                                <span className="flex items-center gap-2">
                                    <Clock3 size={16} />
                                    {featuredPost.readingTime}
                                </span>
                            </div>

                            <h2 className="mt-6 text-3xl font-medium leading-[1.02] tracking-[-0.045em] text-black sm:text-4xl lg:text-[54px]">
                                {featuredPost.title}
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-relaxed text-grey sm:text-lg">
                                {featuredPost.excerpt}
                            </p>

                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="
                  group/link mt-8 inline-flex w-fit
                  items-center gap-3 border-b border-black
                  pb-1 text-sm font-semibold text-black
                  transition-colors duration-300
                  hover:border-pink hover:text-pink
                "
                            >
                                Read featured article

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                                />
                            </Link>
                        </div>
                    </article>

                    {/* Filters and search */}
                    <div className="mt-14 flex flex-col gap-5 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
                            {categories.map((category) => {
                                const isActive = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        className={`
                      shrink-0 rounded-full border
                      px-5 py-2.5 text-sm font-medium
                      transition-all duration-300
                      ${isActive
                                                ? "border-black bg-black text-white!"
                                                : "border-black/10 bg-white text-black hover:border-black/30"
                                            }
                    `}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>

                        <label className="relative block w-full lg:max-w-sm">
                            <span className="sr-only">
                                Search articles
                            </span>

                            <Search
                                size={19}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                            />

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search articles..."
                                className="
                  min-h-13 w-full rounded-full
                  border border-black/10 bg-white
                  py-3 pl-12 pr-5 text-sm text-black
                  outline-none transition-all duration-300
                  placeholder:text-black/35
                  focus:border-pink focus:ring-4 focus:ring-pink/10
                "
                            />
                        </label>
                    </div>

                    {/* Blog grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <BlogCard
                                    key={post.slug}
                                    post={post}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-12 rounded-[28px] border border-dashed border-black/15 bg-[#f7f7f5] px-6 py-20 text-center">
                            <h2 className="text-2xl font-medium tracking-[-0.03em] text-black">
                                No articles found
                            </h2>

                            <p className="mt-3 text-grey">
                                Try another keyword or category.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

function BlogCard({ post }) {
    return (
        <article
            className="
        group overflow-hidden rounded-[26px]
        border border-black/8 bg-white
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_22px_60px_rgba(7,0,11,0.10)]
      "
        >
            <Link
                href={`/blog/${post.slug}`}
                className="block"
            >
                <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-medium text-white! backdrop-blur-xl">
                        {post.category}
                    </span>
                </div>

                <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-grey">
                        <span className="flex items-center gap-2">
                            <CalendarDays size={14} />
                            {post.date}
                        </span>

                        <span className="flex items-center gap-2">
                            <Clock3 size={14} />
                            {post.readingTime}
                        </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.035em] text-black">
                        {post.title}
                    </h2>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-grey">
                        {post.excerpt}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors duration-300 group-hover:text-pink">
                        Read article

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </span>
                </div>
            </Link>
        </article>
    );
}