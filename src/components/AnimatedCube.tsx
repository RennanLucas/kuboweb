import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, MeshTransmissionMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const Cube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <RoundedBox
        ref={meshRef}
        args={[2, 2, 2]}
        radius={0.15}
        smoothness={4}
      >
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.6}
          chromaticAberration={0.4}
          anisotropy={0.3}
          distortion={0.15}
          distortionScale={0.2}
          temporalDistortion={0.1}
          iridescence={1.2}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#1a8cff"
          transmission={0.97}
          roughness={0.03}
          ior={1.5}
        />
      </RoundedBox>
    </Float>
  );
};

const EdgesCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.05, 2.05, 2.05]} />
        <meshBasicMaterial transparent opacity={0} />
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2.05, 2.05, 2.05)]} />
          <lineBasicMaterial color="#1a8cff" opacity={0.2} transparent />
        </lineSegments>
      </mesh>
    </Float>
  );
};

interface AnimatedCubeProps {
  className?: string;
}

const AnimatedCube = ({ className = "" }: AnimatedCubeProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [3, 3, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} intensity={0.8} color="#1a8cff" />
        <Cube />
        <EdgesCube />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default AnimatedCube;
