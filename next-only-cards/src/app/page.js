"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Model } from "./components/3dmodel";
import { Canvas } from '@react-three/fiber';
import LocomotiveScroll from "locomotive-scroll";
import ScrollDown from "./components/scrolldown";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const modelRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        x: Math.PI * 2,
        scrollTrigger: {
          trigger: modelRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    }
  }, []);

  return (
    <div className="px-4" data-scroll-container>
      <Canvas className="w-full h-full fixed z-0 mix-blend-difference" style={{ position: 'fixed' }}>
        <Model ref={modelRef} />
      </Canvas>
      <div className="flex justify-center items-center h-screen z-10">
        <Image src="/logo.png" width={200} height={200} />
        <div className="flex flex-col items-center">
          <h1 className="text-8xl">Only <span className="text-ablue">Cards</span></h1>
          <h2 className="text-bblue text-3xl">Your <span className="text-white">cards</span>, your <span className="text-white">life</span></h2>
        </div>
      </div>

      <div style={{ position: 'fixed', left: '50%', bottom: '20px', transform: 'translate(-50%, -50%)', margin: '0 auto' }}>
        <ScrollDown />
      </div>
    </div>
  );
}

