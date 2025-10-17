import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext"; 

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { isDarkMode } = useTheme(); 

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sahil Pahuja",
          from_email: form.email,
          to_email: "sahilpahuja261@email.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-[0.75] p-8 rounded-2xl ${
          isDarkMode ? 'bg-black-100' : 'bg-gray-50 shadow-lg'
        }`}
      >
        <p className={`${styles.sectionSubText} ${
          isDarkMode ? '' : '!text-gray-600'
        }`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} ${
          isDarkMode ? '' : '!text-gray-900'
        }`}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                isDarkMode 
                  ? 'bg-tertiary placeholder:text-secondary text-white' 
                  : 'bg-white placeholder:text-gray-400 text-gray-900 border border-gray-300'
              }`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Your email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                isDarkMode 
                  ? 'bg-tertiary placeholder:text-secondary text-white' 
                  : 'bg-white placeholder:text-gray-400 text-gray-900 border border-gray-300'
              }`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Your Message
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`py-4 px-6 rounded-lg outline-none border-none font-medium ${
                isDarkMode 
                  ? 'bg-tertiary placeholder:text-secondary text-white' 
                  : 'bg-white placeholder:text-gray-400 text-gray-900 border border-gray-300'
              }`}
            />
          </label>

          <button
            type='submit'
            className={`py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md ${
              isDarkMode 
                ? 'bg-tertiary text-white shadow-primary' 
                : 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700'
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");