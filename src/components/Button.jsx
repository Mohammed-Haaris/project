/** @format */
import React, { useState, useEffect } from "react";
import "../App.css";

function Button() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="App">
        <button
          type="button"
          className="navbar-btn btn-success btn"
          style={{ fontFamily: "poppins" }}
          id="button-1"
          onClick={toggleTheme}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </>
  );
}

export default Button;
