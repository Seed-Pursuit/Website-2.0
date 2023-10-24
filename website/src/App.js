import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatHappensAtSP from "./pages/about/WhatHappensAtSP";
import Error from "./pages/Error";

function App() {
  return (
    <div className="font-righteous bg-[#f9fbf2]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="*" element={<Error />} exact />
          <Route path="/what-happens-at-sp" element={<WhatHappensAtSP />} exact />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
