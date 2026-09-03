import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Cloud Minds Tech",
    description:
        "Learn how Cloud Minds Tech collects, uses, discloses and protects personal information.",
};

const sections = [
    {
        title: "Who We Are",
        content: (
            <p>
                Cloud Minds Tech (“we,” “us,” or “our”) is a digital agency
                that provides design, development and digital marketing
                services. This Privacy Policy explains how we collect, use,
                disclose and protect personal information when you visit our
                website, submit a form, communicate with us or otherwise
                interact with our website and services.
            </p>
        ),
    },
    {
        title: "Information We May Collect",
        content: (
            <ul>
                <li>
                    Contact information such as your name, work email, phone
                    number, company and job title when you provide it.
                </li>
                <li>
                    Project information you submit through inquiry forms, email,
                    meetings or other communications.
                </li>
                <li>
                    Technical and usage information such as IP address, browser
                    type, device information, referring pages, pages viewed and
                    approximate location, depending on the analytics and
                    security tools enabled on the website.
                </li>
                <li>
                    Marketing and preference information, including consent
                    choices and communication preferences.
                </li>
                <li>
                    Any other information you voluntarily provide to us.
                </li>
            </ul>
        ),
    },
    {
        title: "How We Use Information",
        content: (
            <ul>
                <li>Respond to inquiries and evaluate potential projects.</li>
                <li>Provide, manage and improve our services and website.</li>
                <li>
                    Communicate about proposals, projects, support and business
                    matters.
                </li>
                <li>
                    Maintain website security, prevent abuse and troubleshoot
                    technical issues.
                </li>
                <li>
                    Measure website usage and marketing performance where
                    permitted.
                </li>
                <li>
                    Comply with legal obligations and protect our rights.
                </li>
            </ul>
        ),
    },
    {
        title: "Cookies and Similar Technologies",
        content: (
            <p>
                We may use cookies and similar technologies for essential
                website functions, analytics, preferences and advertising,
                depending on the tools configured on our website. Where
                required, non-essential cookies should be used only after the
                appropriate consent choice. See our Cookie Policy for more
                information.
            </p>
        ),
    },
    {
        title: "How We Share Information",
        content: (
            <>
                <p>
                    We may share personal information with service providers
                    that help us operate our website or business, such as
                    hosting providers, analytics tools, email systems, CRM
                    platforms, project tools or professional advisers.
                </p>

                <p>
                    We may also disclose information when required by law, to
                    protect rights and security, or as part of a business
                    transaction.
                </p>

                <p>We do not sell personal information for money.</p>

                <p>
                    If our marketing stack creates activities treated as
                    “sale,” “sharing” or targeted advertising under applicable
                    law, this statement must be updated accordingly.
                </p>
            </>
        ),
    },
    {
        title: "International Data Transfers",
        content: (
            <p>
                Because we are based in Pakistan and may work with clients and
                providers in other countries, information may be processed
                outside the country where you live. Where applicable, we will
                use appropriate safeguards required for such transfers.
            </p>
        ),
    },
    {
        title: "Data Retention",
        content: (
            <p>
                We retain personal information only for as long as reasonably
                necessary for the purposes described in this policy, including
                to respond to inquiries, manage business records, meet legal
                obligations, resolve disputes and enforce agreements. Specific
                retention periods should be defined internally based on the
                systems you use.
            </p>
        ),
    },
    {
        title: "Your Privacy Rights",
        content: (
            <>
                <p>
                    Depending on where you live, you may have rights to request
                    access, correction, deletion, restriction, objection,
                    portability, withdrawal of consent or information about
                    certain disclosures.
                </p>

                <p>
                    To exercise a right, contact us at [Privacy Email]. We may
                    need to verify your request before acting on it.
                </p>
            </>
        ),
    },
    {
        title: "Security",
        content: (
            <p>
                We use reasonable administrative, technical and organizational
                measures designed to protect personal information. No method of
                transmission or storage is completely secure, so we cannot
                guarantee absolute security.
            </p>
        ),
    },
    {
        title: "Children",
        content: (
            <p>
                Our website and services are intended for businesses and are
                not directed to children. We do not knowingly seek to collect
                personal information from children through the website.
            </p>
        ),
    },
    {
        title: "Third-Party Links",
        content: (
            <p>
                Our website may link to third-party websites or services. Their
                privacy practices are governed by their own policies, not this
                Privacy Policy.
            </p>
        ),
    },
    {
        title: "Changes to This Policy",
        content: (
            <p>
                We may update this Privacy Policy from time to time. The updated
                version will be posted on this page with a revised effective
                date.
            </p>
        ),
    },
    {
        title: "Contact Us",
        content: (
            <>
                <p>Cloud Minds Tech</p>
                <p>[Business Address]</p>
                <p>[Privacy Email]</p>
                <p>cloudmindstechllc.com</p>
            </>
        ),
    },
];

export default function PrivacyPolicy() {
    return (
        <>
            <header className="mx-auto mt-18 max-w-7xl px-6 py-16 md:py-22">
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
                        <p>Effective date: [Date]</p>
                    </div>
                </div>
            </header>

            <section className="mx-auto max-w-7xl border-t border-black/10 px-6 py-16 md:py-22">
                <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-24">
                    <aside className="lg:sticky lg:top-32 lg:self-start">
                        <p className="max-w-70 text-lg leading-relaxed text-grey">
                            This Privacy Policy explains how we collect, use,
                            disclose and protect personal information when you
                            interact with our website and services.
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
                                This Privacy Policy explains how Cloud Minds
                                Tech handles personal information when you use
                                our website, submit a form, communicate with us
                                or interact with our services.
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
                                Privacy Questions
                            </p>

                            <h2 className="mt-5 max-w-175 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                                Contact us about your privacy.
                            </h2>

                            <p className="mt-6 max-w-162 text-base leading-7 text-white/65 sm:text-lg">
                                To exercise a privacy right or ask a question
                                about this Privacy Policy, contact us at
                                [Privacy Email].
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}