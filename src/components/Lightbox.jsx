import React, { useState } from 'react'
import rightArrow from '../assets/rightArrow.svg'
import '../styles/components/lightbox.scss'

const Lightbox = ({ accommodation }) => {
  let [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === accommodation.pictures.length - 1) {
      setCurrentIndex(0)
    }
  }
  const previous = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 0) {
      setCurrentIndex(accommodation.pictures.length - 1)
    }
  }
  return (
    <div className="lightbox__container">
      <img src={accommodation.pictures[currentIndex]} alt="" />
      <img onClick={next} className="rightArrow" src={rightArrow} alt="" />
      <img onClick={previous} className="leftArrow" src={rightArrow} alt="" />
    </div>
  )
}

export default Lightbox
