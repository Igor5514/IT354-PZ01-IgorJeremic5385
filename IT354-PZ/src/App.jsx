import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './Home';
import { Services } from './Services';
import { Shop } from './Shop';
import { Contact } from './Contact';
import './App.css'



function App() {
  const [currentPage,setCurrentPage] = useState('home');

  return (
    <>
      <div className='d-flex flex-column '>
        <NavBar setValue = {setCurrentPage}/>
        <div className='main-container mt-1'>
          {currentPage === 'home' && <Home />}
          {currentPage === 'services' && <Services />}
          {currentPage === 'shop' && <Shop />}
          {currentPage === 'contact' && <Contact />}

        </div>


      </div>
      

      
    </>
  )
}

export default App
