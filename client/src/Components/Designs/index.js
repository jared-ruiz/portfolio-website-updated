import React from "react";
//import from image array in JPG_Images folder for easier photo additionas and adjustments 
import ImageArray from '../../Assets/JPG_Resrouces/index';

function Design() {
    return(
        <div className="design">
            <div className="grid">
                {ImageArray.map((image) => (
                   <img src={image.src} className="grid-items"></img>
                ))}
            </div>
        </div>
    )
}

export default Design;