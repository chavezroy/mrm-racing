"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function KartDiagram() {
  return (
    <div className="kart-dia relative w-full max-w-[1000px] mx-auto">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(63, 181, 251, 0.35) 25%, rgba(255,255,255,0) 38%)",
            backgroundSize: "65% 95%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 150%",
          }}
        />
        <span className="fade one absolute top-[-70px] md:top-[-70px] animate-fade-in">
          <span
            className="line absolute w-[140px] md:w-[190px] right-[35px] md:right-[-200px] bottom-0 rotate-45 origin-left"
            style={{
              height: "1px",
              background: "#f518a4",
              zIndex: 9,
            }}
          />
          HAASE: NINJA BABY KART
        </span>
        <span className="fade two absolute right-[20px] md:right-[20px] top-[-40px] md:top-[-40px] animate-fade-in delay-1000">
          <span
            className="line absolute w-[40px] md:w-[200px] top-1/2 left-[-45px] md:left-[-210px] rotate-[-50deg] md:rotate-[-12deg] origin-right"
            style={{
              height: "1px",
              background: "#f518a4",
              zIndex: 9,
            }}
          />
          GP-7 | Black Frost
        </span>
        <span className="fade three absolute right-[20px] md:right-0 bottom-[-50px] md:bottom-0 animate-fade-in delay-2000">
          <span
            className="line absolute w-[90px] md:w-[220px] bottom-1/2 left-[-100px] md:left-[-230px] rotate-[70deg] md:rotate-[10deg] origin-right"
            style={{
              height: "1px",
              background: "#f518a4",
              zIndex: 9,
            }}
          />
          GXH50 Kid Kart Kit-15T
        </span>
        <Image
          src="/img/kart x section.png"
          alt="Kart cross section"
          width={1000}
          height={600}
          className="showcase-img w-full md:w-auto mx-auto block relative z-10"
        />
      </div>
  );
}

