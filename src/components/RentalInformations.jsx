import React from 'react'
import AboutContainer from './AboutContainer'
import Stars from '../components/Stars'

import Tags from './Tags'

const RentalInformations = ({ accommodation }) => {
  return (
    <section className="rentalInformations">
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
          <Tags tags={accommodation.tags} />
          <Stars accommodation={accommodation} />
        </div>
      </div>
      <div className="rantalContainers">
        <AboutContainer el={accommodation} />
      </div>
    </section>
  )
}

export default RentalInformations
