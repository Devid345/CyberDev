'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function CyberSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.LineSegments>(null)
  
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 1), [])
  const wireframeGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.52, 1), [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = state.clock.elapsedTime * 0.15
      wireframeRef.current.rotation.y = state.clock.elapsedTime * 0.25
    }
  })

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#00ffff"
          emissive="#0066ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <lineSegments ref={wireframeRef} geometry={wireframeGeometry}>
        <lineBasicMaterial color="#00ffff" transparent opacity={0.8} />
      </lineSegments>
    </group>
  )
}

const CUBES_DATA = [
  { position: [-3.2, 1.5, -2.1] as [number, number, number], rotation: [1.2, 2.8, 0] as [number, number, number], size: 0.25 },
  { position: [2.8, -2.1, 1.5] as [number, number, number], rotation: [2.5, 0.8, 0] as [number, number, number], size: 0.32 },
  { position: [-1.5, 3.2, -0.8] as [number, number, number], rotation: [0.5, 1.9, 0] as [number, number, number], size: 0.18 },
  { position: [4.2, 0.5, 2.1] as [number, number, number], rotation: [3.1, 2.2, 0] as [number, number, number], size: 0.28 },
  { position: [-2.8, -3.5, -1.2] as [number, number, number], rotation: [1.8, 0.3, 0] as [number, number, number], size: 0.35 },
  { position: [1.1, 2.1, 3.5] as [number, number, number], rotation: [2.9, 1.5, 0] as [number, number, number], size: 0.22 },
  { position: [-4.5, -1.2, 2.8] as [number, number, number], rotation: [0.2, 2.1, 0] as [number, number, number], size: 0.15 },
  { position: [3.5, 1.8, -3.2] as [number, number, number], rotation: [1.5, 3.1, 0] as [number, number, number], size: 0.38 },
]

function FloatingCubes() {
  const cubes = CUBES_DATA

  return (
    <>
      {cubes.map((cube, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={cube.position} rotation={cube.rotation}>
            <boxGeometry args={[cube.size, cube.size, cube.size]} />
            <meshStandardMaterial
              color={`hsl(${180 + i * 20}, 100%, 50%)`}
              emissive={`hsl(${180 + i * 20}, 100%, 25%)`}
              emissiveIntensity={0.3}
              transparent
              opacity={0.7}
              wireframe={i % 2 === 0}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function GlowingRing() {
  const ringRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshBasicMaterial color="#00ffff" transparent opacity={0.6} />
    </mesh>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066ff" />
        
        <CyberSphere />
        <FloatingCubes />
        <GlowingRing />
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}