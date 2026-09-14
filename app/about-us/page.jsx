import AboutUsClient from "./AboutUsClient";

export const metadata = {
    title: "About Us | Creative Digital Agency",

    description:
        "Learn about Creative Fox, a Pakistan-based digital agency helping businesses worldwide with branding, UI/UX design, web development, software, mobile apps, and digital marketing.",

    alternates: {
        canonical: "/about-us",
    },

    openGraph: {
        title: "About Creative Fox | Creative Digital Agency",
        description:
            "Meet the team behind Creative Fox. We combine design, technology, and digital marketing to build better digital experiences for ambitious businesses.",
        url: "/about-us",
        type: "website",
        images: [
            {
                url: "/assets/qa-services.jpg",
                width: 1200,
                height: 630,
                alt: "Creative Fox digital agency team",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "About Creative Fox | Creative Digital Agency",
        description:
            "We combine creative thinking, technology, and performance marketing to help businesses compete in a digital-first world.",
        images: ["/assets/qa-services.jpg"],
    },
};

export default function AboutUsPage() {
    return <AboutUsClient />;
}