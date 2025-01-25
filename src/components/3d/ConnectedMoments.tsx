'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function ConnectedRectangles() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Dimensions
  const width = 2;
  const height = 3;
  const spacing = 2.5;
  const triangleHeight = 0.5;

  // Calculate positions for three rectangles in a triangle formation
  const positions = [
    [-spacing * Math.cos(Math.PI/6), spacing * Math.sin(Math.PI/6), 0],  // Top left
    [spacing * Math.cos(Math.PI/6), spacing * Math.sin(Math.PI/6), 0],   // Top right
    [0, -spacing, 0]                                                      // Bottom
  ];

  // Continuous rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Rectangles */}
      {positions.map((pos, index) => (
        <group key={index} position={[pos[0], pos[1], pos[2]]}>
          {/* Main rectangle */}
          <mesh>
            <planeGeometry args={[width, height]} />
            <meshPhongMaterial 
              color="#1a1a1a"
              side={THREE.DoubleSide}
              shininess={100}
            />
          </mesh>

          {/* Glowing outline */}
          <mesh position={[0, 0, -0.001]}>
            <planeGeometry args={[width + 0.1, height + 0.1]} />
            <meshBasicMaterial
              color="#8b5cf6"
              opacity={0.3}
              transparent
              blending={THREE.AdditiveBlending}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Edges */}
          {[[-width/2, 0], [width/2, 0]].map((edgePos, i) => (
            <mesh key={`vertical-${i}`} position={[edgePos[0], 0, 0]}>
              <cylinderGeometry args={[0.03, 0.03, height, 16]} />
              <meshStandardMaterial 
                color="#8b5cf6"
                emissive="#8b5cf6"
                emissiveIntensity={1}
              />
            </mesh>
          ))}

          {/* Horizontal edges */}
          {[height/2, -height/2].map((y, i) => (
            <mesh 
              key={`horizontal-${i}`} 
              position={[0, y, 0]}
              rotation={[0, 0, Math.PI/2]}
            >
              <cylinderGeometry args={[0.03, 0.03, width, 16]} />
              <meshStandardMaterial 
                color="#8b5cf6"
                emissive="#8b5cf6"
                emissiveIntensity={1}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Connecting triangles - Top */}
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([
              positions[0][0], positions[0][1], positions[0][2],
              positions[1][0], positions[1][1], positions[1][2],
              0, spacing * Math.sin(Math.PI/6) + triangleHeight, 0
            ])}
            count={3}
            itemSize={3}
          />
        </bufferGeometry>
        <meshPhongMaterial
          color="#8b5cf6"
          opacity={0.2}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Connecting triangles - Bottom */}
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([
              positions[1][0], positions[1][1], positions[1][2],
              positions[2][0], positions[2][1], positions[2][2],
              positions[0][0], positions[0][1], positions[0][2]
            ])}
            count={3}
            itemSize={3}
          />
        </bufferGeometry>
        <meshPhongMaterial
          color="#8b5cf6"
          opacity={0.2}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function ConnectedMomentsScene() {
  return (
    <div className="w-full h-[600px] bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#8b5cf6" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={4}
          color="#ffffff"
          castShadow
        />
        <ConnectedRectangles />
      </Canvas>
    </div>
  );
}