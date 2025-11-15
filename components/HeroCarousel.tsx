"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ShapeDivider from "./ShapeDivider";

export default function HeroCarousel() {
  return (
    <div className="carousel overflow-hidden carousel-dark slide h-[70vh] md:h-[75vh] bg-[#005c8a] relative">
      <div className="carousel-inner h-full w-full">
        <div className="carousel-item active h-full w-full relative">
          <div className="relative h-full w-full">
            <Image
              src="/img/mrm_splash1.jpg"
              alt="Malcolm Mancias"
              fill
              className="object-cover"
              priority
            />
            <div className="carousel-caption absolute left-[5%] md:left-[15%] max-w-[400px] bottom-auto top-5 md:top-20 z-10">
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-racing leading-[55px] mb-0 text-white"
              >
                Malcolm Mancias
              </motion.h5>
              <motion.h3
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="text-2xl font-michroma mb-0 text-white"
              >
                Kid Kart Racer{" "}
                <span className="badge number rounded-none leading-tight text-[125%] font-black font-sans px-1 pt-1 border-none shadow-[3px_3px_5px_rgba(0,0,0,0.25)] text-black" style={{ backgroundColor: '#ffc107' }}>
                  99
                </span>
              </motion.h3>
            </div>
          </div>
        </div>
      </div>
      <ShapeDivider variant="bottom-1741054392" />
    </div>
  );
}

