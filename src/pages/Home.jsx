import React, { useEffect, useState } from 'react'
import AccommodationCard from '../components/AccommodationCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import background from '../assets/backgroundHome.png'
import '../styles/pages/home.scss'
import Banner from '../components/Banner'
import fetchDatas from '../GetDatas'
import Spinner from '../components/Spinner'
const Home = () => {
  const [datas, setDatas] = useState()
  const loadDatas = async () => {
    setDatas(await fetchDatas())
  }
  useEffect(() => {
    loadDatas()
  }, [])
  const text = {
    chezvous: 'Chez vous,',
    partout: 'partout et ailleurs',
  }
  return (
    <section>
      <Header />

      <Banner background={background} text={text} />
      {datas ? (
        <div className="homeContainer">
          {datas.accommodations.map((accommodation, index) => (
            <AccommodationCard key={index} accommodation={accommodation} />
          ))}
          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  )
}

export default Home
