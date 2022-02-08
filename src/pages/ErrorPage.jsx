import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/pages/errorPage.scss'

const ErrorPage = () => {
  return (
    <div className="error__container">
      <Header />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <li className="return">Retourner sur la page d'accueil</li>
      </NavLink>
    </div>
  )
}

export default ErrorPage
