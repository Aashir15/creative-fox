import { serviceCategories } from "../data/services";
import { blogPosts } from "../data/blogPosts";
import { portfolio } from "../data/portfolio";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

function createSlug(value = "") {
    return value
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

export default function sitemap() {
    const now = new Date();

    const staticPages = [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about-us`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/services`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/case-studies`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact-us`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/privacy-policy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/terms-and-conditions`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const servicePages = serviceCategories.flatMap((category) =>
        category.services.map((service) => ({
            url: `${siteUrl}/services/${createSlug(service)}`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        }))
    );

    const blogPages = blogPosts
        .filter((post) => post.slug)
        .map((post) => ({
            url: `${siteUrl}/blog/${post.slug}`,
            lastModified: post.updatedAt || post.date || now,
            changeFrequency: "monthly",
            priority: 0.7,
        }));

    const caseStudyPages = portfolio
        .filter((project) => project.slug)
        .map((project) => ({
            url: `${siteUrl}/case-studies/${project.slug}`,
            lastModified: project.updatedAt || now,
            changeFrequency: "monthly",
            priority: 0.7,
        }));

    return [
        ...staticPages,
        ...servicePages,
        ...blogPages,
        ...caseStudyPages,
    ];
}