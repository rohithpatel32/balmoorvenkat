import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./venkatmlc/Navbar";
import Dashboard from "./venkatmlc/Dashboard";
import Voters from "./venkatmlc/Voters";
import Home from "./venkatmlc/Home";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/voters" element={<Voters />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;