import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#00040F]">
      <div className="container mx-auto   ">
        <nav className="flex justify-between items-center py-[15px]  ">
          <div>
            <NavLink className="cursor-pointer" to="/">
              <img className="w-52" src="logo.png" alt="Logo" />
            </NavLink>
          </div>
          <div>
            <ul className="flex text-white text-xl font-bold">
              <li>
                <NavLink className="px-5 cursor-pointer" to="/">
                  {" "}
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="px-5 cursor-pointer" to="/feature">
                  {" "}
                  Feature{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="px-5 cursor-pointer" to="/about">
                  {" "}
                  About us{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="px-5 cursor-pointer" to="/solution">
                  {" "}
                  Solution{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
