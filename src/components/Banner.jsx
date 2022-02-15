import React from 'react'
import '../styles/components/banner.scss'

const Banner = ({ background }) => {
  return (
    <div className="homeBanner">
      <div className="bannerImg__container">
        <img src={background} alt="bannière" />
      </div>
      <div className="homeBanner__title">
        <p>Chez vous,</p>
        <p>partout et ailleurs</p>
      </div>
    </div>
  )
}

export default Banner
