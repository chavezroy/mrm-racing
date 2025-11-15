import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KartDiagram from "@/components/KartDiagram";
import ScrollReveal from "@/components/ScrollReveal";
import ShapeDivider from "@/components/ShapeDivider";

export const metadata: Metadata = {
  title: "MRM Racing - Gear & Equipment",
  description: "Malcolm's kart, accessories and safety gear",
};

export default function GearPage() {
  return (
    <>
      <Header />
      <h1 className="text-center text-2xl md:text-4xl font-racing leading-[60px] my-4 text-white">
        Gear & Equipment
      </h1>
      <section className="about gear bg-fiber flex flex-col justify-center py-12 md:py-16 min-h-[50vh] relative">
        <div className="container self-center px-4 max-w-5xl">
          <ScrollReveal animation="fadeIn">
            <h2 className="heading text-center mb-8 md:mb-12 text-2xl font-michroma leading-tight text-white w-fit mx-auto">
              <span className="text-secondary text-primary block text-[70%] leading-tight mb-1">
                Kart accessories
              </span>
              and gear
            </h2>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-center">
            <ScrollReveal animation="fadeIn" delay={0.2} className="w-full md:w-auto">
              <ul className="list-group honey mb-4 p-2 border border-white/10 bg-fiber w-full md:w-auto md:min-w-fit">
                <li className="list-group-item border-b border-white/10 py-3 font-bold whitespace-nowrap">
                  <span className="label opacity-75 font-normal">Racer:</span> Malcolm Mancias
                </li>
                <li className="list-group-item border-b border-white/10 py-3 font-bold whitespace-nowrap">
                  <span className="label opacity-75 font-normal">Age:</span> 6 yo
                </li>
                <li className="list-group-item border-b border-white/10 py-3 font-bold whitespace-nowrap">
                  <span className="label opacity-75 font-normal">Year Started:</span> 2022
                </li>
                <li className="list-group-item border-b border-white/10 py-3 font-bold whitespace-nowrap">
                  <span className="label opacity-75 font-normal">Kart Class:</span> Kid Kart
                </li>
                <li className="list-group-item border-b border-white/10 py-3 font-bold whitespace-nowrap">
                  <span className="label opacity-75 font-normal">Podiums:</span> 4
                </li>
                <li className="list-group-item py-3 font-bold whitespace-nowrap">
                  <span className="label opacity-75 font-normal">Location:</span> Las Vegas, NV
                </li>
              </ul>
            </ScrollReveal>
            <div className="w-full md:w-auto md:flex-1 flex justify-center md:justify-end">
              <ScrollReveal animation="fadeIn" delay={0.3}>
                <KartDiagram />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <section className="gear showcase bg-fiber flex flex-col justify-center min-h-[40vh] md:h-[80vh] relative">
        <ShapeDivider variant="bottom-1741052430" />
      </section>
      <Footer />
    </>
  );
}

