import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const distance = 40;
      positions[i * 3] = (Math.random() - 0.5) * distance;
      positions[i * 3 + 1] = (Math.random() - 0.5) * distance;
      positions[i * 3 + 2] = (Math.random() - 0.5) * distance;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    points.current.rotation.y = clock.getElapsedTime() * 0.05;
    points.current.rotation.x = clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f3ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-dark-bg">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <color attach="background" args={['#030014']} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(188,19,254,0.1),transparent_70%)]" />
    </div>
  );
}
