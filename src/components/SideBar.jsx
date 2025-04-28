import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "../assets/style/style.css";
import Profile from "./Profile";

const SideBar = () => {
  return (
    <aside className="h-full p-5  fixed bg-gray-900">
      <div className="mb-8">
        <Profile />
      </div>
      <nav>
        <ul className="text-center">
          <li>
            <NavLink to="/" className="flex items-center gap-2">
              <RiHome2Line />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="flex items-center gap-2">
              <BsPerson />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill" className="flex items-center gap-2">
              <IoSettingsOutline />
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="flex items-center gap-2">
              <AiOutlineFileDone />
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/contect" className="flex items-center gap-2">
              <TfiEmail />
              Contect
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
