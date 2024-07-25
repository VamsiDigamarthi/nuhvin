import React, { useState } from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";
// import { GiStarShuriken } from "react-icons/gi";
import { testimonialsData } from "../../data/testimonial";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };
  return (
    <div className="testimonial-card">
      <div className="testimonial-left-card">
        <div className="services-first-card-line">
          {/* <span></span> */}
          <h3>TESTIMONIALS</h3>
        </div>
        <h1 className="stroke-text ">What They</h1>
        <h2>Say About Us</h2>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="testimonial-text"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <div className="testimonial-customer-name">
          <span>Customer : </span>
          <span>{testimonialsData[selected].name}</span>
        </div>
      </div>
      <div className="testimonial-right-card">
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="testimonial-orange-circle"></div>
        <div className="testimonial-orange-big-circle"></div>
        <div className="testimonial-arrows-card">
          <HiArrowNarrowLeft
            size={25}
            color="#ff3c00"
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <HiOutlineArrowRight
            size={25}
            color="#ff3c00"
            onClick={() => {
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
        {/* <span className="testimonial-right-side-first-card">
          <GiStarShuriken color="white" size={40} />
        </span>
        <span className="testimonial-right-side-second-card">
          <GiStarShuriken color="white" size={30} />
        </span> */}
      </div>
    </div>
  );
};

export default Testimonials;
