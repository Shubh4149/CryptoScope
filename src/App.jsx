import React from "react";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import Coin from "./pages/Coin";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
