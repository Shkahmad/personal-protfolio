import React, { useEffect } from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="footer-info col-lg-12">
          <div className="footer-box col-lg-6 col-md-12">
            <div
              className="footer-into col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
            >
              <h1>About</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="fa-icon">
                <FaTwitter className="footer-icons" />
                <FaFacebookF className="footer-icons" />
                <FaInstagram className="footer-icons" />
              </div>
            </div>
            <div
              className="footer-into col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
            >
              <h1>Links</h1>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Home</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>About</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Services</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Projects</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Contact</span>
              </h4>
            </div>
          </div>
          <div className="footer-box col-lg-6 col-md-12">
            <div
              className="footer-into col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
            >
              <h1>Services</h1>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Web Design</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Web Development</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Business Strategy</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Data Analysis</span>
              </h4>
              <h4>
                <FaLongArrowAltRight className="arrow" />
                <span>Graphic Design</span>
              </h4>
            </div>
            <div
              className="footer-into col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
            >
              <h1>Have a Questions?</h1>
              <h5>
                <CiLocationOn className="lophme" />
                <span> 203 Fake St. Mountain View</span>
              </h5>
              <h5>
                <MdOutlinePhone className="lophme" />
                <span> +2 392 3929 210</span>
              </h5>
              <h5>
                <FaRegMessage className="lophme" />
                <span> info@yourdomain.com</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
