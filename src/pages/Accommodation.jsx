import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lightbox from '../components/Lightbox'
import RentalInformations from '../components/RentalInformations'
import '../styles/pages/accommodation.scss'

const Accommodation = () => {
  const [accommodation, setAccommodation] = useState([])

  useEffect(() => {
    fetch('/data/datas.json')
      .then((response) => response.json())
      .then((data) =>
        setAccommodation(
          data.accommodations.find(
            (el) => el.id === window.location.hash.slice(1) // récupère le logement concerné par l'id dans l'url
          )
        )
      )
  }, [])

  return (
    <div>
      <Header />
      {accommodation.pictures !== undefined ? (
        <Lightbox accommodation={accommodation} />
      ) : null}
      {accommodation.host !== undefined ? (
        <RentalInformations accommodation={accommodation} />
      ) : null}
      <Footer />
    </div>
  )
}

export default Accommodation
