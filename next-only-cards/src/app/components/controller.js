import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Controller() {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/controller.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.position.y = Math.sin(t) * 0.1
      group.current.rotation.z = t * 0.5
    }
  })

  return (
    <>
    <OrbitControls />
    <ambientLight intensity={5} />
    <pointLight position={[10, 10, 10]} />
    <group ref={group} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.1} position={[0,-110,-35]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.SM_Gameboy_lambert1_0.geometry}
      material={materials.lambert1}
      rotation={[Math.PI / 2, 0, 0]}
    />
    </group>
    </>
  )
}

useGLTF.preload('/models/controller.glb')