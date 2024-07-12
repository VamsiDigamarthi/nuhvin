import React from "react";
import "./DetailText.css";
import { FaArrowRight } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { PiAndroidLogoFill } from "react-icons/pi";
import { GrShieldSecurity } from "react-icons/gr";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container } from "../../data/animation";
const transition = { type: "spring", duration: 1 };

const DetailText = () => {
  return (
    <div className="detail-text-main">
      <div className="detail-text-first-card">
        <img src="/images/vr-2-removebg-preview-cut.png" alt="vr" />
        <div className="details-text-first-inner-card">
          <motion.h1
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ ...transition, duration: 1 }}
          >
            Discover NGS IT
          </motion.h1>
          <motion.h1
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ ...transition, duration: 2 }}
          >
            essentials that <br />
            <span className="shero-span-color">Revolutionize</span> business
          </motion.h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.{" "}
          </p>
          <div className="awesome-single-button-card">
            <button>Our Vision</button>
            <FaArrowRight size={20} color="#fff" />
          </div>
        </div>
      </div>
      <div className="details-text-second-card">
        <div className="details-text-empty-card"></div>
        {/* <img src="/images/e8a469cfc8.jpg" alt="" /> */}
        <div className="details-text-all-single-card-parent">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="details-text-single-card-one"
          >
            <span>/\ IT essentials that</span>
            <h1> Revolutionize business</h1>
            <p>
              Collaboratively reintermediate holistic markets restore strategic
              sources the world.
            </p>
            <div className="details-text-button-card">
              <span>View All</span>
              <span>
                <FaArrowRight size={20} color="#ff3c00" />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.2)}
            className="detsila-text-single-icons-with-text-card"
          >
            <h3>Software Development</h3>
            <p>
              Data analytics is the process of collecting, cleaning, and
              analyzing data to gain insights that can be used to improve
              business operations...
            </p>
            <div className="details-text-single-icons-with-text-card-white-card">
              <GiArtificialIntelligence size={40} color="#ff3c00" />
            </div>
            <span className="details-text-single-card-arrow-card">
              <Link to="/software-developemnt-details">
                <FiArrowDownRight size={25} color="#ff3c00" />
              </Link>
            </span>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.4)}
            className="detsila-text-single-icons-with-text-card"
          >
            <h3>Web Developmemt</h3>
            <p>
              Data analytics is the process of collecting, cleaning, and
              analyzing data to gain insights that can be used to improve
              business operations...
            </p>
            <div className="details-text-single-icons-with-text-card-white-card">
              <CgWebsite size={40} color="#ff3c00" />
            </div>
            <span className="details-text-single-card-arrow-card">
              <Link to="/web-details">
                <FiArrowDownRight size={25} color="#ff3c00" />
              </Link>
            </span>
          </motion.div>
        </div>
        <div className="details-text-all-single-card-parent">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.6)}
            className="detsila-text-single-icons-with-text-card"
          >
            <h3>Mobile App Development</h3>
            <p>
              Proficiency in programming languages like Java or Swift is crucial
              for app development.
            </p>
            <div className="details-text-single-icons-with-text-card-white-card">
              <PiAndroidLogoFill size={40} color="#ff3c00" />
            </div>
            <span className="details-text-single-card-arrow-card">
              <Link to="/andriod-details">
                <FiArrowDownRight size={25} color="#ff3c00" />
              </Link>
            </span>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.7)}
            className="detsila-text-single-icons-with-text-card"
          >
            <h3>Database Management</h3>
            <p>
              Security is the foundation of any IT infrastructure. It's
              essential to protect your business from cyberattacks,
            </p>
            <div className="details-text-single-icons-with-text-card-white-card">
              <GrShieldSecurity size={40} color="#ff3c00" />
            </div>
            <span className="details-text-single-card-arrow-card">
              <Link to="/database-management-details">
                <FiArrowDownRight size={25} color="#ff3c00" />
              </Link>
            </span>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.8)}
            className="detsila-text-single-icons-with-text-card"
          >
            <h3>cloud computing</h3>
            <p>
              Cloud computing allows businesses to access software, storage, and
              other IT resources over the internet.
            </p>
            <div className="details-text-single-icons-with-text-card-white-card">
              <FaCloudArrowDown size={40} color="#ff3c00" />
            </div>
            <span className="details-text-single-card-arrow-card">
              <FiArrowDownRight size={25} color="#ff3c00" />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DetailText;
