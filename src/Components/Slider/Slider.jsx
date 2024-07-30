import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Slider.css";
import { Link } from "react-router-dom";

const slides = [
  {
    // image: "/images/second-section-second-image.jpg",
    image: "/images/16.png",
    heading: "24/7 Support - Get it",
    paragraph:
      "Start working with an company that provide everything you nedd to generate awareness, drive trafiic, connect with customers",
    pieces: { rows: 8, cols: 2 }, // 8x2 tall rectangles
    buttonText: "Our Contacts",
    link: "/contact",
  },
  {
    image: "/images/1.png",
    heading: "Level Up Your Skills Today",
    paragraph:
      "Start working with an company that provide everything you need to generate awareness",
    pieces: { rows: 4, cols: 4 }, // 4x4 small squares
    buttonText: "Our Services",
    link: "/our-services",
  },
  {
    image: "/images/33.png",
    heading: "What we Create",
    paragraph:
      "We specialize in creating websites, web applications, mobule applications, creating websites and page layouts, website design, online storage",
    pieces: { rows: 2, cols: 8 }, // 2x8 long rectangles
    buttonText: "Our About",
    link: "/detail-about",
  },
  {
    image: "/images/41.png",
    heading: "Level Up Your Skills Today",
    paragraph:
      "Start working with an company that provide everything you need to generate awareness",
    pieces: { rows: 8, cols: 2 }, // 8x2 tall rectangles
    buttonText: "Our Career",
    link: "/career",
  },
];

const createPieces = (rows, cols) => {
  const pieces = [];
  for (let i = 0; i < rows * cols; i++) {
    pieces.push(i);
  }
  return pieces;
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setContentReady(false); // Reset contentReady when slide changes
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger the content animation after all pieces are hidden
    const piecesDuration =
      1 +
      slides[currentSlide].pieces.rows * slides[currentSlide].pieces.cols * 0.1;
    const timeout = setTimeout(
      () => setContentReady(true),
      piecesDuration * 1000
    );

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const { rows, cols } = slides[currentSlide].pieces;
  const pieces = createPieces(rows, cols);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={`content ${contentReady ? "ready" : ""}`}>
            <h1>{slide.heading}</h1>
            <p>{slide.paragraph}</p>
            <Link to={`${slide.link}`}>
              <button className="slider-btn">{slide.buttonText}</button>
            </Link>
          </div>
          {index === currentSlide && (
            <div
              className="pieces"
              style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
              }}
            >
              {pieces.map((piece, idx) => (
                <div
                  key={piece}
                  className="piece"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: `${(piece % cols) * (100 / cols)}% ${
                      Math.floor(piece / cols) * (100 / rows)
                    }%`,
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    animationDelay: `${idx * 0.1}s`, // Adjust this to change the delay between pieces
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
