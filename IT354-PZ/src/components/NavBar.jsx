import React from 'react';
import './Components.css';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

export const NavBar = ({ setLoginVisibility }) => {

  function handleClick(event){
    event.preventDefault();
    setLoginVisibility(true);

  }

  return (
      <div className='navbar-container' style={{fontSize:'1.2em', fontFamily: "'DM Sans', sans-serif"}}>
        <Nav className="custom-navbar"  variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/services"}>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/shop"}>Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={"/contact"}>Contact</Nav.Link>
          </Nav.Item>
          <button className='login-button' onClick={(event) => handleClick(event)} style={{borderRadius: "5px"}}>login</button>
        </Nav>
        
      </div>
  );

   
};


