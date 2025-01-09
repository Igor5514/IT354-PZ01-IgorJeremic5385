import image1 from "../images/card-car1.jpg";
import image2 from "../images/card-car2.jpg";

const Card = () => {
    return (
        <div className="text-white">
            <div className="container-fluid d-flex justify-content-center mt-5" style={{width:"76%", fontFamily: "tahoma"}}>
                <img src = {image2} className="w-50 border"/>
                <div>
                    <h3 className="p-4 border-bottom" style={{marginLeft: "10px"}}>Car Body Repair & Restoration</h3>
                    <p className="p-4">Restore your vehicle's original shine and structural integrity with our expert
                         car body services. From dent repairs to complete restorations, we ensure your car looks as
                          good as new, ready to turn heads on the road with confidence and unmatched precision.</p>
                    <button className="text-white border ms-4" style={{fontFamily: "tahoma", padding:"0.5em 1em"}}>make an appointment</button>
                </div>
            </div>

            <div div className="container-fluid d-flex justify-content-center mt-5" style={{width:"76%", fontFamily: "tahoma"}}>
                <div>
                    <h3 className="p-4 border-bottom" style={{marginRight: "10px"}}>Detailing & Deep Cleaning</h3>
                    <p className="p-4">Experience the ultimate care for your car with our detailing and deep washing services. 
                        We meticulously clean every nook and cranny, leaving your vehicle spotless, refreshed,
                        and protected inside and out for long-lasting cleanliness and shine.</p>
                        <button className="text-white border ms-4" style={{fontFamily: "tahoma", padding:"0.5em 1em"}}>make an appointment</button>
                </div>
                <img src = {image1} className="w-50 border"/>
            </div>
        </div>
    );

}

export default Card;