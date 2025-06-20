import React from 'react';
import './Hero.css';
import img4 from '../../public/img4.png'
import img5 from '../../public/img5.png'


const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <h1 className="hero-heading">
          <span>I AM A</span>
          <span className="hero-image-wrapper animate-float">
            <img
              src={img4}
              alt="Creative"
              className="hero-image"
            />
          </span>
          <span>FREELANCE</span>
          <br />
          <span>DESIGNER</span>
          <span className="hero-image-wrapper animate-float">
            <img
              src={img5}
              alt="Work"
              className="hero-image"
            />
          </span>
          <span>FROM</span>
          <br />
          <span>SAN FRANCISCO</span>
        </h1>

      </div>
    </section>
  );
};

export default Hero;
