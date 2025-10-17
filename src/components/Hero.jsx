import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`relative w-full h-screen mx-auto ${
      isDarkMode 
        ? 'bg-hero-pattern bg-cover bg-no-repeat bg-center' 
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
    }`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Dot - Purple in dark, Blue in light */}
          <div className={`w-5 h-5 rounded-full ${
            isDarkMode ? 'bg-[#915EFF]' : 'bg-blue-600'
          }`} />
          
          {/* Line gradient - Purple in dark, Blue in light */}
          <div className={`w-1 sm:h-80 h-40 ${
            isDarkMode ? 'violet-gradient' : 'blue-gradient-light'
          }`} />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hi, I'm <span className={`${
              isDarkMode ? 'text-[#915EFF]' : 'text-blue-600'
            }`}>Gautam</span>
          </h1>
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 ${
            isDarkMode ? 'text-[#dfd9ff]' : 'text-gray-700'
          }`}>
            I develop modern and scalable <br className='sm:block hidden' />
            Full-Stack applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className={`w-[35px] h-[64px] rounded-3xl border-4 ${
            isDarkMode ? 'border-secondary' : 'border-gray-400'
          } flex justify-center items-start p-2`}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full ${
                isDarkMode ? 'bg-secondary' : 'bg-gray-500'
              } mb-1`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;