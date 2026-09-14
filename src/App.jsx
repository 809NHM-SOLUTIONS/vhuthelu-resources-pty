import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from './pages/Projects';
import Partnership from './pages/Partnership';
import ITServices from './pages/ITServices';
import CropCattleServices from './pages/CropCattleServices'; 
import MiningSupport from './pages/MiningSupport';
import FuelEnergy from './pages/FuelEnergy';
import ITProjects from "./pages/ITProjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/partnership" element={<Partnership/>} />
      <Route path="/ITServices" element={<ITServices />} />
      <Route path="/CropCattleServices" element={<CropCattleServices />} /> 
     <Route path="/MiningSupport" element={<MiningSupport />} />
      <Route path="/FuelEnergy" element={<FuelEnergy />} />
      <Route path="/ITProjects" element={<ITProjects />} />

    </Routes>
  );
}

export default App;