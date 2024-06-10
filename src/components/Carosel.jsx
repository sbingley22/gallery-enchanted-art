/* eslint-disable react/prop-types */
import { useState } from "react"

const images = [
  [
    './a (1).jpg',
    './a (2).jpg',
    './a (3).jpg',
    './a (4).jpg',
    './a (5).jpg',
  ]
]

const Carosel = ({ showPics, setShowPics, setShowInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images[showPics].length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images[showPics].length - 1 ? 0 : prevIndex + 1))
  }

  const goBack = () => {
    setShowPics(null)
    setShowInfo(null)
  }

  if (showPics == null) return

  //console.log("Carosel active")
  
  return (
    <div className="carousel">
      <button onClick={goBack} className="carousel-button back">{"X"}</button>
      <button onClick={goToPrevious} className="carousel-button previous">{"<"}</button>
      <img src={images[showPics][currentIndex]} alt="carousel" className="carousel-image" />
      <button onClick={goToNext} className="carousel-button next">{">"}</button>
    </div>
  )
}

export default Carosel
