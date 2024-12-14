import React from 'react';
import './Components.css';
import Nav from 'react-bootstrap/Nav';

export const NavBar = ({setValue}) => {
    return (
        <div className='navbar-container'>
          <Nav className="custom-navbar"  variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="Home.jsx" onClick={() => setValue('home')}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Services.jsx" onClick={() => setValue('services')}>Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Shop.jsx" onClick={() => setValue('shop')}>Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Contact.jsx" onClick={() => setValue('contact')}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
    );
};
