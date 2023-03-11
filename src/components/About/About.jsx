import React from "react";
import WeLove from "../../assets/about-love.jpg";
import SLDLogo from "../../assets/sld-cafe-logo.png";
import { ButtonSolid } from "../UI/Buttons";
const About = () => {
  return (
    <div className=" text-white pt-10 lg:pt-0 pb-[5rem]">
      <div className="container mx-auto grid lg:grid-cols-2">
        {/* IMG */}
        <div className="img-wrapper w-[50%] md:max-w-[20rem] mx-auto lg:mx-0 lg:ml-auto">
          <img src={SLDLogo} alt="Siroter Logo" className="" />
        </div>

        {/* Content */}

        <div className="content col-span-1 mx-auto">
          <div className="section-title mb-5">
            <h5>who are we?</h5>
            <h2 className="before:left-[50%] before:translate-x-[-50%] lg:before:left-0 lg:before:translate-x-0">About us</h2>
          </div>

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            unde excepturi repudiandae aspernatur. Dolore beatae, eius cum
            neque, architecto dolorem deleniti dolorum, minima ipsam modi
            deserunt provident quam sapiente. Itaque maxime harum soluta illum
            neque assumenda dignissimos magnam enim consequuntur.
          </p>

          <ButtonSolid btnText={"Read More"} />
        </div>
      </div>
    </div>
  );
};

export default About;
