
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const Earth = () => {
  const earthRef = useRef();
  const earth = useGLTF("./planet/scene.gltf");

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <primitive 
      ref={earthRef}
      object={earth.scene} 
      scale={2.2}
      position={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      style={{ 
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '200px',
        width: '200px',
        zIndex: 1
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Earth />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default EarthCanvas;
