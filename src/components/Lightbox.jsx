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
  const rightArrowClassName =
    accommodation.pictures.length !== 1 ? 'rightArrow' : 'none'
  let leftArrowClassName =
    accommodation.pictures.length !== 1 ? 'leftArrow' : 'none'

  return (
    <div className="lightbox__container">
      <img src={accommodation.pictures[currentIndex]} alt="" />
      <img
        onClick={next}
        className={rightArrowClassName}
        src={rightArrow}
        alt="next"
      />
      <img
        onClick={previous}
        className={leftArrowClassName}
        src={rightArrow}
        alt="previous"
      />
      <p>
        {currentIndex + 1}/{accommodation.pictures.length}
      </p>
    </div>
  )
}

export default Lightbox
