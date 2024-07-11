import { Route, Routes, Link } from "react-router-dom";
import useState from 'react';
import Nav from "./Components/Nav";
import Designs from "./Components/Designs";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";



function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<Designs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </>
  );
}

export default App;
