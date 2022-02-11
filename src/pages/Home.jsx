import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/pages/home.scss'
const Home = () => {
  const [Accommodations, setAccommodations] = useState()
  useEffect(() => {
    fetch('./data/datas.json')
      .then((response) => response.json())
      .then((data) => setAccommodations(data.accommodations))
  }, [])
  console.log(Accommodations)
  return (
    <div>
      <Header />
      <h1>Accueil</h1>
      <Footer />
    </div>
  )
}

export default Home
