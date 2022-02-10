import React from 'react'
import logoBlanc from '../assets/logoBlanc.svg'
import copyright from '../assets/copyright.svg'
import '../styles/components/footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src={logoBlanc} alt="logo du site" />
      <img className="copyright" src={copyright} alt="copyright" />
    </div>
  )
}
export default Footer
