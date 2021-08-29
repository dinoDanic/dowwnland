import { motion } from "framer-motion";
import React from "react";
import "./properties.styles.scss";

const Properties = () => {
  return (
    <div className="properties">
      <div className="properties__left">
        <div className="properties__left-row1">
          <motion.div layoutId="box1" className="box boxp1">
            <motion.p layoutId="p1">content</motion.p>
          </motion.div>
          <motion.div layoutId="box2" className="box boxp2">
            <motion.p layoutId="p2">content</motion.p>
          </motion.div>
        </div>
        <div className="properties__left-row2">
          <motion.div layoutId="box3" className="box boxp3">
            <motion.p layoutId="p3">content</motion.p>
          </motion.div>
          <motion.div layoutId="box4" className="box boxp4">
            <motion.p layoutId="p4">content</motion.p>
          </motion.div>
        </div>
        <div className="properties__left-row3">
          <motion.div layoutId="box7" className="box boxp7">
            <motion.p layoutId="p7">content</motion.p>
          </motion.div>
        </div>
      </div>
      <div className="properties__right">
        <motion.div layoutId="box6" className="box boxp6">
          <motion.p layoutId="p6">content</motion.p>
        </motion.div>
        <motion.div layoutId="box8" className="box boxp8">
          <motion.p layoutId="p8">content</motion.p>
        </motion.div>
        <motion.div layoutId="box5" className="box boxp5">
          <motion.p layoutId="p5">content p5</motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Properties;
