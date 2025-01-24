import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import Login  from './components/Login';
import Registration from './components/Registration';

import './App.css'




function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);

  function setVisibility(visibility){
    setIsLoginVisible(visibility)
  }

  return (
    <>
    { !(isLoginVisible || isRegistrationVisible) &&
      <div className='d-flex flex-column '>
        <NavBar setVisibility={setVisibility} isLoginVisible={isLoginVisible}/>
        <Routes className='main-container mt-1'>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    }  
    { isLoginVisible &&
      <div className='main-login-container'>
        <Login />
      </div>
    }
    { isRegistrationVisible &&
      <div className='main-registration-container'>
        <Registration />
      </div>
    }
    </>
  );

  
}

export default App
