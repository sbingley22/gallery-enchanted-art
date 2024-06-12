/* eslint-disable react/prop-types */
import { useState } from "react"

const images = [
  [
    './a (1).jpg',
    './a (2).jpg',
    './a (3).jpg',
    './a (4).jpg',
    './a (5).jpg',
  ],
  [

  ],
  [
    './c (1).png',
    './c (1).jpg',
    './c (2).jpg',
    './c (3).jpg',
    './c (4).jpg',
    './c (5).jpg',
    './c (6).jpg',
    './c (7).jpg',
  ],
  [
    './d (1).jpg',
    './d (2).jpg',
    './d (3).jpg',
    './d (4).jpg',
    './d (5).jpg',
    './d (6).jpg',
    './d (7).jpg',
    './d (8).jpg',
  ],
  [
    './e (1).png',
    './e (2).png',
    './e (1).jpg',
    './e (2).jpg',
    './e (3).jpg',
    './e (4).jpg',
    './e (5).jpg',
    './e (6).jpg',
    './e (7).jpg',
  ],
  [
    './f (1).png',
    './f (2).png',
    './f (3).png',
    './f (4).png',
    './f (5).png',
    './f (6).png',
    './f (1).jpg',
    './f (2).jpg',
  ],
  [
    './g (1).png',
    './g (1).jpg',
    './g (2).jpg',
    './g (3).jpg',
    './g (4).jpg',
    './g (5).jpg',
    './g (6).jpg',
    './g (7).jpg',
  ],
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
