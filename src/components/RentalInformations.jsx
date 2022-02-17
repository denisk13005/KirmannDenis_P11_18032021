import React from 'react'
import AboutContainer from './AboutContainer'
import Stars from '../components/Stars'
import greyStar from '../assets/greyStar.svg'
import pinkStar from '../assets/pinkStar.svg'

const RentalInformations = ({ accommodation }) => {
  const nbOfPinkStars = []
  for (let i = 0; i < accommodation.rating; i++) {
    nbOfPinkStars.push(pinkStar)
  }
  let nbOfGreyStars = []
  for (let i = 0; i < 5 - accommodation.rating; i++) {
    nbOfGreyStars.push(greyStar)
  }
  return (
    <div className="rentalInformations">
      <div className="informations">
        <div className="accommodationTitleAndImg">
          <div className="accommodationTitleAndImg__title">
            <h1>{accommodation.title}</h1>
            <h2>{accommodation.location}</h2>
          </div>
          <div className="accommodationTitleAndImg__img">
            <h2>{accommodation.host.name}</h2>
            <img src={accommodation.host.picture} alt="" />
          </div>
        </div>
        <Stars accommodation={accommodation} />
      </div>
      <div className="rantalContainers">
        <AboutContainer el={accommodation} />
      </div>
    </div>
  )
}

export default RentalInformations
