import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lightbox from '../components/Lightbox'
import RentalInformations from '../components/RentalInformations'
import GetDatas from '../components/GetDatas'
import Spinner from '../components/Spinner'
import '../styles/pages/accommodation.scss'

const Accommodation = () => {
  const datas = GetDatas()
  const url = window.location.hash.slice(1)

  const [accommodation, setAccommodation] = useState([])
  const loadDatas = () => {
    setAccommodation(datas.accommodations)
    datas.accommodations.forEach((el) =>
      el.id === url ? setAccommodation(el) : null
    )
  }

  useEffect(() => (datas.accommodations !== undefined ? loadDatas() : null))
  return (
    <div>
      <Header />
      {accommodation.pictures !== undefined ? (
        <Lightbox accommodation={accommodation} />
      ) : (
        <Spinner />
      )}
      {accommodation.host !== undefined ? (
        <>
          <RentalInformations accommodation={accommodation} />
          <Footer />
        </>
      ) : null}
    </div>
  )
}

export default Accommodation
