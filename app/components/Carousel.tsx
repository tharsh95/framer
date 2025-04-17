"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaSearch, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

const arr = [
  {
    title: "Asking Chat Gpt",
    icon: <FaRobot className="text-2xl" />,
    description: "Consulting AI for insights"
  },
  {
    title: "Analysing",
    icon: <FaSearch className="text-2xl" />,
    description: "Deep analysis in progress"
  },
  {
    title: "Discovering threats",
    icon: <FaShieldAlt className="text-2xl" />,
    description: "Identifying potential risks"
  },
  {
    title: "Missed it",
    icon: <FaExclamationTriangle className="text-2xl" />,
    description: "Overlooked vulnerabilities"
  },
];

const Carousel = () => {
  return (
    <div className="relative h-[45vh] w-full flex items-center justify-center ">
      {arr.map((item, index) => (
        <motion.div
          key={index}
          className="absolute w-88 h-18 bg-black/30 backdrop-blur-sm text-white rounded-lg flex flex-col items-center justify-center gap-2 border border-white/20"
          animate={{
            y: [140, 0, 0],
            opacity: [0, 1, 0],
          }}
          initial={{ y: 100, opacity: 0 }}
          transition={{
            duration: 4,
            delay:index* 2,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
          <p className="text-sm text-white/70">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
