import { BrowserRouter } from "react-router-dom";
import { useTheme } from "./context/ThemeContext"; // Add this import
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const { isDarkMode } = useTheme(); // Get the theme state

  return (
    <BrowserRouter>
      {/* This div wraps the ENTIRE website and changes background based on theme */}
      <div className={`relative z-0 transition-colors duration-300 ${
        isDarkMode ? 'bg-primary' : 'bg-white'
      }`}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;