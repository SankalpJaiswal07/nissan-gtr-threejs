"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import Model from "../../public/GTR";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Model from "../../public/Nissan-gtr";

gsap.registerPlugin(ScrollTrigger);

function CanvasContainer() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{
          position: [4.666624240664164, 0.2805876118828759, 0.2338150846371622],
        }}
        scene={{
          position: [0, -0.9, 0],
        }}
      >
        <ambientLight />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default CanvasContainer;
