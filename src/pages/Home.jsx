import React, { useEffect, useState } from 'react'
import AccommodationCard from '../components/AccommodationCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import background from '../assets/backgroundHome.png'
import '../styles/pages/home.scss'
const Home = () => {
  const [accommodations, setAccommodations] = useState([])
  useEffect(() => {
    fetch('./data/datas.json')
      .then((response) => response.json())
      .then((data) => setAccommodations(data.accommodations))
  }, [])
  return (
    <div>
      <Header />
      <div className="homeBanner">
        <div className="bannerImg__container">
          <img src={background} alt="bannière" />
        </div>
        <div className="homeBanner__title">
          <p>Chez vous,</p>
          <p>partout et ailleurs</p>
        </div>
      </div>
      <div className="homeContainer">
        {accommodations.map((accommodation, index) => (
          <AccommodationCard key={index} accommodation={accommodation} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Home
