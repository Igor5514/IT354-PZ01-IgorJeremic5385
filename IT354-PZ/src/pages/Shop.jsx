import FirstCard from "../shop_components/FirstCard";
import image from "../images/slika.jpg";
import "./pages.css"
import CarSelectionMenu from "../shop_components/CarSelectionMenu.jsx";

export const Shop = () => {
    let list = ["asdasdasd", "bobasdasd", "asdasdasd", "asdsasdasd"];
    return (
        <>
            <div>
                <CarSelectionMenu />
                <div className="part-carts-grid-container">
                    <FirstCard title={"title"} paragraphs={list} img={image}/>
                </div>
            </div>
            
        </>
    );




}