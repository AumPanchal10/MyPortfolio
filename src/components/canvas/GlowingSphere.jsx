
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const GlowingSphere = () => {
  return (
    <Canvas style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', height: '200px', width: '200px', zIndex: 1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="#4444ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.9}
        />
      </Sphere>
    </Canvas>
  );
};

export default GlowingSphere;
