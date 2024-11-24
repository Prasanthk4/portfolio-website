import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sparkles } from '@react-three/drei';

function BeautifulElement() {
  const mainRef = useRef();
  const innerRef = useRef();
  const ringsRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth rotation for main sphere
    mainRef.current.rotation.y = time * 0.2;
    mainRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    
    // Counter rotation for inner core
    innerRef.current.rotation.y = -time * 0.3;
    innerRef.current.rotation.x = Math.sin(time * 0.4) * 0.2;
    
    // Rotating rings
    ringsRef.current.rotation.x = time * 0.3;
    ringsRef.current.rotation.z = time * 0.2;
    
    // Breathing effect
    const breathe = Math.sin(time * 0.6) * 0.1;
    mainRef.current.scale.set(1 + breathe, 1 + breathe, 1 + breathe);
    
    // Dynamic distortion
    if (mainRef.current.material) {
      mainRef.current.material.distort = 0.3 + Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group scale={1.8}>
      {/* Main ethereal sphere */}
      <mesh ref={mainRef}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#00FFAA"
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={2}
          transparent
          opacity={0.8}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
        />
      </mesh>

      {/* Inner glowing core */}
      <mesh ref={innerRef} scale={0.6}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#00FFD1"
          roughness={0}
          metalness={1}
          transparent
          opacity={0.9}
          emissive="#00FFD1"
          emissiveIntensity={0.5}
          envMapIntensity={3}
        />
      </mesh>

      {/* Rotating rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.02, 16, 100]} />
          <meshPhysicalMaterial
            color="#00FFAA"
            roughness={0.3}
            metalness={1}
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 4, Math.PI / 4]}>
          <torusGeometry args={[1.4, 0.02, 16, 100]} />
          <meshPhysicalMaterial
            color="#00FFD1"
            roughness={0.3}
            metalness={1}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>

      {/* Sparkle effects */}
      <Sparkles 
        count={50}
        scale={2.5}
        size={4}
        speed={0.4}
        opacity={0.5}
        color="#80FFE8"
      />
    </group>
  );
}

const AnimatedSphere = () => {
  return (
    <Canvas
      className="h-[450px]"
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#e0e0e0" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00FFD1" />
      
      <BeautifulElement />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default AnimatedSphere;
