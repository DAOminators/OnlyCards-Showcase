import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Gametrller() {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/cattroller.glb')

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
      <group ref={group} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.cattroller}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.outline}
        />
      </group>
      </>
    )
}

useGLTF.preload('/models/cattroller.glb')