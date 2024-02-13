import React, { useEffect, useState } from "react";
import "./About.css";
import bg1 from "../images/bg1.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [Counton, setCountUp] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container">
        <div className="about-info col-lg-12">
          <div className="about-img col-lg-6 " data-aos="fade-up">
            <img src={bg1} loading="lazy" />
          </div>
          <div className="about-into col-lg-6">
            <h1 data-aos="fade-up">About Me</h1>
            <h2 data-aos="fade-up">About</h2>
            <p data-aos="fade-up">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="about-contact">
              <div className="cont-1">
                <p data-aos="fade-up">Name:</p>
                <p data-aos="fade-up">Date of birth:</p>
                <p data-aos="fade-up">Address:</p>
                <p data-aos="fade-up">Zip code:</p>
                <p data-aos="fade-up">Email:</p>
                <p data-aos="fade-up">Phone:</p>
              </div>
              <div className="cont-2">
                <p data-aos="fade-up">Clark Thompson</p>
                <p data-aos="fade-up">January 01, 1987</p>
                <p data-aos="fade-up">San Francisco CA 97987 USA</p>
                <p data-aos="fade-up">1000</p>
                <p data-aos="fade-up">clarkthomp@gmail.com</p>
                <p data-aos="fade-up">+1-2234-5678-9-0</p>
              </div>
            </div>
            <ScrollTrigger
              onEnter={() => setCountUp(true)}
              onExit={() => setCountUp(true)}
            >
              <h3
                data-aos="fade-up"
                style={{
                  margintop: "15px",
                  color: "#fff",
                  fontsize: "1.5rem",
                }}
              >
                {Counton && (
                  <CountUp start={0} end={80} duration={2} delay={0} />
                )}
                <span
                  data-aos="fade-up"
                  style={{
                    color: "#ffbd39",
                    fontsize: "1.5rem",
                  }}
                >
                  Project complete
                </span>
              </h3>
            </ScrollTrigger>
            <button className="about-btn" data-aos="fade-up">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
