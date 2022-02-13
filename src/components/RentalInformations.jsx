import React from 'react'
import AboutContainer from './AboutContainer'
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
        <div className="tagsAndStars">
          <ul className="tags">
            {accommodation.tags.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <div className="stars">
            <div className="pinkStars">
              {nbOfPinkStars.map((el) => (
                <img src={el} alt="étoile rose" />
              ))}
            </div>
            <div className="greyStars">
              {nbOfGreyStars.map((el) => (
                <img src={el} alt="étoile rose" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rantalContainers">
        <AboutContainer el={accommodation} />
      </div>
    </div>
  )
}

export default RentalInformations
