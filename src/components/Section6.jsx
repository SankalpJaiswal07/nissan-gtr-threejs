"use client";
import gsap from "gsap";
import { useEffect } from "react";

function Section6() {
  useEffect(() => {
    // Animation for .section--1
    gsap.fromTo(
      ".section--6",
      {
        opacity: 0,
        x: "-300px", // Start from off-screen to the left
      },
      {
        opacity: 1,
        x: "0px", // Move to the original position
        scrollTrigger: {
          trigger: ".section--6",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            gsap.to(".section--6", {
              opacity: 0,
              y: "-100px", // Move up when leaving
              scrollTrigger: {
                trigger: "section--6",
                start: "top 80%",
                end: "bottom center",
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
    <section class="w-screen h-screen snap-center relative flex justify-between items-center sixth-section mx-auto section--6">
      <div class="flex flex-col w-[30%] ml-[10%]  transition-all duration-500 ease-in-out">
        <h1 class="text-[5vw] leading-[5vw] text-red-500 mb-5 font-orbitron uppercase font-bold">
          Timeless Speed
        </h1>
        <p class="text-[1.5vw] leading-[2.2vw] text-black font-light">
          With energising performance derived from optimised aerodynamics ground
        </p>
      </div>
    </section>
  );
}

export default Section6;
