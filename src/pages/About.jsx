import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/about.scss'
import DropDown from '../components/DropDown'
import Banner from '../components/Banner'
import about from '../assets/about.jpg'
import aboutBig from '../assets/aboutBig.jpg'
import GetDatas from '../components/GetDatas.js'
import Spinner from '../components/Spinner'

const About = () => {
  // console.log(window.innerWidth)
  let [viewportWidth, setViewportWidth] = useState({})
  const getSize = () => {
    setViewportWidth(window.innerWidth)
  }
  let backgroundImgBanner = viewportWidth < 840 ? about : aboutBig
  useEffect(() => {
    window.addEventListener('resize', getSize)

    return () => window.removeEventListener('resize', getSize)
  }, [])
  const datas = GetDatas()
  const [aboutDatas, setAboutData] = useState([])
  const loadAboutDatas = () => {
    setAboutData(datas.about)
  }
  useEffect(() => {
    loadAboutDatas()
  })

  return (
    <div>
      <Header />
      <Banner background={backgroundImgBanner} />
      {aboutDatas !== undefined
        ? aboutDatas.map((accommodation, index) => (
            <DropDown key={index} about={accommodation} />
          ))
        : null}
      <Footer />
    </div>
  )
}

export default About
