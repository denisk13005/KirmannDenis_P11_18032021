import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
