
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        {/* <Route path="/" element={<SignInForm/>} />
        <Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
