import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export const AnimeCharacter = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t / 2) * 0.3;
    meshRef.current.position.y = Math.sin(t) * 0.2;
  });

  return (
    <group ref={meshRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      
      {/* Body */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#915EFF"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </Sphere>

      {/* Head */}
      <Sphere args={[0.5, 32, 32]} position={[0, 1.2, 0]}>
        <MeshDistortMaterial
          color="#915EFF"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.4}
        />
      </Sphere>
    </group>
  );
};