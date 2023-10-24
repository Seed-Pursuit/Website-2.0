import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-righteous bg-[#f9fbf2]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
