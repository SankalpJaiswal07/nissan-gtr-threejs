"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Section5() {
  useEffect(() => {
    // Animation for .section--4
    gsap.fromTo(
      ".section--5",
      {
        opacity: 0,
        x: "300px", // Start from off-screen to the right
      },
      {
        opacity: 1,
        x: "0px", // Move to the original position
        scrollTrigger: {
          trigger: ".section--5",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            gsap.to(".section--5", {
              opacity: 0,
              y: "-100px", // Move up when leaving
              scrollTrigger: {
                trigger: "section--5",
                start: "top 20%",
                end: "bottom top",
              },
              duration: 0.5,
              ease: "ease-in-out",
            });
          },
        },
        duration: 0.5,
        ease: "ease-in-out",
      }
    );
  }, []);

  return (
    <section class="flex justify-end items-center mx-auto rightSide h-screen w-screen fifth-section section--5">
      <div class="flex flex-col w-[30%] mr-[10%]  transition-all duration-500 ease-in-out ">
        <h1 class="text-[5vw] leading-[5vw] text-red-600 mb-[20px] font-orbitron uppercase font-bold">
          Beautiful design dna
        </h1>
        <p class="text-[1.5vw] leading-[2.2vw] text-black font-light">
          We believe that the purest creation are those where the design, the
          driving experience, the passenger experience, and engineering, all
          play an equal role.
        </p>
      </div>
    </section>
  );
}

export default Section5;
