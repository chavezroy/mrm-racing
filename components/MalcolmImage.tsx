"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function MalcolmImage() {
  const glitchControls = useAnimation();

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
    <div className="skewed-image-mask-wrapper">
      <div className="skewed-image-mask">
        <motion.div
          animate={glitchControls}
          style={{ willChange: "filter, transform" }}
        >
          <Image
            src="/img/meet-about.jpg"
            alt="Malcolm Mancias"
            width={600}
            height={400}
            className="img-fluid mb-3 w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

