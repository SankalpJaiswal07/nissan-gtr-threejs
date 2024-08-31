"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import * as THREE from "three";
import gsap from "gsap";
import { useControls } from "leva";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/GTR.gltf");
  const { scene, camera } = useThree();
  const modelRef = useRef();
  const t1 = gsap.timeline();
  // console.log(camera.position, scene.position, scene.rotation);
  // console.log(modelRef.current.position);

  useLayoutEffect(() => {
    t1.to(camera.position, {
      x: 0.16104129981140244,
      y: 4.678124220682036,
      z: 0.0004253509952127637,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true,
      },
    })
      .to(scene.position, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(modelRef.current.position, {
        y: -0.5,
        // Adjust this value to move further to the right
        z: -0.7,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(camera.position, {
        x: 4.5,
        y: 1.1,
        z: -17.62,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.position, {
        x: -0.6,
        y: -1.2,
        z: -9.25,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.rotation, {
        x: 3.01,
        y: 1.31,
        z: 3.31,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(modelRef.current.position, {
        x: 4.5, // Adjust this value to move further to the right
        y: 1,
        z: 1.7,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      // }, []);
      .to(camera.position, {
        x: 6.5,
        y: 1,
        z: -2.8,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.position, {
        x: 2,
        y: -0,
        z: 0.8,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.rotation, {
        x: 3.0,
        y: 1.0,
        z: 3.25,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(modelRef.current.position, {
        x: 0, // Adjust this value to move further to the right
        y: 0.2,
        z: 0.5,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(camera.position, {
        x: -2.36,
        y: 1.6,
        z: 3.8,
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.position, {
        x: 2.3,
        y: -0.75,
        z: -1,
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.rotation, {
        x: 0.19,
        y: 0.4,
        z: -0.09,
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(modelRef.current.position, {
        x: -4.1, // Adjust this value to move further to the right
        y: 0.1,
        z: -2.24,
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(camera.position, {
        x: 2.05,
        y: 0.341,
        z: -4.19,
        scrollTrigger: {
          trigger: ".sixth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.position, {
        x: 0.1,
        y: -1,
        z: 3.1,
        scrollTrigger: {
          trigger: ".sixth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: -0.01,
        z: 0,
        scrollTrigger: {
          trigger: ".sixth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(modelRef.current.position, {
        x: -1, // Adjust this value to move further to the right
        y: 0.2,
        z: -3.6,
        scrollTrigger: {
          trigger: ".sixth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(camera.position, {
        x: -0.023,
        y: 0.189,
        z: -4.67,
        scrollTrigger: {
          trigger: ".seventh-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.position, {
        x: 0.95,
        y: -1.3,
        z: 3.1,
        scrollTrigger: {
          trigger: ".seventh-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: -0.01,
        z: 0,
        scrollTrigger: {
          trigger: ".seventh-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      })
      .to(modelRef.current.position, {
        x: -1, // Adjust this value to move further to the right
        y: 0.2,
        z: -3.6,
        scrollTrigger: {
          trigger: ".seventh-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true,
        },
      });
  }, [camera.position, scene.position, scene.rotation, t1]);
  // console.log(camera.position);
  // const { cameraPosition, scenePosition, sceneRotation, ModelRefPos } =
  //   useControls({
  //     cameraPosition: {
  //       value: {
  //         x: 4.666624240664164,
  //         y: 0.2805876118828759,
  //         z: 0.2338150846371622,
  //       },
  //       step: 0.05,
  //     },
  //     scenePosition: {
  //       value: {
  //         x: 3,
  //         y: 0.7,
  //         z: 3.7,
  //       },
  //       step: 0.05,
  //     },
  //     sceneRotation: {
  //       value: {
  //         x: 3,
  //         y: 0.7,
  //         z: 3.7,
  //       },
  //       step: 0.01,
  //     },
  //     ModelRefPos: {
  //       value: {
  //         x: 0,
  //         y: 0,
  //         z: 0,
  //       },
  //       step: 0.5,
  //     },
  //   });

  // useFrame(() => {
  //   camera.position.x = cameraPosition.x;
  //   camera.position.y = cameraPosition.y;
  //   camera.position.z = cameraPosition.z;

  //   scene.position.x = scenePosition.x;
  //   scene.position.y = scenePosition.y;
  //   scene.position.z = scenePosition.z;

  //   scene.rotation.x = sceneRotation.x;
  //   scene.rotation.y = sceneRotation.y;
  //   scene.rotation.z = sceneRotation.z;

  //   modelRef.current.position.x = ModelRefPos.x;
  //   modelRef.current.position.y = ModelRefPos.y;
  //   modelRef.current.position.z = ModelRefPos.z;
  // });

  useEffect(() => {
    // Load the HDRI
    new RGBELoader().load("/Textures/Hdri.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    });

    return () => {
      scene.environment = null; // Clean up
      scene.background = null; // Clean up
    };
  }, [scene]);

  return (
    <group {...props} dispose={null} scale={1.8} ref={modelRef}>
      <mesh
        geometry={nodes.GTR041.geometry}
        material={materials["マテリアル.004"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR035.geometry}
        material={materials["マテリアル.005"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR036.geometry}
        material={materials["マテリアル.006"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR034.geometry}
        material={materials["マテリアル.007"]}
        scale={1.278}
      />
      <group scale={1.278}>
        <mesh
          geometry={nodes.Mesh.geometry}
          material={materials["マテリアル.008"]}
        />
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials["マテリアル.011"]}
        />
        <mesh
          geometry={nodes.Mesh_2.geometry}
          material={materials["マテリアル.010"]}
        />
        <mesh
          geometry={nodes.Mesh_3.geometry}
          material={materials.マテリアル}
        />
      </group>
      <group scale={1.278}>
        <mesh
          geometry={nodes.円003_1.geometry}
          material={materials["マテリアル.009"]}
        />
        <mesh
          geometry={nodes.円003_2.geometry}
          material={materials["マテリアル.012"]}
        />
      </group>
      <group scale={1.278}>
        <mesh
          geometry={nodes.平面011.geometry}
          material={materials["マテリアル.055"]}
        />
        <mesh
          geometry={nodes.平面011_1.geometry}
          material={materials["マテリアル.056"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR027.geometry}
        material={materials["マテリアル.017"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR026.geometry}
        material={materials["マテリアル.041"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR033.geometry}
        material={materials["マテリアル.020"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR029.geometry}
        material={materials["マテリアル.022"]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR023.geometry}
        material={materials["マテリアル.023"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR022.geometry}
        material={materials["マテリアル.023"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR030.geometry}
        material={materials["マテリアル.024"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR018.geometry}
        material={materials["マテリアル.027"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR016.geometry}
        material={materials["マテリアル.028"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR015.geometry}
        material={materials["マテリアル.029"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR014.geometry}
        material={materials["マテリアル.026"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR013.geometry}
        material={materials["マテリアル.035"]}
        scale={1.278}
      />
      <group scale={1.278}>
        <mesh
          geometry={nodes.平面030.geometry}
          material={materials["マテリアル.036"]}
        />
        <mesh
          geometry={nodes.平面030_1.geometry}
          material={materials["マテリアル.038"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR011.geometry}
        material={materials["マテリアル.037"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR114.geometry}
        material={materials["マテリアル.039"]}
        scale={1.278}
      />
      <group scale={1.278}>
        <mesh
          geometry={nodes.平面021.geometry}
          material={materials.bodycolor}
        />
        <mesh
          geometry={nodes.平面021_1.geometry}
          material={materials["マテリアル.002"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR037.geometry}
        material={materials.bodycolor}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR009.geometry}
        material={materials.bodycolor}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR008.geometry}
        material={materials["マテリアル.030"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR006.geometry}
        material={materials["マテリアル.034"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR005.geometry}
        material={materials["マテリアル.033"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR039.geometry}
        material={materials["マテリアル.040"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR045.geometry}
        material={materials["マテリアル.019"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR038.geometry}
        material={materials.bodycolor}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR044.geometry}
        material={materials["マテリアル.044"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR046.geometry}
        material={materials["マテリアル.043"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR048.geometry}
        material={materials["マテリアル.046"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR051.geometry}
        material={materials["マテリアル.042"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR052.geometry}
        material={materials["マテリアル.047"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR053.geometry}
        material={materials["マテリアル.047"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR054.geometry}
        material={materials.bodycolor}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR055.geometry}
        material={materials.bodycolor}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR056.geometry}
        material={materials["マテリアル.049"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR057.geometry}
        material={materials["マテリアル.048"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR121.geometry}
        material={materials["マテリアル.050"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR060.geometry}
        material={materials["マテリアル.051"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR101.geometry}
        material={materials["マテリアル.359"]}
        scale={1.246}
      />
      <mesh
        geometry={nodes.GTR004.geometry}
        material={materials["マテリアル.635"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR050.geometry}
        material={materials["マテリアル.636"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR061.geometry}
        material={materials["マテリアル.637"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR064.geometry}
        material={materials["マテリアル.648"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR120.geometry}
        material={materials["マテリアル.076"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR119.geometry}
        material={materials["マテリアル.646"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR118.geometry}
        material={materials["マテリアル.645"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR062.geometry}
        material={materials["マテリアル.647"]}
        scale={1.278}
      />
      <group scale={1.278}>
        <mesh
          geometry={nodes.Mesh_9.geometry}
          material={materials["マテリアル.642"]}
        />
        <mesh
          geometry={nodes.Mesh_10.geometry}
          material={materials["マテリアル.650"]}
        />
        <mesh
          geometry={nodes.Mesh_11.geometry}
          material={materials["マテリアル.649"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR110.geometry}
        material={materials["マテリアル.649"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR117.geometry}
        material={materials["マテリアル.651"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR065.geometry}
        material={materials["マテリアル.635"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR066.geometry}
        material={materials["マテリアル.653"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR068.geometry}
        material={materials["マテリアル.053"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR069.geometry}
        material={materials["マテリアル.054"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR071.geometry}
        material={materials["マテリアル.052"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR072.geometry}
        material={materials["マテリアル.057"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR112.geometry}
        material={materials["マテリアル.059"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR073.geometry}
        material={materials["マテリアル.060"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR074.geometry}
        material={materials["マテリアル.052"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR077.geometry}
        material={materials["マテリアル.052"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR116.geometry}
        material={materials["マテリアル.058"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR031.geometry}
        material={materials["マテリアル.061"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR082.geometry}
        material={materials["マテリアル.062"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR028.geometry}
        material={materials["マテリアル.068"]}
        scale={1.278}
      />
      <group scale={1.278}>
        <mesh
          geometry={nodes.Mesh_18.geometry}
          material={materials["マテリアル.066"]}
        />
        <mesh
          geometry={nodes.Mesh_19.geometry}
          material={materials["マテリアル.067"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR083.geometry}
        material={materials["マテリアル.070"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR085.geometry}
        material={materials["マテリアル.071"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR086.geometry}
        material={materials["マテリアル.024"]}
        scale={1.278}
      />
      <group scale={1.278}>
        <mesh
          geometry={nodes.平面085.geometry}
          material={materials["マテリアル.072"]}
        />
        <mesh
          geometry={nodes.平面085_1.geometry}
          material={materials["マテリアル.074"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR088.geometry}
        material={materials["マテリアル.075"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR115.geometry}
        material={materials["マテリアル.643"]}
        scale={1.278}
      />
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.193}>
        <mesh
          geometry={nodes.円070.geometry}
          material={materials["brakerotor.001"]}
        />
        <mesh
          geometry={nodes.円070_1.geometry}
          material={materials["マテリアル.361"]}
        />
        <mesh
          geometry={nodes.円070_2.geometry}
          material={materials["マテリアル.265"]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.193}>
        <mesh
          geometry={nodes.円071.geometry}
          material={materials["brakerotor.001"]}
        />
        <mesh
          geometry={nodes.円071_1.geometry}
          material={materials["マテリアル.360"]}
        />
        <mesh
          geometry={nodes.円071_2.geometry}
          material={materials["マテリアル.265"]}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]} scale={1.035}>
        <mesh
          geometry={nodes.円074.geometry}
          material={materials["マテリアル.522"]}
        />
        <mesh
          geometry={nodes.円074_1.geometry}
          material={materials["マテリアル.523"]}
        />
        <mesh
          geometry={nodes.円074_2.geometry}
          material={materials["マテリアル.524"]}
        />
        <mesh
          geometry={nodes.円074_3.geometry}
          material={materials["マテリアル.521"]}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]} scale={1.035}>
        <mesh
          geometry={nodes.円096.geometry}
          material={materials["マテリアル.412"]}
        />
        <mesh
          geometry={nodes.円096_1.geometry}
          material={materials["マテリアル.413"]}
        />
        <mesh
          geometry={nodes.円096_2.geometry}
          material={materials["マテリアル.414"]}
        />
        <mesh
          geometry={nodes.円096_3.geometry}
          material={materials["マテリアル.527"]}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]} scale={1.035}>
        <mesh
          geometry={nodes.Mesh_21.geometry}
          material={materials["マテリアル.526"]}
        />
        <mesh
          geometry={nodes.Mesh_22.geometry}
          material={materials["マテリアル.525"]}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]} scale={1.035}>
        <mesh
          geometry={nodes.Mesh_23.geometry}
          material={materials["マテリアル.015"]}
        />
        <mesh
          geometry={nodes.Mesh_24.geometry}
          material={materials["マテリアル.525"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR097.geometry}
        material={materials["マテリアル.084"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR096.geometry}
        material={materials["マテリアル.085"]}
        scale={1.278}
      />
      <group scale={1.278}>
        <mesh
          geometry={nodes.平面082.geometry}
          material={materials["マテリアル.091"]}
        />
        <mesh
          geometry={nodes.平面082_1.geometry}
          material={materials["マテリアル.090"]}
        />
        <mesh
          geometry={nodes.平面082_2.geometry}
          material={materials["マテリアル.092"]}
        />
      </group>
      <mesh
        geometry={nodes.GTR089.geometry}
        material={materials["マテリアル.093"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR090.geometry}
        material={materials["マテリアル.094"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR067.geometry}
        material={materials["マテリアル.021"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR122.geometry}
        material={materials["マテリアル.016"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.GTR042.geometry}
        material={materials["マテリアル.016"]}
        scale={1.278}
      />
      <mesh
        geometry={nodes.平面.geometry}
        material={materials["マテリアル.086"]}
      />
      <mesh
        geometry={nodes.平面001.geometry}
        material={materials["マテリアル.086"]}
      />
      <mesh
        geometry={nodes.Mesh_26.geometry}
        material={materials["マテリアル.065"]}
      />
      <mesh
        geometry={nodes.Mesh_27.geometry}
        material={materials["マテリアル.063"]}
      />
      <mesh
        geometry={nodes.Mesh_28.geometry}
        material={materials["マテリアル.077"]}
      />
      <mesh
        geometry={nodes.Mesh_29.geometry}
        material={materials["マテリアル.065"]}
      />
      <mesh
        geometry={nodes.Mesh_30.geometry}
        material={materials["マテリアル.063"]}
      />
      <mesh
        geometry={nodes.Mesh_31.geometry}
        material={materials["マテリアル.077"]}
      />
      <mesh
        geometry={nodes.Mesh_32.geometry}
        material={materials["マテリアル.065"]}
      />
      <mesh
        geometry={nodes.Mesh_33.geometry}
        material={materials["マテリアル.063"]}
      />
      <mesh
        geometry={nodes.Mesh_34.geometry}
        material={materials["マテリアル.087"]}
      />
      <mesh
        geometry={nodes.Mesh_35.geometry}
        material={materials["マテリアル.088"]}
      />
      <points
        geometry={nodes.Mesh_36.geometry}
        material={materials["マテリアル.087"]}
      />
      <mesh
        geometry={nodes.Mesh_37.geometry}
        material={materials["マテリアル.089"]}
      />
      <mesh
        geometry={nodes.Mesh_38.geometry}
        material={materials["マテリアル.087"]}
      />
      <mesh
        geometry={nodes.Mesh_39.geometry}
        material={materials["マテリアル.088"]}
      />
      <points
        geometry={nodes.Mesh_40.geometry}
        material={materials["マテリアル.089"]}
      />
      <mesh
        geometry={nodes.Mesh_41.geometry}
        material={materials["マテリアル.096"]}
      />
      <mesh
        geometry={nodes.Mesh_42.geometry}
        material={materials["マテリアル.095"]}
      />
      <mesh
        geometry={nodes.平面062.geometry}
        material={materials["マテリアル.097"]}
      />
      <mesh
        geometry={nodes.平面062_1.geometry}
        material={materials["マテリアル.073"]}
      />
      <mesh
        geometry={nodes.Mesh_43.geometry}
        material={materials["マテリアル.001"]}
      />
      <mesh
        geometry={nodes.Mesh_44.geometry}
        material={materials["マテリアル.025"]}
      />
      <mesh
        geometry={nodes.円004.geometry}
        material={materials["マテリアル.031"]}
      />
      <mesh
        geometry={nodes.円004_1.geometry}
        material={materials["マテリアル.032"]}
      />
      <mesh
        geometry={nodes.円004_2.geometry}
        material={materials["マテリアル.086"]}
      />
      <mesh
        geometry={nodes.円004_3.geometry}
        material={materials["マテリアル.098"]}
      />
      <mesh
        geometry={nodes.平面008.geometry}
        material={materials["マテリアル.097"]}
      />
      <mesh
        geometry={nodes.平面008_1.geometry}
        material={materials["マテリアル.073"]}
      />
      <mesh
        geometry={nodes.Mesh_45.geometry}
        material={materials["マテリアル.001"]}
      />
      <mesh
        geometry={nodes.Mesh_46.geometry}
        material={materials["マテリアル.025"]}
      />
      <mesh
        geometry={nodes.円016.geometry}
        material={materials["マテリアル.031"]}
      />
      <mesh
        geometry={nodes.円016_1.geometry}
        material={materials["マテリアル.032"]}
      />
      <mesh
        geometry={nodes.円016_2.geometry}
        material={materials["マテリアル.086"]}
      />
      <mesh
        geometry={nodes.円016_3.geometry}
        material={materials["マテリアル.098"]}
      />
      <mesh
        geometry={nodes.平面016.geometry}
        material={materials["マテリアル.097"]}
      />
      <mesh
        geometry={nodes.平面016_1.geometry}
        material={materials["マテリアル.073"]}
      />
    </group>
  );
}

useGLTF.preload("/GTR.gltf");
