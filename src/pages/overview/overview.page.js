import React from "react";
import { motion } from "framer-motion";
import "./overview.styles.scss";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__left">
        <div className="overview__left-row1">
          <motion.div layoutId="box1" className="box boxo1">
            <motion.p layoutId="p1">content</motion.p>
          </motion.div>
          <motion.div layoutId="box2" className="box boxo2">
            <motion.p layoutId="p2">content</motion.p>
          </motion.div>
        </div>
        <div className="overview__left-row2">
          <motion.div layoutId="box3" className="box boxo3">
            <motion.p layoutId="p3">content</motion.p>
          </motion.div>
          <motion.div layoutId="box4" className="box boxo4">
            <motion.p layoutId="p4">content</motion.p>
          </motion.div>
        </div>
        <div className="overview__left-row3">
          <motion.div layoutId="box5" className="box boxo5">
            <motion.p layoutId="p5">content</motion.p>
          </motion.div>
        </div>
      </div>
      <div className="overview__right">
        <motion.div layoutId="box6" className="box boxo6">
          <motion.p layoutId="p6">content</motion.p>
        </motion.div>
        <motion.div layoutId="box7" className="box boxo7">
          <motion.p layoutId="p7">content</motion.p>
        </motion.div>
        <motion.div layoutId="box8" className="box boxo8">
          <motion.p layoutId="p8">content</motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
