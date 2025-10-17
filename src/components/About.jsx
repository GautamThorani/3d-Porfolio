import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext"; // Add this import

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, isDarkMode }) => ( // Add isDarkMode prop
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`w-full p-[1px] rounded-[20px] shadow-card ${
        isDarkMode ? 'green-pink-gradient' : 'blue-gradient-light-card'
      }`}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${
          isDarkMode ? 'bg-tertiary' : 'bg-gray-100'
        }`}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className={`text-[20px] font-bold text-center ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { isDarkMode } = useTheme(); // Add this

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${
          isDarkMode ? '' : '!text-gray-600'
        }`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} ${
          isDarkMode ? '' : '!text-gray-900'
        }`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-[17px] max-w-3xl leading-[30px] ${
          isDarkMode ? 'text-secondary' : 'text-gray-600'
        }`}
      >
        I'm a skilled software developer with experience in TypeScript, JavaScript
        and Python,<br/> with expertise in frameworks like React, Node.js, and
        Fast Api. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service} 
            isDarkMode={isDarkMode} // Pass isDarkMode prop
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");