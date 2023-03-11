import React from "react";
import ServicesCard from "../UI/ServicesCard";
import ServicesImg from "../../assets/services.jpg";
import { services } from "../../assets/data/services";
const Services = () => {
  return (
    <div className=" section  text-white bg-c-quinary ">
      <div className="section-title mb-10 text-center">
        <h5>What we offer?</h5>
        <h2 className="before:left-[50%] before:translate-x-[-50%]">Services</h2>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center gap-12 lg:flex-row ">
        <div className="grid place-items-center gap-10 lg:grid-cols-2 ">
          {services.map((service) => (
            <ServicesCard service={service} key={service.id} />
          ))}
        </div>

        <div className="img-wrapper md:max-w-[35rem] lg:max-w-md">
          <img src={ServicesImg} alt="Service Img"  className="shadow-black shadow-md rounded-md"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
