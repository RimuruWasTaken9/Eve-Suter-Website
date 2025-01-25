import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Home2 from "./pages/Home2";
import Winter from "./pages/Winter";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Fall from "./pages/Fall";

import "./App.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Winter" element={<Winter />} />
      <Route path="/Spring" element={<Spring />} />
      <Route path="/Summer" element={<Summer />} />
      <Route path="/Fall" element={<Fall />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/Home2" element={<Home2 />} />

    </Routes>
    </>
  );
}

export default App;
