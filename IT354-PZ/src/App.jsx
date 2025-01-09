import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Services } from './Services';
import { Shop } from './Shop';
import { Contact } from './Contact';
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
