import React from "react";
import "./ShopComponents.css";

const SecondCard = ({title, img}) => {

    function buttonListener(e){
        e.preventDefault();
        
    }

    return(
        <div>
            <div className="main-card-container">
                <div className="sub-main-container">
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif" }}>{title}</h2>
                    <img src= {img} />
                </div>
                <button onClick={(e) => {buttonListener(e)}}>Find parts</button>
            </div>
        </div>  
    );
}

export default SecondCard;