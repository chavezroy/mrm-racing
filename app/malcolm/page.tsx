import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ShapeDivider from "@/components/ShapeDivider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MRM Racing - Meet Malcolm",
  description: "Meet Malcolm Mancias - Kid Kart Racer",
};

export default function MalcolmPage() {
  return (
    <>
      <Header />
      <h1 className="text-center text-2xl md:text-4xl font-racing leading-[60px] my-4 text-white">
        Meet Malcolm
      </h1>
      <section className="about page bg-fiber flex flex-col justify-content-center v-80 min-h-[80vh] pb-[10em] relative">
        <div className="container self-center px-4">
          <ScrollReveal animation="fadeIn">
            <h2 className="heading text-center mb-5 text-2xl font-michroma leading-tight text-white w-fit mx-auto">
              <span className="text-secondary text-primary block text-[70%] leading-tight">
                Meet
              </span>
              Malcolm Mancias
            </h2>
          </ScrollReveal>
          <div className="row flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <ScrollReveal animation="fadeIn" delay={0.2}>
                <div className="skewed-image-mask-wrapper">
                  <div className="skewed-image-mask">
                    <Image
                      src="/img/meet-about.png"
                      alt="Malcolm Mancias"
                      width={600}
                      height={400}
                      className="img-fluid mb-3 w-full"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <ScrollReveal animation="fadeIn" delay={0.3}>
                <ul className="list-group honey mb-4 p-2 border border-white/10 bg-fiber">
                  <li className="list-group-item border-b border-white/10 py-3 font-bold">
                    <span className="label opacity-75 font-normal">Age:</span> 6 yo
                  </li>
                  <li className="list-group-item border-b border-white/10 py-3 font-bold">
                    <span className="label opacity-75 font-normal">Year Started:</span> 2022
                  </li>
                  <li className="list-group-item border-b border-white/10 py-3 font-bold">
                    <span className="label opacity-75 font-normal">Kart Class:</span> Kid Kart
                  </li>
                  <li className="list-group-item border-b border-white/10 py-3 font-bold">
                    <span className="label opacity-75 font-normal">Podiums:</span> 4
                  </li>
                  <li className="list-group-item py-3 font-bold">
                    <span className="label opacity-75 font-normal">Location:</span> Las Vegas, NV
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal animation="fadeIn" delay={0.4}>
                <p className="mb-4">
                  I was born in 2016 in Cleveland, Ohio. The day I arrived was a
                  pretty interesting time for my family and you can read about it
                  <a
                    href="https://abcnews.go.com/Sports/champion-cavs-drink-lifting-clevelands-title-drought/story?id=39994078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-[#ff6341] ml-1"
                  >
                    in this article
                  </a>{" "}
                  of ESPN magazine.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fadeIn" delay={0.5}>
                <p className="mb-4">
                  My dad works as a trainer in the NBA so I have lived in a few
                  different places. Currently, my family resides in Las Vegas,
                  Nevada. I love to go swimming, build Lego sets, draw, and
                  hang with my dad.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fadeIn" delay={0.6}>
                <p className="mb-4">
                  Christmas 2021, I received a Radio Flyer go kart, and the rest
                  shall we say is history. I took to driving so well that my dad
                  reached out to a team, Nash Motorsports, in California and I
                  have been a part of the team since May 2022. I obtained my
                  first podium, 2nd place, at an LAKC race, Kid Kart- Novice
                  division, after only driving for 4 months. 2 weeks later I got 3rd
                  place at Tri-C Karters September race. I have since made a
                  few more podiums and continue to spend my time practicing
                  and racing at new tracks.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fadeIn" delay={0.7}>
                <p>
                  During the winter months I will be practicing in my Kid Kart as
                  well as in my Micro Cadet car. I have already raced at Miami
                  Homestead Speedway this season, and I will be attending
                  races in Phoenix during the winter season. Next season, races
                  will be local Arizona and California races in the Kid Kart
                  Division. November of 2023 I will join my first national race in
                  Las Vegas ROK and Supernats in the Cadet division.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <ShapeDivider variant="bottom-1741052430" />
      </section>
      <Footer />
    </>
  );
}

