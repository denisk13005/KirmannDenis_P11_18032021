import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/accommodationCard.scss'

const AccommodationCard = ({ accommodation }) => {
  return (
    <NavLink
      className={'link__container'}
      to={'/accommodation/#' + accommodation.id}
    >
      <div className="img__container">
        <img
          src={accommodation.cover}
          alt={'img ' + accommodation.title}
          className="img"
        />
      </div>
      <p>{accommodation.title}</p>
    </NavLink>
  )
}

export default AccommodationCard
