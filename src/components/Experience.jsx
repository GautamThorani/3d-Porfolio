import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isDarkMode }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkMode ? "#1d1836" : "#ffffff",
        color: isDarkMode ? "#fff" : "#1f2937",
        boxShadow: isDarkMode ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        border: isDarkMode ? "none" : "1px solid #e5e7eb"
      }}
      contentArrowStyle={{ 
        borderRight: isDarkMode ? "7px solid #232631" : "7px solid #d1d5db"
      }}
      date={experience.date}
      dateClassName={isDarkMode ? "text-white" : "text-gray-600"}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className={`text-[24px] font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {experience.title}
        </h3>
        <p
          className={`text-[16px] font-semibold ${
            isDarkMode ? 'text-secondary' : 'text-gray-600'
          }`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`text-[14px] pl-1 tracking-wider ${
              isDarkMode ? 'text-white-100' : 'text-gray-700'
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center ${
          isDarkMode ? '' : '!text-gray-600'
        }`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center ${
          isDarkMode ? '' : '!text-gray-900'
        }`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* Add theme class to VerticalTimeline */}
        <VerticalTimeline className={isDarkMode ? "vertical-timeline-dark" : "vertical-timeline-light"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isDarkMode={isDarkMode}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");