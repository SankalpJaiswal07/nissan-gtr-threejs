"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  useEffect(() => {
    // Animation for .section--1
    gsap.fromTo(
      ".section--3",
      {
        opacity: 0,
        x: "-300px", // Start from off-screen to the left
      },
      {
        opacity: 1,
        x: "0px", // Move to the original position
        scrollTrigger: {
          trigger: ".section--3",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            gsap.to(".section--3", {
              opacity: 0,
              y: "-100px", // Move up when leaving
              scrollTrigger: {
                trigger: "section--3",
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
    <section className="flex justify-between items-center mx-auto h-screen third-section w-screen">
      <div className="flex flex-col w-[30%] ml-[10%] transform  transition-all duration-500 ease-in-out font-bold section--3">
        <h1 className="text-[5vw] leading-[5vw] text-[#fe4443] mb-5  uppercase">
          Premium Experience
        </h1>
        <p className="text-[1.5vw] leading-[2.2vw] text-black font-light">
          The 2023 Nissan GT-R&apos;s carbon fiber hood exemplifies luxury and
          performance. Crafted through a meticulous process, it layers carbon
          fiber sheets, cured in an autoclave for maximum rigidity and minimal
          weight. This advanced construction enhances aerodynamics and adds to
          the GT-R&apos;s aggressive design, reflecting Nissan&apos;s commitment
          to engineering excellence.
        </p>
      </div>
    </section>
  );
}

export default Section3;
