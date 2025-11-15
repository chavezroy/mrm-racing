"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideInLeft" | "zoomIn";
  delay?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  animation = "fadeIn",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return; // Don't re-observe if already visible

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Stop observing once visible to prevent re-triggering
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

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isVisible ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      style={{ 
        willChange: isVisible ? 'auto' : 'transform, opacity',
        transition: 'none' // Prevent CSS transitions from interfering
      }}
    >
      {children}
    </motion.div>
  );
}

