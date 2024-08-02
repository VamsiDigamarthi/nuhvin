import React from "react";
import "./DetailAbout.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const transition = { type: "spring", duration: 1 };
export const DetailAbout = () => {
  return (
    <div className="detail-about-main-card">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card new-center">
          <div className="our-stories-fisrt-card-our-story-text">
            <h3 className="white-h3">
              <span className="new-dis">Discover</span> Nuhvin
            </h3>
          </div>
          {/* <h1>What we say to Our people</h1> */}
          <span className="nuhvin-about-hearo-section">
            At Nuhvin, innovation is our language, and your success is our
            mission. Welcome to a world where possibilities are endless.
          </span>
        </div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          className="our-stories-left-side-image-card"
        >
          <img src="/images/our-story-left.jpg" alt="our-story-left" />
          <motion.div
            // initial={{ rotate: 45 }}
            // whileInView={{ rotate: 0 }}
            // transition={{ duration: 2.5, type: "spring" }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="our-story-left-side-dotted-card"
          >
            <span className="our-story-left-side-dotted-first-big-dot"></span>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="our-stories-right-side-image-card"
        >
          <img src="/images/5ac603279f.jpg" alt="" />
          <div className="our-stories-right-side-dotted-card"></div>
        </motion.div>
      </div>
      <div className="detail-about-second-card">
        <h1>
          What{" "}
          <span className="shero-span-color " id="new-moto">
            motivates
          </span>{" "}
          us to do what we do ..?
        </h1>
        <p></p>
        <span className="hr-line"></span>
        <p></p>

        <p>
          By transforming and shaping the future through business outcomes,
          industries can turn to our global professional services firm.
        </p>
        <p>
          Nuhvin work with forward-thinking global corporations to transform
          their most pressing issues into opportunities, resilience, and growth.
          The construction of hyper-local supply chains is part of this process
          and the enhancement of customer or employee experiences is a priority.
        </p>
        <p>
          See how our expertise in digital, data, and operational excellence are
          put to use to improve the performance of businesses.
        </p>
        <button
          style={{
            height: "45px",
          }}
          className="new-ha-btn"
        >
          <Link
            style={{ color: "#Ff6600", fontSize: "16px" }}
            className="sabout-link-card"
          >
            Nuhvin Intro
          </Link>
          <FaLongArrowAltRight />
        </button>
      </div>
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-left-side">
          <img src="/images/vision fix bck.png" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/vision fix.png" alt="" />
          </motion.div>
        </div>
        <div className="details-abput-third-card-right-side">
          <div className="details-about-third-card-right-side-ornage-container">
            <h3
              style={{
                color: "#fff",
              }}
            >
              The{" "}
              <span className="way" id="new-moto">
                way
              </span>{" "}
              we see
            </h3>
          </div>

          <p
            style={{
              color: "#fff",
            }}
          >
            To empower individuals and organizations with software solutions
            that are intuitive and impactful, resulting in a future where
            technology fully enhances human potential.
          </p>
          <button className="detail-about-all-button" id="new-btn">
            <Link
              style={{ color: "#ff6600", fontSize: "16px" }}
              to="/out-visition"
              className="sabout-link-card"
            >
              Nuhvin Vision
            </Link>
            <FaLongArrowAltRight size={25} color="#ff6600" />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-right-side new-detail-about-third-card-m">
          <div className="details-about-third-card-right-side-ornage-container">
            <h3
              style={{
                color: "#fff",
              }}
            >
              We{" "}
              <span className="way" id="new-moto">
                strive
              </span>{" "}
              to achieve our quest
            </h3>
          </div>

          <p
            style={{
              color: "#fff",
            }}
          >
            Revolutionize the power of technology to create innovative software
            solutions, enabling users to achieve their goals. Guided by a
            commitment to integrity and excellence, we strive to make technology
            accessible and beneficial for everyone.
          </p>
          <button className="detail-about-all-button" id="new-btn">
            <Link
              style={{ color: "#ff6600" }}
              to="/out-mission"
              className="sabout-link-card"
            >
              Nuhvin Mission
            </Link>
            <FaLongArrowAltRight size={25} color="#ff6600" />
          </button>
        </div>
        <div className="details-abput-third-card-left-side">
          <img src="/images/mission fix back.png" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/mission fix.png" alt="" />
          </motion.div>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-second-card">
        <h2>
          What We <span className="shero-span-color">Promises</span>
        </h2>
        <p></p>
        <span className="hr-line"></span>
        <p></p>
        <p>
          At Nuhvin, we promise to empower you with reliable, user-friendly
          software that delivers
        </p>
        <p>
          exceptional value. We back our products with unwavering support,
          ensuring your success every step of the way. Together, we'll navigate
          the ever-evolving technological landscape, unlocking your full
          potential.
        </p>

        <button
          className="new-ha-btn"
          style={{
            width: "180px",
          }}
        >
          <Link
            style={{ color: "#ff6600", fontSize: "16px" }}
            className="sabout-link-card"
          >
            Nuhvin Promise
          </Link>
          <FaLongArrowAltRight />
        </button>
      </div>
      {/*  */}
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-left-side">
          <img src="/images/values fix back.png" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/values fix.png" alt="" />
          </motion.div>
        </div>
        <div className="details-abput-third-card-right-side">
          <div className="details-about-third-card-right-side-ornage-container">
            <h3
              style={{
                color: "#fff",
              }}
            >
              Our{" "}
              <span className="way" id="new-moto">
                values
              </span>
            </h3>
          </div>

          <p
            style={{
              color: "#fff",
            }}
          >
            Innovation and collaboration are at our core, driving us to build
            user-centric software with integrity and a commitment to continuous
            learning in a culture of mutual respect and adaptability.
          </p>
          <button className="detail-about-all-button" id="new-btn">
            <Link style={{ color: "#ff6600" }} className="sabout-link-card">
              Nuhvin Values
            </Link>
            <FaLongArrowAltRight size={25} color="#ff6600" />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-right-side new-detail-about-third-card-m">
          <div className="details-about-third-card-right-side-ornage-container">
            {/* <span></span> */}
            <h3
              style={{
                color: "#fff",
              }}
            >
              Our{" "}
              <span className="way" id="new-moto">
                Goals
              </span>{" "}
            </h3>
          </div>

          <p
            style={{
              color: "#fff",
            }}
          >
            We aim to become a leading force in the software industry by
            developing innovative and user-centric solutions that empower
            individuals, organizations and achieve full customer satisfaction
            rate through proactive support and continuous improvement.
          </p>
          <button
            style={{ width: "200px" }}
            className="detail-about-all-button"
            id="new-btn"
          >
            <Link style={{ color: "#ff6600" }} className="sabout-link-card">
              Nuhvin Strategy
            </Link>
            <FaLongArrowAltRight size={25} color="#ff6600" />
          </button>
        </div>
        <div className="details-abput-third-card-left-side">
          <img src="/images/goals.png" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/goals fix .png" alt="" />
          </motion.div>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-second-card new-details-second-card-heiht">
        <h1>
          Our <span className="shero-span-color">Approach</span>
        </h1>
        <p></p>
        <span className="hr-line"></span>
        <p></p>
        <p>
          The unwavering quest for a better future for people, is essential to
          bringing about significant and long-lasting change for our clients,
          employees, and the communities we are a part of around the world. Our
          approach to diversity, equity, and inclusion is based on four pillars
          that enable us to achieve our goals.
        </p>
        <p>
          Nuhvin is dedicated to attracting talented individuals by
          collaborating with partners and universities that specialize in hiring
          candidates from underrepresented communities and improving our
          employee referral programs.
        </p>
        <p>
          Our priority is to empower employees to reach their full potential,
          and we prioritize supporting people from minority groups.
        </p>
        <p>
          By creating affinity groups and an allyship program, we are creating
          an environment where everyone feels valued and addressing the
          underrepresentation of marginalized groups. This foster a sense of
          community where individuals can come together and share thoughts and
          experiences.
        </p>
      </div>
      <div className="carres-at-nuhvin">
        <div>
          <div className="career-text-">
            <h2>
              Carees at{" "}
              <span
                style={{
                  color: "#ff6600",

                  marginTop: "15px",
                }}
                className="curvi-text-24"
              >
                Nuhvin
              </span>
            </h2>
            <span>Explore Your Passion:</span>
            <span>Dive deep into what excites and energizes you</span>

            <button
              className="detail-about-all-button"
              id="new-btn"
              style={{ width: "240px", fontSize: "16px" }}
            >
              <Link
                style={{ color: "#ff6600" }}
                to="/career"
                className="sabout-link-card"
              >
                Visit Our Career Page
              </Link>
              <FaLongArrowAltRight size={25} color="#ff6600" />
            </button>
          </div>
          <div className="asds-image-card">
            <img src="/images/9d895a9f90 (1).jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
