import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App