import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/homepage";
import Location from "./pages/Location/location";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Mention from "./pages/Mention/mentionslegale";
import Politique from "./pages/Politique/politique";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/politique" element={<Politique />} />
      </Routes>
    </Router>
  );
}

export default App;
