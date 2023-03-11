import React from "react";
import WeLove from "../../assets/about-love.jpg";
import { ButtonSolid } from "../UI/Buttons";
const About = () => {
  return (
    <div className=" text-white section ">
      <div className="container mx-auto grid lg:grid-cols-2">
        {/* IMG */}
        <div className="img-wrapper md:max-w-[35rem] lg:max-w-md p-5 bg-c-quarternary rounded-md ml-auto">
          <img src={WeLove} alt="" />
        </div>

        {/* Content */}

        <div className="content col-span-1 ">
          <div className="section-title mb-5">
            <h5>who are we?</h5>
            <h2>About us</h2>
          </div>

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            unde excepturi repudiandae aspernatur. Dolore beatae, eius cum
            neque, architecto dolorem deleniti dolorum, minima ipsam modi
            deserunt provident quam sapiente. Itaque maxime harum soluta illum
            neque assumenda dignissimos magnam enim consequuntur.
          </p>

          <ButtonSolid btnText={"Read More"}/>
        </div>
      </div>
    </div>
  );
};

export default About;
