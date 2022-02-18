import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/about.scss'
import DropDown from '../components/DropDown'
import Banner from '../components/Banner'
import about from '../assets/about.jpg'
import aboutBig from '../assets/aboutBig.jpg'

const About = () => {
  // console.log(window.innerWidth)
  let [viewportWidth, setViewportWidth] = useState({})
  const getSize = () => {
    setViewportWidth(window.innerWidth)
  }
  let backgroundImgBanner = viewportWidth < 840 ? about : aboutBig
  const [aboutDatas, setAboutData] = useState([])
  useEffect(() => {
    window.addEventListener('resize', getSize)

    return () => window.removeEventListener('resize', getSize)
  }, [])

  useEffect(() => {
    fetch('./data/datas.json')
      .then((response) => response.json())
      .then((data) => setAboutData(data.about))
  }, [])
  return (
    <div>
      <Header />
      <Banner background={backgroundImgBanner} />
      {aboutDatas.map((accommodation, index) => (
        <DropDown key={index} about={accommodation} />
      ))}
      <Footer />
    </div>
  )
}

export default About
