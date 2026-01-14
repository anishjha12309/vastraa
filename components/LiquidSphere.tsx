"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function ChromeSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.8, 128, 128]}>
      <MeshDistortMaterial
        color="#EAEAEA"
        metalness={1}
        roughness={0.1}
        distort={0.4}
        speed={2}
        envMapIntensity={1}
      />
    </Sphere>
  );
}

export function LiquidSphere() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 10]} intensity={0.8} />
        <ChromeSphere />
      </Canvas>
    </div>
  );
}
