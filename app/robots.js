const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://creativefox.io";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"],
        },

        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}