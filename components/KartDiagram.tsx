"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type KartDiagramProps = {
  isGearPage?: boolean;
};

export default function KartDiagram({ isGearPage = false }: KartDiagramProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={ref} className={`kart-dia relative w-full max-w-[1000px] mx-auto ${isGearPage ? 'gear-page' : 'px-4'}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        style={{
          background:
            "radial-gradient(circle, rgba(63, 181, 251, 0.35) 25%, rgba(255,255,255,0) 38%)",
          backgroundSize: "65% 95%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 150%",
        }}
      />
      <motion.span
        className="fade one absolute top-[-70px] md:top-[-70px]"
        style={isGearPage && isMobile ? {
          top: '-30px',
          bottom: 'auto',
        } : isGearPage && !isMobile ? {
          top: '0',
          left: '-70px',
        } : undefined}
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { 
          opacity: 1, 
          y: 0,
          ...(isGearPage && isMobile ? { top: '-30px' } : isGearPage && !isMobile ? { top: '0', left: '-70px' } : {})
        } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="line absolute w-[140px] md:w-[190px] right-[35px] md:right-[-200px] bottom-0 rotate-45 origin-left"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
          style={{
            height: "1px",
            background: "#f518a4",
            zIndex: 9,
            transformOrigin: "left",
          }}
        />
        HAASE: NINJA BABY KART
      </motion.span>
      <motion.span
        className="fade two absolute"
        style={isGearPage && isMobile ? {
          top: '0px',
          right: '-20px',
          left: 'auto',
        } : isGearPage && !isMobile ? {
          right: '-60px',
          top: '-40px',
        } : undefined}
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { 
          opacity: 1, 
          y: 0,
          x: 0,
          ...(isGearPage && isMobile ? { top: '0px', right: '-20px' } : isGearPage && !isMobile ? { right: '-60px', top: '-40px' } : {})
        } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
      >
        <motion.span
          className="line absolute w-[40px] md:w-[200px] top-1/2 left-[-45px] md:left-[-210px] rotate-[-50deg] md:rotate-[-12deg] origin-right"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          style={{
            height: "1px",
            background: "#f518a4",
            zIndex: 9,
            transformOrigin: "right",
          }}
        />
        GP-7 | Black Frost
      </motion.span>
      <motion.span
        className="fade three absolute right-[20px] md:right-0 bottom-[-50px] md:bottom-0"
        style={isGearPage && isMobile ? {
          bottom: '0',
          right: '-20px',
          top: 'auto',
        } : undefined}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { 
          opacity: 1, 
          y: 0,
          ...(isGearPage && isMobile ? { bottom: '0', right: '-20px' } : {})
        } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
      >
        <motion.span
          className="line absolute w-[90px] md:w-[220px] bottom-1/2 left-[-100px] md:left-[-230px] rotate-[70deg] md:rotate-[10deg] origin-right"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
          style={{
            height: "1px",
            background: "#f518a4",
            zIndex: 9,
            transformOrigin: "right",
          }}
        />
        GXH50 Kid Kart Kit-15T
      </motion.span>
      <motion.div
        initial={{ opacity: 0, scaleX: 1.8, filter: "blur(40px)" }}
        animate={isVisible ? { opacity: 1, scaleX: 1, filter: "blur(0px)" } : { opacity: 0, scaleX: 1.8, filter: "blur(40px)" }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
        className="relative z-10"
      >
        <Image
          src="/img/kart x section.png"
          alt="Kart cross section"
          width={1000}
          height={600}
          className="showcase-img w-full md:w-auto mx-auto block relative z-10"
        />
      </motion.div>
    </div>
  );
}

