import React, { useState } from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./menu.png";
import { Link } from "react-router-dom";

function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the visibility of the menu
  };

  return (
    <div className="floating-menu-container">
      <button className="floating-menu-toggle" onClick={toggleMenu}>
        <img src={Menu} alt="menu" />
      </button>
      {isOpen && (
        <div className="floating-menu">
          <Link to="/" className="links">
            Home
          </Link>
          <br />
          <Link to="/report" className="links">
            Report
          </Link>
        </div>
      )}
    </div>
  );
}

export default FloatingMenu;
