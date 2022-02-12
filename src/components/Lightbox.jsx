import React from 'react'
import '../styles/components/lightbox.scss'

const Lightbox = ({ accommodation }) => {
  return (
    <div className="lightbox__container">
      <img src={accommodation.cover} alt="" />
    </div>
  )
}

export default Lightbox
