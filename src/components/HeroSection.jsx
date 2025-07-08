"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useTexture } from "@react-three/drei";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll();

  // Kamerayı geri çekme efekti
  const cameraPositionZ = useTransform(scrollYProgress, [0, 1], [2, 10]);

  // C harfi Opaklığı (Kamera geçtikçe kayboluyor)
  const cOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  // Plane (gta.png) opaklığı: 1'den 0'a (reveal)
  const planeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative h-[200vh] w-full bg-black">
      {/* 3D C Harfi ve Kamera */}
      {isClient && (
        <Canvas className="fixed top-0 left-0 w-full h-full">
          <Scene cameraPositionZ={cameraPositionZ} cOpacity={cOpacity} planeOpacity={planeOpacity} />
        </Canvas>
      )}

      {/* Landing Page */}
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="absolute top-[100vh] left-0 w-full h-full flex items-center justify-center text-white text-5xl"
      >
        ECOMMEZZO Landing Page
      </motion.div>
    </div>
  );
}

function Scene({ cameraPositionZ, cOpacity, planeOpacity }) {
  const texture = useTexture("/gta.png");
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, cameraPositionZ]} />
      {/* Plane: gta.png görseli, önde ve opaklığı scroll ile azalıyor */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} transparent opacity={planeOpacity} />
      </mesh>
      {/* C harfi */}
      <mesh position={[0, 0, 0]}>
        <textGeometry args={["C", { font: "/fonts/helvetiker_regular.typeface.json", size: 2, height: 0.5 }]} />
        <meshStandardMaterial color="white" transparent opacity={cOpacity} />
      </mesh>
      <ambientLight intensity={1} />
    </>
  );
}
