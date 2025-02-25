import React from "react";
import "./ShopComponents.css";

const FirstCard = ({title, paragraphs, img}) => {
    return(
        <div>
            <div className="main-card-container">
                <h2 style={{ fontFamily: "'DM Sans', sans-serif" }}>{title}</h2>
                <div className="sub-main-container">
                    <div className="main-paragraph-cotnainer">
                        {
                            paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        }
                    </div>
                    <img src= {img} />
                </div>
                <button>Show more</button>
            </div>
        </div>  
    );
}

export default FirstCard;