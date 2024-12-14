import React from 'react';

import ControlledCarousel from './components/ControlledCarousel';
import './components/Components.css'

export const Home = () => {
    return (
        <div className='home-container'>
            <div className='slider-container'>
                <ControlledCarousel />
            </div>
         
        </div>
    );




}