"use client";
import gsap from "gsap";
import { useEffect } from "react";

function Section1() {
  const t1 = gsap.timeline();

  useEffect(() => {
    t1.to(".section--one", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".section--one",
        start: "top top",
        end: "bottom top",
        scrub: true,
        immediateRender: false,
      },
    });
  });
  return (
    <section className="w-screen h-screen flex flex-col justify-between items-center scroll-snap-center section--one z-[99]">
      <div className="w-[70%] flex flex-col items-center relative">
        <nav className="flex items-center w-full justify-center mt-5 font-semibold text-[46px]  text-[#464955]">
          Nissan GT-R
        </nav>

        <h1 className="z-10 text-[6vw] font-bold text-[#464955]">
          OPS: <span className="text-[#fe4443]">LIGHTNING</span>
        </h1>
        <h3 className="text-gray-200 absolute text-[105px] whitespace-nowrap uppercase top-32 z-0 font-bold">
          2023 nissan gt-r r35
        </h3>
        <p className="text-[2vw] font-normal text-[#464955] z-10">
          An experience so beautiful that even the God envy.
        </p>
      </div>
      <div className="w-[70%] mb-[6%] flex justify-between text-black font-bold">
        <div className="spec--wrapper">
          <div className="text-[1.5vw] font-normal text-[#464955]">Speed</div>
          <div className="flex items-end">
            <div className="text-[2.3vw] font-medium  text-[#fe4443]">315</div>
            <div className="text-[1vw] mx-[5px] mb-[0.5vw] font-semibold text-[#464955]">
              KM/S
            </div>
          </div>
        </div>
        <div className="spec--wrapper">
          <div className="text-[1.5vw] font-normal text-[#464955]">Type</div>
          <div className="flex items-end">
            <div className="text-[2.3vw] font-medium  text-[#fe4443]">
              Sports
            </div>
          </div>
        </div>
        <div className="spec--wrapper">
          <div className="text-[1.5vw] font-normal text-[#464955]">
            MRPS* Starting at
          </div>
          <div className="flex items-end">
            <div className="text-[2.3vw] font-medium  text-[#fe4443]">
              $121,090
            </div>
          </div>
        </div>

        <div className="spec--wrapper">
          <div className="text-[1.5vw] font-normal text-lightBlack">Fuel</div>
          <div className="flex items-end">
            <div className="text-[2.3vw] font-medium  text-[#fe4443]">
              Gasoline
            </div>
          </div>
        </div>
        <div className="spec--wrapper">
          <div className="text-[1.5vw] font-normal text-lightBlack">
            Horsepower
          </div>
          <div className="flex items-end">
            <div className="text-[2.3vw] font-medium  text-[#fe4443]">565</div>
            <div className="text-[1vw] mx-[5px] mb-[0.5vw] font-semibold text-lightBlack">
              HACK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
