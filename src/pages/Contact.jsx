import React from "react";
import ContactImg from "../assets/contact.jpg";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { motion } from "framer-motion";
const sldSocials = [
  {
    id: 1,
    path: "https://siroter-le-delicieux-cafe.vercel.app/",
    socialName: "Facebook",
    icon: (
      <FacebookIcon
        sx={{
          fontSize: "1.5rem",
          marginRight: ".2rem",
          color: "#C5A880",
        }}
      />
    ),
  },
  {
    id: 2,
    path: "https://siroter-le-delicieux-cafe.vercel.app/",
    socialName: "Instagram",
    icon: (
      <InstagramIcon
        sx={{
          fontSize: "1.5rem",
          marginRight: ".2rem",
          color: "#C5A880",
        }}
      />
    ),
  },
];
const Contact = () => {
  return (
    <motion.div
      className="lg:h-screen flex flex-col items-center justify-around text-white py-[7rem] px-5 lg:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="section-title mb-10 text-center">
        <h5>Want to connect with us?</h5>
        <h2 className="before:left-[50%] before:translate-x-[-50%]">Contact</h2>
      </div>

      <div className="container mx-auto grid place-items-center lg:grid-cols-2 gap-x-6">
        <div className="img-wrapper mb-12 md: max-w-xl lg:max-w-[50rem]">
          <LazyLoadImage
            src={ContactImg}
            alt="Map"
            effect="blur"
            className="rounded-3xl shadow-c-tertiary shadow-lg"
          />
        </div>

        {/* Contact Content */}

        <div className="text-center lg:text-left">
          <p className="mb-5 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <LocationOnIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#C5A880",
                }}
              />
              Location:
            </span>{" "}
            Cavite, Philippines
          </p>

          <p className="my-10 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <LocalPhoneIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#C5A880",
                }}
              />
              Phone:
            </span>{" "}
            (+63) 977 1111 000
          </p>

          {sldSocials.map((social) => (
            <p className="mb-10 text-xl">
              <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
                {social.icon}
                {social.socialName}
              </span>{" "}
              <a
                href={social.path}
                target="_blank"
                className="font-f-secondary"
              >
                {social.path}
                {}
              </a>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
