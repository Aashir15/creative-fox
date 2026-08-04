import Image from "next/image";

import Hero from "../components/Hero";
import PartnersMarquee from "../components/PartnersMarquee";
import Portfolio from "../components/Portfolio";
import ServicesBento from "../components/ServicesBento";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />

      <PartnersMarquee />

      <Portfolio />

      <ServicesBento />

      <Testimonials />

    </>
  );
}