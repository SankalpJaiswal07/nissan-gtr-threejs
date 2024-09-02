"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Section7() {
  const audioRef = useRef(null);
  const audioStartRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wasPowerOnPlaying, setWasPowerOnPlaying] = useState(false); // New state to track powerOn status

  useEffect(() => {
    const handleAudioEnd = () => {
      // Reset the state when the audio ends
      setIsPlaying(false);
    };

    const startAudioElement = audioStartRef.current;

    if (startAudioElement) {
      startAudioElement.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (startAudioElement) {
        startAudioElement.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, []);

  const handleMouseDown = () => {
    // Pause the powerOn audio if it's playing
    if (isPlaying) {
      audioStartRef.current.pause();
      setWasPowerOnPlaying(true);
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsActive(true);
  };

  const handleMouseUp = () => {
    // Resume the powerOn audio if it was playing before
    if (wasPowerOnPlaying) {
      audioStartRef.current.play();
      setWasPowerOnPlaying(false);
    }
    audioRef.current.pause();
    setIsActive(false);
  };

  const powerOn = () => {
    if (isPlaying) {
      audioStartRef.current.pause();
      audioStartRef.current.currentTime = 0; // Reset to the beginning
    } else {
      audioStartRef.current.currentTime = 0; // Ensure it starts from the beginning
      audioStartRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className=" relative h-screen w-screen seventh-section">
      <div className="flex items-center justify-center flex-col">
        <h1 className="z-10 text-[6vw] font-bold text-[#464955] uppercase">
          Nissan: <span className="text-[#fe4443]">gt-r</span>
        </h1>
        <h3 className="text-gray-200 absolute text-[300px] whitespace-nowrap uppercase top-32  font-bold -z-0">
          2023
        </h3>
        <p className="text-[2vw] font-normal text-[#464955] z-10">
          A roar so divine, even the heavens pause to listen.
        </p>
      </div>
      {isPlaying && (
        <div
          ng-if="carPowerOn"
          className="absolute flex items-center right-48 bottom-36 z-[99]"
        >
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Ensures the audio pauses if the mouse leaves the element
            className={`relative w-[27px] h-full transition-transform duration-150 ease-in-out ${
              isActive ? "bg-gray-600 scale-95 opacity-80" : "bg-gray-400 "
            } cursor-pointer flex items-center justify-center -top-3 right-20 bg-transparent  `}
          >
            <Image src="/pedal.png" height={40} width={40} alt="pedal" />
            <audio src="/nissan-gtr.mp3" loop={true} ref={audioRef} />
          </div>
        </div>
      )}

      <div
        onClick={powerOn}
        className=" sound-wrapper h-[100px] bg-[rgba(0,0,0,0.8)] w-[100px] rounded-full text-xs py-5 px-3 right-32 bottom-32 absolute cursor-pointer z-[99]"
      >
        <div className="relative block w-[18px] h-[5px] rounded-sm bg-[#00ff30] mx-auto"></div>
        <div className="text-section relative block text-xs mt-4">
          <span className="text-white block text-[10px] leading-[8px] text-center mb-1">
            ENGINE
          </span>
          <span className="text-white block text-[10px] leading-[8px] text-center ng-binding">
            START
          </span>
        </div>
        <audio src="/nissan-gtr-start.mp3" loop={false} ref={audioStartRef} />
      </div>
    </section>
  );
}

export default Section7;
