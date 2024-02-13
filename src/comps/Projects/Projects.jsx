import React, { useEffect } from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="project-text">
          <h1 data-aos="fade-up">Our Projects</h1>
          <h2 data-aos="fade-up"> Projects</h2>
          <p data-aos="fade-up">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="project-info ">
          <div className="project-into col-ld-12">
            <div
              className="project-cards col-lg-4 col-md-5 col-12"
              data-aos="fade-up"
            >
              <div className="project-img-1">
                <div className="color">
                  <h1>Branding & Illustration Design</h1>
                  <h2>WEB DESIGN</h2>
                </div>
              </div>
            </div>
            <div
              className="project-cards col-lg-8 col-md-7 col-12"
              data-aos="fade-up"
            >
              <div className="project-img-2">
                <div className="color">
                  <h1>Branding & Illustration Design</h1>
                  <h2>WEB DESIGN</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="project-into col-ld-12">
            <div
              className="project-cards col-lg-8 col-md-7 col-12"
              data-aos="fade-up"
            >
              <div className="project-img-3">
                <div className="color">
                  <h1>Branding & Illustration Design</h1>
                  <h2>WEB DESIGN</h2>
                </div>
              </div>
            </div>
            <div
              className="project-cards col-lg-4 col-md-5 col-12"
              data-aos="fade-up"
            >
              <div className="project-img-4">
                <div className="color">
                  <h1>Branding & Illustration Design</h1>
                  <h2>WEB DESIGN</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="project-into col-ld-12">
            <div
              className="project-cards col-lg-8 col-md-7 col-12"
              data-aos="fade-up"
            >
              <div className="project-img-5">
                <div className="color">
                  <h1>Branding & Illustration Design</h1>
                  <h2>WEB DESIGN</h2>
                </div>
              </div>
            </div>
            <div
              className="project-cards col-lg-4 col-md-5 col-12"
              data-aos="fade-up"
            >
              <div className="project-img-6">
                <div className="color">
                  <h1>Branding & Illustration Design</h1>
                  <h2>WEB DESIGN</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
