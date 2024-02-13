import React, { useEffect } from "react";
import "./ContactMe.css";
import { LiaAddressCard } from "react-icons/lia";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
const ContactMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="Contact-text">
          <h1 data-aos="fade-up">Contact Me</h1>
          <h2 data-aos="fade-up"> Contact</h2>
          <p data-aos="fade-up">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className="Contact-card">
          <div className="Contact-card-info col-lg-6 col-md-12 ">
            <div
              className="Contact-card-into col-lg-6 col-md-6"
              data-aos="fade-up"
            >
              <LiaAddressCard className="contact-icon" />
              <p>
                ADDRESS
                <br />
                <br />
                <span>198 West 21th Street, Suite 721 New York NY 10016</span>
              </p>
            </div>
            <div
              className="Contact-card-into col-lg-6 col-md-6"
              data-aos="fade-up"
            >
              <MdOutlinePhone className="contact-icon" />
              <p>
                CONTACT NUMBER
                <br />
                <br />+ 1235 2355 98
              </p>
            </div>
          </div>
          <div className="Contact-card-info col-lg-6 col-md-12 col-12">
            <div
              className="Contact-card-into col-lg-6 col-md-6"
              data-aos="fade-up"
            >
              <MdOutlineMarkEmailRead className="contact-icon" />
              <p>
                EMAIL ADDRESS
                <br />
                <br />
                info@yoursite.com
              </p>
            </div>
            <div
              className="Contact-card-into col-lg-6 col-md-6"
              data-aos="fade-up"
            >
              <FaEarthAfrica className="contact-icon" />
              <p>
                WEBSITE
                <br />
                <br />
                yoursite.com
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="contact-form col-lg-12">
          <div
            className="form-img col-lg-6 col-md-6 col-12"
            data-aos="fade-up"
          ></div>
          <div className="form-info col-lg-6 col-md-6 col-12">
            <form action="#" data-aos="fade-up">
              <input type="text" placeholder="Your Name" />
              <br />
              <input type="text" placeholder="Your Email" />
              <br />
              <input type="text" placeholder="Subject" />
              <br />
              <textarea placeholder="Message" rows="10"></textarea>
              <br />
              <button className="contact-form-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
