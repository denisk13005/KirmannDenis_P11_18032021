import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lightbox from '../components/Lightbox'
import RentalInformations from '../components/RentalInformations'
import fetchDatas from '../components/GetDatas'
import Spinner from '../components/Spinner'
import '../styles/pages/accommodation.scss'
import { useParams } from 'react-router-dom'

const Accommodation = () => {
  const [datas, setDatas] = useState()
  const loadDatas = async () => {
    setDatas(await fetchDatas())
  }
  useEffect(() => {
    loadDatas()
  }, [])
  console.log(datas)
  const { accommodationId } = useParams()
  console.log(accommodationId)

  const [accommodation, setAccommodation] = useState([])
  const loadAccommodation = () => {
    datas.accommodations.forEach((el) =>
      el.id === accommodationId ? setAccommodation(el) : null
    )
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (datas ? loadAccommodation() : null), [datas])
  console.log(accommodation)
  return (
    <section>
      <Header />
      {accommodation.pictures ? (
        <Lightbox accommodation={accommodation} />
      ) : (
        <Spinner />
      )}
      {accommodation.host ? (
        <div>
          <RentalInformations accommodation={accommodation} />
          <Footer />
        </div>
      ) : null}
    </section>
  )
}

export default Accommodation
