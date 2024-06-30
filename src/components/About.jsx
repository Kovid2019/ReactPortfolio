import React from "react";
import a1 from "../assets/a1.png";
import { Title } from "./Title";

export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <Title title="About Me" />

        <div className="container flex about-content">
          <div className="myImg flex-center">
            <img src={a1} alt="Kovid Image" width="100%" />
          </div>
          <div className="my-bio container">
            <h2>Kovid Reddy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              vitae rerum laboriosam deserunt asperiores qui enim veniam cumque?
              Earum expedita quas nisi a ratione vitae
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              voluptas quos temporibus quibusdam vitae reprehenderit, voluptatem
              sint dolores eligendi voluptatibus quidem,
            </p>
            <p>Sydney, Australia</p>
            <div>
              <div className="tag">Interest</div>
              <div className="flex">
                <span>Coding</span>
                <span>Cricket</span>
                <span>Movies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
