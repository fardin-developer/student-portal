import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admit from "./pages/Admit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admit />} />
      </Routes>
    </Router>
  );
}

export default App;
