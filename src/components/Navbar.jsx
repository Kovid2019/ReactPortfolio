import React from "react";

export const Navbar = () => {
  return (
    <div>
      <header>
        <div className="header container flex">
          <div className="logo flex">
            <div>Kovid</div>
            <div className="line">FStack. Dev</div>
          </div>
          <label htmlFor="hamburgerMenu">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="hamburgerMenu" />
          <div className="menu">
            <ul className="flex navigation">
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
