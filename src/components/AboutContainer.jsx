import React from 'react'
import arrow from '../assets/arrow.svg'
import '../styles/components/aboutContainer.scss'

const AboutContainer = (props) => {
  console.log(props.props.title)
  const open = (e) => {
    console.log(e.currentTarget.parentElement)
    // e.currentTarget.toggle('active')
    console.log('click')
  }
  return (
    <div className="container">
      <div className="headerAboutContainer">
        <p>{props.props.title}</p>
        <img
          onClick={open}
          src={arrow}
          alt="chevron ouverture fermeture description"
        />
      </div>
    </div>
  )
}

export default AboutContainer
