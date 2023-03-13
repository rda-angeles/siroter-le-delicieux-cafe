import React, { useEffect, useState } from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FlagIcon from "@mui/icons-material/Flag";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFoodDetail, getFoods } from "../features/slices/foodSlices";
import { motion } from "framer-motion";
const MenuDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [saveFoodId, setSaveFoodId] = useState(localStorage.getItem("foodId"));
  const navigateBack = useNavigate();
  const foodDetail = useSelector(
    (state) => getFoodDetail(state, Number(id)) || saveFoodId
  );

  useEffect(() => {
    dispatch(getFoods());

    localStorage.setItem(
      "foodId",
      foodDetail.id != null ? foodDetail.id : saveFoodId
    );
    const getSaveFoodId = localStorage.getItem("foodId");
    if (getSaveFoodId) {
      setSaveFoodId(getSaveFoodId);
    }
    return () => {
      localStorage.clear();
    };
  }, []);

  return (
    <motion.div
      className="lg:h-screen flex items-center text-white pb-[7rem] pt-[9rem] px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto grid place-items-center lg:grid-cols-2 gap-x-6">
        {/* Food Image */}
        <div
          className="bg-img pb-[70%] md:h-[30rem] md:pb-0  w-full max-w-lg rounded-3xl shadow-c-tertiary shadow-lg"
          style={{
            backgroundImage: `url(${foodDetail.photoUrl})`,
          }}
        >
          {/* Back button */}
          <div className="mt-[-2.5rem]">
            <button
              onClick={() => navigateBack(-1)}
              className="flex items-center text-white"
            >
              <ArrowBackIosNewIcon
                sx={{
                  color: "#C5A880",
                }}
              />
              <p className="text-sm">Back</p>
            </button>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="leading-[6rem]">{foodDetail.title}</h1>

          {/* Subtitle */}
          <p className="font-bold text-sm mb-8 ">
            <span className="flex-initial items-center">
              <LocalDiningIcon
                sx={{
                  fontSize: "1.2rem",
                  marginRight: ".2rem",
                  color: "#C5A880",
                }}
              />
              {foodDetail.course != "" ? foodDetail.course : "N/a"}
              <span className="mx-2">|</span>
            </span>

            <span className="flex-initial items-center">
              <FlagIcon
                sx={{
                  fontSize: "1.2rem",
                  marginRight: ".2rem",
                  color: "#C5A880",
                }}
              />
              {foodDetail.cuisine != "" ? foodDetail.cuisine : "N/a"}

              <span className="mx-2">|</span>
            </span>

            <span className="flex-initial items-center">
              <FoodBankIcon
                sx={{
                  fontSize: "1.2rem",
                  marginRight: ".2rem",
                  color: "#C5A880",
                }}
              />
              {foodDetail.mainIngredient != ""
                ? foodDetail.mainIngredient
                : "N/a"}
            </span>
          </p>

          <p className="mb-5">{foodDetail.description}</p>

          {/* Others */}

          <p className="mb-5">
            <span className="font-f-secondary font-bold mr-1">
              Ingredients:
            </span>{" "}
            {foodDetail.ingredients}
          </p>
          <p>
            <span className="font-f-secondary font-bold mr-1">Source:</span>{" "}
            <a
              href={foodDetail.source}
              target="_blank"
              className="font-f-secondary"
            >
              {foodDetail.source}
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuDetails;
