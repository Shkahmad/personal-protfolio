import React, { useState, useEffect } from "react";
import "./Blog.css";
import { FaMessage } from "react-icons/fa6";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [Counton, setCountUp] = useState(false);
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="blog-text">
          <h1>Our Blog</h1>
          <h2>Blog</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className="Blog-info col-lg-12">
          <div className="Blog-into">
            <div className="Blog-img-1"></div>
            <div className="Blog-contact">
              <h3>
                JUNE 21, 2019 ADMIN <FaMessage className="blog-icon" /> 3
              </h3>
              <h1>Why Lead Generation is Key for Business Growth</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>
          <div className="Blog-into">
            <div className="Blog-img-2"></div>
            <div className="Blog-contact">
              <h3>
                JUNE 21, 2019 ADMIN <FaMessage className="blog-icon" /> 5
              </h3>
              <h1>Why Lead Generation is Key for Business Growth</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>
          <div className="Blog-into">
            <div className="Blog-img-3"></div>
            <div className="Blog-contact">
              <h3>
                JUNE 21, 2019 ADMIN <FaMessage className="blog-icon" /> 15
              </h3>
              <h1>Why Lead Generation is Key for Business Growth</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <button className="blog-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="container">
        <div className="count">
          <div className="count-scroll">
            <div className="card-count" data-aos="flip-left">
              <ScrollTrigger
                onEnter={() => setCountUp(true)}
                onExit={() => setCountUp(true)}
              >
                <h1
                  style={{
                    color: "#ffbd39",
                    fontsize: "3rem",
                  }}
                >
                  {Counton && (
                    <CountUp start={0} end={100} duration={8} delay={0} />
                  )}
                  +
                </h1>
              </ScrollTrigger>

              <p>Awards</p>
            </div>
            <div className="card-count" data-aos="flip-left">
              <ScrollTrigger
                onEnter={() => setCountUp(true)}
                onExit={() => setCountUp(true)}
              >
                <h1
                  style={{
                    color: "#ffbd39",
                    fontsize: "2rem",
                  }}
                >
                  {Counton && (
                    <CountUp start={0} end={1200} duration={8} delay={0} />
                  )}
                  +
                </h1>
              </ScrollTrigger>

              <p>Complete Projects</p>
            </div>
            <div className="card-count" data-aos="flip-right">
              <ScrollTrigger
                onEnter={() => setCountUp(true)}
                onExit={() => setCountUp(true)}
              >
                <h1
                  style={{
                    color: "#ffbd39",
                    fontsize: "2rem",
                  }}
                >
                  {Counton && (
                    <CountUp start={0} end={1200} duration={8} delay={0} />
                  )}
                  +
                </h1>
              </ScrollTrigger>

              <p>Happy Customers</p>
            </div>
            <div className="card-count" data-aos="flip-right">
              <ScrollTrigger
                onEnter={() => setCountUp(true)}
                onExit={() => setCountUp(true)}
              >
                <h1
                  style={{
                    color: "#ffbd39",
                    fontsize: "2rem",
                  }}
                >
                  {Counton && (
                    <CountUp start={0} end={500} duration={8} delay={0} />
                  )}
                  +
                </h1>
              </ScrollTrigger>

              <p>Cups of coffee</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-bg-img">
        <div className="bg-blog-text">
          <h1 data-aos="fade-up">
            I'm <span>Available</span> for freelancing
          </h1>
          <p data-aos="fade-up">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button className="blog-btl" data-aos="fade-up">
            HIRE ME
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
