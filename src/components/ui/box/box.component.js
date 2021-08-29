import { motion } from "framer-motion";
import React from "react";
import "./box.styles.scss";

const Box = ({ children }) => {
  return <motion.div className="box">{children}</motion.div>;
};

export default Box;
