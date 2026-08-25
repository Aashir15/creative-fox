import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Terms and Conditions | Creative Fox",
    description:
        "Read the terms and conditions governing the use of Creative Fox's website and services.",
};

const sections = [
    {
        title: "Acceptance of these terms",
        content: (
            <p>
                By accessing or using the Creative Fox website, you agree to be
                bound by these Terms and Conditions. If you do not agree with
                these terms, please do not use our website or services.
            </p>
        ),
    },
    {
        title: "About Creative Fox",
        content: (
            <p>
                Creative Fox is a digital agency providing services that may
                include website development, ecommerce development, UI/UX
                design, branding, graphic design, digital marketing, SEO,
                social media marketing, and related consulting services.
            </p>
        ),
    },
    {
        title: "Use of our website",
        content: (
            <>
                <p>
                    You may use this website only for lawful purposes. You agree
                    not to use the website in a way that could damage,
                    interrupt, disable, or impair its operation.
                </p>

                <p>You must not:</p>

                <ul>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Introduce viruses, malware, or harmful code</li>
                    <li>Copy or scrape website content without permission</li>
                    <li>Use the website for fraudulent or unlawful activity</li>
                    <li>Misrepresent your identity or affiliation</li>
                    <li>Interfere with another visitor’s use of the website</li>
                </ul>
            </>
        ),
    },
    {
        title: "Project proposals and agreements",
        content: (
            <>
                <p>
                    Information displayed on our website does not constitute a
                    binding offer. A project begins only after both parties
                    approve a written proposal, statement of work, contract, or
                    other formal agreement.
                </p>

                <p>
                    Project scope, deliverables, schedule, pricing, payment
                    terms, revision limits, ownership, and responsibilities will
                    be defined in the applicable project agreement.
                </p>
            </>
        ),
    },
    {
        title: "Client responsibilities",
        content: (
            <>
                <p>
                    Clients are responsible for providing accurate information,
                    materials, feedback, approvals, and access required to
                    complete a project.
                </p>

                <p>The client confirms that:</p>

                <ul>
                    <li>
                        They have permission to provide all submitted content
                    </li>
                    <li>
                        Submitted materials do not violate third-party rights
                    </li>
                    <li>
                        Information supplied to Creative Fox is accurate
                    </li>
                    <li>
                        Feedback and approvals will be provided on time
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Fees and payment",
        content: (
            <>
                <p>
                    Project fees and payment schedules will be stated in the
                    relevant proposal or agreement. Unless otherwise agreed,
                    invoices must be paid by the due date shown on the invoice.
                </p>

                <p>
                    Creative Fox may pause work, delay delivery, or restrict
                    access to deliverables when an invoice remains unpaid.
                    Deposits and payments already made may be non-refundable
                    where work has begun or resources have been reserved.
                </p>
            </>
        ),
    },
    {
        title: "Project changes and revisions",
        content: (
            <p>
                Requests outside the agreed project scope may require additional
                time and fees. Creative Fox will communicate material changes
                before completing out-of-scope work. Revision limits and the
                process for requesting changes will be defined in the project
                agreement.
            </p>
        ),
    },
    {
        title: "Delays and timelines",
        content: (
            <p>
                Project timelines are estimates unless explicitly stated
                otherwise in writing. Delays caused by missing content, late
                feedback, approval changes, third-party services, technical
                issues, or events outside our reasonable control may extend the
                delivery schedule.
            </p>
        ),
    },
    {
        title: "Intellectual property",
        content: (
            <>
                <p>
                    Unless a project agreement states otherwise, Creative Fox
                    retains ownership of its pre-existing tools, processes,
                    frameworks, concepts, templates, know-how, and reusable
                    materials.
                </p>

                <p>
                    Ownership or licensing of final project deliverables will be
                    governed by the applicable project agreement and may depend
                    on full payment of all outstanding invoices.
                </p>
            </>
        ),
    },
    {
        title: "Third-party materials and services",
        content: (
            <p>
                Projects may use third-party fonts, images, software,
                integrations, hosting platforms, plugins, APIs, or other
                services. These may be subject to separate licenses, fees,
                availability, and terms established by their providers.
                Creative Fox is not responsible for changes, outages, or
                failures caused by third-party services.
            </p>
        ),
    },
    {
        title: "Portfolio and promotional use",
        content: (
            <p>
                Unless otherwise agreed in writing, Creative Fox may display
                completed work, project descriptions, and the client’s business
                name in its portfolio, case studies, social media, awards
                submissions, and promotional materials. Confidential
                information will not be intentionally disclosed.
            </p>
        ),
    },
    {
        title: "Confidentiality",
        content: (
            <p>
                Each party should protect confidential information received
                during a project and use it only for the intended business
                purpose. Confidentiality obligations may also be governed by a
                separate nondisclosure agreement or project contract.
            </p>
        ),
    },
    {
        title: "Website content",
        content: (
            <p>
                Website content is provided for general information only. We
                make reasonable efforts to keep it accurate, but we do not
                guarantee that all information is complete, current, or free
                from errors. Services, descriptions, and availability may
                change without notice.
            </p>
        ),
    },
    {
        title: "No guaranteed results",
        content: (
            <p>
                Creative, marketing, SEO, development, and business outcomes
                depend on many factors outside our control. Unless expressly
                agreed in writing, Creative Fox does not guarantee specific
                traffic, rankings, revenue, conversions, engagement, sales, or
                other commercial results.
            </p>
        ),
    },
    {
        title: "Limitation of liability",
        content: (
            <>
                <p>
                    To the fullest extent permitted by applicable law, Creative
                    Fox will not be liable for indirect, incidental, special,
                    consequential, or punitive losses resulting from the use of
                    our website or services.
                </p>

                <p>
                    Any liability relating to a paid project will be subject to
                    the limitations specified in the applicable project
                    agreement.
                </p>
            </>
        ),
    },
    {
        title: "Indemnification",
        content: (
            <p>
                You agree to indemnify and hold Creative Fox harmless from
                claims, damages, expenses, or liabilities resulting from your
                misuse of the website, violation of these terms, submitted
                materials, or infringement of another party’s rights.
            </p>
        ),
    },
    {
        title: "Termination",
        content: (
            <p>
                We may suspend or terminate access to our website when we
                reasonably believe these terms have been violated. Project
                termination, cancellation fees, final payments, and delivery of
                completed work will be governed by the applicable project
                agreement.
            </p>
        ),
    },
    {
        title: "External links",
        content: (
            <p>
                Our website may include links to third-party websites. Creative
                Fox does not control and is not responsible for the content,
                availability, security, or practices of those websites.
            </p>
        ),
    },
    {
        title: "Privacy",
        content: (
            <p>
                Our collection and use of personal information are described in
                our{" "}
                <Link
                    href="/privacy-policy"
                    className="font-medium text-black underline underline-offset-4"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        ),
    },
    {
        title: "Changes to these terms",
        content: (
            <p>
                We may update these Terms and Conditions when our services,
                business practices, or legal obligations change. Updated terms
                will be published on this page with a revised effective date.
                Continued use of the website after an update constitutes
                acceptance of the revised terms.
            </p>
        ),
    },
    {
        title: "Governing law",
        content: (
            <p>
                These terms will be governed by the laws of the jurisdiction
                identified in Creative Fox’s applicable project agreement or
                business registration details. Any disputes will be handled by
                the courts or dispute-resolution process specified in that
                agreement.
            </p>
        ),
    },
];

export default function TermsAndConditions() {
    return (
        <>
            <header className="mx-auto max-w-7xl px-6 py-16 md:py-22 mt-18">
                <div>
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-grey">
                        Legal
                    </p>

                    <h1 className="max-w-275 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[120px]">
                        Terms and
                        <br />
                        Conditions
                    </h1>

                    <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm text-grey sm:text-base">
                        <p>Effective date: August 6, 2026</p>
                        <p>Last updated: August 6, 2026</p>
                    </div>
                </div>
            </header>

            <section className="border-t border-black/10 mx-auto max-w-7xl px-6 py-16 md:py-22">
                <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-24">
                    <aside className="lg:sticky lg:top-32 lg:self-start">
                        <p className="max-w-72 text-lg leading-relaxed text-grey">
                            These terms govern your use of the Creative Fox
                            website and explain the general conditions applying
                            to our services.
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
                                Please read these terms carefully before using
                                our website or engaging Creative Fox for a
                                project.
                            </p>
                        </div>

                        <div>
                            {sections.map((section, index) => (
                                <article
                                    key={section.title}
                                    className="
                                        grid gap-5 border-b border-black/10
                                        py-10 sm:py-12
                                        lg:grid-cols-[80px_1fr]
                                        lg:gap-10 lg:py-16
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
                                Questions about these terms
                            </p>

                            <h2 className="mt-5 max-w-175 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                                Speak with the Creative Fox team.
                            </h2>

                            <p className="mt-6 max-w-162 text-base leading-7 text-white/65 sm:text-lg">
                                Contact us with any questions about these Terms
                                and Conditions or the terms applying to your
                                project.
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