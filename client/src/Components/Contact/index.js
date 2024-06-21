import React from "react";
import github from '../../Assets/Icons/github-icon.png';
import linkedin from '../../Assets/Icons/linkedin-icon-03.png';
import gmail from '../../Assets/Icons/gmail-icon-01.png';

function Contact() {
    return(
        <div>
            <div className="contact">
                <div className="contact-info">
                    <h2>Email:</h2>
                    <h2>LinkedIn:</h2>
                    <h2>Github:</h2>
                    <img src={github}></img>
                    <img src={linkedin}></img>
                    <img src={gmail}></img>
                </div>

            </div>
        </div>
        
    )
}

export default Contact;