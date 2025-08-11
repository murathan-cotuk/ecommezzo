// components/HeroAnimatedShop.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

function FloatingShop() {
  const mesh = useRef();
  useFrame(({ clock, mouse }) => {
    mesh.current.rotation.y = clock.elapsedTime * 0.1;
    mesh.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.2;
    mesh.current.rotation.x = mouse.y * 0.2;
    mesh.current.rotation.z = mouse.x * 0.2;
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[3, 2, 1]} />
      <MeshWobbleMaterial
        color="#ffaa00"
        factor={0.6}
        speed={1}
        attach="material"
      />
    </mesh>
  );
}

export default function HeroAnimatedShop() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        <FloatingShop />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
