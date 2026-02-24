import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const Computer = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      // Mouse response
      const mouseX = state.pointer.x * 0.2;
      const mouseY = state.pointer.y * 0.1;
      groupRef.current.rotation.y += mouseX;
      groupRef.current.rotation.x += mouseY;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.2}>
        {/* Monitor body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2.2, 1.6, 0.3]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Screen */}
        <mesh position={[0, 0.5, 0.16]}>
          <boxGeometry args={[1.8, 1.2, 0.02]} />
          <MeshWobbleMaterial color="#e65100" factor={0.1} speed={2} emissive="#e65100" emissiveIntensity={0.4} />
        </mesh>
        {/* Screen scanlines effect - subtle overlay */}
        <mesh position={[0, 0.5, 0.175]}>
          <boxGeometry args={[1.8, 1.2, 0.001]} />
          <meshStandardMaterial color="#2d6a6a" transparent opacity={0.15} />
        </mesh>
        {/* Monitor stand neck */}
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[0.3, 0.4, 0.2]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Monitor base */}
        <mesh position={[0, -0.7, 0]}>
          <boxGeometry args={[1.2, 0.12, 0.6]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* Keyboard */}
        <mesh position={[0, -0.9, 0.6]}>
          <boxGeometry args={[1.8, 0.08, 0.6]} />
          <meshStandardMaterial color="#2a2a3e" />
        </mesh>
        {/* Keyboard keys (decorative rows) */}
        {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
          <mesh key={i} position={[x, -0.85, 0.6]}>
            <boxGeometry args={[0.3, 0.04, 0.08]} />
            <meshStandardMaterial color="#e65100" emissive="#e65100" emissiveIntensity={0.2} />
          </mesh>
        ))}
        {/* Power LED */}
        <mesh position={[0.9, -0.1, 0.16]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#4db6ac" emissive="#4db6ac" emissiveIntensity={2} />
        </mesh>
      </group>
    </Float>
  );
};

const RetroComputer = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, 2, 4]} intensity={0.6} color="#e65100" />
        <pointLight position={[3, -1, 3]} intensity={0.4} color="#4db6ac" />
        <Computer />
      </Canvas>
    </div>
  );
};

export default RetroComputer;
