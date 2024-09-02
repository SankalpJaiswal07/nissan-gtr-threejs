"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Section4() {
  useEffect(() => {
    // Animation for .section--4
    gsap.fromTo(
      ".section--4",
      {
        opacity: 0,
        x: "300px", // Start from off-screen to the right
      },
      {
        opacity: 1,
        x: "0px", // Move to the original position
        scrollTrigger: {
          trigger: ".section--4",
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            gsap.to(".section--4", {
              opacity: 0,
              y: "-100px", // Move up when leaving
              scrollTrigger: {
                trigger: "section--4",
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
    <section className="h-screen fourth-section w-screen items-center flex justify-end m-auto section--4">
      <div className="flex flex-col w-[30%] mr-[10%]  transition-all duration-500 ease-in-out section--four--container ">
        <h1 className="text-[5vw] leading-[5vw] text-red-500 mb-5 font-orbitron uppercase title font-bold">
          more stable
        </h1>
        <p className="text-[1.5vw] leading-[2.2vw] text-black font-light detail">
          The car had a sleek and aerodynamic body design inspired by Group C
          race cars. Jiotto Design selected three design proposals out of the
          initially proposed 200 for final development. Out of the three, a
          design having an integrated rear wing and large side air intakes was
          fully developed.
        </p>
      </div>
    </section>
  );
}

export default Section4;
