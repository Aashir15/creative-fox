"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact-us" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

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
    };

    return (
        <>
            <header className="fixed inset-x-0 top-4 z-12 px-3 sm:px-5">
                <div
                    style={{
                        maxWidth: isScrolled ? "1200px" : "2000px",
                    }}
                    className="
            mx-auto w-full
            transition-[max-width]
            duration-1000
            ease-[cubic-bezier(0.16,1,0.3,1)]
          "
                >
                    <div
                        className={`
              relative flex items-center justify-between
              border border-white/60
              bg-white/45
              shadow-[0_14px_50px_rgba(7,0,11,0.12)]
              backdrop-blur-2xl
              transition-[min-height,padding,border-radius,background-color,box-shadow]
              duration-1000 min-h-18 rounded-2xl 
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isScrolled
                                ? "px-4 sm:px-6"
                                : "px-5 sm:px-8"
                            }
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

                        <nav className="hidden items-center gap-1 lg:flex">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="
                    rounded-full px-4 py-2
                    text-sm font-medium text-black/65
                    transition-all duration-300
                    hover:bg-black/5
                    hover:text-black
                  "
                                >
                                    {item.label}
                                </Link>
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
                            onClick={() => setMobileOpen((current) => !current)}
                            className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-black/10
                bg-white/50 text-black
                backdrop-blur-xl
                transition-all duration-300
                hover:bg-white/80
                lg:hidden
              "
                        >
                            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                        </button>
                    </div>

                    <div
                        className={`
              absolute left-3 right-3 top-[calc(100%+10px)]
              origin-top overflow-hidden
              rounded-2xl border border-white/60
              bg-white/70
              shadow-[0_24px_70px_rgba(7,0,11,0.14)]
              backdrop-blur-2xl
              transition-all duration-300
              sm:left-5 sm:right-5
              lg:hidden
              ${mobileOpen
                                ? "visible translate-y-0 scale-100 opacity-100"
                                : "invisible -translate-y-3 scale-[0.98] opacity-0"
                            }
            `}
                    >
                        <nav className="flex flex-col p-3">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="
                    rounded-xl px-4 py-3.5
                    text-sm font-medium text-black/70
                    transition-all duration-300
                    hover:bg-black/5
                    hover:text-black
                  "
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <PrimaryBtn href="/contact-us">
                                Get Started
                            </PrimaryBtn>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    );
}