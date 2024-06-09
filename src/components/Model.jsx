/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, useAnimations, useGLTF } from '@react-three/drei'
import glbFile from '../assets/gallery.glb?url'
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Raycaster, Vector2 } from 'three'

const Model = ({ showPics, setShowPics }) => {
  const { scene, nodes, animations } = useGLTF(glbFile)
  const { names, actions, mixer } = useAnimations(animations, scene)

  const raycaster = useRef(new Raycaster())
  const mouse = useRef(new Vector2())
  const { camera, gl } = useThree()

  // Initailise
  useEffect(()=>{
    console.log(names, nodes)

    Object.keys(nodes).forEach(nodeName => {
      const node = nodes[nodeName]
      if (node.type == "Mesh") {
        node.castShadow = true
      }
    })

    scene.getObjectByName("Walls").receiveShadow = true

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleClick = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = - (event.clientY / window.innerHeight) * 2 + 1

      raycaster.current.setFromCamera(mouse.current, camera)

      const intersects = raycaster.current.intersectObjects(scene.children, true)

      for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.name === 'a') {
          console.log('Mesh "a" clicked')
          setShowPics(0)
          break
        }
      }
    }

    gl.domElement.addEventListener('click', handleClick)
    
    return () => {
      gl.domElement.removeEventListener('click', handleClick)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, camera, gl])
  
  return (
    <>
      <primitive object={scene} dispose={null} />

      <ambientLight intensity={0.4} />
      <pointLight intensity={10} position={[0,3.5,0]} castShadow />

      <PerspectiveCamera position={[0,2,-1]} makeDefault fov={50} />
      <OrbitControls 
        target={[0,2,0]} 
        minPolarAngle={Math.PI/2}
        maxPolarAngle={Math.PI/2}
      />
    </>
  )
}

export default Model

useGLTF.preload(glbFile)