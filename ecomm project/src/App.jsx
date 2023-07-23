import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import Aproduct from './pages/product';
import Cart from './pages/cart';
import Error from './pages/error';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/products' element={<Products/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/aproduct/:id' element={<Aproduct/>} ></Route>
      <Route path='/cart' element={<Cart/>} ></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
