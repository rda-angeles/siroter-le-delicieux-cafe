import React from "react";
import SectionTitle from "../components/UI/SectionTitle";
import SLDLogo from "../assets/sld-cafe-logo.png";
import { TeamManagement } from "../components/TeamManagement/TeamManagement";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery/Gallery";
import { galleryImages } from "../assets/data/gallery";

const WhoAreWe = () => {
  return (
    <motion.div
      className=" text-white flex items-center justify-center flex-col pt-[7rem]"
      initial={{ width: "0" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <SectionTitle tagline={"who are we?"} titleText={"About us"} />

      <div>
        <div className="container mx-auto mt-10">
          <div className="img-wrapper max-w-xs mx-auto mb-10">
            <img src={SLDLogo} alt="" />
          </div>

          <div className="text-center lg:text-left px-5 lg:px-0">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque, iusto, sapiente necessitatibus adipisci officia eius
              harum, beatae tempora consectetur itaque placeat id eligendi!
              Magnam nobis inventore rerum eum voluptas soluta voluptatum, quam
              asperiores. Ipsa esse error fuga? Sunt quis placeat quibusdam,
              facere, ipsam nemo ullam corporis obcaecati, eveniet natus
              corrupti.
            </p>
            <p className="my-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              dolor deserunt saepe explicabo, omnis itaque ratione praesentium
              error eum modi unde. Dolorum tempora perspiciatis, saepe eos eaque
              molestiae sapiente non ducimus magnam maxime, rerum minus dolorem
              ratione quam accusamus impedit earum autem pariatur eligendi. Amet
              omnis delectus totam sit optio? Reiciendis delectus aspernatur
              pariatur, deserunt quis unde perferendis magni iste magnam fugit.
              Pariatur iste tempora, autem exercitationem eum esse error?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque, iusto, sapiente necessitatibus adipisci officia eius
              harum, beatae tempora consectetur itaque placeat id eligendi!
              Magnam nobis inventore rerum eum voluptas soluta voluptatum, quam
              asperiores. Ipsa esse error fuga? Sunt quis placeat quibusdam,
              facere, ipsam nemo ullam corporis obcaecati, eveniet natus
              corrupti.
            </p>
          </div>
        </div>
      </div>

      {/* Team Management */}
      <TeamManagement />

      <Gallery images={galleryImages} />
    </motion.div>
  );
};

export default WhoAreWe;
