import { Route, Routes, Link } from "react-router-dom"
import Designs from "./Components/Designs";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/designs">Designs</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/designs" element={<Designs/>} />
      </Routes>
   </>
  );
}

export default App;
