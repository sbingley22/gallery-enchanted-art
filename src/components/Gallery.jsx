/* eslint-disable react/prop-types */
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Model from "./Model"
import Carosel from "./Carosel"
import InfoText from "./InfoText"

const Gallery = ({ isMobile=false }) => {
  const containerRef = useRef()
  const [showPics, setShowPics] = useState(null)

  return (
    <div ref={containerRef} style={{width:"100%", height:"100%"}}>
      <Canvas shadows dpr={isMobile?0.7:2}>
        <Suspense>
          <Model showPics={showPics} setShowPics={setShowPics} />
        </Suspense>
      </Canvas>
      
      <Carosel showPics={showPics} setShowPics={setShowPics} />

      <InfoText />
    </div>
  )
}

export default Gallery
