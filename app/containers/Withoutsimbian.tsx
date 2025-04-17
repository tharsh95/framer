import React from 'react'
import Carousel from '../components/Carousel'
import { 
  FaClock, FaPuzzlePiece, FaTools, 
  FaExclamationTriangle, FaTimesCircle, FaShieldAlt,
  FaUser, FaLock, FaGlobe, FaServer, FaDatabase,
  FaNetworkWired, FaShieldVirus, FaBug, FaFire,
  FaSkull, FaRadiation, FaBiohazard, FaVirus,
  FaRobot,
  FaCogs,
  FaBrain,
  FaChevronDown
} from "react-icons/fa"
import Number from '../components/Number';
import {motion} from "framer-motion"

const Withoutsimbian = () => {
  const alertIcons = [
    <FaUser className="text-lg" />,
    <FaLock className="text-lg" />,
    <FaGlobe className="text-lg" />,
    <FaServer className="text-lg" />,
    <FaDatabase className="text-lg" />,
    <FaNetworkWired className="text-lg" />,
    <FaShieldVirus className="text-lg" />,
    <FaBug className="text-lg" />,
    <FaFire className="text-lg" />,
    <FaSkull className="text-lg" />,
    <FaRadiation className="text-lg" />,
    <FaBiohazard className="text-lg" />,
    <FaVirus className="text-lg" />
  ];

  const middleIcons = [
    { icon: <FaRobot className="text-4xl" />, label: "AI Agent" },
    { icon: <FaBrain className="text-4xl" />, label: "Intelligence" },
    { icon: <FaShieldVirus className="text-4xl" />, label: "Protection" },
    { icon: <FaCogs className="text-4xl" />, label: "Automation" }
  ];
  const rightCards = [
    {
      title: "Ignored Alerts",
      count: 200,
      icon: <FaExclamationTriangle className="text-2xl" />,
      color: "bg-transparent-500/20",
      borderColor: "border-transparent-500/30",
      alertIcon: <FaExclamationTriangle className="text-lg" />,
      number:false
    },
    {
      title: "Wrongly Closed Alerts",
      count: 35,
      icon: <FaTimesCircle className="text-2xl" />,
      color: "bg-transparent-500/20",
      borderColor: "border-transparent-500/30",
      alertIcon: <FaTimesCircle className="text-lg" />,
      number:false

    },
    {
      title: "Active Threats",
      count: 10,
      icon: <FaShieldAlt className="text-2xl" />,
      color: "bg-transparent-500/20",
      borderColor: "border-transparent-500/30",
      alertIcon: <FaShieldAlt className="text-lg" />,
      number:true
    }
  ];

  const cards = [
    {
      text: "Wasting valuable analyst time on false positives",
      icon: <FaClock className="text-xl md:text-2xl" />
    },
    {
      text: "Processing one alert at a time, missing the big picture",
      icon: <FaPuzzlePiece className="text-xl md:text-2xl" />
    },
    {
      text: "More time fixing SOAR automation, less time on real threats",
      icon: <FaTools className="text-xl md:text-2xl" />
    }
  ];

  return (
    <div className='w-full lg:h-screen h-full lg:not-first:overflow-hidden relative'>
      <div className='absolute inset-0 bg-[url("/bg.jpg")] bg-cover bg-center bg-no-repeat'></div>
      <div className='absolute inset-0 bg-blue-900/70'></div>
      <div className='relative w-full h-full flex flex-col lg:flex-row'>
        {/* Heading moved to top */}
        <div className='w-full text-center p-4 pt-8 lg:hidden'>
          <h2 className='text-3xl font-bold text-blue-500 mb-2'>Without Simbian</h2>
          <p className='text-white/80 mb-4'>if this sounds too familiar you might want to</p>
          <button className='px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors'>
            Book a Demo
          </button>
        </div>
        
        {/* Left Part */}
        <div className='w-full lg:w-1/2 h-full flex flex-col justify-start items-center gap-4 p-4 pt-8'>
          <div className='w-full h-[40%] flex items-center justify-center'>
            <Carousel/>
          </div>
          <div className='w-full h-[60%] flex flex-col justify-center items-center gap-4'>
            {cards.map((card, index) => (
              <div 
                key={index}
                className='w-full max-w-md p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white flex items-center gap-4'
              >
                <div className='text-white bg-red-500 p-2 rounded-md'>{card.icon}</div>
                <div className='text-base text-center flex-1'>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Middle icons - horizontal on mobile, vertical on desktop */}
        <div className='absolute left-1/2 top-54  -translate-x-1/2 -translate-y-1/2 flex flex-row lg:flex-col gap-4 lg:gap-2'>
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
              className='mt-2 p-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30'
            >
              <FaChevronDown className="text-blue-500 text-xl" />
            </motion.div>
        </div>
        
        {/* Right Part */}
        <div className='w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-4 p-4'>
          <div className='w-full max-w-md text-center mb-4 hidden lg:block'>
            <h2 className='text-3xl font-bold text-blue-500 mb-2'>Without Simbian</h2>
            <p className='text-white/80 mb-4'>if this sounds too familiar you might want to</p>
            <button className='px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors'>
              Book a Demo
            </button>
          </div>
          {rightCards.map((card, index) => (
            <div 
              key={index}
              className={`w-full max-w-md p-4 ${card.color} backdrop-blur-sm rounded-lg border ${card.borderColor} text-white`}
            >
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 rounded-md bg-red-500'>
                    {card.icon}
                  </div>
                  <h3 className='text-lg font-medium'>{card.title}</h3>
                </div>
                <div className='text-2xl font-bold text-red-500'>
                  {card.number ? <Number number={card.count} /> : card.count}
                </div>
              </div>
              <div className='flex flex-wrap gap-2'>
                {Array.from({ length: Math.min(card.count, 15) }).map((_, i) => (
                  <div key={i} className='rounded-md bg-white/10'>
                    {alertIcons[Math.floor(Math.random() * alertIcons.length)]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Withoutsimbian