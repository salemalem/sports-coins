'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PerspectiveCamera, useTexture } from '@react-three/drei';
import { moments } from '@/data/athletes';

function TriPrism() {
  const groupRef = useRef<THREE.Group>(null);

  // Load textures for each side
  const textures = useTexture([
    moments[0].image,
    moments[1].image,
    moments[2].image
  ]);

  // Apply texture settings
  textures.forEach(texture => {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  });

  // Dimensions
  const sideLength = 2;  // Length of triangle side
  const height = 3;      // Height of prism
  
  // Calculate triangle vertices (equilateral triangle)
  const a = sideLength / 2;
  const h = (sideLength * Math.sqrt(3)) / 2;
  
  const vertices = [
    new THREE.Vector3(-a, 0, -h/3),      // Bottom left
    new THREE.Vector3(a, 0, -h/3),       // Bottom right
    new THREE.Vector3(0, 0, (2*h)/3)     // Top
  ];

  // Rotate the prism
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Create three sides with images */}
      {[0, 1, 2].map((index) => {
        const v1 = vertices[index];
        const v2 = vertices[(index + 1) % 3];
        
        // Calculate face center and orientation
        const center = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
        const direction = new THREE.Vector3().subVectors(v2, v1);
        const length = direction.length();
        direction.normalize();
        
        // Calculate rotation
        const angle = Math.atan2(direction.z, direction.x);
        
        return (
          <group 
            key={index}
            position={[center.x, 0, center.z]}
            rotation={[0, angle + Math.PI/2, 0]}
          >
            {/* Face with image */}
            <mesh>
              <planeGeometry args={[length, height]} />
              <meshStandardMaterial
                map={textures[index]}
                side={THREE.DoubleSide}
              />
            </mesh>
            
            {/* Purple overlay */}
            <mesh position={[0, 0, 0.001]}>
              <planeGeometry args={[length, height]} />
              <meshBasicMaterial
                color="#8b5cf6"
                opacity={0.2}
                transparent
                blending={THREE.AdditiveBlending}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}

      {/* Top and bottom caps */}
      {[-height/2, height/2].map((y, i) => (
        <mesh key={`cap-${i}`} position={[0, y, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array(vertices.flatMap(v => [v.x, 0, v.z]))}
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
      ))}

      {/* Edges */}
      {vertices.map((v1, i) => {
        const v2 = vertices[(i + 1) % 3];
        return (
          <group key={`edges-${i}`}>
            {/* Horizontal edges (top and bottom) */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([
                    v1.x, -height/2, v1.z,
                    v2.x, -height/2, v2.z
                  ])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#8b5cf6" opacity={0.8} transparent />
            </line>
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([
                    v1.x, height/2, v1.z,
                    v2.x, height/2, v2.z
                  ])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#8b5cf6" opacity={0.8} transparent />
            </line>
            
            {/* Vertical edges */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([
                    v1.x, -height/2, v1.z,
                    v1.x, height/2, v1.z
                  ])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#8b5cf6" opacity={0.8} transparent />
            </line>
          </group>
        );
      })}
    </group>
  );
}

export default function TriPrismLayout() {
  return (
    <div className="w-full h-[600px] bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <TriPrism />
      </Canvas>
    </div>
  );
}