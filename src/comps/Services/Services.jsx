import React, { useEffect } from "react";
import "./Services.css";
import { MdOutlineWebhook } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="Services-text">
          <h1 data-aos="fade-up">Services</h1>
          <h2 data-aos="fade-up">Services</h2>
          <p data-aos="fade-up">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="Services-card">
          <div className="cards-1">
            <div className="card-info-1" data-aos="fade-up">
              <MdOutlineWebhook className="card-icons" />
              <h1> WEB DESIGN</h1>
              <p>_____</p>
            </div>
            <div className="card-info-1" data-aos="fade-up">
              <MdOutlineWebhook className="card-icons" />
              <h1> PHTOGRAPHY</h1>
              <p>_____</p>
            </div>
            <div className="card-info-1" data-aos="fade-up">
              <MdOutlineWebhook className="card-icons" />
              <h1> WEB DEVELOPER</h1>
              <p>_____</p>
            </div>
            <div className="card-info-1" data-aos="fade-up">
              <MdOutlineWebhook className="card-icons" />
              <h1> APP DEVELOPING</h1>
              <p>_____</p>
            </div>
            <div className="card-info-1" data-aos="fade-up">
              <MdOutlineWebhook className="card-icons" />
              <h1> BRANDING</h1>
              <p>_____</p>
            </div>
            <div className="card-info-1" data-aos="fade-up">
              <MdOutlineWebhook className="card-icons" />
              <h1> PRODUCT STRATEGY</h1>
              <p>_____</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
