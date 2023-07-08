import React from "react";
import Logo from "../assets/logo.png";
import ProfilePicture from "../assets/profile.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between px-4 py-3 bg-background">
        <div>
          <img src={Logo} alt="Logo image" className="h-10 w-10 scale-110" />
        </div>
        <div className="flex flex-row">
          <button className="rounded-full border-purple-700 border-2 group mr-2">
            <img
              src={ProfilePicture}
              alt="Profile Picture"
              className="w-10 h-10 scale-90 group-hover:scale-100 duration-500"
            />
          </button>

          <button className="bg-gradient-to-br from-purple-700 to-pink-500 text-white font-medium px-4 rounded-xl">
            Generate art ✨
          </button>

          <button className="hover:bg-gray-200 rounded-xl p-2 ml-2">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
