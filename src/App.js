import React, { useState, useEffect } from "react";
import Navbar from "./comps/Navbar/Navbar";
import "./App.css";
import About from "./comps/About/About";
import Resume from "./comps/Resume/Resume";
import Services from "./comps/Services/Services";
import Skills from "./comps/Skills/Skills";
import Loader from "./Loader/Loader";
import Projects from "./comps/Projects/Projects";
import Blog from "./comps/Blog/Blog";
import ContactMe from "./comps/Contactme/ContactMe";
import Footer from "./comps/Footer/Footer";
import Hero from "./comps/Hero/Hero";

const App = () => {
  const [isloading, setisloader] = useState(true);
  useEffect(() => {
    const fakedatafetched = () => {
      setTimeout(() => {
        setisloader(false);
      }, 5000);
    };
    fakedatafetched();
  }, []);
  return isloading ? (
    <Loader />
  ) : (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <br />
      <br />
      <Resume />
      <br />
      <br />
      <Services />
      <br />
      <br />
      <Skills />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Blog />
      <br />
      <br />
      <ContactMe />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
