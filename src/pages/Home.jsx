import React, { useEffect, useState } from 'react'
import AccommodationCard from '../components/AccommodationCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import background from '../assets/backgroundHome.png'
import '../styles/pages/home.scss'
import Banner from '../components/Banner'
import GetDatas from '../components/GetDatas'
import Spinner from '../components/Spinner'
const Home = () => {
  const datas = GetDatas()
  const accommodations = datas.accommodations
  console.log(accommodations)

  const text = {
    chezvous: 'Chez vous,',
    partout: 'partout et ailleurs',
  }
  return (
    <div>
      <Header />

      <Banner background={background} text={text} />
      <div className="homeContainer">
        {accommodations !== undefined ? (
          accommodations.map((accommodation, index) => (
            <AccommodationCard key={index} accommodation={accommodation} />
          ))
        ) : (
          <Spinner />
        )}
        {accommodations ? <Footer /> : null}
      </div>
    </div>
  )
}

export default Home
