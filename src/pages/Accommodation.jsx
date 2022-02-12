import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Lightbox from '../components/Lightbox'
import RentalInformations from '../components/RentalInformations'
import ErrorPage from '../pages/ErrorPage'
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
  const rentalInformations =
    accommodation.host !== undefined ? (
      <RentalInformations accommodation={accommodation} />
    ) : null

  return (
    <div>
      <Header />
      <Lightbox accommodation={accommodation} />
      {rentalInformations}
      {/* <Footer /> */}
    </div>
  )
}

export default Accommodation
