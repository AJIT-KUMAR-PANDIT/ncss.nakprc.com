"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 2000 }) => {
  const mesh = useRef();
  const light = useRef();

  // Generate random positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.05;
      mesh.current.rotation.x = time * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f0ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function ParticleBackground({ children }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl bg-[#050505]">
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Particles />
        </Canvas>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none p-8 text-center">
        {children || (
          <div className="glass px-8 py-6 rounded-2xl pointer-events-auto">
            <h2 className="text-3xl font-extrabold text-white mb-2">Particle Engine™</h2>
            <p className="text-gray-400">High-performance WebGL particles.</p>
          </div>
        )}
      </div>
    </div>
  );
}
