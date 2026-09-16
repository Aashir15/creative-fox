import { services } from "../data/services";
import { blogPosts } from "../data/blogPosts";
import { portfolio } from "../data/portfolio";

const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://creativefox.io"
).replace(/\/$/, "");

export default function sitemap() {
    const staticPages = [
        {
            url: `${siteUrl}/`,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about-us`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/services`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/case-studies`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/blog`,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact-us`,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/privacy-policy`,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${siteUrl}/terms-and-conditions`,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const servicePages = services
        .filter((service) => service.slug)
        .map((service) => ({
            url: `${siteUrl}/services/${service.slug}`,
            changeFrequency: "monthly",
            priority: 0.8,
        }));

    const blogPages = blogPosts
        .filter((post) => post.slug)
        .map((post) => ({
            url: `${siteUrl}/blog/${post.slug}`,
            lastModified: post.updatedAt
                ? new Date(post.updatedAt)
                : post.date
                    ? new Date(post.date)
                    : undefined,
            changeFrequency: "monthly",
            priority: 0.7,
        }));

    const caseStudyPages = portfolio
        .filter((project) => project.slug)
        .map((project) => ({
            url: `${siteUrl}/case-studies/${project.slug}`,
            lastModified: project.updatedAt
                ? new Date(project.updatedAt)
                : undefined,
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