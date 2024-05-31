import React from "react";
import img1 from "../../Assets/Design_Images/aragorn_01.png";
import img2 from "../../Assets/Design_Images/full_body_thinking.png";
import img3 from "../../Assets/Design_Images/me_02.png";
import img4 from "../../Assets/Design_Images/red_on_car.png";
import img5 from "../../Assets/Design_Images/shoes_ad_01.png";
import img6 from "../../Assets/Design_Images/vintage-tech-poster.png";

function Design() {
    return(
        <div className="design">
            <div className="test">
                    <img src={img1} className="grid-items"></img>
                    <img src={img2} className="grid-items"></img>
                    <img src={img3} className="grid-items"></img>
                    <img src={img4} className="grid-items"></img>
                    <img src={img5} className="grid-items"></img>
                    <img src={img6} className="grid-items"></img>
            </div>



        </div>
    )
}

export default Design;