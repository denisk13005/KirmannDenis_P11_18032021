import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import '../styles/components/aboutContainer.scss'

const AboutContainer = (el) => {
  const [isActive, setIsActive] = useState(false)

  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }
  return (
    <div className="aboutContainer">
      <div className="headerAboutContainer">
        <p>{el.el.title}</p>
        <img
          className={!isActive ? 'active' : 'notActive'}
          onClick={toggle}
          src={arrow}
          alt="chevron ouverture fermeture description"
        />
      </div>
      <div className={isActive ? 'visible' : 'notVisible'}>
        {el.el.description}
      </div>
    </div>
  )
}

export default AboutContainer
