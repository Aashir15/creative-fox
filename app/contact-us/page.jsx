import ContactPage from "../../components/ContactPage";

export const metadata = {
    title: "Contact Us | Start a Project",

    description:
        "Contact Creative Fox to discuss your next website, branding, UI/UX, development, eCommerce, SEO, or digital marketing project.",

    alternates: {
        canonical: "/contact-us",
    },

    openGraph: {
        title: "Contact Creative Fox | Start a Project",
        description:
            "Have a project in mind? Get in touch with Creative Fox for design, development, branding, and digital growth solutions.",
        url: "/contact-us",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Creative Fox | Start a Project",
        description:
            "Talk to Creative Fox about your next design, development, branding, or digital marketing project.",
    },
};

export default function Page() {
    return <ContactPage />;
}