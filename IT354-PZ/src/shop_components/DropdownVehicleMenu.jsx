import React, { useState } from 'react';

const DropdownVehicleMenu = ({dropdownButtonText}) => { 
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isListPresent, setListPresent] = useState(false);

  const onChangeInput = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log(newValue);
  }

  const listSwitch = (e) => {
    e.preventDefault();
    if(isListPresent) {
      setListPresent(false);
    }else{
      setListPresent(true);
    }
  }

  return (
    <div className='dropdown-vehicle-container' >
      <button className="car-dropdown-display text-white fs-5 d-flex" onClick={e => listSwitch(e)} style={{ padding: "0.3em 0 0.3em 0.5em", backgroundColor:" #1a1a1a", border:"1px solid white"}}>
        <span style={{ flex: "1", textAlign:"left", backgroundColor:" #1a1a1a"}}>{dropdownButtonText}</span>
        <span style={{paddingRight:"0.5em", backgroundColor:" #1a1a1a"}}>&#x25bc;</span>
      </button>
      <div className = {isListPresent ? `list-holder` : `none-display`} style={{backgroundColor: " #1a1a1a"}}>
        <div className='p-2' style={{backgroundColor: "black"}}>
          <input style={{ flex: "1", color:"white"}} className="car-dropdown-display" type="text" value={inputValue} onChange={(e) => onChangeInput(e)} />
        </div>
        <ul name="dropdown-input" >
          <li>asdsdsd</li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownVehicleMenu;