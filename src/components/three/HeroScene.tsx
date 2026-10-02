"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      scrollProgress.current = Math.min(window.scrollY / window.innerHeight, 1);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const targetRotY = mouse.current.x * 0.35 + scrollProgress.current * 0.6;
    const targetRotX = -mouse.current.y * 0.15 + scrollProgress.current * 0.15;

    group.rotation.y += (targetRotY - group.rotation.y) * Math.min(delta * 2.2, 1);
    group.rotation.x += (targetRotX - group.rotation.x) * Math.min(delta * 2.2, 1);
    group.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.02;
    group.position.y = -scrollProgress.current * 0.6;
  });

  const frames = [
    { pos: [0, 0, 0] as const, size: [2.2, 3.2, 2.2] as const },
    { pos: [0.55, -0.4, 0.4] as const, size: [1.3, 1.9, 1.3] as const },
    { pos: [-0.5, 0.6, -0.3] as const, size: [1, 1.4, 1] as const },
  ];

  return (
    <group ref={groupRef}>
      {frames.map((frame, i) => (
        <lineSegments key={i} position={frame.pos}>
          <edgesGeometry
            args={[new THREE.BoxGeometry(...frame.size)]}
          />
          <lineBasicMaterial
            color={i === 0 ? "#B89B5E" : "#FFFFFF"}
            transparent
            opacity={i === 0 ? 0.55 : 0.22}
          />
        </lineSegments>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 7], fov: 42 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <WireframeStructure />
    </Canvas>
  );
}
