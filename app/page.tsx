"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CTACard from "@/components/CTACard";
import KartDiagram from "@/components/KartDiagram";
import PartnerForm from "@/components/PartnerForm";
import ShapeDivider from "@/components/ShapeDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <Header />
      <HeroCarousel />
      <section className="about bg-fiber pb-3 flex flex-col justify-center relative">
        <div className="container py-3 self-center fade">
          <ScrollReveal animation="fadeIn">
            <h1 className="heading text-center mb-5 text-4xl md:text-5xl font-racing leading-tight text-white">
              About <span className="text-secondary text-primary">Malcolm Mancias</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" delay={0.2}>
            <p className="lead text-center mx-auto w-[90%] md:w-1/2 text-lg">
              Currently, my family resides in Las Vegas, Nevada. I love to go
              swimming, build Lego sets, draw, and hang with my dad. Christmas
              2021, I received a Radio Flyer go kart, and the rest shall we say
              is history. I took to driving so well that my dad reached out to a
              team, Nash Motorsports, in California and I have been a part of
              the team since May 2022.
            </p>
          </ScrollReveal>
        </div>
        <div className="cta container py-3 self-center mb-0 px-4">
          <div className="row flex flex-wrap -mx-4 justify-center">
            <CTACard
              href="/gear"
              image="/img/gear-equip.jpg"
              title="Gear & Equipment"
              description="Malcolm's kart, accessories and safety gear."
            />
            <CTACard
              href="/schedule"
              image="/img/schedule.jpg"
              title="Schedule"
              description="Find Malcolm on the track. Check out the latest schedule."
            />
            <CTACard
              href="/partner"
              image="/img/partner.jpg"
              title="Partner"
              description="Want your brand on a winning formula? Contact us to become a partner."
            />
          </div>
        </div>
      </section>
      <section className="showcase bg-fiber py-3 flex flex-col justify-center relative min-h-[80vh] md:h-[75vh] overflow-x-hidden">
        <ShapeDivider variant="bottom-1741057438" className="top-[-40px] md:top-[-140px]" />
        <div className="container px-4">
          <KartDiagram />
        </div>
      </section>
      <section className="partner bg-fiber flex flex-col justify-center relative min-h-[70vh] pb-[15em] md:pb-[10em]">
        <ShapeDivider variant="bottom-1741057438" className="top-[-40px] md:top-[-140px]" />
        <div className="container relative z-10 px-4">
          <ScrollReveal animation="fadeIn">
            <h2 className="heading text-center mb-5 mt-0 text-2xl font-michroma leading-tight text-white w-fit mx-auto relative z-10">
              <span className="text-secondary text-primary block text-[90%] leading-normal mb-1 overflow-visible relative z-10 uppercase">
                Become a
              </span>
              partner
            </h2>
          </ScrollReveal>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="px-6 py-3 bg-green-50 border-2 border-green-500 rounded-lg w-full max-w-md mx-auto text-center flex flex-col items-center mb-4"
                style={{ height: '260px', justifyContent: 'flex-start', paddingTop: '40px' }}
              >
                <div className="text-green-500 text-7xl mb-6 leading-none">✓</div>
                <h3 className="text-green-700 text-4xl font-bold mb-6 leading-tight">Thank You!</h3>
                <p className="text-green-700 text-lg leading-relaxed">
                  Your message has been submitted successfully.
                </p>
              </motion.div>
            ) : (
              <motion.p
                key="instruction"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-body-secondary text-center text-white mb-4"
              >
                Fill out the form to submit.
              </motion.p>
            )}
          </AnimatePresence>
          {!isSuccess && (
            <div className="row flex flex-wrap -mx-4 justify-center">
              <div className="w-full md:w-1/2 lg:w-2/5 fade px-4">
                <PartnerForm onSuccessStateChange={setIsSuccess} />
              </div>
            </div>
          )}
        </div>
        <ShapeDivider variant="bottom-1741052430" />
      </section>
      <Footer />
    </>
  );
}

