import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ProfilePicture from "../assets/profile.png";
import { BiMenu } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row sticky top-0 z-50 justify-between px-4 py-3 md:py-4 bg-background">
        <div className="flex flex-row items-center">
          <img src={Logo} alt="Logo image" className="h-10 w-10 scale-110" />
          <span className="font-extrabold text-3xl ml-2 hidden md:block">
            Ber<span className="text-gray-500 ml-1">AI</span>
          </span>
        </div>

        <div className="flex-row hidden lg:flex rounded-xl border-gray-200 border-2 p-2 font-medium text-gray-500 gap-4 absolute right-1/3 top-3">
          <button className="tracking-tight px-4 bg-black rounded-xl text-white p-2">
            Dashboard
          </button>
          <button className="tracking-tight">Discover Arts</button>
          <button className="tracking-tight pr-4">Connect</button>
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

          <button
            className="hover:bg-gray-200 rounded-xl p-2 ml-2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <BiMenu className="text-2xl" />
            ) : (
              <RiCloseLine className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`bg-background absolute h-screen w-full top-20 z-50 flex-col p-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <NavigationMenu />
      </div>
    </>
  );
};

export default Navbar;
