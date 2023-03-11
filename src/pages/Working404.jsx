import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import { motion } from "framer-motion";
const Working404 = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-around text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <div className="max-w-xl">
        <ConstructionIcon
          sx={{
            fontSize: "10rem",
          }}
        />
        <h1>Page not Found or Page is under construction.</h1>
      </div>
    </motion.div>
  );
};

export default Working404;
