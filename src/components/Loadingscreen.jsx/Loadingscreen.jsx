import React from "react";
import { motion } from "framer-motion";
import Butterfly from "../Butterfly/Butterfly";

const Loadingscreen = () => {
  return (
    <motion.div
      animate={{ backgroundColor: "black" }}
      initial={{ backgroundColor: "white" }}
      transition={{ duration: 1, delay: 2, type: "tween" }}
      className="h-[100vh] "
    >
      <div className="flex flex-col justify-center items-center">
        <Butterfly />
      </div>
    </motion.div>
  );
};

export default Loadingscreen;
