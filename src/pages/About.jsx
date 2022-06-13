import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/about.scss'
import DropDown from '../components/DropDown'
import Banner from '../components/Banner'
import about from '../assets/about.jpg'
import aboutBig from '../assets/aboutBig.jpg'
import { fetchDatas } from '../GetDatas.js'

const About = () => {
  let [viewportWidth, setViewportWidth] = useState({})
  const getSize = () => {
    setViewportWidth(window.innerWidth)
  }
  let backgroundImgBanner = viewportWidth < 840 ? about : aboutBig
  useEffect(() => {
    window.addEventListener('resize', getSize)

    return () => window.removeEventListener('resize', getSize)
  }, [])
  const [datas, setDatas] = useState()
  const loadDatas = async () => {
    setDatas(await fetchDatas())
  }
  useEffect(() => {
    loadDatas()
  }, [])

  return (
    <div>
      <Header />
      <Banner background={backgroundImgBanner} />
      {datas
        ? datas.about.map((accommodation, index) => (
            <DropDown key={index} about={accommodation} />
          ))
        : null}
      <Footer />
    </div>
  )
}

export default About
