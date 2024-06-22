import React from "react";
import a1 from "../assets/a1.png";
export const Hero = () => {
  return (
    <div>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I`am <span>Kovid Kunduru</span>
            </div>
            <div className="tag">FullStack Dev</div>
            <p>I love coding and wanted to become a developer</p>
            <div>
              <a href="./assets/KovidResume.docx" download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={a1} alt="Kovid Speaking" />
          </div>
        </div>
      </section>

      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects </span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};
