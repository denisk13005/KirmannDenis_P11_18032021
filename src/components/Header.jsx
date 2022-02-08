import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/components/header.scss'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo du site" />
      <nav className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav__active' : '')}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? 'nav__active' : '')}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header
