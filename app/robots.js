const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourdomain.com";

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