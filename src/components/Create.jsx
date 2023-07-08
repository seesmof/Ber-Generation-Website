import React from "react";
import GenerateNew from "../assets/generate_new.png";
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Create = () => {
  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex flex-col">
          <h2 className="font-extrabold text-3xl">👋🏻 Hey James!</h2>
          <p className="pt-1 text-gray-700">
            Good day to see you! let’s get creative, shall we?
          </p>
        </div>

        <div className="grid grid-cols-2 mt-6 gap-5">
          <div className="col-span-1 flex w-full bg-blue-500 relative p-4 rounded-2xl overflow-hidden aspect-square">
            <img
              src={GenerateNew}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0"
            />

            <h3 className="text-white z-50 self-end text-xl font-extrabold">
              Generate new artwork ✨
            </h3>
          </div>

          <div className="col-span-1 w-full bg-gray-200 p-4 rounded-2xl overflow-hidden aspect-square">
            <div className="flex h-full w-full flex-col justify-between">
              <FiArrowUpRight className="text-gray-700 text-2xl self-end" />
              <h3 className="font-extrabold text-xl">Discover AI artworks</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
