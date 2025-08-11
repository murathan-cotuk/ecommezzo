'use client';

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function FloatingParticles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.x = mouse.y * 0.3;
      ref.current.rotation.y = mouse.x * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#00ffff"
        size={0.2}
        sizeAttenuation
        depthWrite={false}
        transparent
      />
    </Points>
  );
}

export default function ThreeDBanner() {
  return (
    <div className="w-full h-[300px] bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
