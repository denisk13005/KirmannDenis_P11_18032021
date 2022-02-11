import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/pages/accommodation.scss'

const Accommodation = () => {
  const [accommodation, setAccommodation] = useState([])

  useEffect(() => {
    fetch('/data/datas.json')
      .then((response) => response.json())
      .then((data) =>
        setAccommodation(
          data.accommodations.find(
            (el) => el.id === window.location.hash.slice(1)
          )
        )
      )
  }, [])
  console.log(accommodation)

  return (
    <div>
      <Header />
      <div className="lightbox__container">t</div>
      <Footer />
    </div>
  )
}

export default Accommodation
