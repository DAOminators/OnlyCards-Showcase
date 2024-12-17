import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/subbu.glb')

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.position.y = Math.sin(t) * 0.5
        group.current.rotation.y = t * 0.5
    })

    return (
        <group ref={group} {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 3]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
                material={materials['Material.001']}
            />
            <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials.Down} />
        </group>
    )
}

useGLTF.preload('/models/subbu.glb')