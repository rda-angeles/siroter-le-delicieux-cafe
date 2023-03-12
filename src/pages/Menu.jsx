import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFoods,
  getMainCourse,
  getBreakfasts,
  getSnacksAndSandwiches,
  getSideDishes,
  getLunch,
  getSoups,
  getDesserts,
} from "../features/slices/foodSlices";

import { motion } from "framer-motion";
import MenuCard from "../components/UI/MenuCard";
// import Tabs from "../components/UI/Tabs";

const Menu = () => {
  const tabBtns = [
    {
      id: 1,
      btnName: "Breakfasts",
    },
    {
      id: 2,
      btnName: "Main Courses",
    },
    {
      id: 3,
      btnName: "Lunch",
    },
    {
      id: 4,
      btnName: "Snacks & Sandwiches",
    },
    {
      id: 5,
      btnName: "Desserts",
    },
    {
      id: 6,
      btnName: "Soups",
    },
    {
      id: 7,
      btnName: "Side Dishes",
    },
  ];

  const dispatch = useDispatch();

  const mainCourses = useSelector(getMainCourse);
  const breakfasts = useSelector(getBreakfasts);
  const snacksAndSandwiches = useSelector(getSnacksAndSandwiches);
  const sideDishes = useSelector(getSideDishes);
  const lunch = useSelector(getLunch);
  const desserts = useSelector(getDesserts);
  const soups = useSelector(getSoups);

  const [displayFood, setDisplayFood] = useState([]);
  const [tabActive, setTabActive] = useState(tabBtns[0].btnName);

  const activeTab = (tabActive) => {
    setTabActive(tabActive);

    if (tabActive === "Breakfasts") {
      setDisplayFood(breakfasts);
    }

    if (tabActive === "Main Courses") {
      setDisplayFood(mainCourses);
    }

    if (tabActive === "Lunch") {
      setDisplayFood(lunch);
    }

    if (tabActive === "Snacks & Sandwiches") {
      setDisplayFood(snacksAndSandwiches);
    }

    if (tabActive === "Desserts") {
      setDisplayFood(desserts);
    }

    if (tabActive === "Soups") {
      setDisplayFood(soups);
    }

    if (tabActive === "Side Dishes") {
      setDisplayFood(sideDishes);
    }
  };

  useEffect(() => {
    dispatch(getFoods());

    setDisplayFood(breakfasts);
  }, [breakfasts]);

  return (
    <motion.div
      className="py-[7rem] text-white"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      exit={{
        y: "100%",
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      <div className="section-title mb-10 text-center">
        <h5>What we offer?</h5>
        <h2 className="before:left-[50%] before:translate-x-[-50%]">
          Our Menu
        </h2>
      </div>

      {/* Menu Content */}
      <div className="container px-5 lg:px-0 mx-auto flex flex-col items-center justify-around">
        {Object.keys(displayFood).length === 0 ? (
          <div className="h-screen flex items-center">
            <h1>Menu Loading....</h1>
          </div>
        ) : (
          <>
            {/* Tabs Button */}
            <div className="container mx-auto text-center mb-12 flex gap-5 flex-wrap justify-center">
              {tabBtns.map((button) => (
                <button
                  className={
                    tabActive === button.btnName
                      ? "tab-button tab-active"
                      : "tab-button"
                  }
                  key={button.id}
                  onClick={() => {
                    activeTab(button.btnName);
                  }}
                >
                  <h3> {button.btnName}</h3>
                </button>
              ))}
            </div>

            {/* Menu Card */}
            <div
              className={`grid gap-5 ${
                Object.keys(displayFood).length === 1
                  ? "grid-cols-1"
                  : "lg:grid-cols-2"
              }`}
            >
              {displayFood.map((food) => (
                <MenuCard menu={food} key={food.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;
