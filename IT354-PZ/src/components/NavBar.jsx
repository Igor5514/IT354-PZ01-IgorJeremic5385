import React from 'react';
import './Components.css';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='navbar-container' style={{fontSize:'1.2em'}}>
          <Nav className="custom-navbar"  variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/shop"}>Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
    );
};
