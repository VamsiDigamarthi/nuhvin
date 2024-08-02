import React from "react";
import "./DetailQuality.css";
import { motion } from "framer-motion";
import { container } from "../../data/animation";
import { IoBulbOutline } from "react-icons/io5";
import { MdOutlineRocket } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { SiCodefactor } from "react-icons/si";
const transition = { type: "spring", duration: 1 };

const DetailQuality = () => {
  return (
    <div className="detail-quality">
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
      <div className="detail-quality-second-card">
        <h3>
          How <span className="curvi-text">we</span> help
        </h3>
        <p>
          Nuhvin delivers complete DevOps guidance and solutions, encompassing
          AWS and Azure services,
        </p>
        <p>
          that can assist you optimize software development and deployment
          processes.
        </p>
        <p>
          Our competent team crosses the gap between development and operations,
          allowing for
        </p>

        <p>
          seamless collaboration and rapid fulfillment. We utilize DevOps
          techniques and instruments to
        </p>

        <p>
          aid your company reduce time to market,improve quality, and increase
          overall productivity.
        </p>

        <p>With Nuhvin, business might reap the perks of DevOps.</p>
      </div>
      <div className="detail-quality-third-section">
        <h2>
          We craft your <span className="curvi-text curse-color">digital</span>{" "}
          future
        </h2>
        <p>
          Developing software that is of the finest excellence after extensive
          testing and optimization. With our solutions for QA testing, test
          automation, performance testing, and security testing, you can develop
          software that is of the highest caliber. Acquire a market edge over
          competitors. Explore our solutions at the moment.
        </p>
        <div className="all-services-each-card">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>Quality Assurance Testing</h2>
            <p>
              Entire Quality Control Testing techniques to guarantee software
              security, performance, and functionality. To adequately detect and
              resolve issues, test cases should be developed, implemented, and
              defects should be recorded and tracked.
            </p>
          </motion.div>
          {/* Software development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.1)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>Test Automation</h2>
            <p>
              Deploying automated testing frameworks into action to boost
              workflow and simplify testing cycles. Designing, engaged, and
              preserving scripts for reliable and accurate test automation.
            </p>
          </motion.div>
          {/* Web development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.2)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>Performance Testing</h2>
            <p>
              Evaluating software performance under various load levels in order
              to find bottlenecks and enhance performance. Load, stress, and
              scalability testing are used to guarantee that software can
              withstand heavy user demand.
            </p>
          </motion.div>
          {/* </div>
        <div className="all-services-each-card"> */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>Security Testing</h2>
            <p>
              We use sophisticated monitoring and logging systems, that include
              ELK stack , Grafana, and the Prometheus, to give instantaneous
              insight into your systems and services.
            </p>
          </motion.div>
          {/* Software development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.1)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>
              Continuous Integration and Continuous Testing
            </h2>
            <p>
              provided for frequent software builds, testing, and deployment.
              Make certain flawless coordination of development and testing
              processes, triggering faster and more reliable releases.
            </p>
          </motion.div>
          {/* Web development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.2)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>
              Quality Metrics and Reporting
            </h2>
            <p>
              Tracking and evaluating quality statistics will provide glimpses
              into software performance and progress. Developing accurate
              reports and dashboards for better decision-making and ongoing
              improvements.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Time Line */}
      <div className="detail-quality-time-line">
        <h2>Nuhvin Process</h2>
        <div className="detail-quality-main-time-line">
          <div className="detail-quality-main-left-side">
            <div className="detail-quality-single-card">
              <div className="detail-quality-text-card">
                <h2>Analysis</h2>
                <p>Understand the client's high standards of quality.</p>
                <span className="left-container-arrow"></span>
              </div>
              <div className="detail-quality-round">
                <IoBulbOutline color="#ff6600" size={25} />
              </div>
            </div>
            <div className="ddetail-quality-dummy"></div>
            <div className="detail-quality-single-card">
              <div className="detail-quality-text-card">
                <h2>execution</h2>
                <p>Deliver functional, performance, and security testing.</p>
                <span className="left-container-arrow"></span>
              </div>
              <div className="detail-quality-round">
                <RiComputerLine color="#ff6600" size={25} />
              </div>
            </div>
            <div className="ddetail-quality-dummy"></div>
            <div className="detail-quality-single-card">
              <div className="detail-quality-text-card">
                <h2>improvement</h2>
                <p>
                  Develop critiques for the promotion of perpetual enhancement.
                </p>
                <span className="left-container-arrow"></span>
              </div>
              <div className="detail-quality-round">
                <MdOutlineRocket color="#ff6600" size={25} />
              </div>
            </div>
          </div>
          <div className="detail-quality-main-center">
            <div className="detail-quality-center-last-card">
              <img
                src="https://old.nuhvin.com/course/quality%20icon.png"
                alt=""
              />
            </div>
          </div>
          <div className="detail-quality-main-right-side">
            <div className="ddetail-quality-dummy"></div>
            <div className="detail-quality-single-card detail-quality-self">
              <div className="detail-quality-text-card">
                <h2>planning</h2>
                <p>Development of an accurate Quality Engineering strategy.</p>
                <span className="right-container-arrow"></span>
              </div>
              <div className="detail-right-side-roung">
                <FaRegPaperPlane color="#ff6600" size={20} />
              </div>
            </div>
            <div className="ddetail-quality-dummy"></div>
            <div className="detail-quality-single-card detail-quality-self">
              <div className="detail-quality-text-card">
                <h2 style={{ fontSize: "20px" }}>
                  Defect Management in QA Testing
                </h2>
                <p>
                  Discover and track imperfections in software throughout the
                  quality assurance process.
                </p>
                <span className="right-container-arrow"></span>
              </div>
              <div className="detail-right-side-roung">
                <SiCodefactor color="#ff6600" size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="detail-quality-time-line-mobile">
          <div className="detail-quality-left-line">
            <div className="detail-quality-center-last-card  mobile-view">
              <img
                src="https://old.nuhvin.com/course/quality%20icon.png"
                alt=""
              />
            </div>
          </div>
          <div className="detail-quality-right-card">
            <div className="detail-quality-mobile-single-card">
              <div
                className="detail-quality-text-card"
                style={{ width: "100%" }}
              >
                <h2 style={{ fontSize: "20px" }}>Analysis</h2>
                <p>Understand the client's high standards of quality</p>
                <span className="right-container-arrow"></span>
              </div>
              <div className="detail-right-side-roung-mobile">
                <IoBulbOutline color="#ff6600" size={20} />
              </div>
            </div>
            <div className="detail-quality-mobile-single-card">
              <div
                className="detail-quality-text-card"
                style={{ width: "100%" }}
              >
                <h2 style={{ fontSize: "20px" }}>execution</h2>
                <p>Deliver functional, performance, and security testing</p>
                <span className="right-container-arrow"></span>
              </div>
              <div className="detail-right-side-roung-mobile">
                <RiComputerLine color="#ff6600" size={20} />
              </div>
            </div>
            <div className="detail-quality-mobile-single-card">
              <div
                className="detail-quality-text-card"
                style={{ width: "100%" }}
              >
                <h2 style={{ fontSize: "20px" }}>improvement</h2>
                <p>
                  Develop critiques for the promotion of perpetual enhancement.
                </p>
                <span className="right-container-arrow"></span>
              </div>
              <div className="detail-right-side-roung-mobile">
                <MdOutlineRocket color="#ff6600" size={20} />
              </div>
            </div>
            <div className="detail-quality-mobile-single-card">
              <div
                className="detail-quality-text-card"
                style={{ width: "100%" }}
              >
                <h2 style={{ fontSize: "20px" }}>planning</h2>
                <p>Development of an accurate Quality Engineering strategy.</p>
                <span className="right-container-arrow"></span>
              </div>
              <div className="detail-right-side-roung-mobile">
                <FaRegPaperPlane color="#ff6600" size={20} />
              </div>
            </div>
            <div className="detail-quality-mobile-single-card">
              <div
                className="detail-quality-text-card"
                style={{ width: "100%" }}
              >
                <h2 style={{ fontSize: "20px" }}>
                  Defect Management in QA Testing
                </h2>
                <p>
                  {" "}
                  Discover and track imperfections in software throughout the
                  quality assurance process.
                </p>
                <span className="right-container-arrow"></span>
              </div>
              <div className="detail-right-side-roung-mobile">
                <SiCodefactor color="#ff6600" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailQuality;
