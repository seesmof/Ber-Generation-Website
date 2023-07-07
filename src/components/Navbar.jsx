import React from "react";
import Logo from "../assets/logo.png";
import ProfilePicture from "../assets/profile_picture.png";
import FaBars from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between px-4 py-3 bg-background">
        <div>
          <img src={Logo} alt="Logo image" className="h-12 w-12" />
        </div>
        <div className="flex flex-row space-x-3">
          <button className="rounded-full border-purple-700 border-2 group">
            <img
              src={ProfilePicture}
              alt="Profile Picture"
              className="w-10 h-10  group-hover:scale-100 duration-500"
            />
          </button>

          <button className="bg-gradient-to-br from-purple-700 to-pink-500 text-white font-medium px-4 rounded-lg">
            Generate art ✨
          </button>

          <button className=""></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
