import Hero from "../components/Hero";
import PartnersMarquee from "../components/PartnersMarquee";
import ServicesBento from "../components/ServicesBento";
import Testimonials from "../components/Testimonials";
import PortfolioGrid from "../components/PortfolioGrid";


export const metadata = {
  title: "creative fox",
};

export default function Home() {
  return (
    <>
      <Hero />

      <PartnersMarquee />

      <section className="bg-[#f8f8f6]">
        <div className="mx-auto max-w-500 px-6 py-16 md:py-22">
          <div className="max-w-180">
            <span className="badge">Selected Work</span>

            <h1 className="heading">
              Projects built to move brands forward.
            </h1>
          </div>

          <PortfolioGrid />

        </div>
      </section>

      <ServicesBento />

      <Testimonials />

    </>
  );
}