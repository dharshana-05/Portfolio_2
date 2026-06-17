import { useState, useEffect } from "react";
import "../styles/themeToggle.css";

function ThemeToggle() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  const toggleTheme = () => {

    if(darkMode){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {darkMode ? "☀" : "☾"}
    </button>
  );
}

export default ThemeToggle;