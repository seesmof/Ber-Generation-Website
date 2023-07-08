import React from "react";
import Winter from "../assets/winter.png";
import Assistant from "../assets/assistant.png";
import { BsThreeDots } from "react-icons/bs";

const Create = () => {
  const InfoCard = ({ title, description, img }) => {
    return (
      <>
        <div className="flex flex-col col-span-1">
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img
              src={img}
              alt="card image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-row w-full justify-between pt-4 gap-3">
            <div className="flex flex-col">
              <h3 className="font-extrabold text-lg">{title}</h3>
              <p className="text-gray-600">{description}</p>
              <button className="bg-black mt-4 text-white font-bold rounded-xl p-2">
                Remix ✨
              </button>
            </div>

            <button className="rounded-lg bg-gray-200 h-8 w-8 flex items-center justify-center p-1 aspect-square">
              <BsThreeDots className="text-gray-600" />
            </button>
          </div>
        </div>
      </>
    );
  };

  const InfoCards = [
    {
      title: "Winter sports",
      description: "Generate a futuristic winter sports man...",
      img: Winter,
    },
    {
      title: "AI bot assistant",
      description: "Create a starwars-like ai assistant with legs",
      img: Assistant,
    },
  ];

  return (
    <>
      <div className="flex flex-col p-4">
        <div className="flex flex-col">
          <h2 className="font-extrabold text-3xl">Your recent projects</h2>
          <p className="pt-1 text-gray-700">Continue where you left off </p>
        </div>

        <div className="grid grid-cols-2 mt-6 gap-5">
          {InfoCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Create;
