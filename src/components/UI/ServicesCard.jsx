import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <div className="max-w-xs">
      <div className="">
        <div className="flex items-center gap-x-2 mb-2">
          {service.icon}
          <h3 className="text-lg font-bold">{service.service}</h3>
        </div>
        <p className="text-sm">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
