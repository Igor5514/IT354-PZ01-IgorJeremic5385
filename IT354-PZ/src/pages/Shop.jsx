import FirstCard from "../shop_components/FirstCard";
import image from "../images/slika.jpg";
import "./pages.css"
import CarSelectionMenu from "../shop_components/CarSelectionMenu.jsx";
import image2 from "../images/service.jpg";

export const Shop = () => {
    let list = ["asdasdasd", "bobasdasd", "asdasdasd", "asdsasdasd"];
    return (
        <>
            <div className="main-shop-container">
                <div className="main-menu-container">
                    <CarSelectionMenu />
                    <div className="image-container">
                        <img src={image2} />
                        <p className="image-title">Auto Parts & Accessories</p>
                    </div>
                </div>
                <h1 className="shop-title">Order best quality parts online</h1>
                <div className="part-carts-grid-container">
                    <FirstCard title={"title"} paragraphs={list} img={image}/>
                </div>
            </div>
            
        </>
    );




}