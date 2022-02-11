import React, { useEffect, useState } from 'react'
import AccommodationCard from '../components/AccommodationCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/pages/home.scss'
const Home = () => {
  const [accommodations, setAccommodations] = useState([])
  useEffect(() => {
    fetch('./data/datas.json')
      .then((response) => response.json())
      .then((data) => setAccommodations(data.accommodations))
  }, [])
  console.log(accommodations)
  return (
    <div>
      <Header />
      <div className="container">
        {accommodations.map((accommodation) => (
          <AccommodationCard accommodation={accommodation} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Home
