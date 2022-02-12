import React from 'react'
import AboutContainer from './AboutContainer'

const RentalInformations = ({ accommodation }) => {
  // for (let i = 0; i < accommodation.rating; i++) {

  // }
  // console.log(accommodation.rating)
  return (
    <div className="rentalInformations">
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
        <div className="stars">{}</div>
      </div>
      <div className="rantalContainers">
        <AboutContainer el={accommodation} />
      </div>
    </div>
  )
}

export default RentalInformations
