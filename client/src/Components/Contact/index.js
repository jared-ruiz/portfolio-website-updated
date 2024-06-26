import React from "react";
import github from '../../Assets/Icons/github-icon.png';
import linkedin from '../../Assets/Icons/linkedin-icon-03.png';
import gmail from '../../Assets/Icons/gmail-icon-01.png';

function Contact() {
    return(
        <div>
            <div className="contact">
                <div className="contact-container">
                    
                    <div className="button">
                        <button>Resume</button>
                    </div>
                    
                    <div className="email-info">
                        <img src={gmail} id="gmail-logo"></img>
                        <h2 id="email-h2">Jared707@gmail.com</h2>
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