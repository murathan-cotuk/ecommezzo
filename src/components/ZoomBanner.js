// components/ZoomBanner.js
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";

function ZoomScene() {
  const mesh = useRef();
  const cameraRef = useRef();
  const [zoomed, setZoomed] = useState(false);

  const handleClick = () => {
    if (!zoomed) {
      gsap.to(cameraRef.current.position, { x: 0, y: 0, z: 3, duration: 1.2, ease: "expo.out" });
    } else {
      gsap.to(cameraRef.current.position, { x: 0, y: 0, z: 6, duration: 1.2, ease: "expo.out" });
    }
    setZoomed(!zoomed);
  };

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 6]} />
      <mesh ref={mesh} onClick={handleClick} style={{ cursor: "pointer" }}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial color="#ff0080" />
      </mesh>
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default function ZoomBanner() {
  return (
    <div style={{ width: "100%", height: "400px", cursor: "pointer" }}>
      <Canvas onCreated={({ gl }) => gl.setClearColor("#f0f0f0")}>
        <ZoomScene />
      </Canvas>
    </div>
  );
}
