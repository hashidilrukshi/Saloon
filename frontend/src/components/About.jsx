import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Welcome to Style Salon, where beauty meets precision.</p>
            </div>
            <p className="mid">
            At Style Salon, we're dedicated to providing you with 
            exceptional beauty services tailored to your needs.
             From trendy haircuts to flawless manicures, our 
             expert team is here to make you look and feel your best. 
             Trust us to bring out your unique style and confidence.
              Visit Style Salon today for an unforgettable beauty experience.
            </p>
            
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
