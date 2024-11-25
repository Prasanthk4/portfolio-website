import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GeometricElement = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.2;
  });

  // Adjust size based on screen width
  const { viewport } = useThree();
  const scale = viewport.width < 5 ? 0.85 : 1.35;

  return (
    <mesh ref={meshRef} scale={scale}>
      <torusKnotGeometry args={[1.1, 0.28, 128, 32]} />
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.7}
        roughness={0.2}
        emissive="#4338ca"
        emissiveIntensity={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

const ResponsiveCanvas = () => {
  const { gl, camera } = useThree();

  useEffect(() => {
    const handleResize = () => {
      const width = gl.domElement.clientWidth;
      const height = gl.domElement.clientHeight;
      const aspect = width / height;
      
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      
      // Adjust camera position based on screen size
      const isMobile = width < 640;
      camera.position.z = isMobile ? 6 : 8;
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener('resize', handleResize);
  }, [gl, camera]);

  return null;
};

const AnimatedSphere = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ background: 'transparent', touchAction: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <GeometricElement />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        touchAction="none"
      />
      <ResponsiveCanvas />
    </Canvas>
  );
};

export default AnimatedSphere;
