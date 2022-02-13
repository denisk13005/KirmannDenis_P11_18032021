import React from 'react'
import '../styles/components/lightbox.scss'

const Lightbox = ({ accommodation }) => {
  console.log(accommodation.pictures)
  return (
    <div className="lightbox__container">
      <img src={accommodation.cover} alt="" />
    </div>
  )
}

export default Lightbox
