import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/homepage";
import Location from "./pages/Location/location";
import About from "./pages/About/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
