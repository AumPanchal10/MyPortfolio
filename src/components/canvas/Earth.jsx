import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";

const Earth = () => {
  const { scene } = useGLTF("/planet/scene.gltf"); // Correct path

  return <primitive object={scene} scale={2.5} position-y={0} rotation={[0, Math.PI, 0]} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        {/* Realistic Lighting */}
        <Environment preset="sunset" />
        <directionalLight position={[2, 5, 3]} intensity={2} />
        <ambientLight intensity={0.5} />

        {/* Orbit Controls for Rotation */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Render Earth Model */}
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
