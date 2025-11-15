"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ShapeDivider from "./ShapeDivider";

export default function HeroCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const glitchControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);
  }, []);

  // Random glitch effects - start first glitch at 1.6 seconds
  useEffect(() => {
    const glitchTypes = [
      // Red flash
      { 
        filter: "brightness(1.5) saturate(2) hue-rotate(0deg)",
        x: [0, -3, 3, -2, 2, 0],
        opacity: [1, 0.9, 1, 0.95, 1]
      },
      // Blue flash
      { 
        filter: "brightness(1.3) saturate(1.8) hue-rotate(200deg)",
        x: [0, 2, -2, 1, -1, 0],
        opacity: [1, 0.95, 1, 0.9, 1]
      },
      // Green flash
      { 
        filter: "brightness(1.4) saturate(2.2) hue-rotate(120deg)",
        x: [0, -2, 2, -1, 1, 0],
        opacity: [1, 0.92, 1, 0.98, 1]
      },
      // Cyan flash
      { 
        filter: "brightness(1.6) saturate(1.9) hue-rotate(180deg)",
        x: [0, 3, -3, 2, -2, 0],
        opacity: [1, 0.88, 1, 0.94, 1]
      },
      // Magenta flash
      { 
        filter: "brightness(1.5) saturate(2.1) hue-rotate(300deg)",
        x: [0, -1, 1, -3, 3, 0],
        opacity: [1, 0.9, 1, 0.96, 1]
      },
      // Yellow flash
      { 
        filter: "brightness(1.7) saturate(2.3) hue-rotate(60deg)",
        x: [0, 2, -2, 1, -1, 0],
        opacity: [1, 0.93, 1, 0.97, 1]
      },
      // White flash
      { 
        filter: "brightness(2) saturate(0) contrast(1.5)",
        x: [0, -2, 2, 0],
        opacity: [1, 0.85, 1]
      },
      // RGB separation glitch
      { 
        filter: "brightness(1.2) saturate(1.5) hue-rotate(0deg)",
        x: [0, -4, 4, -3, 3, 0],
        opacity: [1, 0.9, 0.95, 0.92, 1]
      }
    ];

    const triggerGlitch = () => {
      const randomGlitch = glitchTypes[Math.floor(Math.random() * glitchTypes.length)];
      const duration = 0.1 + Math.random() * 0.15; // 0.1-0.25 seconds
      
      glitchControls.start({
        filter: randomGlitch.filter,
        x: randomGlitch.x,
        opacity: randomGlitch.opacity,
        transition: {
          duration: duration,
          times: randomGlitch.x.length === 4 ? [0, 0.33, 0.66, 1] : [0, 0.2, 0.4, 0.6, 0.8, 1],
          ease: "easeInOut"
        }
      }).then(() => {
        // Return to normal
        glitchControls.start({
          filter: "brightness(1) saturate(1) hue-rotate(0deg)",
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.1,
            ease: "easeOut"
          }
        });
      });
    };

    // Trigger first glitch at 1.6 seconds
    const firstGlitchTimeout = setTimeout(() => {
      triggerGlitch();
    }, 1600);

    // Then set up interval for subsequent glitches
    const glitchInterval = setInterval(() => {
      triggerGlitch();
    }, 5000 + Math.random() * 8000); // Random interval between 5-13 seconds

    return () => {
      clearTimeout(firstGlitchTimeout);
      clearInterval(glitchInterval);
    };
  }, [glitchControls]);

  return (
    <div 
      ref={containerRef}
      className="carousel overflow-hidden carousel-dark slide h-[70vh] md:h-[75vh] relative"
      style={{ backgroundColor: 'rgb(5, 17, 27)' }}
    >
      <div className="carousel-inner h-full w-full">
        <div className="carousel-item active h-full w-full relative">
          <div className="relative h-full w-full overflow-hidden">
            <motion.div
              style={{
                y: imageY,
                scale: imageScale,
                opacity: imageOpacity,
              }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1.3, opacity: 0, filter: "blur(20px)" }}
                animate={isVisible ? { 
                  scale: 1, 
                  opacity: 1, 
                  filter: "blur(0px)" 
                } : { scale: 1.3, opacity: 0, filter: "blur(20px)" }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2
                }}
                className="absolute inset-0"
              >
                <motion.div
                  animate={glitchControls}
                  className="absolute inset-0"
                  style={{ willChange: "filter, transform" }}
                >
                  <Image
                    src="/img/mrm_splash1.jpg"
                    alt="Malcolm Mancias"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="carousel-caption absolute left-[5%] md:left-[15%] max-w-[400px] bottom-auto top-5 md:top-20 z-10">
              <motion.h5
                initial={{ 
                  opacity: 0, 
                  x: -300,
                  filter: "blur(15px) brightness(2)"
                }}
                animate={isVisible ? { 
                  opacity: 1, 
                  x: 0,
                  filter: "blur(0px) brightness(1)"
                } : { 
                  opacity: 0, 
                  x: -300,
                  filter: "blur(15px) brightness(2)"
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94] // Fast acceleration curve
                }}
                className="text-5xl md:text-6xl font-racing leading-[55px] mb-0 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              >
                Malcolm Mancias
              </motion.h5>
              <motion.h3
                initial={{ 
                  opacity: 0, 
                  x: 300,
                  filter: "blur(15px) brightness(2)"
                }}
                animate={isVisible ? { 
                  opacity: 1, 
                  x: 0,
                  filter: "blur(0px) brightness(1)"
                } : { 
                  opacity: 0, 
                  x: 300,
                  filter: "blur(15px) brightness(2)"
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94] // Fast acceleration curve
                }}
                className="text-2xl font-michroma mb-0 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              >
                Kid Kart Racer{" "}
                <motion.span
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5,
                    x: 50,
                    filter: "blur(8px)"
                  }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    scale: 1,
                    x: 0,
                    filter: "blur(0px)"
                  } : { 
                    opacity: 0, 
                    scale: 0.5,
                    x: 50,
                    filter: "blur(8px)"
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.1,
                    ease: [0.34, 1.56, 0.64, 1] // Quick snap-in
                  }}
                  className="badge number rounded-none leading-tight text-[125%] font-black font-sans px-1 pt-1 border-none shadow-[3px_3px_5px_rgba(0,0,0,0.25)] text-black inline-block"
                  style={{ backgroundColor: '#ffc107' }}
                >
                  99
                </motion.span>
              </motion.h3>
            </div>
          </div>
        </div>
      </div>
      <ShapeDivider variant="bottom-1741054392" className="absolute bottom-0 left-0 w-full z-20" />
    </div>
  );
}

