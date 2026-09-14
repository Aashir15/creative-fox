import CaseStudiesClient from "./CaseStudiesClient";

export const metadata = {
    title: "Case Studies | Creative Work & Digital Projects",

    description:
        "Explore Creative Fox case studies across branding, web design, development, digital products, and marketing. See how we turn ideas into high-impact digital experiences.",

    alternates: {
        canonical: "/case-studies",
    },

    openGraph: {
        title: "Creative Fox Case Studies | Selected Digital Work",
        description:
            "Explore selected projects across design, development, branding, and digital growth, including the challenges, solutions, and results behind the work.",
        url: "/case-studies",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Creative Fox Case Studies | Selected Digital Work",
        description:
            "Explore selected Creative Fox projects across design, development, branding, and digital growth.",
    },
};

export default function CaseStudiesPage() {
    return <CaseStudiesClient />;
}