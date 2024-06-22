import React from "react";

export const Footer = () => {
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
      <a href="#hero" className="goUp flex-center">
        <i className="fa-solid fa-chevron-up"></i>
      </a>
    </div>
  );
};
