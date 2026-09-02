import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function OrbMesh() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.25;

    const pointerX = state.pointer.x * 0.18;
    const pointerY = state.pointer.y * 0.18;

    meshRef.current.rotation.y += (pointerX - meshRef.current.rotation.y) * 0.02;
    meshRef.current.rotation.x += (-pointerY - meshRef.current.rotation.x) * 0.02;
  });

  return (
    <Float speed={2} rotationIntensity={0.45} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 3]} />

        <meshStandardMaterial
          color="#7c3aed"
          metalness={0.75}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function HeroOrb() {
  return (
    <div className="hero-orb-canvas">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.4} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2.5}
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={2}
          color="#8b5cf6"
        />

        <OrbMesh />
      </Canvas>
    </div>
  );
}

export default HeroOrb;