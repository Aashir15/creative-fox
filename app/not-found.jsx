import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Page Not Found",
    description:
        "The page you are looking for could not be found. Return to Creative Fox or explore our services and work.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <section className="flex min-h-screen items-center bg-white px-6 py-24">
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pink">
                            Error 404
                        </p>

                        <p className="mt-6 text-[120px] font-medium leading-none tracking-[-0.08em] text-black sm:text-[180px] lg:text-[230px]">
                            404
                        </p>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-black sm:text-6xl lg:text-[82px]">
                            Looks like this page wandered off.
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-relaxed text-grey sm:text-lg">
                            The page you&apos;re looking for may have been moved, renamed,
                            or no longer exists. You can head back home or explore what we do.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Link
                                href="/"
                                className="
                  inline-flex items-center gap-3
                  rounded-full bg-black px-6 py-3.5
                  text-sm font-medium text-white!
                  transition-all duration-300
                  hover:bg-pink
                "
                            >
                                <ArrowLeft size={17} aria-hidden="true" />
                                Back Home
                            </Link>

                            <Link
                                href="/services"
                                className="
                  group inline-flex items-center gap-2
                  border-b border-black pb-1
                  text-sm font-semibold text-black
                  transition-colors duration-300
                  hover:border-pink hover:text-pink
                "
                            >
                                Explore Services

                                <ArrowUpRight
                                    size={17}
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:rotate-45"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 border-t border-black/10 pt-8">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-grey">
                        <Link
                            href="/case-studies"
                            className="transition-colors hover:text-black"
                        >
                            Case Studies
                        </Link>

                        <Link
                            href="/blog"
                            className="transition-colors hover:text-black"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/about-us"
                            className="transition-colors hover:text-black"
                        >
                            About Us
                        </Link>

                        <Link
                            href="/contact-us"
                            className="transition-colors hover:text-black"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}