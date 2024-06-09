/* eslint-disable react/prop-types */
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import Model from "./Model"

const Gallery = ({ isMobile=false }) => {
  const containerRef = useRef()

  return (
    <div ref={containerRef} style={{width:"100%", height:"100%"}}>
      <Canvas shadows dpr={isMobile?0.7:2}>
        <Suspense>
          <Model />
        </Suspense>
      </Canvas>
      
    </div>
  )
}

export default Gallery
