import React from "react";
// import about_text from '../../Assets/Images/about_title.png';
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
                        <h2>My name is Jared Ruiz</h2>
                        <p>I am a seasoned media coordinator, graphic designer, video editor, and novice front-end developer based in San Antonio Texas. I have over <span id="underline">3 years experience</span> working within small business creating and managing media creation and social media edeavors. I draw a lot of my artistic inspiration from the <span id="vapor">80's and 90's advertising aesthetic</span> and truly enjoy the never ending learning process that comes in this field.</p>
                        <p>Whether it's voice overs for a informational video project, iconography design work, digital advertisement and social media management, I can do it all and more. I look forward to working with you!</p>
                        <p>- J</p>
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