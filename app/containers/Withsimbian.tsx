import React, { useState, useEffect } from 'react'
import Carousel from '../components/Carousel'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from "react-icons/fa"
import Number from '../components/Number';
import { 
  alertIcons, 
  middleIcons, 
  withSimbianRightCards as rightCards, 
  withSimbianCards as cards 
} from '../data/simbianData';

const Withsimbian = () => {
  const [visibleIcons, setVisibleIcons] = useState<{[key: string]: boolean}>({});
  const [showCheck, setShowCheck] = useState<{[key: string]: boolean}>({});
  const [isShaking, setIsShaking] = useState(true);
  const [isScaling, setIsScaling] = useState(true);

  useEffect(() => {
    // Calculate total number of icons across all cards
    const totalIcons = rightCards.reduce((sum, card) => sum + Math.min(card.count, 15), 0);
    const delayPerIcon = 3000 / totalIcons;

    // Create initial state with all icons visible
    const initialState = rightCards.reduce((acc, card) => {
      const iconCount = Math.min(card.count, 15);
      for (let i = 0; i < iconCount; i++) {
        acc[`${card.title}-${i}`] = true;
      }
      return acc;
    }, {} as {[key: string]: boolean});

    setVisibleIcons(initialState);

    // Schedule icon removals in reverse order
    const keys = Object.keys(initialState);
    keys.reverse().forEach((key, index) => {
      setTimeout(() => {
        setVisibleIcons(prev => ({
          ...prev,
          [key]: false
        }));
        
        // Check if this is the last icon for a card
        const cardTitle = key.split('-')[0];
        const remainingIcons = Object.keys(visibleIcons).filter(k => 
          k.startsWith(cardTitle) && visibleIcons[k]
        ).length;
        
        if (remainingIcons === 1) { // Last icon being removed
          setShowCheck(prev => ({
            ...prev,
            [cardTitle]: true
          }));
        }
      }, index * delayPerIcon);
    });

    // Stop shaking after animation completes
    const shakeTimer = setTimeout(() => {
      setIsShaking(false);
    }, 2000); // 2 seconds of shaking

    // Stop scaling after 3 seconds
    const scaleTimer = setTimeout(() => {
      setIsScaling(false);
    }, 3000); // 3 seconds of scaling

    return () => {
      clearTimeout(shakeTimer);
      clearTimeout(scaleTimer);
    };
  }, []);

  return (
    <div className='w-full lg:h-screen h-full lg:not-first:overflow-hidden bg-[url("/bg.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className='w-full h-full flex flex-col lg:flex-row'>
        {/* Left Part */}
        <div className='w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-4 p-4'>
          <div className='w-full max-w-md text-center mb-4'>
            <h2 className='text-3xl font-bold text-blue-500 mb-2'>With Simbian</h2>
            <p className='text-white/80 mb-4'>Relax, Our AI Agents will take it from here</p>
          </div>
          
          {/* Middle Icons - Horizontal on mobile, vertical on larger screens */}
          <div className='absolute left-1/2 top-45 -translate-x-1/2 -translate-y-1/2 flex flex-row lg:flex-col gap-4 lg:gap-2'>
            {middleIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className='flex flex-col items-center gap-2'
              >
                <div className='p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20'>
                  {item.icon}
                </div>
                <span className='text-white/80 text-sm'>{item.label}</span>
              </motion.div>
            ))}
        </div>
        
        {/* Vertical line - hidden on mobile */}
        <div className='absolute left-1/2 top-[53%] -translate-x-1/2 flex flex-col items-center'>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "30vh", opacity: 1 }}
              transition={{ 
                delay: 1.2,
                duration: 1,
                ease: "easeOut"
              }}
              className='w-[1px] bg-blue-500 hidden lg:block'
              style={{ 
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
              }}
            />
            
            {/* Down Arrow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 2.2,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              className='mt-2 p-2  hidden lg:block rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30'
            >
              <FaChevronDown className="text-blue-500 text-xl" />
            </motion.div>
        </div>
        <div className='w-80 mt-28 '>

          
          {rightCards.map((card, index) => (
            <motion.div 
            key={index}
              className={`w-full max-w-md p-4 mb-6 ${card.color} backdrop-blur-sm rounded-lg text-white border-2 border-white`}
              animate={isShaking ? {
                x: [0, 10, -10, 10, -10, 0],
                rotate: [0, 1, -1, 1, -1, 0]
              } : {}}
              transition={{
                duration: 1,
                repeat: 2,
                ease: "easeInOut"
              }}
            >
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 rounded-md bg-green-500'>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="icon"
                        initial={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {card.icon}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <h3 className='text-lg font-medium'>{card.title}</h3>
                </div>
                <div className='text-2xl font-bold text-green-400'>
                   <Number number={card.count} reverse={true} />
                </div>
              </div>
              <div className='flex flex-wrap gap-2'>
                <AnimatePresence>
                  {Array.from({ length: Math.min(card.count, 15) }).map((_, i) => (
                    visibleIcons[`${card.title}-${i}`] && (
                      <motion.div
                        key={`${card.title}-${i}`}
                        initial={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='rounded-md bg-white/10'
                      >
                        {alertIcons[Math.floor(Math.random() * alertIcons.length)]}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
          </div>

        </div>
        
        {/* Right Part */}
        <div className='w-full lg:w-1/2 h-full flex flex-col justify-start items-center gap-4 p-4 pt-8'>
          <div className='w-full h-[40%] flex items-center justify-center'>
            {/* <Carousel/> */}
          </div>
          <div className='w-full h-[40%] flex flex-col justify-center items-center gap-4'>
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                className='w-full max-w-md p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white flex items-center gap-4'
                animate={isScaling ? {
                  scale: [1, 1.1, 1],
                  boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0px rgba(59, 130, 246, 0)"]
                } : {}}
                transition={{
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <div className='text-white bg-green-500 p-1 rounded-md'>{card.icon}</div>
                <div className='text-base text-center flex-1'>{card.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Withsimbian