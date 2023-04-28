import React from 'react'
import Navbar from './navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App