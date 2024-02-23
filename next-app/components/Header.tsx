"use client";
import React from "react";
import styles from "./style.module.css";
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div
        className={`${styles.main} min-h-screen bg-main-color flex flex-col items-center justify-center text-center text-white`}
      >
        {/* Existing content */}
        <div>
          <h1 className="text-4xl font-bold mb-4" style={{ lineHeight: "1.5" }}>
            Start your <span className="text-blue-500">new project</span>
            <br /> with <span className="text-blue-500">LevelFive</span> in just
            a few clicks!!!
          </h1>
          <p className="text-sm">
            Book a free call and let’s see if we’re a good fit.
          </p>
        </div>
        {/* Footer section */}
      </div>
      <footer className="mt-auto w-full p-6 bg-gray-800 text-white">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div className="flex-auto justify-items-start">
            {/* Logo */}
            <img src={"/logo.png"} alt="Logo" className="h-12" />
          </div>
          <div className="flex-grow">
            {/* Middle section */}
            <div className="flex justify-center">
              <Link to="section1" smooth={true} duration={500} className="mr-4">
                Support
              </Link>
              <Link to="section2" smooth={true} duration={500} className="mr-4">
                Privacy Policy
              </Link>
              <Link to="section3" smooth={true} duration={500}>
                Terms and Conditions
              </Link>
            </div>
          </div>
          <div>
            {/* Right section */}
            <p>© 2024 LevelFive, All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* Additional Sections for Demonstration */}
      <div id="section1" style={{ height: "500px", background: "lightblue" }}>
        Section 1 Content
      </div>
      <div id="section2" style={{ height: "500px", background: "lightgreen" }}>
        Section 2 Content
      </div>
      <div id="section3" style={{ height: "500px", background: "lightcoral" }}>
        Section 3 Content
      </div>
    </>
  );
};

export default Header;
