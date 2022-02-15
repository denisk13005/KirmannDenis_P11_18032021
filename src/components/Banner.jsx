import React from 'react'
import '../styles/components/banner.scss'

const Banner = ({ background, text }) => {
  let className = text ? 'homeBanner' : 'aboutBanner'
  return (
    <div className={className}>
      <div className="bannerImg__container">
        <img src={background} alt="bannière" />
      </div>
      {text ? (
        <div className="homeBanner__title">
          <p>{text.chezvous}</p>
          <p>{text.partout}</p>
        </div>
      ) : null}
    </div>
  )
}

export default Banner
