import React from "react";
import { useParams } from "react-router-dom";
const MenuDetails = () => {
  const { id } = useParams();
  return (
    <div className="h-screen flex items-center justify-around text-white">
      <h1>{id}</h1>
    </div>
  );
};

export default MenuDetails;
