import React from "react";
import { Link } from "react-router-dom";
import loupe from "../images/loupe.png"; // Путь к вашему логотипу

const NavBar = () => {
  return (
    <nav className="p-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={loupe} alt="Logo" className="w-10 mr-2" />
          <span className="font-bold hover:text-gray-300 transition duration-300">
            Home
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
