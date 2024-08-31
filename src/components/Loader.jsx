// components/Loader.js
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const progress = progressRef.current;
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsVisible(false); // Remove loader from DOM after animation completes
      },
    });

    // Add progress bar animation to the timeline
    t1.to(progress, {
      scaleX: 1,
      duration: 2,
      ease: "power4.inOut",
    })
      // Add loader movement and fade out animation after the progress bar animation
      .to(
        loader,
        {
          x: "100%", // Move to the right side of the screen
          opacity: 0, // Fade out
          duration: 1, // Duration of the move and fade animation
          ease: "power4.inOut",
        },
        "+=0"
      ); // Start this animation immediately after the previous one completes
  }, []);
  if (!isVisible) return null;
  return (
    <div
      className="h-screen w-screen flex absolute z-50 items-center justify-center flex-col gap-8 text-xs bg-[#f0efef] text-black font-bold"
      ref={loaderRef}
    >
      <p>Loading... Please wait</p>
      <div
        className="progress absolute top-[60%] w-[50%] h-[2px] bg-[#fe4443] z-20 m-[0_5%] scale-x-0 [transition:transform_1s] origin-left"
        ref={progressRef}
      ></div>
    </div>
  );
};

export default Loader;
