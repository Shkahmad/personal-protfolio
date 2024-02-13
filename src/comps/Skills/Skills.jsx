import React, { useEffect } from "react";
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="Skill-text">
          <h1 data-aos="fade-up">My Skills</h1>
          <h2 data-aos="fade-up"> Skills</h2>
          <p data-aos="fade-up">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div class="container-skills">
          <div className="skillbar-info">
            <div class="skill-box" data-aos="fade-up">
              <span class="title">Photoshop</span>

              <div class="skill-bar">
                <span class="skill-perPhotoshop">
                  <span class="toolti">90%</span>
                </span>
              </div>
            </div>
            <div class="skill-box" data-aos="fade-up">
              <span class="title">jQuery</span>

              <div class="skill-bar">
                <span class="skill-perjQuery">
                  <span class="toolti">95%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="skillbar-info">
            <div class="skill-box" data-aos="fade-up">
              <span class="title">HTML5</span>

              <div class="skill-bar">
                <span class="skill-perHTML5">
                  <span class="toolti">98%</span>
                </span>
              </div>
            </div>
            <div class="skill-box" data-aos="fade-up">
              <span class="title">CSS3</span>

              <div class="skill-bar">
                <span class="skill-perCSS3">
                  <span class="toolti">90%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="skillbar-info">
            <div class="skill-box" data-aos="fade-up">
              <span class="title">WordPress</span>

              <div class="skill-bar">
                <span class="skill-perWordPress">
                  <span class="toolti">40%</span>
                </span>
              </div>
            </div>
            <div class="skill-box" data-aos="fade-up">
              <span class="title">SEO</span>

              <div class="skill-bar">
                <span class="skill-perSEO">
                  <span class="toolti">95%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
