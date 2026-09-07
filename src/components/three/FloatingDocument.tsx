import { Float, RoundedBox } from '@react-three/drei'

interface FloatingDocumentProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  color?: string
  accent?: string
}

/**
 * Reusable floating "document" mesh: a paper-like card with a colored
 * accent stripe, used to scatter document motifs around 3D scenes.
 */
export function FloatingDocument({
  position,
  rotation = [0.05, 0.3, -0.05],
  scale = 1,
  color = '#ffffff',
  accent = '#7C3AED',
}: FloatingDocumentProps) {
  return (
    <Float speed={1.6} floatIntensity={0.9} rotationIntensity={0.4}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[0.85, 1.1, 0.02]} radius={0.04} smoothness={3}>
          <meshStandardMaterial color={color} roughness={0.85} />
        </RoundedBox>
        <mesh position={[0, 0.4, 0.012]}>
          <planeGeometry args={[0.6, 0.08]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0.22, 0.012]}>
          <planeGeometry args={[0.6, 0.04]} />
          <meshStandardMaterial color="#CBD5E1" />
        </mesh>
        <mesh position={[0, 0.08, 0.012]}>
          <planeGeometry args={[0.5, 0.04]} />
          <meshStandardMaterial color="#CBD5E1" />
        </mesh>
      </group>
    </Float>
  )
}
