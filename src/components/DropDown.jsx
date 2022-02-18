import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import '../styles/components/aboutContainer.scss'

const DropDown = (props) => {
  const [isActive, setIsActive] = useState(false)
  const toggle = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }
  console.log(props.rental)
  console.log(props.about)
  return (
    <div className="aboutContainer">
      <div className="headerAboutContainer">
        <p>{props.rental ? props.title : props.about.title}</p>
        <img
          className={!isActive ? 'active' : 'notActive'}
          onClick={toggle}
          src={arrow}
          alt="chevron ouverture fermeture description"
        />
      </div>
      <div className={isActive ? 'visible' : 'notVisible'}>
        {props.rental
          ? props.title === 'Description'
            ? props.rental.description
            : props.rental.equipments.map((el) => <li>{el}</li>)
          : props.about.description}
      </div>
    </div>
  )
}

export default DropDown
