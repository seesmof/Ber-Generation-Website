import React from "react";
import { BiCreditCard, BiHomeSmile, BiUser } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbExchange, TbHearts } from "react-icons/tb";

const NavigationMenu = () => {
  return (
    <>
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
    </>
  );
};

export default NavigationMenu;
