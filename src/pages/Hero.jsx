import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import About from "../components/About/About";

import { motion } from "framer-motion";

import "../stylesheets/hero/hero.scss";
import Services from "../components/Services/Services";

const Hero = () => {
  return (
    <div>

      {/* Hero Component/Section */}
      <div
        className="h-screen flex items-center justify-center text-white text-5xl bg-img hero-section relative section"
        style={{}}
      >
        <div className="overlay"></div>

        <div className="absolute z-10 max-w-5xl mx-auto text-center">
          <h1>We don't make your coffee. We make your day.</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dignissimos sit vel consequatur quaerat dolore inventore deleniti
            explicabo facere quisquam?
          </p>

          <motion.div whileHover={{ y: "10%" }} className="cursor-pointer">
            <ArrowForwardIosIcon
              sx={{ transform: "rotate(90deg)", fontSize: "2rem" }}
            />
          </motion.div>
        </div>
      </div>

      {/* About Component/Section */}
      <About />

      {/* Services Component/Section */}
      <Services/>
    </div>
  );
};

export default Hero;
