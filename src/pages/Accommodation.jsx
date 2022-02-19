import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lightbox from '../components/Lightbox'
import RentalInformations from '../components/RentalInformations'
import GetDatas from '../components/GetDatas'
import '../styles/pages/accommodation.scss'

const Accommodation = () => {
  const datas = GetDatas()
  const url = window.location.hash.slice(1)
  console.log(datas.accommodations)
  // console.log(url)
  // let accommodations = datas.accommodations
  // let accommodation
  // accommodations.forEach((el) => (el.id === url ? (accommodation = el) : null))

  const [accommodation, setAccommodation] = useState([])
  const loadDatas = () => {
    setAccommodation(datas.accommodations)
    datas.accommodations.forEach((el) =>
      el.id === url ? setAccommodation(el) : null
    )
  }

  useEffect(() => (datas.accommodations !== undefined ? loadDatas() : null))
  console.log(accommodation)
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
