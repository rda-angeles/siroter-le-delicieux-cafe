import React from "react";
import QualitiesCard from "../../components/UI/QualitiesCard";

import { servicesQualities } from "../../assets/data/services";

const Qualities = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 place-items-center container mx-auto section mt-[-12rem]">
      {servicesQualities.map((quality) => (
        <QualitiesCard quality={quality} key={quality.id}/>
      ))}
    </div>
  );
};

export default Qualities;
