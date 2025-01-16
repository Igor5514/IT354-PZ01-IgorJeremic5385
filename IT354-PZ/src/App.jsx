import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import './App.css'



function App() {

  return (
    <>
      <div className='d-flex flex-column '>
        <NavBar />
        <Routes className='main-container mt-1'>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        


      </div>
      

      
    </>
  )
}

export default App
