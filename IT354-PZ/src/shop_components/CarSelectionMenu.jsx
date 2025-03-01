import React, {useState, useRef} from 'react';
import MakeDropdown from './MakeDropdown';
import ModelDropdown from './ModelDropdown';
import GenerationDropdown from './GenerationDropdown';
import EngineDropDown from './EngineDropdown';
import "./ShopComponents.css"

const CarSelectionMenu = () => {

    const [make, setMake] = useState(null);
    const [model, setModel] = useState(null);
    const [generation, setGeneration] = useState(null);
    const [engine, setEngine] = useState(null);

    function setMakeRef(sentMakeRef) {
      makeRef.current = sentMakeRef;
    }

    function setModelRef(sentModelRef) {
      modelRef.current = sentModelRef;
    }

    return (
        <div className='main-car-selection-container'>
            <h5 className='text-white pb-2' style={{backgroundColor:" #1a1a1a"}}>Choose your vehicle:</h5>
            <div className='dropdowns-container'>
                <MakeDropdown setMake={setMake}/>
                <ModelDropdown setModel={setModel} selectedMake={make} />
                <GenerationDropdown setGeneration={setGeneration} selectedModel={model} />
                <EngineDropDown setEngine={setEngine} selectedModel={model} selectedGeneration={generation} />
            </div>
            <div>
                <button className='text-white dropdown-selection-button'>Search parts for your vehicle</button>
            </div>

        </div>
    );
}

export default CarSelectionMenu;