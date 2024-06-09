/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, useAnimations, useGLTF } from '@react-three/drei'
import glbFile from '../assets/gallery.glb?url'
import { useEffect } from 'react'

const Model = () => {
  const { scene, nodes, animations } = useGLTF(glbFile)
  const { names, actions, mixer } = useAnimations(animations, scene)

  // Initailise
  useEffect(()=>{
    console.log(names, nodes)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <primitive object={scene} dispose={null} />

      <ambientLight intensity={0.4} />
      <directionalLight intensity={1} position={[0,10,0]} castShadow />

      <PerspectiveCamera position={[0,2,0]} makeDefault fov={50} />
      <OrbitControls target={[0,2,0]} />
    </>
  )
}

export default Model

useGLTF.preload(glbFile)