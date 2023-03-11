import React from "react";
import { ButtonOutline } from "../UI/Buttons";

const Promo = () => {
  return (
    <div className="bg-img promo-section h-[40vh] text-white flex items-center justify-around">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="mb-5">
          Special Promo! 10% discount to all Iced Coffee bought in a large cup!{" "}
        </h2>

        <ButtonOutline btnText={"Check it out!"}/>
      </div>
    </div>
  );
};

export default Promo;
