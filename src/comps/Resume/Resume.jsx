import React, { useEffect } from "react";
import "./Resume.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Resume = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="resume-text">
          <h1 data-aos="fade-up">Resume</h1>
          <h2 data-aos="fade-up">Resume</h2>
          <p data-aos="fade-up">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth
          </p>
        </div>
        <div className="card-info">
          <div className="cards" data-aos="fade-up">
            <div className="single-card">
              <h2>2014-2015</h2>
              <h1>Master Degree of Design</h1>
              <h3>CAMBRIDGE UNIVERSITY</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="single-card">
              <h2>2014-2015</h2>
              <h1>Art & Creative Director</h1>
              <h3>CAMBRIDGE UNIVERSITY</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <div className="cards" data-aos="fade-up">
            <div className="single-card">
              <h2>2014-2015</h2>
              <h1>Bachelor's Degree of C.A</h1>
              <h3>CAMBRIDGE UNIVERSITY</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="single-card">
              <h2>2014-2015</h2>
              <h1>Wordpress Developer</h1>
              <h3>CAMBRIDGE UNIVERSITY</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <div className="cards" data-aos="fade-up">
            <div className="single-card">
              <h2>2014-2015</h2>
              <h1>Diploma in Computer</h1>
              <h3>CAMBRIDGE UNIVERSITY</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="single-card">
              <h2>2014-2015</h2>
              <h1>UI/UX Designer</h1>
              <h3>CAMBRIDGE UNIVERSITY</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
        <h5>
          <button className="resume-btn" data-aos="fade-up">
            {" "}
            DOWNLOAD CV
          </button>
        </h5>
      </div>
    </>
  );
};

export default Resume;
