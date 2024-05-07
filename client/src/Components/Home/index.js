import React from "react";
import logo from '../../Assets/Images/cropped-home-title.png';

function Home() {
    return(
        <div className="home">
            <div className="home-bg">
                <img src={logo} id="home-img"></img>
            </div>

        </div>
    )
}

export default Home;