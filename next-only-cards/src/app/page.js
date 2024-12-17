"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gametrller } from "./components/game";
import { Model } from "./components/3dmodel";
import { Mushrooms } from "./components/mushroom";
import { Canvas } from '@react-three/fiber';
import LocomotiveScroll from "locomotive-scroll";
import ScrollDown from "./components/scrolldown";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const modelRef = useRef(null);
  const mushroomsRef = useRef(null);
  // const gameRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
    
    ScrollTrigger.create({
      trigger: '[data-scroll-container]',
      start: "top top",
      end: "150vh",
      ease: "power4.in",
      onUpdate: (self) => {
      const scrollDownElement = document.querySelector('.scrolldown');
      const threedeeElement = document.querySelector('canvas');
      if (scrollDownElement && threedeeElement) {
        scrollDownElement.style.opacity = 1 - self.progress;
        threedeeElement.style.opacity = 1 - self.progress;
      }
      }
    });

    return () => {
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

    if (modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: modelRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        }
      });
    }
  }, []);

  return (
    <>
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

        <div className="my-10 px-10">
          <div className="flex h-screen items-center">
            <div className="flex-col">
              <h2 className="text-5xl">Custom Cards</h2>
              <p className="text-2xl">
                No two games are the same. AI creates cards tailored to your interests and style, making every match feel personal and fresh. Whether you're a strategist, collector, or casual player, the game adapts to you.
              </p>
            </div>
            <Canvas className="w-1/2">
              {/* <Mushrooms ref={mushroomsRef}/> */}
            </Canvas>
          </div>
        </div>

        <div className="my-10 px-10">
          <div className="flex h-screen items-center">
            <Canvas className="w-1/2">
              <Mushrooms ref={mushroomsRef}/>
            </Canvas>
            <div className="flex-col">
              <h2 className="text-5xl">Own What You Play</h2>
              <p className="text-2xl">
              Your cards aren't just pixels—they're yours. Each card is an NFT, meaning you can trade, upgrade, or sell them. Real ownership, real value, and endless possibilities to build the perfect deck.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 px-10">
          <div className="flex h-screen items-center">
            <div className="flex-col">
              <h2 className="text-5xl">Fair Play, Always</h2>
              <p className="text-2xl">
              Forget rigged games and shady rules. Smart contracts ensure fairness, transparency, and trust in every match. Every move, every result, and every reward is locked securely on the blockchain.
              </p>
            </div>
            <Canvas className="w-1/2">
              <Gametrller/>
            </Canvas>
          </div>
        </div>

      </div>
    </>
  );
}