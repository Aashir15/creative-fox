import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Creative Fox",
    description:
        "Learn how Creative Fox collects, uses, and protects your personal information.",
};

const sections = [
    {
        title: "Information we collect",
        content: (
            <>
                <p>
                    We may collect personal information that you provide when
                    contacting us, requesting a proposal, subscribing to updates,
                    or using our website.
                </p>

                <p>This information may include:</p>

                <ul>
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company or organization name</li>
                    <li>Project details and messages you send us</li>
                </ul>
            </>
        ),
    },
    {
        title: "Information collected automatically",
        content: (
            <>
                <p>
                    When you visit our website, certain technical information may
                    be collected automatically through cookies, analytics tools,
                    and similar technologies.
                </p>

                <p>This may include:</p>

                <ul>
                    <li>IP address</li>
                    <li>Browser and device information</li>
                    <li>Pages visited</li>
                    <li>Time spent on the website</li>
                    <li>Referral source</li>
                    <li>General location information</li>
                </ul>
            </>
        ),
    },
    {
        title: "How we use your information",
        content: (
            <>
                <p>We may use collected information to:</p>

                <ul>
                    <li>Respond to inquiries and project requests</li>
                    <li>Provide and improve our services</li>
                    <li>Communicate about projects and business opportunities</li>
                    <li>Improve website performance and user experience</li>
                    <li>Maintain website security</li>
                    <li>Comply with legal obligations</li>
                </ul>
            </>
        ),
    },
    {
        title: "Cookies",
        content: (
            <p>
                Our website may use cookies and similar technologies to remember
                preferences, understand website traffic, and improve the browsing
                experience. You can control or disable cookies through your
                browser settings. Disabling cookies may affect some website
                functionality.
            </p>
        ),
    },
    {
        title: "Analytics and third-party services",
        content: (
            <p>
                We may use third-party services such as website analytics,
                hosting, email, customer relationship management, and form
                processing providers. These providers may process limited
                information on our behalf to help us operate our website and
                provide our services.
            </p>
        ),
    },
    {
        title: "How we share information",
        content: (
            <>
                <p>
                    We do not sell or rent your personal information. We may share
                    information with trusted service providers when necessary to
                    operate our business or deliver our services.
                </p>

                <p>
                    Information may also be disclosed when required by law, to
                    protect our legal rights, or in connection with a business
                    transfer such as a merger or acquisition.
                </p>
            </>
        ),
    },
    {
        title: "Data security",
        content: (
            <p>
                We use reasonable administrative, technical, and organizational
                measures to protect personal information. However, no method of
                online transmission or electronic storage is completely secure,
                and we cannot guarantee absolute security.
            </p>
        ),
    },
    {
        title: "Data retention",
        content: (
            <p>
                We retain personal information only for as long as reasonably
                necessary to provide our services, maintain business records,
                resolve disputes, enforce agreements, and comply with applicable
                legal requirements.
            </p>
        ),
    },
    {
        title: "Your privacy rights",
        content: (
            <>
                <p>
                    Depending on your location, you may have the right to request:
                </p>

                <ul>
                    <li>Access to the personal information we hold about you</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of certain processing activities</li>
                    <li>A copy of your information</li>
                    <li>Withdrawal of consent</li>
                </ul>

                <p>
                    To submit a privacy request, contact us using the information
                    provided below.
                </p>
            </>
        ),
    },
    {
        title: "External links",
        content: (
            <p>
                Our website may contain links to websites operated by third
                parties. We are not responsible for the privacy practices,
                security, or content of those external websites. Please review
                their privacy policies before providing personal information.
            </p>
        ),
    },
    {
        title: "Children’s privacy",
        content: (
            <p>
                Our website and services are not directed to children under the
                age of 13, and we do not knowingly collect personal information
                from children. If you believe a child has provided personal
                information to us, please contact us so we can remove it.
            </p>
        ),
    },
    {
        title: "Changes to this policy",
        content: (
            <p>
                We may update this Privacy Policy when our services, technology,
                or legal responsibilities change. The updated version will be
                published on this page with a revised effective date.
            </p>
        ),
    },
];

export default function PrivacyPolicy() {
    return (
        <>
            <header className="mx-auto max-w-500 px-6 py-16 md:py-22 mt-18">
                <div>
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-grey">
                        Legal
                    </p>

                    <h1 className="max-w-275 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[120px]">
                        Privacy
                        <br />
                        Policy
                    </h1>

                    <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm text-grey sm:text-base">
                        <p>Effective date: August 6, 2026</p>
                        <p>Last updated: August 6, 2026</p>
                    </div>
                </div>
            </header>

            <section className="border-t border-black/10 mx-auto max-w-500 px-6 py-16 md:py-22">
                <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-24">
                    <aside className="lg:sticky lg:top-32 lg:self-start">
                        <p className="max-w-70 text-lg leading-relaxed text-grey">
                            This policy explains how Creative Fox collects, uses,
                            stores, and protects information when you use our
                            website or contact our team.
                        </p>

                        <Link
                            href="/contact-us"
                            className="
                                group mt-8 inline-flex items-center gap-3
                                border-b border-black pb-1
                                text-base font-medium
                            "
                        >
                            Contact us

                            <ArrowUpRight
                                size={18}
                                className="
                                    transition-transform duration-300
                                    group-hover:rotate-45
                                "
                            />
                        </Link>
                    </aside>

                    <div>
                        <div className="border-b border-black/10 pb-12 lg:pb-16">
                            <p className="max-w-212 text-xl leading-relaxed text-black/75 sm:text-2xl lg:text-3xl">
                                Creative Fox respects your privacy. We are
                                committed to handling personal information
                                responsibly, transparently, and securely.
                            </p>
                        </div>

                        <div>
                            {sections.map((section, index) => (
                                <article
                                    key={section.title}
                                    className="
                                        grid gap-5 border-b border-black/10
                                        py-10 sm:py-12
                                        lg:grid-cols-[80px_1fr] lg:gap-10
                                        lg:py-16
                                    "
                                >
                                    <span className="text-sm font-medium text-grey">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div>
                                        <h2 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                                            {section.title}
                                        </h2>

                                        <div
                                            className="
                                                mt-5 max-w-200 space-y-5
                                                text-base leading-7 text-black/65
                                                sm:text-lg sm:leading-8
                                                [&_ul]:space-y-2
                                                [&_ul]:pl-5
                                                [&_li]:list-disc
                                                [&_li]:pl-2
                                            "
                                        >
                                            {section.content}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <article className="mt-12 rounded-[28px] bg-black p-7 text-white sm:p-10 lg:mt-16 lg:rounded-[40px] lg:p-14">
                            <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/55">
                                Privacy questions
                            </p>

                            <h2 className="mt-5 max-w-175 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                                Contact us about your information.
                            </h2>

                            <p className="mt-6 max-w-162 text-base leading-7 text-white/65 sm:text-lg">
                                For questions, requests, or concerns about this
                                Privacy Policy or your personal information,
                                contact the Creative Fox team.
                            </p>

                            <Link
                                href="mailto:hello@creativefox.com"
                                className="
                                    group mt-9 inline-flex items-center gap-3
                                    border-b border-white pb-1
                                    text-lg font-medium
                                "
                            >
                                hello@creativefox.com

                                <ArrowUpRight
                                    size={20}
                                    className="
                                        transition-transform duration-300
                                        group-hover:rotate-45
                                    "
                                />
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}