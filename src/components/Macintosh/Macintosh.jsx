import React from "react";

import "./Macintosh.scss";
import { motion } from "framer-motion";

const Macintosh = ({ children }) => {
  return (
    <div className="relative ">
      <motion.div
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeatType: "reverse" }}
        class="macintosh"
        aria-label="1984 Macintosh illustration"
      >
        <div class="monitor">
          <div class="monitor-inner">
            <div class="screen-cutout">
              <div class="screen backdrop-blur-sm">
                <div class="container">
                  <div class="glitch" data-text="ELISABÉTH">
                    ELISABÉTH
                  </div>
                  <div class="glow">ELISABÉTH</div>
                  <p class="subtitle">IMPRACTICAL DEVELOPER</p>
                </div>
                <div class="scanlines"></div>
                {children}
              </div>
            </div>
            <div class="logo">
              <p>🏳️‍🌈</p>
            </div>
            <div class="opening">
              <div class="opening-inner"></div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="inset"></div>
          <div class="cable-container">
            <div class="cable-hole"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Macintosh;
