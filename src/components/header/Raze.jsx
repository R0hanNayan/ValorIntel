import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Raze(props) {
  const { nodes, materials } = useGLTF('/raze.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Lights_Green_dark_0.geometry} material={materials.Green_dark} />
          <mesh geometry={nodes.Lights_Lights_0.geometry} material={materials.Lights} />
        </group>
        <group position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Face_Lights_0.geometry} material={materials.Lights} />
          <mesh geometry={nodes.Face_Face_emission_0.geometry} material={materials.Face_emission} />
        </group>
        <group position={[172.741, 134.725, 0.333]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Wheel_Grey_0.geometry} material={materials.Grey} />
          <mesh geometry={nodes.Wheel_Green_dark_0.geometry} material={materials.Green_dark} />
          <mesh geometry={nodes.Wheel_Metal_0.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Wheel_Lights_0.geometry} material={materials.Lights} />
        </group>
        <group position={[-170.369, 134.725, 0.334]} rotation={[Math.PI / 2, 0, 0]} scale={[-100, 100, 100]}>
          <mesh geometry={nodes.Wheel001_Grey_0.geometry} material={materials.Grey} />
          <mesh geometry={nodes.Wheel001_Green_dark_0.geometry} material={materials.Green_dark} />
          <mesh geometry={nodes.Wheel001_Metal_0.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Wheel001_Lights_0.geometry} material={materials.Lights} />
        </group>
        <mesh geometry={nodes.Back_Material004_0.geometry} material={materials['Material.004']} position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Bottom_Grey_0.geometry} material={materials.Grey} position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Body_Grey_0.geometry} material={materials.Grey} position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Top_Material003_0.geometry} material={materials['Material.003']} position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Top_sides_Material_0.geometry} material={materials.Material} position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Front_parts_Material002_0.geometry} material={materials['Material.002']} position={[0, 121.262, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Circle_Green_dark_0.geometry} material={materials.Green_dark} position={[97.536, 100.454, -0.118]} rotation={[-Math.PI / 2, 0.185, 0]} scale={6.974} />
        <mesh geometry={nodes.Cylinder001_Grey_0.geometry} material={materials.Grey} position={[104.908, 137.925, -0.655]} rotation={[-Math.PI / 2, 0.184, 0]} scale={[4.889, 4.889, 29.218]} />
        <mesh geometry={nodes.Cube003_Darker_grey_0.geometry} material={materials.Darker_grey} position={[99.53, 93.418, 0.744]} rotation={[-Math.PI / 2, 0.184, 0]} scale={[22.748, 15.532, 2.894]} />
        <mesh geometry={nodes.Cylinder002_Green_dark_0.geometry} material={materials.Green_dark} position={[98.715, 93.52, 0.567]} rotation={[-Math.PI / 2, 0.184, 0]} scale={[14.205, 14.205, 3.313]} />
        <mesh geometry={nodes.Cylinder003_Green_dark_0.geometry} material={materials.Green_dark} position={[114.453, 178.254, 0.567]} rotation={[-Math.PI / 2, 0.184, 0]} scale={[14.205, 14.205, 3.313]} />
        <mesh geometry={nodes.Cube004_Metal_0.geometry} material={materials.Metal} position={[113.495, 178.826, 0.744]} rotation={[-Math.PI / 2, 0.184, 0]} scale={[22.748, 15.532, 2.894]} />
        <mesh geometry={nodes.Cylinder004_Metal_0.geometry} material={materials.Metal} position={[139.32, 157.421, 10.103]} rotation={[-Math.PI / 2, 0.184, 0]} scale={[0.972, 0.972, 5.81]} />
        <mesh geometry={nodes.Plane001_Metal_0.geometry} material={materials.Metal} position={[142.49, 174.056, 10.67]} rotation={[-Math.PI / 2, 0.184, 0]} scale={1.726} />
        <mesh geometry={nodes.Cylinder005_Darker_grey_0.geometry} material={materials.Darker_grey} position={[137.482, 126.002, 0.41]} rotation={[Math.PI / 2, 1.387, Math.PI]} scale={[9.497, 9.497, 1.379]} />
        <mesh geometry={nodes.Plane002_Metal_0.geometry} material={materials.Metal} position={[147.242, 173.105, 10.67]} rotation={[-Math.PI / 2, 0.184, 0]} scale={1.726} />
        <mesh geometry={nodes.Circle001_Green_dark_0.geometry} material={materials.Green_dark} position={[-94.886, 100.454, -0.118]} rotation={[-Math.PI / 2, -0.185, 0]} scale={[-6.974, 6.974, 6.974]} />
        <mesh geometry={nodes.Cylinder006_Grey_0.geometry} material={materials.Grey} position={[-102.258, 137.925, -0.655]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-4.889, 4.889, 29.218]} />
        <mesh geometry={nodes.Cube005_Darker_grey_0.geometry} material={materials.Darker_grey} position={[-96.88, 93.418, 0.744]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-22.748, 15.532, 2.894]} />
        <mesh geometry={nodes.Cylinder007_Green_dark_0.geometry} material={materials.Green_dark} position={[-96.066, 93.52, 0.567]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-14.205, 14.205, 3.313]} />
        <mesh geometry={nodes.Cylinder008_Green_dark_0.geometry} material={materials.Green_dark} position={[-111.803, 178.254, 0.567]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-14.205, 14.205, 3.313]} />
        <mesh geometry={nodes.Cube006_Metal_0.geometry} material={materials.Metal} position={[-110.846, 178.826, 0.744]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-22.748, 15.532, 2.894]} />
        <mesh geometry={nodes.Cylinder009_Metal_0.geometry} material={materials.Metal} position={[-136.671, 157.421, 10.103]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-0.972, 0.972, 5.81]} />
        <mesh geometry={nodes.Plane003_Metal_0.geometry} material={materials.Metal} position={[-139.841, 174.056, 10.67]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-1.726, 1.726, 1.726]} />
        <mesh geometry={nodes.Cylinder010_Darker_grey_0.geometry} material={materials.Darker_grey} position={[-134.833, 126.002, 0.41]} rotation={[1.571, -1.387, Math.PI]} scale={[-9.497, 9.497, 1.379]} />
        <mesh geometry={nodes.Plane004_Metal_0.geometry} material={materials.Metal} position={[-144.593, 173.105, 10.67]} rotation={[-Math.PI / 2, -0.184, 0]} scale={[-1.726, 1.726, 1.726]} />
      </group>
    </group>
  )
}

useGLTF.preload('/raze.gltf')
