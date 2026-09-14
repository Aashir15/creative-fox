import BlogClient from "./BlogClient";

export const metadata = {
    title: "Blog | Digital Strategy, Design & Development Insights",

    description:
        "Explore insights from Creative Fox on web design, development, branding, UI/UX, SEO, digital marketing, technology, and business growth.",

    alternates: {
        canonical: "/blog",
    },

    openGraph: {
        title: "Creative Fox Blog | Digital Insights & Ideas",
        description:
            "Read practical insights on design, development, branding, SEO, digital marketing, technology, and growing your business online.",
        url: "/blog",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Creative Fox Blog | Digital Insights & Ideas",
        description:
            "Insights on design, development, branding, SEO, digital marketing, and digital growth.",
    },
};

export default function BlogPage() {
    return <BlogClient />;
}