import React from 'react'
import '../styles/components/accommodationCard.scss'

const AccommodationCard = (props) => {
  console.log(props.props.title)
  return (
    <div className="accommodationCard__container">
      <div className="img__container">
        <img src={props.props.cover} alt="" />
      </div>
      <h5>{props.props.title}</h5>
    </div>
  )
}

export default AccommodationCard
