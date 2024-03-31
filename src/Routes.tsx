import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import ProductDetails from './Pages/Product/ProductDetails'
import CategoryProducts from './Pages/Products/Category-Products'
import Users from './Pages/Users/Users'
function AppRoutes() {
  return (
    <div>
        <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/category/:categoryId/products" element={<CategoryProducts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default AppRoutes