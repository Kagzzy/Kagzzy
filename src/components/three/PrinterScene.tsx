import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Float, RoundedBox } from '@react-three/drei'
import type { Group } from 'three'
import { FloatingDocument } from './FloatingDocument'

function Printer() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.25 - 0.3
  })

  return (
    <group ref={groupRef}>
      {/* Base */}
      <RoundedBox args={[2.6, 1.1, 1.8]} radius={0.14} smoothness={4} castShadow>
        <meshStandardMaterial color="#101828" roughness={0.5} metalness={0.3} />
      </RoundedBox>

      {/* Paper tray */}
      <mesh position={[0, 0.15, 1.05]}>
        <boxGeometry args={[2, 0.08, 0.5]} />
        <meshStandardMaterial color="#F8FAFC" roughness={0.9} />
      </mesh>

      {/* Top scanner lid */}
      <RoundedBox args={[2.2, 0.18, 1.5]} radius={0.06} position={[0, 0.65, -0.1]}>
        <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.4} />
      </RoundedBox>

      {/* Control panel */}
      <RoundedBox args={[0.7, 0.05, 0.4]} radius={0.03} position={[0.7, 0.75, 0.4]}>
        <meshStandardMaterial color="#0F172A" />
      </RoundedBox>
      <mesh position={[0.7, 0.79, 0.4]}>
        <planeGeometry args={[0.4, 0.15]} />
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.7} />
      </mesh>

      {/* Status light */}
      <mesh position={[-0.9, 0.7, 0.85]}>
        <circleGeometry args={[0.06, 24]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={1} />
      </mesh>

      {/* Output paper sheet */}
      <Float speed={2} floatIntensity={0.5} rotationIntensity={0.2}>
        <mesh position={[0, 0.28, 1.3]} rotation={[-0.35, 0, 0.02]}>
          <planeGeometry args={[1.6, 1]} />
          <meshStandardMaterial color="#ffffff" roughness={0.9} side={2} />
        </mesh>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <group>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} castShadow />
      <pointLight position={[-3, 1, 2]} intensity={0.9} color="#7C3AED" />
      <pointLight position={[3, -1, -2]} intensity={0.7} color="#2563EB" />

      <Printer />
      <FloatingDocument position={[-2.1, 0.9, -0.5]} scale={0.75} accent="#06B6D4" />
      <FloatingDocument position={[2.3, -0.7, 0.4]} scale={0.65} accent="#10B981" rotation={[0, -0.4, 0.1]} />

      <ContactShadows position={[0, -0.85, 0]} opacity={0.5} scale={7} blur={2.2} far={2.5} />
      <Environment preset="city" />
    </group>
  )
}

/** Cinematic 3D printer visualization for the printer-integration section. */
export function PrinterScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [2.5, 1.2, 5], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
