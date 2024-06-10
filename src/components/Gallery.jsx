/* eslint-disable react/prop-types */
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Model from "./Model"
import Carosel from "./Carosel"
import InfoText from "./InfoText"

const Gallery = ({ isMobile=false }) => {
  const containerRef = useRef()
  const [showPics, setShowPics] = useState(null)
  const [showInfo, setShowInfo] = useState("Click and drag to look around. Select a piece to view individual pictures.")

  return (
    <div ref={containerRef} style={{width:"100%", height:"100%"}}>
      <Canvas shadows dpr={isMobile?0.7:2}>
        <Suspense>
          <Model showPics={showPics} setShowPics={setShowPics} setShowInfo={setShowInfo} />
        </Suspense>
      </Canvas>

      <InfoText showInfo={showInfo} setShowInfo={setShowInfo} />
      
      <Carosel showPics={showPics} setShowPics={setShowPics} setShowInfo={setShowInfo} />
    </div>
  )
}

export default Gallery
