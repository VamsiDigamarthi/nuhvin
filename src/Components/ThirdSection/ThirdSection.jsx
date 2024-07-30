import React from "react";
import "./ThirdSection.css";
import { motion } from "framer-motion";
import { container } from "../../data/animation";
const ThirdSection = () => {
  return (
    <div className="third-section-main-card">
      <div className="third-section-main-left-card">
        <h1>
          Passion, Purpose, + Technology:
          <span className="shero-span-color">Fostering</span>{" "}
        </h1>
        <h1>Brilliant Ideas</h1>
        <p>
          At Nuhvin, our foundation is built on three core principles: passion,
          purpose, and technology. These guiding values drive us to innovate and
          create impactful solutions that address complex business challenges.
        </p>
        {/* <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate ....
        </p> */}
      </div>
      <div className="third-section-main-right-card">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={container(0.11)}
          // initial={{ x: "40rem" }}
          // whileInView={{ x: "0rem" }}
          // transition={{ ...transition, duration: 2 }}
          className="third-section-right-single-card"
        >
          <img src="/images/Frame-0.png" alt="" />
          <div>
            <h3>We're Innovators</h3>
            <span>
              Our team is enthusiastic about opportunities to innovate and
              discover amazing solutions to tough business challenges. Nuhvin
              designs and executes solutions for clients that save money, boost
              efficiency, and generate revenue.
            </span>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={container(0.21)}
          className="third-section-right-single-card"
        >
          <img src="/images/Frame-1.png" alt="" />
          <div>
            <h3>We're Enterpreneurial</h3>
            <span>
              Nuhvin has served on the boards of several ambitious technology
              businesses, helping them achieve commercial success. We may assist
              develop initiatives strategically rather than just delivering the
              technical difficulty at hand.
            </span>
          </div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={container(0.31)}
          className="third-section-right-single-card"
        >
          <img src="/images/Frame-2.png" alt="" />
          <div>
            <h3>A 360 Partnership</h3>
            <span>
              As an end-to-end partner, we will see your enterprise through to
              completion, from initial concept to faultless execution,
              continuous assistance, and driving company growth. We've
              successfully shaped concepts, written company strategies, raised
              funds, established support and hosting ecosystems, and launched
              market endeavors.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThirdSection;
