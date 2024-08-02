import React from "react";
import "./DetailText.css";
import { FaArrowRight } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { PiAndroidLogoFill } from "react-icons/pi";
import { GrShieldSecurity } from "react-icons/gr";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";
import { FaHandPointLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { container, featureVariantsAbout } from "../../data/animation";
import { Link } from "react-router-dom";
import { AiOutlineDisconnect } from "react-icons/ai";
import { LiaGitlab } from "react-icons/lia";
import { TbFreezeRow } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { VscSearchFuzzy } from "react-icons/vsc";
import { PiLaptopBold } from "react-icons/pi";
import { TbPageBreak } from "react-icons/tb";

import { featureVariants } from "../../data/animation";

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
            transition={{ ...transition, duration: 2 }}
          >
            IT essentials that
            <span className="shero-span-color new-font-side">
              Revolutionize
            </span>{" "}
            <br />
            business
          </motion.h1>
          <span>
            Utilizing advanced IT essentials, we streamline operations and
            enhance innovation, boosting efficiency and customer satisfaction.
          </span>
        </div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={featureVariants}
        className="text-main"
      >
        {/* <img src="/images/e9daeefbe1.jpg" alt="" /> */}
        <h1>
          IT Essentials that{" "}
          <span className="shero-span-color">Revolutionize</span> business
        </h1>
        <p>
          Nuhvin relies heavily on IT elements like as AI-driven automation,
          powerful analytics, and cloud computing
          <br /> to modernize its companies AI-drive automation helps to
          simplify operations, while enhanced analytics provides actionable
          insights. Cloud computing provides scalability and agility, allowing
          for smooth operations. These technology developments enable Nuhvin to
          optimize operations, improve client experiences, and generate
          long-term growth.
        </p>
      </motion.div>
      <div className="all-services-main-card">
        <div className="all-services-main-first-card">
          {/* <p>OUR SERVICES</p> */}
          <h2>
            What we <span className="shero-span-color new-size">provide</span>
          </h2>
        </div>
        <div className="all-services-each-card">
          {/* ai */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Artificial Intelligence(AI)</h2>
            <p className="serv-para">
              Artificial intelligence (AI) is a branch of computer science that
              deals with the creation of intelligent agents, which are systems
              that can reason, learn, and act autonomously. AI can be used to
              automate tasks, improve decision-making, and gain insights from
              data.
            </p>
            <Link to="/ai" className="detail-service-link new-serv-link">
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              alt=""
            />
          </motion.div>
          {/* Software development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.1)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Software Development</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              className="detail-service-link new-serv-link"
              to="/software-developemnt-details"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>02</span> */}
            <img
              className="services-each-single-card-image-card"
              src="/images/services_software development.png"
              alt=""
            />
          </motion.div>

          {/* Web development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.2)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Web Development</h2>
            <p className="serv-para">
              Data analytics is the process of collecting, cleaning, and
              analyzing data to gain insights that can be used to improve
              business operations. Data analytics can be used to: Improve
              marketing campaigns Develop new products and services Optimize
              pricing and inventory management Make better data-driven decisions
            </p>
            <Link
              className="detail-service-link new-serv-link"
              to="/web-details"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>03</span> */}
            <img
              className="services-each-single-card-image-card"
              src="/images/services _web development.png"
              alt=""
            />
          </motion.div>

          {/* Mobile development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.3)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Mobile Development</h2>
            <p className="serv-para">
              Proficiency in programming languages like Java or Swift is crucial
              for app development. User experience (UX) design and efficient
              backend infrastructure are key factors in app development success.
            </p>
            <Link
              className="detail-service-link new-serv-link"
              to="/andriod-details"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>04</span> */}
            <img
              className="services-each-single-card-image-card"
              src="/images/services_mobile app.png"
              alt=""
            />
          </motion.div>

          {/* Ui-Ux  */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Ui/Ux Design</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link className="detail-service-link new-serv-link">
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="/images/services_UI_UX.png"
              alt=""
            />
          </motion.div>

          {/* cloud */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Cybersecurity</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              to="/cloud-computing-details"
              className="detail-service-link new-serv-link"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg"
              alt=""
            />
          </motion.div>
          {/* dev-ops */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Dev-Ops</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link to="/dev-ops" className="detail-service-link new-serv-link">
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GfftZ9uP4pj18-m7MU3wKBkroRibJfw8Jw&s"
              alt=""
            />
          </motion.div>

          {/* data base management  */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Database Management System</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              to="/database-management-details"
              className="detail-service-link new-serv-link"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              alt=""
            />
          </motion.div>

          {/* E-commers service */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.4)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">E-commerce service</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link className="detail-service-link new-serv-link">
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>05</span> */}
            <img
              className="services-each-single-card-image-card"
              src="/images/services_e commerce.png"
              alt=""
            />
          </motion.div>

          {/* digital markeing */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Digital Marketing</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              to="/our-services"
              className="detail-service-link new-serv-link"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              alt=""
            />
          </motion.div>
          {/* Internships */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Training & Placements</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              to="/our-services"
              className="detail-service-link new-serv-link"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              alt=""
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Internships</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              to="/our-services"
              className="detail-service-link new-serv-link"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>01</span> */}
            <img
              className="services-each-single-card-image-card"
              src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
              alt=""
            />
          </motion.div>
          {/* work shops */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.5)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Workshops</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              to="/our-services"
              className="detail-service-link new-serv-link"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>06</span> */}
            <img
              className="services-each-single-card-image-card"
              src="/images/services_ workshop.png"
              alt=""
            />
          </motion.div>
          {/* other services */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.5)}
            className="services-each-single-card"
          >
            <h2 className="serv-h2">Other Services</h2>
            <p className="serv-para">
              Nullam tincidunt augue eget densis volu tpat, vitae ultri ces
              lectus and posuere. Duis urna lacus. READ MORE
            </p>
            <Link
              to="/our-services"
              className="detail-service-link new-serv-link"
            >
              <div className="all-services-each-card-button">
                <span>Read More</span>
                <span>
                  <FaAngleRight size={20} color="#fff" />
                </span>
              </div>
            </Link>
            {/* <span>06</span> */}
            <img
              className="services-each-single-card-image-card"
              src="/images/services_ workshop.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
      {/* <div className="details-text-second-card">
        <div className="details-text-all-single-card-parent">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.2)}
            className="detsila-text-single-icons-with-text-card"
          >
            <h3>Artificial intelligence</h3>
            <p>
              Artificial intelligence (AI) is a branch of computer science that
              deals with the creation of intelligent agents, which are systems
              that can reason, learn, and act autonomously. AI can be used to
              automate tasks, improve decision-making, and gain insights from
              data.
            </p>

            <span className="details-text-single-card-arrow-card">
              <Link to="/ai">
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
              business operations. Data analytics can be used to: Improve
              marketing campaigns Develop new products and services Optimize
              pricing and inventory management Make better data-driven decisions
            </p>

            <span className="details-text-single-card-arrow-card">
              <Link to="/web-details">
                <FiArrowDownRight size={25} color="#ff3c00" />
              </Link>
            </span>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.2)}
            className="detsila-text-single-icons-with-text-card"
          >
            <h3>Security</h3>
            <p>
              Security is the foundation of any IT infrastructure. It's
              essential to protect your business from cyberattacks, data
              breaches, and other security threats. Strong security measures can
              help you to: Safeguard your data Maintain compliance with industry
              regulations Reduce the risk of downtime Protect your reputation.
            </p>

            <span className="details-text-single-card-arrow-card">
              <Link to="/cloud-computing-details">
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
            <h3>Data analytics</h3>
            <p>
              Data analytics is the process of collecting, cleaning, and
              analyzing data to gain insights that can be used to improve
              business operations. Data analytics can be used to: Improve
              marketing campaigns Develop new products and services Optimize
              pricing and inventory management Make better data-driven decisions
            </p>

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

            <span className="details-text-single-card-arrow-card">
              <Link to="/cloud-computing-details">
                <FiArrowDownRight size={25} color="#ff3c00" />
              </Link>
            </span>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default DetailText;
