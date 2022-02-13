import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/about.scss'
import AboutContainer from '../components/AboutContainer'

const About = () => {
  const [aboutDatas, setAboutData] = useState([])
  useEffect(() => {
    fetch('./data/datas.json')
      .then((response) => response.json())
      .then((data) => setAboutData(data.about))
  }, [])
  return (
    <div>
      <Header />
      <div className="banner"></div>
      {aboutDatas.map((el, index) => (
        <AboutContainer key={index} el={el} />
      ))}
      <Footer />
    </div>
  )
}

export default About
