import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lightbox from '../components/Lightbox'
import RentalInformations from '../components/RentalInformations'
import GetDatas from '../components/GetDatas'
import Spinner from '../components/Spinner'
import '../styles/pages/accommodation.scss'
import { useParams } from 'react-router-dom'

const Accommodation = () => {
  const datas = GetDatas()
  const { accommodationId } = useParams()
  console.log(accommodationId)

  const [accommodation, setAccommodation] = useState([])
  const loadDatas = () => {
    datas.accommodations.forEach((el) =>
      el.id === accommodationId ? setAccommodation(el) : null
    )
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (datas.accommodations ? loadDatas() : null), [loadDatas])
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
