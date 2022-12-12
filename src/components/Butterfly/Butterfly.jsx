import React from "react";
import "./Butterfly.scss";
import { motion } from "framer-motion";
const Butterfly = () => {
  return (
    <div>
      {/* <div class="butterfly">
        <div class="wing">
          <div class="bit"></div>
          <div class="bit"></div>
        </div>
        <div class="wing">
          <div class="bit"></div>
          <div class="bit"></div>
        </div>
      </div>
      <div class="shadow"></div>
      */}
      <motion.div class="container1">
        <div class="left">
          <motion.div class="l1"></motion.div>

          <motion.div class="lwings">
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="l2"
            ></motion.div>
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="l3"
            ></motion.div>
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="l4"
            ></motion.div>
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="l5"
            ></motion.div>
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="l7"
            ></motion.div>
          </motion.div>

          <motion.div class="l6"></motion.div>
        </div>

        <motion.div class="right">
          <motion.div class="r1"></motion.div>

          <motion.div class="rwings">
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="r2"
            ></motion.div>
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="r3"
            ></motion.div>
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="r4"
            ></motion.div>
            <motion.div
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              class="r5"
            ></motion.div>
            <motion.div
              class="r7"
              animate={{ rotateY: 60 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
          </motion.div>

          <motion.div class="r6"></motion.div>
          <h1 className="text-5xl justify-center flex content-center text-white">LOADING</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Butterfly;
