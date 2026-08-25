"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    ChevronDown,
    Code2,
    Megaphone,
    Menu,
    Palette,
    X,
} from "lucide-react";

import PrimaryBtn from "./PrimaryBtn";
import { serviceCategories } from "../data/services";
// Change the import path above to your actual services data file.

const navLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
];

const categoryIcons = {
    Development: Code2,
    Design: Palette,
    "Digital Marketing": Megaphone,
};

function createServiceSlug(service) {
    return service
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const closeMenu = () => {
        setMobileOpen(false);
        setMobileServicesOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-5">
            <div
                style={{
                    maxWidth: isScrolled ? "1100px" : "1200px",
                }}
                className="
                    relative mx-auto w-full
                    transition-[max-width] duration-1000
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                "
            >
                <div
                    className={`
                        relative flex min-h-18 items-center justify-between
                        rounded-2xl border border-white/60
                        bg-white/45 shadow-[0_14px_50px_rgba(7,0,11,0.12)]
                        backdrop-blur-2xl
                        transition-[padding,border-radius,background-color,box-shadow]
                        duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isScrolled ? "px-4 sm:px-6" : "px-5 sm:px-8"}
                    `}
                >
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="flex shrink-0 items-center gap-3"
                    >
                        <span className="text-lg font-semibold tracking-[-0.03em] text-black">
                            Creative Fox
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-1 lg:flex"
                    >
                        {navLinks.slice(0, 2).map((item) => (
                            <NavLink key={item.label} {...item} />
                        ))}

                        {/* Services mega menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <Link
                                href="/services"
                                onClick={() => setServicesOpen(false)}
                                onFocus={() => setServicesOpen(true)}
                                className="
        flex items-center gap-1 rounded-full px-4 py-2
        text-sm font-medium text-black/65
        transition-all duration-300
        hover:bg-black/5 hover:text-black
    "
                            >
                                Services

                                <ChevronDown
                                    size={15}
                                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </Link>

                            <div
                                className={`
        absolute left-1/2 top-full
        w-[min(94vw,980px)] -translate-x-1/2
        pt-5 transition-all duration-300
        ${servicesOpen
                                        ? "visible translate-y-0 opacity-100"
                                        : "invisible translate-y-3 opacity-0"
                                    }
    `}
                            >
                                <div
                                    className="
                                        overflow-hidden rounded-[28px]
                                        bg-black px-7 pb-6 pt-8 text-white
                                        shadow-[0_30px_80px_rgba(0,0,0,0.3)]
                                        xl:px-9
                                    "
                                >
                                    <div className="grid grid-cols-3 gap-8 xl:gap-12">
                                        {serviceCategories.map((category) => {
                                            const CategoryIcon =
                                                categoryIcons[category.title];

                                            return (
                                                <section key={category.title}>
                                                    <div className="mb-5 flex items-center gap-3">
                                                        {CategoryIcon && (
                                                            <CategoryIcon
                                                                size={21}
                                                                strokeWidth={1.8}
                                                                aria-hidden="true"
                                                            />
                                                        )}

                                                        <h2 className="text-2xl font-medium tracking-[-0.04em] xl:text-3xl">
                                                            {category.title}
                                                        </h2>
                                                    </div>

                                                    <ul className="space-y-1">
                                                        {category.services.map(
                                                            (service) => (
                                                                <li key={service}>
                                                                    <Link
                                                                        href={`/services/${createServiceSlug(
                                                                            service
                                                                        )}`}
                                                                        onClick={() => setServicesOpen(false)}
                                                                        className="
                                                                            group/item flex items-center
                                                                            gap-3 rounded-xl px-2 py-2.5
                                                                            text-sm text-white/75
                                                                            transition-all duration-300
                                                                            hover:bg-white/10
                                                                            hover:text-white
                                                                            xl:text-base
                                                                        "
                                                                    >
                                                                        <ArrowUpRight
                                                                            size={16}
                                                                            className="
                                                                                shrink-0 transition-transform
                                                                                duration-300
                                                                                group-hover/item:rotate-45
                                                                            "
                                                                        />

                                                                        <span>{service}</span>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </section>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-8 flex justify-end border-t border-white/15 pt-5">
                                        <Link
                                            href="/services"
                                            className="
                                                group/all inline-flex items-center
                                                gap-3 text-xl font-medium
                                                tracking-[-0.03em]
                                                underline decoration-1
                                                underline-offset-6
                                                transition-opacity
                                                hover:opacity-70
                                                xl:text-2xl
                                            "
                                        >
                                            Explore All Services

                                            <ArrowUpRight
                                                size={23}
                                                className="
                                                    transition-transform duration-300
                                                    group-hover/all:rotate-45
                                                "
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {navLinks.slice(2).map((item) => (
                            <NavLink key={item.label} {...item} />
                        ))}
                    </nav>

                    <div className="hidden items-center lg:flex">
                        <PrimaryBtn href="/contact-us">
                            Get Started
                        </PrimaryBtn>
                    </div>

                    <button
                        type="button"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => {
                            setMobileOpen((current) => !current);
                            setMobileServicesOpen(false);
                        }}
                        className="
                            flex h-11 w-11 items-center justify-center
                            rounded-full border border-black/10
                            bg-white/50 text-black backdrop-blur-xl
                            transition-all duration-300
                            hover:bg-white/80 lg:hidden
                        "
                    >
                        {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-navigation"
                    className={`
                        absolute left-0 right-0 top-[calc(100%+10px)]
                        origin-top overflow-hidden rounded-2xl
                        border border-white/60 bg-white/90
                        shadow-[0_24px_70px_rgba(7,0,11,0.14)]
                        backdrop-blur-2xl
                        transition-all duration-300 lg:hidden
                        ${mobileOpen
                            ? "visible translate-y-0 scale-100 opacity-100"
                            : "invisible -translate-y-3 scale-[0.98] opacity-0"
                        }
                    `}
                >
                    <nav
                        aria-label="Mobile navigation"
                        className="max-h-[calc(100vh-110px)] overflow-y-auto p-3"
                    >
                        {navLinks.slice(0, 2).map((item) => (
                            <MobileNavLink
                                key={item.label}
                                {...item}
                                onClick={closeMenu}
                            />
                        ))}

                        <button
                            type="button"
                            aria-expanded={mobileServicesOpen}
                            aria-controls="mobile-services"
                            onClick={() =>
                                setMobileServicesOpen((current) => !current)
                            }
                            className="
                                flex w-full items-center justify-between
                                rounded-xl px-4 py-3.5
                                text-left text-sm font-medium text-black/70
                                transition-all duration-300
                                hover:bg-black/5 hover:text-black
                            "
                        >
                            Services

                            <ChevronDown
                                size={17}
                                className={`
                                    transition-transform duration-300
                                    ${mobileServicesOpen ? "rotate-180" : ""}
                                `}
                            />
                        </button>

                        <div
                            id="mobile-services"
                            className={`
                                grid transition-[grid-template-rows,opacity]
                                duration-300
                                ${mobileServicesOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }
                            `}
                        >
                            <div className="overflow-hidden">
                                <div className="mx-1 mb-3 rounded-2xl bg-black p-4 text-white">
                                    {serviceCategories.map((category) => (
                                        <section
                                            key={category.title}
                                            className="mb-5 last:mb-0"
                                        >
                                            <h2 className="mb-2 text-base font-semibold">
                                                {category.title}
                                            </h2>

                                            <ul>
                                                {category.services.map(
                                                    (service) => (
                                                        <li key={service}>
                                                            <Link
                                                                href={`/services/${createServiceSlug(
                                                                    service
                                                                )}`}
                                                                onClick={closeMenu}
                                                                className="
                                                                    flex items-center gap-2
                                                                    rounded-lg px-2 py-2
                                                                    text-sm text-white/70
                                                                    transition-colors
                                                                    hover:bg-white/10
                                                                    hover:text-white
                                                                "
                                                            >
                                                                <ArrowUpRight
                                                                    size={14}
                                                                />
                                                                {service}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </section>
                                    ))}

                                    <Link
                                        href="/services"
                                        onClick={closeMenu}
                                        className="
                                            mt-5 flex items-center justify-between
                                            border-t border-white/15 pt-4
                                            text-base font-medium underline
                                            underline-offset-4
                                        "
                                    >
                                        Explore All Services
                                        <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {navLinks.slice(2).map((item) => (
                            <MobileNavLink
                                key={item.label}
                                {...item}
                                onClick={closeMenu}
                            />
                        ))}

                        <div className="mt-2">
                            <PrimaryBtn href="/contact-us">
                                Get Started
                            </PrimaryBtn>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

function NavLink({ label, href }) {
    return (
        <Link
            href={href}
            className="
                rounded-full px-4 py-2
                text-sm font-medium text-black/65
                transition-all duration-300
                hover:bg-black/5 hover:text-black
            "
        >
            {label}
        </Link>
    );
}

function MobileNavLink({ label, href, onClick }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="
                block rounded-xl px-4 py-3.5
                text-sm font-medium text-black/70
                transition-all duration-300
                hover:bg-black/5 hover:text-black
            "
        >
            {label}
        </Link>
    );
}