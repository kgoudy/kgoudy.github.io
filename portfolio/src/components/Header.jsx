/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src="/fleur.jpg" className="h-8" alt="Logo" />
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-yellow-400"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
