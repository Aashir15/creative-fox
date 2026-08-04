/** @type {import("next").NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/tech-and-development/web-mobile-app-development",
                destination: "/tech-development/web-mobile-app-development",
                permanent: true,
            },
            {
                source: "/faqs",
                destination: "/contact",
                permanent: true,
            },
            {
                source: "/logo-design",
                destination: "/creative-design/graphic-designing",
                permanent: true,
            },
            {
                source: "/seo-service",
                destination: "/growth-marketing/seo-services",
                permanent: true,
            },
            {
                source: "/shopify",
                destination: "/tech-development/ecommerce-solutions",
                permanent: true,
            },
            {
                source: "/digital-branding",
                destination: "/growth-marketing/social-media-marketing",
                permanent: true,
            },
            {
                source: "/website-design",
                destination: "/tech-development/web-mobile-app-development",
                permanent: true,
            },
            {
                source: "/blogs",
                destination: "/blog",
                permanent: true,
            },
            {
                source: "/category/blog",
                destination: "/blog",
                permanent: true,
            },
            {
                source: "/about-us",
                destination: "/about",
                permanent: true,
            },
            {
                source: "/privacy-policy",
                destination: "/privacy",
                permanent: true,
            },
            {
                source: "/privacy-security",
                destination: "/privacy",
                permanent: true,
            },
            {
                source: "/terms-conditions",
                destination: "/term",
                permanent: true,
            },
            {
                source: "/digital-marketing",
                destination: "/growth-marketing/social-media-marketing",
                permanent: true,
            },
            {
                source: "/digital-implementation-delivery",
                destination: "/tech-development/software-development",
                permanent: true,
            },
            {
                source: "/data-analytics",
                destination: "/tech-development/software-development",
                permanent: true,
            },
            {
                source: "/services",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;