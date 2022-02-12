import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Lightbox from '../components/Lightbox'
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
  console.log(accommodation)

  return (
    <div>
      <Header />
      <Lightbox accommodation={accommodation} />
      <div className="accommodationTitleAndImg">
        <div className="accommodationTitleAndImg__title">
          <h1>{accommodation.title}</h1>
          <h2>{accommodation.location}</h2>
        </div>
        <div className="accommodationTitleAndImg__img">
          <h2>{accommodation.host.name}</h2>
          <img src={accommodation.host.picture} alt="" />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Accommodation
