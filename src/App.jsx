import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Self from "./Components/MySelf/Self";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Aboutme/About";
import Contactme from "./Components/Contactme/Contactme";

const App = () => {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={ <Self />} />
        <Route path="/Aboutme" element={<About />} />
        <Route path="/Contactme" element={<Contactme />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
