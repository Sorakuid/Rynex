"use client";

import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function BackgroundAnimation() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const generated: Orb[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 200 + Math.random() * 300,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 8,
      opacity: 0.08 + Math.random() * 0.1,
    }));
    setOrbs(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background:
              "radial-gradient(circle, rgba(79,163,209,0.3) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)",
            filter: "blur(60px)",
            animation: `orbFloat ${orb.duration}s ease-in-out ${orb.delay}s infinite alternate`,
            opacity: orb.opacity,
          }}
        />
      ))}

      <div
        className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/4 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79,163,209,0.12) 0%, transparent 60%)",
          filter: "blur(100px)",
          animation: "orbPulse 6s ease-in-out infinite alternate",
        }}
      />

      <style jsx>{`
        @keyframes orbFloat {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(10px, -30px) scale(1.05);
          }
        }
        @keyframes orbPulse {
          0% {
            opacity: 0.4;
            transform: translate(-50%, -25%) scale(1);
          }
          100% {
            opacity: 0.8;
            transform: translate(-50%, -25%) scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
