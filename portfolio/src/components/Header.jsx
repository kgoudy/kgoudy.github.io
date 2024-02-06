/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 flex">
      <div className="flex mt-2">
        <img src="/fleur.jpg" className="h-12 px-3 float-left py-2 "></img>
        <h1 className="text-3xl text-yellow-400 ">Koki D Goudy</h1>
      </div>
      <div className="flex">
        <nav className="flex">
          <li className="text-3xl text-yellow-400 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="text-3xl text-yellow-400 py-2">
            <Link to="#">Projects</Link>
          </li>
          <li className="text-3xl text-yellow-400 py-2">
            <Link to="/contact">Contact</Link>
          </li>
        </nav>
      </div>
    </nav>
  );
}

export default Header;
