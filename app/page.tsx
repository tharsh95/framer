"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Withsimbian from './containers/Withsimbian';
import Withoutsimbian from './containers/Withoutsimbian';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WithSimbian = ({ setShowWithSimbian }: { setShowWithSimbian: (value: boolean) => void }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#9aace4] via-blue-400 to-blue-200 text-white"
  >
    <Withsimbian/>
    {/* Desktop Arrow Indicator */}
    <motion.div 
      className="absolute bottom-10 hidden lg:flex items-center gap-4 text-white/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <FaArrowLeft className="text-2xl" />
        <span>Press Left Arrow</span>
      </div>
    </motion.div>
    {/* Mobile/Tablet Button */}
    <motion.button
      onClick={() => setShowWithSimbian(false)}
      className="absolute left-4 top-8 -translate-y-1/2 lg:hidden flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <FaArrowLeft className="text-xl" />
    </motion.button>
  </motion.div>
);

const WithoutSimbian = ({ setShowWithSimbian }: { setShowWithSimbian: (value: boolean) => void }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#070d1f] via-[#043be0] to-[#090b13] text-white"
  >
    <Withoutsimbian/>
    {/* Desktop Arrow Indicator */}
    <motion.div 
      className="absolute bottom-10 hidden lg:flex items-center gap-4 text-white/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <FaArrowRight className="text-2xl" />
        <span>Press Right Arrow</span>
      </div>
    </motion.div>
    {/* Mobile/Tablet Button */}
    <motion.button
      onClick={() => setShowWithSimbian(true)}
      className="absolute right-4 top-8 -translate-y-1/2 lg:hidden flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <FaArrowRight className="text-xl" />
    </motion.button>
  </motion.div>
);

const page = () => {
  const [showWithSimbian, setShowWithSimbian] = useState(false);
  const [rcount,setRcount] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setShowWithSimbian(true);
      } else if (e.key === 'ArrowLeft') {
        setShowWithSimbian(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showWithSimbian ? 
        <WithSimbian key="with" setShowWithSimbian={setShowWithSimbian} /> : 
        <WithoutSimbian key="without" setShowWithSimbian={setShowWithSimbian} />
      }
    </AnimatePresence>
  );
};

export default page;