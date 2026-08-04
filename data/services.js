import {
    Bot,
    Braces,
    ChartNoAxesCombined,
    Megaphone,
    Palette,
    ShoppingBag,
} from "lucide-react";

export const services = [
    {
        id: "01",
        title: "Web Design & Development",
        description:
            "High-performance digital experiences built around your brand, users, and business goals.",
        icon: Braces,
        href: "/services/web-development",
        className: "md:col-span-2 md:row-span-2",
        accent: "bg-[#efe8ff]",
    },
    {
        id: "02",
        title: "Brand Identity",
        description:
            "Memorable visual systems that give your business a distinct and consistent identity.",
        icon: Palette,
        href: "/services/branding",
        className: "md:col-span-1",
        accent: "bg-[#ffe8f1]",
    },
    {
        id: "03",
        title: "Digital Marketing",
        description:
            "Campaigns built to attract attention, generate demand, and turn audiences into customers.",
        icon: Megaphone,
        href: "/services/digital-marketing",
        className: "md:col-span-1",
        accent: "bg-[#e5f5ff]",
    },
    {
        id: "04",
        title: "AI Solutions",
        description:
            "Practical AI tools and automation that improve workflows and customer experiences.",
        icon: Bot,
        href: "/services/ai-solutions",
        className: "md:col-span-1",
        accent: "bg-[#ebf8e9]",
    },
    {
        id: "05",
        title: "E-commerce",
        description:
            "Modern online stores designed for effortless shopping and stronger conversion rates.",
        icon: ShoppingBag,
        href: "/services/ecommerce",
        className: "md:col-span-1",
        accent: "bg-[#fff1dc]",
    },
    {
        id: "06",
        title: "Growth Strategy",
        description:
            "Data-driven strategies that help your brand make smarter decisions and scale sustainably.",
        icon: ChartNoAxesCombined,
        href: "/services/growth-strategy",
        className: "md:col-span-2",
        accent: "bg-[#eeeef4]",
    },
];