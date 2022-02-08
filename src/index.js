import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
