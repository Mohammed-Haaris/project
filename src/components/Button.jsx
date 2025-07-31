/** @format */
import React, { useState, useEffect } from "react";
import "../App.css";

function Button() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to light mode if no theme is saved
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      
      // Apply theme with smooth transition
      if (newMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      }
      
      return newMode;
    });

    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    // Apply initial theme
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="theme-toggle-container">
      <button
        type="button"
        className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'} ${isAnimating ? 'animating' : ''}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <div className="toggle-icon">
          {isDarkMode ? (
            <>
              <span className="sun-icon">☀️</span>
              <span className="moon-icon">🌙</span>
            </>
          ) : (
            <>
              <span className="moon-icon">🌙</span>
              <span className="sun-icon">☀️</span>
            </>
          )}
        </div>
        <span className="toggle-text">
          {isDarkMode ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  );
}

export default Button;
