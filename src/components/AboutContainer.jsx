import React from 'react'
import arrow from '../assets/arrow.svg'

const AboutContainer = (props) => {
  console.log(props.props.title)
  return (
    <div>
      <div className="headerAboutContainer">
        <p>{props.props.title}</p>
        <img src={arrow} alt="chevron ouverture fermeture description" />
      </div>
    </div>
  )
}

export default AboutContainer
