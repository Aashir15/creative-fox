"use client";

import Link from "next/link";

export default function PrimaryBtn({
    children,
    href,
    external = false,
    type = "button",
    onClick,
    className = "",
    disabled = false,
}) {
    const styles = `
  group relative inline-flex items-center justify-center overflow-hidden
  rounded-full
  bg-pink
  px-6 py-3
  !text-white
  no-underline
  shadow-lg shadow-pink/20
  transition-all duration-300
  hover:bg-[#e50060]
  hover:!text-white
  ${className}
`;

    const content = (
        <>
            {/* Shine Effect */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute left-[-120%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[130%]" />
            </span>

            <span className="relative z-10 flex items-center gap-2">
                {children}

                <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </>
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles}
                    onClick={onClick}
                >
                    {content}
                </a>
            );
        }

        return (
            <Link href={href} className={styles} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles}
        >
            {content}
        </button>
    );
}



{/* <PrimaryBtn
    href="https://google.com"
    external
>
    Visit Website
</PrimaryBtn>

<PrimaryBtn onClick={handleSubmit}>
  Submit
</PrimaryBtn>

<PrimaryBtn href="/contact">
  Get Started
</PrimaryBtn> */}



// <Image
//     src="/assets/logo.jpg"
//     alt="Cloud Minds Tech"
//     width={500}
//     height={200}
//     className="w-25 h-auto"
//     priority
// />