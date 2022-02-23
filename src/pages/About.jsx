import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/about.scss'
import DropDown from '../components/DropDown'
import Banner from '../components/Banner'
import about from '../assets/about.jpg'
import aboutBig from '../assets/aboutBig.jpg'
import fetchDatas from '../components/GetDatas.js'

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
  const [datas, setDatas] = useState()
  const loadDatas = async () => {
    setDatas(await fetchDatas())
  }
  useEffect(() => {
    loadDatas()
  }, [])
  console.log(datas)

  const [aboutDatas, setAboutData] = useState([])
  const loadAboutDatas = () => (datas ? setAboutData(datas.about) : null)

  useEffect(() => {
    loadAboutDatas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datas])
  console.log(aboutDatas)

  return (
    <div>
      <Header />
      <Banner background={backgroundImgBanner} />
      {aboutDatas
        ? aboutDatas.map((accommodation, index) => (
            <DropDown key={index} about={accommodation} />
          ))
        : null}
      <Footer />
    </div>
  )
}

export default About
