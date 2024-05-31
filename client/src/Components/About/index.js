import React from "react";
import about_text from '../../Assets/Images/about_title.png';
import about_me_pic from '../../Assets/Images/about_me_pic.png';
import about_me_pic_02 from '../../Assets/Images/about_profile_02.png';

function About() {
    return(
        <>
            <div className="about">
                {/* <div className="about-bg">
                    <h1 id="about-text">About</h1>
                </div> */}
                <div className="about-bg2">
                    
                    <div className="about-image-container">
                        <img src={about_me_pic} id="profile-pic" alt="front facing image of me"></img>
                    </div>

                    <div className="background-text">
                        <h2>Background</h2>
                        <p>I am a seasoned media coordinator and front-end developer with a passion for blending creativity and technology to craft immersive digital experiences. With over 3 years of experience in the industry, I have honed my skills across a diverse range of disciplines, from video editing and corporate design to voice-over work and front-end development.</p>
                        <p>I am only getting started.</p>
                    </div>
                </div>
                <div className="about-bg3">

                    <div className="editing_info">
                        <h2 id="editing_h2">Editing</h2>
                        <p>Adobe Premiere Pro | Adobe Photoshop | Adobe Illustrator | Adobe InDesign | Adobe After Effects | Microsoft Suite
                        </p>
                        <h2 id="editing_h2">Technical</h2>
                        <p>JavaScript | Python | HTML5 | CSS | MongoDB | MySQL | PostgresSQL | Django | Express | Node | Flask | React | Git | Handlebars | Bootstrap | TailwindCSS | Jira | vSphere
                        </p>

                    </div>

                    <div className="profile_img_02">
                        <img src={about_me_pic_02} id="profile_pic_02_styling" alt="professional picture with tree backdrop"></img>
                    </div>
                        
                </div>

            </div>
        </>
    )
}

export default About;