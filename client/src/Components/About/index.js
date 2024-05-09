import React from "react";
import about_text from '../../Assets/Images/about_title.png';
import about_me_pic from '../../Assets/Images/about_me_pic.png';

function About() {
    return(
        <>
            <div className="about">
                <div className="about-bg">
                    <h1 id="about-text">About</h1>
                    {/* <img src={about_text} id='about_text'></img> */}
                </div>
                <div className="about-bg2">
                    <div className="about-image-container">
                        <img src={about_me_pic} id="profile-pic"></img>
                    </div>
                    <div className="background-text">
                        <h2>Background</h2>
                        <p>I am a seasoned media coordinator and front-end developer with a passion for blending creativity and technology to craft immersive digital experiences. With over 3 years of experience in the industry, I have honed my skills across a diverse range of disciplines, from video editing and corporate design to voice-over work and front-end development.</p>
                        <p>I am only getting started.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;