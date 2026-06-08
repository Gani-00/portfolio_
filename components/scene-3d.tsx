"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei"
import type * as THREE from "three"

function FloatingSphere({ position, color, speed = 1, distort = 0.3, size = 1 }: {
  position: [number, number, number]
  color: string
  speed?: number
  distort?: number
  size?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function FloatingTorus({ position, color, speed = 1 }: {
  position: [number, number, number]
  color: string
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.2}>
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 100]} position={position}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </Torus>
    </Float>
  )
}

function FloatingBox({ position, color, speed = 1 }: {
  position: [number, number, number]
  color: string
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={0.8}>
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position}>
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} wireframe />
      </Box>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60A5FA" />
        
        <FloatingSphere position={[-3.5, 1.5, -2]} color="#2563EB" speed={0.8} distort={0.4} size={1.2} />
        <FloatingSphere position={[3.5, -1, -1]} color="#3B82F6" speed={1.2} distort={0.3} size={0.8} />
        <FloatingSphere position={[2, 2, -3]} color="#60A5FA" speed={0.6} distort={0.5} size={0.6} />
        
        <FloatingTorus position={[-2.5, -2, -2]} color="#2563EB" speed={0.7} />
        <FloatingTorus position={[4, 1, -4]} color="#60A5FA" speed={0.5} />
        
        <FloatingBox position={[-4, 0, -3]} color="#3B82F6" speed={0.9} />
        <FloatingBox position={[0, -2.5, -2]} color="#2563EB" speed={0.6} />
      </Canvas>
    </div>
  )
}
