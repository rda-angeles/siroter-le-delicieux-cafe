import React from "react";
import { ButtonSolid } from "./Buttons";

const BestSellers = ({ bestSeller }) => {
  return (
    <div
      key={bestSeller[1].id}
      className="bg-c-tertiary w-full p-5 grid gap-10 place-items-center lg:grid-cols-2 rounded-3xl"
    >
      <div className="img-wrapper max-w-[15rem]">
        <img
          className=" rounded-3xl shadow-md shadow-black"
          src={bestSeller[1].image}
          alt={bestSeller[1].title}
          style={{ height: "15rem", objectFit: "cover" }}
        />
      </div>

      <div>
        <h3>{bestSeller[1].title}</h3>
        <p className="text-sm mb-5">{bestSeller[1].description}</p>

        <ButtonSolid btnText={"Buy now"} />
      </div>
    </div>
  );
};

export default BestSellers;
