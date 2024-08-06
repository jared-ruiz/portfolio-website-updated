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
                        <h2>Hello, my name is Jared Ruiz</h2>
                        <p>I am a seasoned media coordinator, graphic designer, video editor, and novice front-end developer based in San Antonio Texas. I have over <span id="underline">3 years experience</span> working within small business creating and managing media creation and social media endeavors. I draw a lot of my artistic inspiration from the <span id="vapor">80's and 90's advertising aesthetic</span> and truly enjoy the never ending learning process that comes in this field.</p>
                        <p>Whether it's voice overs for a informational video project, iconography design work, digital advertisement and social media management, I can do it all and more. I look forward to working with you!</p>
                        <p>- J</p>
                    </div>
                </div>
                <div className="about-bg3">

                    <div className="editing_info">
                        <h2 id="editing_h2">Editing Technologies</h2>
                        <p>Adobe Premiere Pro <span id="vapor">|</span> Adobe Photoshop <span id="vapor">|</span> Adobe Illustrator <span id="vapor">|</span> Adobe InDesign <span id="vapor">|</span> Adobe After Effects <span id="vapor">|</span> Microsoft Suite <span id="vapor">|</span> Figma <span id="vapor">|</span> Canva
                        </p>
                        <h2 id="editing_h2">Technical Skills</h2>
                        <p>JavaScript <span id="vapor">|</span> Python <span id="vapor">|</span> HTML5 <span id="vapor">|</span> CSS <span id="vapor">|</span> MongoDB <span id="vapor">|</span> MySQL <span id="vapor">|</span> PostgresSQL <span id="vapor">|</span> Django <span id="vapor">|</span> Express <span id="vapor">|</span> Node <span id="vapor">|</span> Flask <span id="vapor">|</span> React <span id="vapor">|</span> Git <span id="vapor">|</span> Handlebars <span id="vapor">|</span> Bootstrap <span id="vapor">|</span> TailwindCSS <span id="vapor">|</span> Jira <span id="vapor">|</span> vSphere
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