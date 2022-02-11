import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import '../styles/components/aboutContainer.scss'

const AboutContainer = (props) => {
  const [isActive, setIsActive] = useState(false)

  console.log(props.props.title)
  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }
  return (
    <div className="container">
      <div className="headerAboutContainer">
        <p>{props.props.title}</p>
        <img
          className={isActive ? 'active' : 'notActive'}
          onClick={toggle}
          src={arrow}
          alt="chevron ouverture fermeture description"
        />
      </div>
    </div>
  )
}

export default AboutContainer
