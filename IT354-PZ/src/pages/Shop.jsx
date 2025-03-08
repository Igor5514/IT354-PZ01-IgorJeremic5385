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

    async function loadPartsType(groupName){
        try{
            const response = await fetch("http://localhost:8080/vehicle/getPartsList",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(groupName)
            })
            const data = await response.JSON();
            setPartsList(data)
            if(response.ok){
                console.log("parts loaded successfully");
            }else{
                console.log("error " + data.message)
            }
        }catch (error){
            console.log(error.message)
        }
    }

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
                                    <FirstCard key={index} title={item.groupName} paragraphs={item.partsList} img={img} />
                                );
                            }) : (
                                <p className='text-white'>No parts available.</p> 
                            )
                        }
                        {
                           !isFirstCardContainerActive && partsList.length < 0 ? partsList.map((item, index) => {
                                const img = `data:image/png;base64,${item.groupImage}`;
                                return (
                                    <SecondCard title={item.partName} img={img} />
                                )
                           }) : (
                                <p className='text-white'>No parts available.</p> 
                           )
                        }
                </div>
            </div>
        </>
    );
}
