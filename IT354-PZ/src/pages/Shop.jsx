import { useState, useEffect } from 'react';
import FirstCard from "../shop_components/FirstCard";

import "./pages.css"
import CarSelectionMenu from "../shop_components/CarSelectionMenu.jsx";
import image2 from "../images/service.jpg";

export const Shop = () => {
    const [group, setGroup] = useState([]);

    useEffect(() => {
        async function loadGroupComponents() {
            try {
                const response = await fetch("http://localhost:8080/vehicle/getPartGroup");
                const data = await response.json();

                if (response.ok) {
                    console.log("data: ", data);
                    setGroup(data);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        loadGroupComponents();
    }, []);

    return (
        <>
            <div className="main-shop-container">
                <div className="main-menu-container">
                    <CarSelectionMenu />
                    <div className="image-container">
                        <img src={image2} alt="Service" />
                        <p className="image-title">Auto Parts & Accessories</p>
                    </div>
                </div>
                <h1 className="shop-title">Order best quality parts online</h1>
                <div className="part-carts-grid-container">
                    {
                        group.length > 0 ? group.map((item, index) => {
                            const img = `data:image/png;base64,${item.groupImage}`;
                            return (
                                <FirstCard key={index} title={item.groupName} paragraphs={item.partsList} img={img} />
                            );
                        }) : (
                            <p>No parts available.</p> 
                        )
                    }
                </div>
            </div>
        </>
    );
}
