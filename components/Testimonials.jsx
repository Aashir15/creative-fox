"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

import { reviews } from "../data/reviews"

function ReviewCard({ review }) {
    return (
        <article className="mx-2 w-77 shrink-0 rounded-3xl bg-[#f3f4f6] p-5 sm:w-87 md:w-95">
            <header className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white">
                        <Image
                            src={review.image}
                            alt={review.name}
                            fill
                            sizes="44px"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-neutral-700">
                            {review.name}
                        </h3>

                        <p className="mt-0.5 text-xs text-neutral-400">
                            {review.date}
                        </p>
                    </div>
                </div>

                <span className="text-xl font-semibold text-[#4285F4]">
                    G
                </span>
            </header>

            <div
                className="mt-4 flex items-center gap-1"
                aria-label="5 out of 5 stars"
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        strokeWidth={0}
                        className="text-[#fbbc04]"
                    />
                ))}

                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#4285F4] text-[9px] font-bold text-white">
                    ✓
                </span>
            </div>

            <p className="mt-4 line-clamp-4 text-sm leading-6 text-neutral-600">
                {review.review}
            </p>
        </article>
    );
}

export default function Testimonials() {
    const firstRow = reviews.slice(0, 4);
    const secondRow = reviews.slice(4);

    return (
        <section className="overflow-hidden bg-white py-16 md:py-24">
            <div className="mx-auto mb-10 max-w-7xl px-4 text-center md:px-8">
                <span className="badge">Client Reviews</span>

                <h2 className="heading mt-4">
                    What our clients say.
                </h2>

                <p className="text mx-auto mt-4 max-w-2xl">
                    Real feedback from clients we&apos;ve worked with.
                </p>
            </div>

            <div className="space-y-5">
                <Marquee
                    direction="right"
                    speed={35}
                    pauseOnHover
                    gradient
                    gradientWidth={90}
                    gradientColor="#ffffff"
                >
                    {firstRow.map((review) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                        />
                    ))}
                </Marquee>

                <Marquee
                    direction="left"
                    speed={35}
                    pauseOnHover
                    gradient
                    gradientWidth={90}
                    gradientColor="#ffffff"
                >
                    {secondRow.map((review) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}