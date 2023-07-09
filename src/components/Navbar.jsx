import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ProfilePicture from "../assets/profile.png";
import { FaBars, FaCross } from "react-icons/fa";
import {
  BiCreditCard,
  BiCross,
  BiHomeSmile,
  BiMenu,
  BiUser,
} from "react-icons/bi";
import { HiOutlineSparkles, HiSparkles } from "react-icons/hi";
import { RiCloseLine, RiHeartsLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { TbCross, TbExchange, TbHearts } from "react-icons/tb";
import { BsCreditCard2Back, BsHearts } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row sticky top-0 z-50 justify-between px-4 py-3 md:py-4 bg-background">
        <div className="flex flex-row items-center">
          <img src={Logo} alt="Logo image" className="h-10 w-10 scale-110" />
          <span className="font-extrabold text-3xl ml-2">
            Ber<span className="text-gray-500 ml-1">AI</span>
          </span>
        </div>

        <div className="flex-row hidden md:flex rounded-xl border-gray-200 border-2 p-2 font-medium text-gray-500 gap-4 absolute right-1/3 top-3">
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
            className="hover:bg-gray-200 rounded-xl p-2 ml-2 md:hidden"
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
        <div className="flex flex-col gap-4">
          <a href="#" className="active-link">
            Dashboard
          </a>
          <a href="#" className="nav-link">
            Discover arts
          </a>
          <a href="#" className="nav-link">
            Connect
          </a>
        </div>

        <div className="h-[2px] my-6 bg-gray-200 w-full"></div>

        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="text-lg font-medium flex flex-row items-center gap-2"
          >
            <BiHomeSmile className="text-2xl" />
            Home
          </a>
          <a
            href="#"
            className="text-gray-500 text-lg font-medium flex flex-row items-center gap-2"
          >
            <HiOutlineSparkles className="text-2xl" />
            My Artworks
          </a>
          <a
            href="#"
            className="text-gray-500 text-lg font-medium flex flex-row items-center gap-2"
          >
            <TbHearts className="text-2xl" />
            Favorites
          </a>
          <a
            href="#"
            className="text-gray-500 text-lg font-medium flex flex-row items-center gap-2"
          >
            <BiUser className="text-2xl" />
            Account Settings
          </a>
          <a
            href="#"
            className="text-gray-500 text-lg font-medium flex flex-row items-center gap-2"
          >
            <TbExchange className="text-2xl" />
            Subscriptions
          </a>
          <a
            href="#"
            className="text-gray-500 text-lg font-medium flex flex-row items-center gap-2"
          >
            <BiCreditCard className="text-2xl" />
            Payments
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
