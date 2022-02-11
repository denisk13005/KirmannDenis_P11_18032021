import React from 'react'
import Router from './Routes/Router'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter> */}
      <Router />
    </div>
  )
}

export default App
