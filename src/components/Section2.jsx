"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  useEffect(() => {
    // Animation for .section--1
    gsap.fromTo(
      ".section--1",
      {
        opacity: 0,
        x: "-300px", // Start from off-screen to the left
      },
      {
        opacity: 1,
        x: "0px", // Move to the original position
        scrollTrigger: {
          trigger: ".section--1",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            gsap.to(".section--1", {
              opacity: 0,
              y: "-100px", // Move up when leaving
              duration: 0.5,
              ease: "ease-in-out",
            });
          },
        },
        duration: 0.5,
        ease: "ease-in-out",
      }
    );

    // Animation for .section--2
    gsap.fromTo(
      ".section--2",
      {
        opacity: 0,
        x: "300px", // Start from off-screen to the right
      },
      {
        opacity: 1,
        x: "0px", // Move to the original position
        scrollTrigger: {
          trigger: ".section--2",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            gsap.to(".section--2", {
              opacity: 0,
              y: "-100px", // Move up when leaving
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
    <section className="second-section h-screen flex justify-between items-center m-auto w-screen z-[99]">
      <div className="flex flex-col items-center justify-center rotate-[-90deg] -translate-x-[300px] -translate-y-[75px] transition-all duration-500 ease-in-out  font-bold -p-2 section--1">
        <h1 className="text-[5vw] text-[#464955]">Pure.</h1>
        <h1 className="text-[5vw] text-[#464955]">Rare.</h1>
        <h1 className="text-[5vw] text-[#464955]">Beautiful.</h1>
      </div>
      <div className="flex flex-col items-center transition-all duration-500 ease-in-out -translate-y-[75px] font-bold mr-32 section--2">
        <span className="text-[6vw] text-[#fe4443]  tracking-[0px] [writing-mode:vertical-rl] [text-orientation:upright]">
          2023
        </span>
        <p className="text-[2rem] text-[#464955] font-bold">GT-R</p>
      </div>
    </section>
  );
}

export default Section2;
