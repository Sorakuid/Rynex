"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";

export function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<ReturnType<typeof NET> | null>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE,
      color: 0x4fa3d1,
      backgroundColor: 0x1c1e22,
      points: 6,
      maxDistance: 16,
      spacing: 22,
      showDots: false,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0" />;
}
