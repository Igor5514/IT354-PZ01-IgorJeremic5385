import { useState, useEffect } from 'react';
import FirstCard from "../shop_components/FirstCard";
import SecondCard from "../shop_components/SecondCard"
import "./pages.css"
import CarSelectionMenu from "../shop_components/CarSelectionMenu.jsx";
import image2 from "../images/service.jpg";

export const Shop = () => {
    const [group, setGroup] = useState([]);
    const [partsList, setPartsList] = useState([]);
    const [isFirstCardContainerActive, setIsFirstCardContainerActive] = useState(true);
    const [selectedGroup, setSelectedGroup] = useState("");

    function setFirstCardActive(value){
        setIsFirstCardContainerActive(value)
    }

    

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
                        isFirstCardContainerActive && group.length > 0 ? group.map((item, index) => {
                            const img = `data:image/png;base64,${item.groupImage}`;
                            return (
                                <FirstCard key={index} title={item.groupName} paragraphs={item.partsList} img={img}
                                setFirstCardActive={setFirstCardActive} setPartsList={setPartsList}/>
                            );
                        }) : (
                            console.log("group cards inactive")
                        )
                    }
                    {
                        !isFirstCardContainerActive && partsList.length > 0 ? partsList.map((item, index) => {
                            const img = `data:image/png;base64,${item.groupImage}`;
                            return (
                                <SecondCard key={index} title={item.partName} img={img} />
                            )
                        }) : (
                            console.log(partsList)
                        )
                    }
                </div>
            </div>
        </>
    );
}
