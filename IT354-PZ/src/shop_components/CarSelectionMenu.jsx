import React from 'react';
import DropdownVehicleMenu from './DropdownVehicleMenu'; 
import "./ShopComponents.css"

const CarSelectionMenu = () => {

    return (
        <div className='main-car-selection-container'>
            <h5 className='text-white pb-2' style={{backgroundColor:" #1a1a1a"}}>Choose your vehicle:</h5>
            <div className='dropdowns-container'>
                <DropdownVehicleMenu dropdownButtonText="select make"/>
                <DropdownVehicleMenu dropdownButtonText="select model"/>
                <DropdownVehicleMenu dropdownButtonText="select generation"/>
                <DropdownVehicleMenu dropdownButtonText="select engine"/>
            </div>
            <div>

                <button className='text-white dropdown-selection-button'>Search parts for your vehicle</button>
            </div>

        </div>
    );
}

export default CarSelectionMenu;