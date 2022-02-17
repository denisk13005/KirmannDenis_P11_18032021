import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import '../styles/components/aboutContainer.scss'

const AboutContainer = ({ el }) => {
  // const page = el.id ? 'accommodation' : 'about' //si l'élément a un id alors on est sur la page des logements
  const [isActive, setIsActive] = useState(false)
  const [isActive2, setIsActive2] = useState(false)

  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }
  const toggleB = () => {
    isActive2 ? setIsActive2(false) : setIsActive2(true)
  }

  return !el.id ? (
    <div className="aboutContainer">
      <div className="headerAboutContainer">
        <p>{el.title}</p>
        <img
          className={!isActive ? 'active' : 'notActive'}
          onClick={toggle}
          src={arrow}
          alt="chevron ouverture fermeture description"
        />
      </div>
      <div className={isActive ? 'visible' : 'notVisible'}>
        {el.description}
      </div>
    </div>
  ) : (
    <div className="decriptionAndEquipments">
      <div className="aboutContainer">
        <div className="headerAboutContainer">
          <p>Description</p>
          <img
            className={!isActive ? 'active' : 'notActive'}
            onClick={toggle}
            src={arrow}
            alt="chevron ouverture fermeture description"
          />
        </div>
        <div className={isActive ? 'visible' : 'notVisible'}>
          {el.description}
        </div>
      </div>
      <div className="aboutContainer">
        <div className="headerAboutContainer">
          <p>Équipements</p>
          <img
            className={!isActive2 ? 'active2' : 'notActive2'}
            onClick={toggleB}
            src={arrow}
            alt="chevron ouverture fermeture description"
          />
        </div>
        <div className={isActive2 ? 'visible2' : 'notVisible2'}>
          {el.equipments.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutContainer
