import React,{useEffect} from 'react'
import './Hero.css'
// import White from '../images/White.png'
import black from '../images/black.jpg'
import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
   useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
     <div className="container">
     <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
   </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={black} loading="lazy"/>
      <div class="carousel-caption-slider col-lg-12 col-md-12 col-sm-12 col-12">
        <div className='slider-text col-lg-6 col-md-12 col-sm-12 col-12'>
          <h2 data-aos="fade-up">hello!</h2>
          <h1 data-aos="fade-up">I'm<span>Clark<br/>Thompson</span></h1>
          <h3 data-aos="fade-up">A Freelance Web Designer</h3>
          <div className="slider-btns">
            <button data-aos="fade-up" className='sli-btn sli-active'>HIRE ME</button>
            <button data-aos="fade-up" className='sli-btn'>MY WORKS</button>
          </div>
        </div>
        <div data-aos="fade-up" className='slider-img col-lg-6'><img src={bg1} loading="lazy"/></div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={black} loading="lazy"/>
      <div class="carousel-caption-slider col-lg-12 col-md-12 col-sm-12 col-12">
        <div className='slider-text-1 col-lg-6 col-md-12 col-sm-12 col-12'>
          <h2 data-aos="fade-up">hello!</h2>
          <h1 data-aos="fade-up">I'm a <span>Web<br/>Designer</span> based in Faisalabad</h1>
          <div className="slider-btns">
            <button data-aos="fade-up" className='sli-btn sli-active'>HIRE ME</button>
            <button data-aos="fade-up" className='sli-btn'>MY WORKS</button>
          </div>
        </div>
        <div data-aos="fade-up" className='slider-img col-lg-6'><img src={bg2} loading="lazy"/></div>
      </div>
    </div>
  </div>
 
</div>
     </div>
    </>
  )
}

export default Hero
