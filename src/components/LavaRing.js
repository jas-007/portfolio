'use client';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Ring() {
    const ringRef = useRef();
    
    return (
        <mesh ref={ringRef}>
            <torusGeometry args={[3, 0.5, 32, 100]} />
            <meshStandardMaterial
                color="#808080"  // Gray color
                metalness={0.9}
                roughness={0.1}
                emissive="#ff0000"  // Red lava glow
                emissiveIntensity={0.2}  // Reduced glow intensity
            />
        </mesh>
    );
}

export default function LavaRing() {
    return (
        <div className="ring-container">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Ring />
            </Canvas>
        </div>
    );
} 