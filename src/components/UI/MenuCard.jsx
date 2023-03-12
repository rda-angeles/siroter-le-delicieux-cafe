import React from "react";
import Testing from "../../assets/popular-menu.jpg";
import { ButtonSolid } from "./Buttons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const MenuCard = ({ menu }) => {
  return (
    <div
      className={`bg-c-tertiary max-w-[40rem] p-5 grid gap-10 place-items-center lg:grid-cols-2 rounded-xl `}
    >
      <div className="img-wrapper w-[15rem] ">
        <LazyLoadImage
          src={menu.photoUrl}
          effect="blur"
          width="15rem"
          height="15rem"
          style={{ objectFit: "cover" }}
          className="rounded-xl shadow-md shadow-black"
        />
      </div>

      <div className="text-center lg:text-left">
        <h3>{menu.title}</h3>
        <p className="text-sm mb-5">
          {menu.description === ""
            ? "N/a"
            : menu.description.substr(0, 80) + "..."}
        </p>

        <Link to={`/menu/${menu.id}`}>
          <ButtonSolid btnText={"Read more"} />
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
