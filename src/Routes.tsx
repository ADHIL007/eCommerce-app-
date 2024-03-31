import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
function AppRoutes() {
  return (
    <div>
        <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default AppRoutes