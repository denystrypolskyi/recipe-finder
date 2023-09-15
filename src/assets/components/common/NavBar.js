import React from "react";
import { Link } from "react-router-dom";
import loupe from "../../images/loupe.png";

function NavBar() {
  return (
    <nav className="p-4 bg-orange-200 text-black">
      <div className="container mx-auto flex items-center">
        <div className=" text-xl font-semibold">
          <Link to="/" className="text-black">
            <img src={loupe} className="w-10"></img>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="font-bold hover:text-gray-300 transition duration-300 font-mono"
            >
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
