import React from "react";
import img1 from "../../Assets/Design_Images/aragorn_01.png";
import img2 from "../../Assets/Design_Images/full_body_thinking.png";
import img3 from "../../Assets/Design_Images/me_02.png";
import img4 from "../../Assets/Design_Images/red_on_car.png";
import img5 from "../../Assets/Design_Images/shoes_ad_01.png";
import img6 from "../../Assets/Design_Images/vintage-tech-poster.png";
import img7 from "../../Assets/Design_Images/vapor_01.png";
import img8 from "../../Assets/Design_Images/woman_boots_01.png";
import img9 from "../../Assets/Design_Images/pier_glitch_01.png";
import img10 from "../../Assets/Design_Images/naja_draft_02.png";

function Design() {
    return(
        <div className="design">
            <div className="grid">
                    <img src={img9} className="grid-items"></img>
                    <img src={img2} className="grid-items"></img>
                    <img src={img8} className="grid-items"></img>
                    <img src={img4} className="grid-items"></img>
                    <img src={img5} className="grid-items"></img>
                    <img src={img6} className="grid-items"></img>
                    <img src={img3} className="grid-items"></img>
                    <img src={img7} className="grid-items"></img>
                    <img src={img1} className="grid-items"></img>
                    <img src={img10} className="grid-items"></img>
            </div>



        </div>
    )
}

export default Design;