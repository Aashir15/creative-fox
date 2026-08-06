import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Clock3,
    UserRound,
} from "lucide-react";
import { notFound } from "next/navigation";

import { blogPosts } from "../../../data/blogPosts";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        blogSlug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { blogSlug } = await params;

    const post = blogPosts.find(
        (item) => item.slug === blogSlug
    );

    if (!post) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogDetailsPage({ params }) {
    const { blogSlug } = await params;

    const post = blogPosts.find(
        (item) => item.slug === blogSlug
    );

    if (!post) {
        notFound();
    }

    const sameCategoryPosts = blogPosts
        .filter(
            (item) =>
                item.slug !== post.slug &&
                item.category === post.category
        )
        .slice(0, 3);

    const fallbackPosts = blogPosts
        .filter((item) => item.slug !== post.slug)
        .slice(0, 3);

    const relatedPosts =
        sameCategoryPosts.length > 0
            ? sameCategoryPosts
            : fallbackPosts;

    return (
        <>
            <article className="mt-18">
                <div className="mx-auto max-w-500 px-6 py-16 md:py-22">
                    <Link
                        href="/blog"
                        className="
              group inline-flex items-center gap-2
              text-sm font-medium text-grey
              transition-colors duration-300
              hover:text-black
            "
                    >
                        <ArrowLeft
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />

                        Back to blog
                    </Link>

                    <header className="mx-auto mt-12 max-w-262 text-center">
                        <span className="badge">
                            {post.category}
                        </span>

                        <h1 className="mt-5 text-4xl font-medium leading-[0.98] tracking-tighter text-black sm:text-6xl lg:text-[82px]">
                            {post.title}
                        </h1>

                        <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-grey sm:text-lg">
                            {post.excerpt}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-grey">
                            <span className="flex items-center gap-2">
                                <UserRound size={16} />
                                {post.author}
                            </span>

                            <span className="hidden h-1 w-1 rounded-full bg-pink sm:block" />

                            <span className="flex items-center gap-2">
                                <CalendarDays size={16} />
                                {post.date}
                            </span>

                            <span className="hidden h-1 w-1 rounded-full bg-pink sm:block" />

                            <span className="flex items-center gap-2">
                                <Clock3 size={16} />
                                {post.readingTime}
                            </span>
                        </div>
                    </header>

                    {/* Featured image */}
                    <div className="relative mt-12 aspect-16/8 overflow-hidden rounded-[26px] sm:mt-16 sm:rounded-[38px]">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 1400px"
                            className="object-cover"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    <div className="mx-auto mt-14 max-w-200 md:mt-20">
                        <BlogContent content={post.content} />
                    </div>
                </div>
            </article>

            <RelatedPosts posts={relatedPosts} />
        </>
    );
}

function BlogContent({ content }) {
    return (
        <div className="space-y-7">
            {content.map((block, index) => {
                const key = `${block.type}-${index}`;

                if (block.type === "heading") {
                    return (
                        <h2
                            key={key}
                            className="pt-7 text-3xl font-medium leading-tight tracking-[-0.035em] text-black sm:text-4xl"
                        >
                            {block.text}
                        </h2>
                    );
                }

                if (block.type === "paragraph") {
                    return (
                        <p
                            key={key}
                            className="text-base leading-8 text-grey sm:text-lg"
                        >
                            {block.text}
                        </p>
                    );
                }

                if (block.type === "list") {
                    return (
                        <ul
                            key={key}
                            className="space-y-4 py-2"
                        >
                            {block.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-4 text-base leading-8 text-grey sm:text-lg"
                                >
                                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-pink" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    );
                }

                if (block.type === "quote") {
                    return (
                        <blockquote
                            key={key}
                            className="
                relative my-10 overflow-hidden
                rounded-[26px] bg-[#f7f7f5]
                px-6 py-8 text-xl font-medium
                leading-relaxed tracking-tight
                text-black sm:px-9 sm:py-10 sm:text-2xl
              "
                        >
                            <span className="absolute inset-y-0 left-0 w-1.5 bg-pink" />

                            “{block.text}”
                        </blockquote>
                    );
                }

                return null;
            })}
        </div>
    );
}

function RelatedPosts({ posts }) {
    if (!posts.length) {
        return null;
    }

    return (
        <section className="bg-[#f7f7f5]">
            <div className="mx-auto max-w-500 px-6 py-16 md:py-22">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <span className="badge">
                            Continue reading
                        </span>

                        <h2 className="heading">
                            Related articles
                        </h2>
                    </div>

                    <Link
                        href="/blog"
                        className="
              group hidden items-center gap-2
              border-b border-black pb-1
              text-sm font-semibold text-black
              transition-colors duration-300
              hover:border-pink hover:text-pink
              sm:inline-flex
            "
                    >
                        View all articles

                        <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((relatedPost) => (
                        <article
                            key={relatedPost.slug}
                            className="
                group overflow-hidden rounded-[26px]
                border border-black/8 bg-white
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_22px_60px_rgba(7,0,11,0.10)]
              "
                        >
                            <Link
                                href={`/blog/${relatedPost.slug}`}
                                className="block"
                            >
                                <div className="relative aspect-16/10 overflow-hidden">
                                    <Image
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

                                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-medium text-white! backdrop-blur-xl">
                                        {relatedPost.category}
                                    </span>
                                </div>

                                <div className="p-6 sm:p-7">
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-grey">
                                        <span className="flex items-center gap-2">
                                            <CalendarDays size={14} />
                                            {relatedPost.date}
                                        </span>

                                        <span className="flex items-center gap-2">
                                            <Clock3 size={14} />
                                            {relatedPost.readingTime}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.035em] text-black">
                                        {relatedPost.title}
                                    </h3>

                                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-grey">
                                        {relatedPost.excerpt}
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
                    ))}
                </div>
            </div>
        </section>
    );
}