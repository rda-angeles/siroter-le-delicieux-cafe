import React from "react";

const ServicesCard = ({ quality }) => {
  return (
    <div className="max-w-xs text-white text-center h-full bg-c-secondary p-5 rounded-lg">
      <div className="flex flex-col items-center justify-around h-full">
        <div className="img-wrapper max-w-[6rem] mb-4">
          <img src={quality.icon} alt="" />
        </div>

        <h3 className="text-lg font-bold">{quality.quality}</h3>

        <p className="text-sm">{quality.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
