import ServiceClient from "./ServiceClient";

export const metadata = {
    title: "Digital Services | Design, Development & Marketing",

    description:
        "Explore Creative Fox services across web design, development, branding, UI/UX, eCommerce, SEO, digital marketing, software, and mobile app solutions.",

    alternates: {
        canonical: "/services",
    },

    openGraph: {
        title: "Creative Fox Services | Design, Development & Growth",
        description:
            "Explore our full-service digital capabilities across design, development, branding, eCommerce, SEO, and digital marketing.",
        url: "/services",
        type: "website",
        images: [
            {
                url: "/assets/service-cover.avif",
                alt: "Creative Fox digital services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Creative Fox Services | Design, Development & Growth",
        description:
            "Explore Creative Fox services across design, development, branding, eCommerce, SEO, and digital marketing.",
        images: ["/assets/service-cover.avif"],
    },
};

export default function ServicesPage() {
    return <ServiceClient />;
}