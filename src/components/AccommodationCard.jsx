import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/accommodationCard.scss'

const AccommodationCard = (accommodation) => {
  return (
    <NavLink
      className={'link__container'}
      to={'/accommodation/#' + accommodation.accommodation.id}
    >
      {/* <div className="img__container">
        <img
          src={accommodation.accommodation.cover}
          alt={'img ' + accommodation.accommodation.title}
          className="img"
        />
      </div>
      <p>{accommodation.accommodation.title}</p> */}
      t
    </NavLink>
  )
}

export default AccommodationCard
