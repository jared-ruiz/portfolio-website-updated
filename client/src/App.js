import { Route, Routes, Link } from "react-router-dom"
import Designs from "./Components/Designs";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/designs">Designs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/designs" element={<Designs/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </>
  );
}

export default App;
