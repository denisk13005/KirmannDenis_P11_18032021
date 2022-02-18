import React from 'react'
import greyStar from '../assets/greyStar.svg'
import pinkStar from '../assets/pinkStar.svg'

const stars = ({ accommodation }) => {
  const nbOfPinkStars = []
  for (let i = 0; i < accommodation.rating; i++) {
    nbOfPinkStars.push(pinkStar)
  }
  let nbOfGreyStars = []
  for (let i = 0; i < 5 - accommodation.rating; i++) {
    nbOfGreyStars.push(greyStar)
  }
  return (
    <div className="stars">
      <div className="pinkStars">
        {nbOfPinkStars.map((el, index) => (
          <img key={index} src={el} alt="étoile rose" />
        ))}
      </div>
      <div className="greyStars">
        {nbOfGreyStars.map((el, index) => (
          <img key={index} src={el} alt="étoile rose" />
        ))}
      </div>
    </div>
  )
}

export default stars
