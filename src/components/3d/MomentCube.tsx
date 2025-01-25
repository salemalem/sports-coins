'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { Text, PerspectiveCamera, useTexture } from '@react-three/drei';

interface MomentCubeProps {
  moment: {
    athlete: string;
    play: string;
    date: string;
    series: string;
    edition: string;
    rarity: string;
    image: string;
  };
  isHovered: boolean;
  hoverDuration: number;
}

function Cube({ moment, isHovered, hoverDuration }: MomentCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(moment.image);
  
  // Spring animations
  const { rotation, glow } = useSpring({
    rotation: isHovered ? [0, Math.PI / 4, 0] : [0, 0, 0],
    glow: isHovered ? 0.8 : 0.3,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  // Continuous rotation when not hovered
  useFrame(() => {
    if (meshRef.current && !isHovered) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const showVideo = isHovered && hoverDuration > 2000;

  return (
    <animated.group
      // @ts-ignore - Known issue with react-spring types
      rotation={rotation}
    >
      <mesh ref={meshRef}>
        {/* Main cube */}
        <boxGeometry args={[2, 3, 0.2]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.3}
          metalness={0.7}
        />

        {/* Front face */}
        <mesh position={[0, 0, 0.101]}>
          <planeGeometry args={[1.9, 2.9]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Holographic overlay */}
        <mesh position={[0, 0, 0.102]}>
          <planeGeometry args={[1.9, 2.9]} />
          <meshPhongMaterial
            color="#ffffff"
            opacity={0.1}
            transparent
            shininess={100}
            specular={new THREE.Color(isHovered ? "#8b5cf6" : "#6366f1")}
          />
        </mesh>

        {/* Rarity badge */}
        <group position={[-0.8, 1.3, 0.103]}>
          <mesh>
            <planeGeometry args={[0.8, 0.3]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
          <Text
            position={[0, 0, 0.001]}
            fontSize={0.12}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            {moment.rarity}
          </Text>
        </group>

        {/* Edition number */}
        <group position={[0.8, 1.3, 0.103]}>
          <mesh>
            <planeGeometry args={[0.8, 0.3]} />
            <meshBasicMaterial color="#1f2937" />
          </mesh>
          <Text
            position={[0, 0, 0.001]}
            fontSize={0.1}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {moment.edition}
          </Text>
        </group>

        {/* Glowing edges */}
        <animated.mesh>
          <boxGeometry args={[2.05, 3.05, 0.25]} />
          <meshBasicMaterial
            color="#8b5cf6"
            opacity={glow}
            transparent
            wireframe
          />
        </animated.mesh>
      </mesh>
    </animated.group>
  );
}

export default function MomentCubeScene({ moment, isHovered, hoverDuration }: MomentCubeProps) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Cube moment={moment} isHovered={isHovered} hoverDuration={hoverDuration} />
    </Canvas>
  );
}