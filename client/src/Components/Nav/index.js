import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function Nav() {
    return(
        <>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/designs">Designs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav> 

        {/* <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/designs" element={<Designs/>} />
            <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </>
    )
}

export default Nav;