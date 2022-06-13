import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lightbox from '../components/Lightbox'
import RentalInformations from '../components/RentalInformations'
import { fetchAccommodations } from '../GetDatas.js'
import Spinner from '../components/Spinner'
import '../styles/pages/accommodation.scss'
import { useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage'

const Accommodation = () => {
  const { accommodationId } = useParams()
  const [accommodation, setAccommodation] = useState([])
  const [goodUrl, setGoodUrl] = useState(true)

  useEffect(() => {
    const loadAccommodation = async () => {
      setGoodUrl(true)
      const acc = await fetchAccommodations(accommodationId)
      console.log(acc)
      acc ? setAccommodation(acc) : setGoodUrl(false)
    }
    loadAccommodation()
  }, [accommodationId])

  return goodUrl ? (
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
  ) : (
    <ErrorPage />
  )
}

export default Accommodation
