import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Mushrooms(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/stylized_mushrooms.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = t * 0.25
    }
  })

  return (
    <>
    < OrbitControls />
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.749} position={[0.24, -1, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_mushroms_0.geometry}
            material={materials.mushroms}
          />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle001_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_ground_0.geometry}
              material={materials.ground}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle002_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle005_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere004_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle006_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle004_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere006_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere007_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere008_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere009_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere010_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere001_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere002_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere003_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere005_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere011_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere012_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane003_mushroms_0.geometry}
              material={materials.mushroms}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_ground_0.geometry}
              material={materials.ground}
            />
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('models/stylized_mushrooms.glb')