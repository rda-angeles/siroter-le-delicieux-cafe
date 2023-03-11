import React from "react";
import BestSellersCard from "../UI/BestSellersCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getHotCoffees,
  getIcedCoffees,
  getHotCoffeeLists,
  getIcedCoffeeLists,
} from "../../features/slices/coffeeSlices";
import { useEffect } from "react";

const BestSellers = () => {
  const hotCoffees = useSelector(getHotCoffeeLists);
  const icedCoffees = useSelector(getIcedCoffeeLists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotCoffees());
    dispatch(getIcedCoffees());
  }, []);

  return (
    <div className=" text-white section">
      <div className="section-title mb-10 text-center">
        <h5>what we offer?</h5>
        <h2 className="before:left-[50%] before:translate-x-[-50%]">
          Popular Menu
        </h2>
      </div>

      <div className="container mx-auto ">
        {/* Hot Coffee */}
        <div className="mb-10">
          <div className="mb-10 section-title">
            <h2 className="text-2xl">Hot Coffees</h2>
          </div>

          <div className="grid place-items-center gap-5 lg:grid-cols-3">
            {Object.entries(hotCoffees)
              .slice(9, 12)
              .map((hotCoffee) => (
                <BestSellersCard bestSeller={hotCoffee} key={hotCoffee[1].id} />
              ))}
          </div>
        </div>

        {/* Iced Coffee */}
        <div>
          <div className="mb-10 section-title">
            <h2 className="text-2xl">Iced Coffees</h2>
          </div>

          <div className="grid place-items-center gap-5 lg:grid-cols-3">
            {Object.entries(icedCoffees)
              .slice(3, 6)
              .map((icedCoffees) => (
                <BestSellersCard bestSeller={icedCoffees} key={icedCoffees[1].id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
