import React, { useRef } from "react";
import "./VideoAbout.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const VideoAbout = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const videoWidth = useTransform(scrollYProgress, [0, 1], ["100%", "60%"]);
  const secondCardWidth = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["0%", "40%"]
  );
  const textY = useTransform(scrollYProgress, [0.5, 1], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <>
      <div className="video-about">
        <motion.div className="video-first-card" style={{ width: videoWidth }}>
          <motion.video
            style={{ width: "100%" }}
            ref={ref}
            loop
            muted
            autoPlay
            controls=""
          >
            <source src="/videos/total images.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>
        <motion.div
          className="video-second-card"
          style={{ width: secondCardWidth, opacity: textOpacity, y: textY }}
        >
          <div className="services-first-card-line">
            <h3>
              <span style={{ color: "#0c1a1a", letterSpacing: "-1px" }}>
                About
              </span>{" "}
              <span className="nuhvin-font">Nuhvin</span>
            </h3>
          </div>
          <p>
            Passionate about driving innovation and transforming businesses
            through cutting-edge IT solutions? Look no further! Nuhvin Global
            Services, a dynamic software company at the forefront of the digital
            revolution. As a startup in the IT industry, Nuhvin Global Services
            specializes in delivering top-notch software development, artificial
            intelligence, and web development services. Our team of skilled
            professionals is committed to crafting tailor made solutions that
            empower businesses to thrive in the ever-evolving digital landscape.
            At Nuhvin, we believe in the power of technology to drive meaningful
            change. Whether you're seeking robust software applications,
            AI-driven insights, or dynamic web solutions, we have the expertise
            to bring your vision to life. Our commitment to excellence, coupled
            with a customer-centric approach, sets us apart as a trusted partner
            for businesses of all sizes. We thrive on challenges, embrace
            change, and constantly push the boundaries of what's possible in the
            digital realm.
          </p>
          <div className="awesome-button-card">
            <Link to="/out-story" className="sabout-link-card">
              <div className="awesome-single-button-card">
                <button style={{ fontSize: "16px" }}>Our Story</button>
                <FaArrowRight size={20} color="#fff" />
              </div>
            </Link>
            <Link to="/out-visition" className="sabout-link-card">
              <div className="awesome-single-button-card">
                <button style={{ fontSize: "16px" }}>Our Vision</button>
                <FaArrowRight size={20} color="#fff" />
              </div>
            </Link>
            <Link to="/out-mission" className="sabout-link-card">
              <div className="awesome-single-button-card">
                <button style={{ fontSize: "16px" }}>Our Mission</button>
                <FaArrowRight size={20} color="#fff" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* mobile-view */}
      <div className="videos-mobile-view">
        <div className="services-first-card-line v2-video">
          <h3>
            <span style={{ color: "#0c1a1a" }}>About</span> Nuhvin
          </h3>
        </div>
        <video
          ref={ref}
          loop
          muted
          autoPlay
          controls=""
          className="mobile-videos"
        >
          <source src="/videos/total images.mp4" type="video/mp4" />
        </video>
        <div className="mobile-card">
          <p>
            Passionate about driving innovation and transforming businesses
            through cutting-edge IT solutions? Look no further! Nuhvin Global
            Services, a dynamic software company at the forefront of the digital
            revolution. As a startup in the IT industry, Nuhvin Global Services
            specializes in delivering top-notch software development, artificial
            intelligence, and web development services. Our team of skilled
            professionals is committed to crafting tailor made solutions that
            empower businesses to thrive in the ever-evolving digital landscape.
            At Nuhvin, we believe in the power of technology to drive meaningful
            change. Whether you're seeking robust software applications,
            AI-driven insights, or dynamic web solutions, we have the expertise
            to bring your vision to life. Our commitment to excellence, coupled
            with a customer-centric approach, sets us apart as a trusted partner
            for businesses of all sizes. We thrive on challenges, embrace
            change, and constantly push the boundaries of what's possible in the
            digital realm.
          </p>
          <div className="awesome-button-card">
            <Link to="/out-story" className="sabout-link-card">
              <div className="awesome-single-button-card">
                <button>Our Story</button>
                <FaArrowRight size={20} color="#fff" />
              </div>
            </Link>
            <Link to="/out-visition" className="sabout-link-card">
              <div className="awesome-single-button-card">
                <button>Our Vision</button>
                <FaArrowRight size={20} color="#fff" />
              </div>
            </Link>
            <Link to="/out-mission" className="sabout-link-card">
              <div className="awesome-single-button-card">
                <button>Our Mission</button>
                <FaArrowRight size={20} color="#fff" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAbout;
