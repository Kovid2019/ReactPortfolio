import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleOnScrollY = () => {
    setScrollYPosition(window.scrollY);
  };
  useEffect(() => {
    //End of the render, run following code
    window.addEventListener("scroll", handleOnScrollY);
    // Clean up the events
    return () => {
      window.removeEventListener("scroll", handleOnScrollY);
    };
  }, []);

  console.log(scrollYPosition);

  return (
    <div>
      <footer className="flex-center">
        <div className="top flex">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href=""></a>LinkedIn
              </li>
              <li>
                <a href=""></a>Github
              </li>
              <li>
                <a href=""></a>Facebook
              </li>
              <li>
                <a href=""></a>Youtube
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy right all reserved 2024 || Made by me with Love
        </div>
      </footer>
      {scrollYPosition > 800 && (
        <a href="#hero" className="goUp flex-center">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      )}
    </div>
  );
};
