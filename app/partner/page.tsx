"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import ScrollReveal from "@/components/ScrollReveal";
import ShapeDivider from "@/components/ShapeDivider";
import { motion, AnimatePresence } from "framer-motion";

export default function PartnerPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <Header />
      <h1 className="text-center text-2xl md:text-4xl font-racing leading-[60px] my-4 text-white">
        Become A Partner
      </h1>
      <section className="partner bg-fiber flex flex-col justify-center v-80 min-h-[70vh] relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeIn">
            <h2 className="heading text-center mb-5 mt-0 text-2xl font-michroma leading-tight text-white w-fit mx-auto">
              <span className="text-secondary text-primary block text-[70%] leading-normal mb-1 overflow-visible">
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
              <div className="w-full md:w-1/2 lg:w-2/5 px-4 fade">
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

