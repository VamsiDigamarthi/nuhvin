import React from "react";
import "./DetailAbout.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const transition = { type: "spring", duration: 1 };
export const DetailAbout = () => {
  return (
    <div className="detail-about-main-card">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            <span></span>

            <h3>Discover NGS</h3>
          </div>
          <h1>What we say to Our people</h1>
          <p>
            At Ngs, innovation is our language, and your success is our mission.
            Welcome to a world where possibilities are endless.
          </p>
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
          What <span className="shero-span-color">motivates</span> us to do what
          we do
        </h1>
        <p>
          By transforming and shaping the future through business outcomes,
          industries can turn to our global professional services firm.
        </p>
        <p>
          NGS work with forward-thinking global corporations to transform their
          most pressing issues into opportunities, resilience, and growth. The
          construction of hyper-local supply chains is part of this process and
          the enhancement of customer or employee experiences is a priority.
        </p>
        <p>
          See how our expertise in digital, data, and operational excellence are
          put to use to improve the performance of businesses.
        </p>
        <button>
          <Link style={{ color: "#fff" }} className="sabout-link-card">
            Ngs Info
          </Link>
        </button>
      </div>
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-left-side">
          <img src="/images/detail-about-first-imagesss.jpg" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/rounded-detail-about-image.jpg" alt="" />
          </motion.div>
        </div>
        <div className="details-abput-third-card-right-side">
          <div className="details-about-third-card-right-side-ornage-container">
            <span></span>
            <h3>The way we see</h3>
          </div>
          <motion.h1
            initial={{ x: 190 }}
            whileInView={{ x: 0 }}
            transition={transition}
          >
            We Help IT Companies Scale
          </motion.h1>
          <motion.h1
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ ...transition, duration: 2 }}
          >
            Engineering <span className="shero-span-color">Capacity.</span>
          </motion.h1>
          <p>
            To empower individuals and organizations with software solutions
            that are intuitive and impactful, resulting in a future where
            technology fully enhances human potential.
          </p>
          <button className="detail-about-all-button">
            <Link style={{ color: "#fff" }} className="sabout-link-card">
              Ngs Vision
            </Link>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-right-side new-detail-about-third-card-m">
          <div className="details-about-third-card-right-side-ornage-container">
            <span></span>
            <h3>We Strive to achieve our quest</h3>
          </div>
          <motion.h1
            initial={{ x: -190 }}
            whileInView={{ x: 0 }}
            transition={transition}
          >
            We Help IT Companies Scale
          </motion.h1>
          <motion.h1
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ ...transition, duration: 2 }}
          >
            Engineering <span className="shero-span-color">Capacity.</span>
          </motion.h1>
          <p>
            Revolutionize the power of technology to create innovative software
            solutions, enabling users to achieve their goals. Guided by a
            commitment to integrity and excellence, we strive to make technology
            accessible and beneficial for everyone.
          </p>
          <button className="detail-about-all-button">
            <Link style={{ color: "#fff" }} className="sabout-link-card">
              Ngs Mission
            </Link>
          </button>
        </div>
        <div className="details-abput-third-card-left-side">
          <img src="/images/detail-about-first-imagesss.jpg" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/rounded-detail-about-image.jpg" alt="" />
          </motion.div>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-second-card">
        <h1>
          What We <span className="shero-span-color">Promises</span>
        </h1>
        <p>
          At NGS, we promise to empower you with reliable, user-friendly
          software that delivers
        </p>
        <p>
          exceptional value. We back our products with unwavering support,
          ensuring your success every step of the way. Together, we'll navigate
          the ever-evolving technological landscape, unlocking your full
          potential.
        </p>

        <button>
          <Link style={{ color: "#fff" }} className="sabout-link-card">
            Ngs Promise
          </Link>
        </button>
      </div>
      {/*  */}
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-left-side">
          <img src="/images/detail-about-first-imagesss.jpg" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/rounded-detail-about-image.jpg" alt="" />
          </motion.div>
        </div>
        <div className="details-abput-third-card-right-side">
          <div className="details-about-third-card-right-side-ornage-container">
            <span></span>
            <h3>Our values</h3>
          </div>
          <motion.h1
            initial={{ x: 190 }}
            whileInView={{ x: 0 }}
            transition={transition}
          >
            We Help IT Companies Scale
          </motion.h1>
          <motion.h1
            initial={{ x: 150 }}
            whileInView={{ x: 0 }}
            transition={{ ...transition, duration: 2 }}
          >
            Engineering <span className="shero-span-color">Capacity.</span>
          </motion.h1>
          <p>
            Innovation and collaboration are at our core, driving us to build
            user-centric software with integrity and a commitment to continuous
            learning in a culture of mutual respect and adaptability.
          </p>
          <button className="detail-about-all-button">
            <Link style={{ color: "#fff" }} className="sabout-link-card">
              Ngs Values
            </Link>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-third-card">
        <div className="details-abput-third-card-right-side new-detail-about-third-card-m">
          <div className="details-about-third-card-right-side-ornage-container">
            <span></span>
            <h3>Our Goals</h3>
          </div>
          <motion.h1
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={transition}
          >
            We Help IT Companies Scale
          </motion.h1>
          <motion.h1
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ ...transition, duration: 2 }}
          >
            Engineering <span className="shero-span-color">Capacity.</span>
          </motion.h1>
          <p>
            We aim to become a leading force in the software industry by
            developing innovative and user-centric solutions that empower
            individuals, organizations and achieve full customer satisfaction
            rate through proactive support and continuous improvement.
          </p>
          <button className="detail-about-all-button">
            <Link style={{ color: "#fff" }} className="sabout-link-card">
              Ngs Strategy
            </Link>
          </button>
        </div>
        <div className="details-abput-third-card-left-side">
          <img src="/images/detail-about-first-imagesss.jpg" alt="" />
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="/images/rounded-detail-about-image.jpg" alt="" />
          </motion.div>
        </div>
      </div>
      {/*  */}
      <div className="detail-about-second-card new-details-second-card-heiht">
        <h1>
          Our <span className="shero-span-color">approach</span>
        </h1>
        <p>
          The unwavering quest for a better future for people, is essential to
          bringing about significant and long-lasting change for our clients,
          employees, and the communities we are a part of around the world. Our
          approach to diversity, equity, and inclusion is based on four pillars
          that enable us to achieve our goals.
        </p>
        <p>
          ngs is dedicated to attracting talented individuals by collaborating
          with partners and universities that specialize in hiring candidates
          from underrepresented communities and improving our employee referral
          programs.
        </p>
        <p>
          Our priority is to empower employees to reach their full potential,
          and we prioritize supporting people from minority groups.
        </p>
        <p>
          By creating affinity groups and an allyship program, we are creating
          an environment where everyone feels valued and addressing the
          underrepresentation of marginalized groups. They foster a sense of
          community where individuals can come together and share thoughts and
          experiences.
        </p>
      </div>
    </div>
  );
};
