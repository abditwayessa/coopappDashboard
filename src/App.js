import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import coop_app from "./coop_app_logo.png";
import users from "./users.png";
import user from "./user.png";
import transaction from "./transaction.png";
import coins from "./coins.png";
import retail from "./retail.png";
import business from "./business.png";
import Dashboard from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
