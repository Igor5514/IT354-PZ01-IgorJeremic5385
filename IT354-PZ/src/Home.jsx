import React from 'react';
import GroupCards from './components/GroupCards';
import ControlledCarousel from './components/ControlledCarousel';
import './components/Components.css'
import Card from './components/Card';

export const Home = () => {
    return (
        <div className='home-container'>
            <div className='slider-container'>
                <ControlledCarousel />
            </div>
            <h1 className='text-center text-white mt-5'>Our Expert Auto Services</h1>
            <div className='content-container d-flex justify-content-center' >
                <GroupCards />
                
            </div>
            <Card />
        </div>
    );




}