import React, { useEffect, useState } from 'react'
import AccommodationCard from '../components/AccommodationCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import background from '../assets/backgroundHome.png'
import '../styles/pages/home.scss'
import Banner from '../components/Banner'
const Home = () => {
  const [accommodations, setAccommodations] = useState([])
  useEffect(() => {
    fetch('./data/datas.json')
      .then((response) => response.json())
      .then((data) => setAccommodations(data.accommodations))
  }, [])
  const text = {
    chezvous: 'Chez vous,',
    partout: 'partout et ailleurs',
  }
  return (
    <div>
      <Header />

      <Banner background={background} text={text} />
      <div className="homeContainer">
        {accommodations !== undefined
          ? accommodations.map((accommodation, index) => (
              <AccommodationCard key={index} accommodation={accommodation} />
            ))
          : null}
      </div>

      <Footer />
    </div>
  )
}

export default Home
