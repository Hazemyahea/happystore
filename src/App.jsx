import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import PageNotFound from './pages/PageNotFound'
import RelatedProduct from './components/RealtedProduct'
import About from './pages/About'
import Cart from './pages/Cart'
import Paid from './components/Paid'
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='/about' element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/product/:id' element={<ProductPage />}/>
          <Route path='/test' element={<RelatedProduct />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/paid' element={<Paid />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
