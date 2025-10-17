import { Html, useProgress } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext"; 

const CanvasLoader = () => {
  const { progress } = useProgress();
  const { isDarkMode } = useTheme(); 

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className={`canvas-loader ${isDarkMode ? '' : 'canvas-loader-light'}`}></span>
      <p
        style={{
          fontSize: 14,
          color: isDarkMode ? "#F1F1F1" : "#374151", // White in dark, gray-700 in light
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;