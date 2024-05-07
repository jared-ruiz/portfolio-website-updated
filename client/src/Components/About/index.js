import React from "react";
import about_text from '../../Assets/Images/about_title.png';

function About() {
    return(
        <>
            <div className="about">
                <div className="about-bg">
                    <img src={about_text} id='about_text'></img>
                </div>
                <div className="about-bg2">

                </div>

            </div>
        </>
    )
}

export default About;