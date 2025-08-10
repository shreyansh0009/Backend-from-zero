import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Formm from "./pages/Formm";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Formm />} />
      <Route path="/show" element={<Show />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
