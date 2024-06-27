import React from "react";
import github from '../../Assets/Icons/github-icon.png';
import linkedin from '../../Assets/Icons/linkedin-icon-03.png';
import gmail from '../../Assets/Icons/gmail-icon-01.png';
import resume from '../../Assets/Documents/Resume - Jared Ruiz.pdf'

function Contact() {
    return(
        <div>
            <div className="contact">
                <div className="contact-title">
                    <h2>Socials/Resume</h2>
                </div>
                
                <div className="contact-container">
                    
                    <div className="resume-button">
                        <a href={resume} download={"Resume - Jared Ruiz"}><button>Resume</button></a>
                    </div>
                    
                    <div className="button">
                        <a href="mailto:Jared707@gmail.com" target="_blank"><button><img id="gmail-logo" src={gmail}></img>Email</button></a>
                    </div>

                    <div className="button">
                        <a href="https://www.linkedin.com/in/jaredruiz/" target="_blank"><button><img id="linkedin-logo" src={linkedin}></img>LinkedIn</button></a>
                    </div>

                    <div className="button">
                        <a href="https://github.com/jared-ruiz" target="_blank"><button><img id="github-logo" src={github}></img>LinkedIn</button></a>
                    </div>

                </div>

                
                {/* <img src={github}></img>
                <img src={linkedin}></img>
                <h2>LinkedIn:</h2>
                <h2>Github:</h2> */}
            </div>
        </div>
        
    )
}

export default Contact;