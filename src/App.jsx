import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import Jokes from "./Pages/Jokes";

const App = () => {
  return (
    <Router>
   <div className="font-sans bg-indigo-50 text-gray-900">

        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <About />
                <Team />
                <Contact />
              </>
            }
          />
          <Route path="/jokes" element={<Jokes/>} />
        </Routes>
            <Footer />
      </div>
    </Router>
  );
};

export default App;
