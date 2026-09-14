import Hero from "../components/Hero";
import PartnersMarquee from "../components/PartnersMarquee";
import Testimonials from "../components/Testimonials";
import PortfolioGrid from "../components/PortfolioGrid";

export const metadata = {
  title: "Creative Digital Agency for Design, Development & Growth",

  description:
    "Creative Fox helps ambitious brands grow with web design, development, branding, UI/UX, eCommerce, SEO, and digital marketing solutions.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Creative Digital Agency for Design, Development & Growth",
    description:
      "We create digital experiences that combine strategy, design, technology, and marketing to help ambitious brands grow.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      <PartnersMarquee />

      <section className="bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-22">
          <div className="max-w-180">
            <span className="badge">Selected Work</span>

            <h2 className="heading">
              Projects built to move brands forward.
            </h2>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      <Testimonials />
    </>
  );
}