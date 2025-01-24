'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { Text, PerspectiveCamera, useTexture } from '@react-three/drei';

interface MomentCardProps {
  moment: {
    athlete: string;
    title: string;
    rarity: string;
    preview: string;
  };
}

function Card({ moment }: MomentCardProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Load athlete image texture
  const texture = useTexture(moment.preview);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  // Spring animations for hover effect
  const { rotation } = useSpring({
    rotation: hovered ? [0, Math.PI / 6, 0] : [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 }
  });

  // Continuous rotation animation
  useFrame((state) => {
    if (mesh.current && !hovered) {
      mesh.current.rotation.y += 0.005;
    }
  });

  // Card dimensions
  const width = 2;
  const height = 3;
  const thickness = 0.2;

  return (
    <animated.group
      // @ts-ignore - Known issue with react-spring types
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh ref={mesh}>
        {/* Main card body */}
        <boxGeometry args={[width, height, thickness]} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.3}
          metalness={0.7}
        />

        {/* Front face with athlete image */}
        <mesh position={[0, 0, thickness / 2 + 0.001]}>
          <planeGeometry args={[width - 0.1, height - 0.1]} />
          <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Overlay gradient */}
        <mesh position={[0, 0, thickness / 2 + 0.002]}>
          <planeGeometry args={[width - 0.1, height - 0.1]} />
          <meshBasicMaterial
            color={hovered ? "#8b5cf6" : "#6366f1"}
            opacity={0.2}
            transparent
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Rarity badge */}
        <group position={[-0.8, 1.3, thickness / 2 + 0.003]}>
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

        {/* Player name */}
        <group position={[0, -1.2, thickness / 2 + 0.003]}>
          <mesh>
            <planeGeometry args={[width - 0.2, 0.4]} />
            <meshBasicMaterial color="#000000" opacity={0.7} transparent />
          </mesh>
          <Text
            position={[0, 0, 0.001]}
            fontSize={0.15}
            color="#ffffff"
            anchorX="center"
            maxWidth={1.8}
          >
            {moment.athlete}
          </Text>
        </group>

        {/* Glowing edges */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[width + 0.05, height + 0.05, thickness + 0.05]} />
          <meshBasicMaterial
            color={hovered ? "#8b5cf6" : "#6366f1"}
            opacity={0.3}
            transparent
            wireframe
          />
        </mesh>

        {/* Holographic effect */}
        <mesh position={[0, 0, thickness / 2 + 0.004]}>
          <planeGeometry args={[width - 0.1, height - 0.1]} />
          <meshPhongMaterial
            color="#ffffff"
            opacity={0.1}
            transparent
            shininess={100}
            specular={new THREE.Color(hovered ? "#8b5cf6" : "#6366f1")}
          />
        </mesh>
      </mesh>
    </animated.group>
  );
}

export default function MomentCardScene({ moment }: { moment: any }) {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Card moment={moment} />
      </Canvas>
    </div>
  );
}