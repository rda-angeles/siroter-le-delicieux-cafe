import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import About from "../components/About/About";

import { motion } from "framer-motion";
import { galleryImages } from "../assets/data/gallery.js";

import Services from "../components/Services/Services";
import Qualities from "../components/Services/Qualities";
import BestSellers from "../components/BestSellers/BestSellers";
import Gallery from "../components/Gallery/Gallery";
import Promo from "../components/Promo/Promo";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      {/* Hero Component/Section */}
      <div
        className="h-[85vh] flex items-center justify-center text-white text-5xl bg-img hero-section relative section z-[-1]"
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

      {/* Qualities */}
      <Qualities />

      {/* About Component/Section */}
      <About />

      {/* Services Component/Section */}
      <Services />

      {/* Promo Component/Section */}
      <Promo />

      {/* Best Sellers */}
      <BestSellers />

      {/* Best Sellers */}
      <Gallery images={galleryImages} />
    </motion.div>
  );
};

export default Hero;
