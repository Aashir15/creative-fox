import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Terms & Conditions | Cloud Minds Tech",
    description:
        "Read the Terms & Conditions governing the use of the Cloud Minds Tech website.",
};

const sections = [
    {
        title: "Acceptance of These Terms",
        content: (
            <p>
                By accessing or using [Website URL] (the “Website”), you agree
                to these Terms & Conditions. If you do not agree, do not use
                the Website.
            </p>
        ),
    },
    {
        title: "Website Purpose",
        content: (
            <>
                <p>
                    The Website provides general information about Cloud Minds
                    Tech, our services, capabilities, work and ways to contact
                    us.
                </p>

                <p>
                    Website content is not a binding offer to provide services.
                    Any client engagement is subject to a separate written
                    proposal, statement of work, services agreement or other
                    signed document.
                </p>
            </>
        ),
    },
    {
        title: "Intellectual Property",
        content: (
            <>
                <p>
                    Unless otherwise stated, the Website, its original text,
                    graphics, branding, layout and other original materials are
                    owned by or licensed to Cloud Minds Tech and are protected
                    by applicable intellectual property laws.
                </p>

                <p>
                    You may view the Website for legitimate personal or
                    business evaluation purposes, but you may not copy,
                    reproduce, republish, distribute, modify or exploit
                    protected material without permission.
                </p>
            </>
        ),
    },
    {
        title: "Portfolio and Third-Party Materials",
        content: (
            <p>
                Client names, logos, screenshots, trademarks and other
                third-party materials shown in our portfolio remain the
                property of their respective owners. Their display is for the
                purpose of describing work performed or capabilities, subject
                to the relevant permissions and agreements.
            </p>
        ),
    },
    {
        title: "Acceptable Use",
        content: (
            <ul>
                <li>
                    Do not use the Website unlawfully or in a way that
                    infringes the rights of others.
                </li>

                <li>
                    Do not attempt to gain unauthorized access to the Website,
                    servers, forms or connected systems.
                </li>

                <li>
                    Do not introduce malware, automated abuse, scraping that
                    materially burdens the Website, or other harmful code.
                </li>

                <li>
                    Do not misrepresent affiliation with Cloud Minds Tech or
                    misuse our brand or content.
                </li>
            </ul>
        ),
    },
    {
        title: "Accuracy and Availability",
        content: (
            <p>
                We aim to keep Website information useful and current, but we
                do not guarantee that all content is complete, error-free or
                continuously available. Services, examples, team information
                and Website features may change without notice.
            </p>
        ),
    },
    {
        title: "Third-Party Services and Links",
        content: (
            <p>
                The Website may contain links to or integrations with
                third-party services. We are not responsible for third-party
                websites, content, availability, security or practices.
            </p>
        ),
    },
    {
        title: "No Professional Advice",
        content: (
            <p>
                Website content is provided for general informational purposes
                and should not be treated as legal, financial, tax, medical or
                other regulated professional advice.
            </p>
        ),
    },
    {
        title: "Limitation of Liability",
        content: (
            <>
                <p>
                    To the maximum extent permitted by applicable law, Cloud
                    Minds Tech will not be liable for indirect, incidental,
                    special, consequential or punitive losses arising solely
                    from use of, or inability to use, the Website.
                </p>

                <p>
                    Any liability relating to paid services should be governed
                    by the applicable client agreement, not these Website
                    Terms.
                </p>
            </>
        ),
    },
    {
        title: "Indemnity",
        content: (
            <p>
                To the extent permitted by law, you agree to be responsible
                for losses or claims arising from your unlawful misuse of the
                Website or violation of these Terms.
            </p>
        ),
    },
    {
        title: "Governing Law and Disputes",
        content: (
            <p>
                These Terms are governed by the laws of [Governing
                Jurisdiction], without regard to conflict-of-law rules. The
                courts located in [Venue] will have jurisdiction over disputes
                relating to these Website Terms, unless mandatory law requires
                otherwise.
            </p>
        ),
    },
    {
        title: "Changes to These Terms",
        content: (
            <p>
                We may update these Terms from time to time by posting the
                revised version on this page with a new effective date.
            </p>
        ),
    },
    {
        title: "Contact",
        content: (
            <>
                <p>Cloud Minds Tech</p>
                <p>[Business Address]</p>
                <p>[Legal / General Email]</p>
                <p>[Website URL]</p>
            </>
        ),
    },
];

export default function TermsConditions() {
    return (
        <>
            <header className="mx-auto mt-18 max-w-7xl px-6 py-16 md:py-22">
                <div>
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-grey">
                        Legal
                    </p>

                    <h1 className="max-w-275 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[120px]">
                        Terms &
                        <br />
                        Conditions
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
                            These Terms & Conditions govern your use of the
                            Cloud Minds Tech website.
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
                                These website terms are not a substitute for a
                                client services agreement or signed proposal.
                                Have counsel adapt them to your legal entity and
                                governing law.
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
                                Terms Questions
                            </p>

                            <h2 className="mt-5 max-w-175 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                                Questions about these Terms?
                            </h2>

                            <p className="mt-6 max-w-162 text-base leading-7 text-white/65 sm:text-lg">
                                Contact Cloud Minds Tech using the contact
                                details provided in these Terms.
                            </p>

                            <Link
                                href="/contact-us"
                                className="
                                    group mt-9 inline-flex items-center gap-3
                                    border-b border-white pb-1
                                    text-lg font-medium
                                "
                            >
                                Contact us

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