import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { featureVariantsAbout } from "../../data/animation";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 1 };
const CyberSercurity = () => {
  return (
    <div className="web-developemnt-detail-main">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            <h3>Our Story</h3>
          </div>
          <h1>What we say to Our people</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a
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
      {/* text */}
      <div className="our-stories-second-card">
        <h2 style={{ textAlign: "center" }}>
          How
          <span className="shero-span-color"> we </span>
          help
        </h2>
        <p>
          Nuhvin takes pride in its ability to safeguard enterprises from
          evolving cybersecurity threats. Throughout our comprehensive
          cybersecurity solutions, we give our clients with peace of mind by
          implementing powerful protections to protect their digital assets.
        </p>
        <p>
          We tailor our strategy to each client's unique needs and challenges,
          from rigorous risk assessments to the implementation of innovative
          security solutions.
        </p>
        <p>
          Our cybersecurity experts are continually vigilant, assessing
          potential assaults and providing proactive assistance to mitigate
          risks. With an emphasis on proactive safety and rapid response, we
          enable our clients to comfortably navigate the digital world, knowing
          that their data and operations are secure with NGS on their side.
        </p>
      </div>
      {/*  show tech */}
      <div className="all-services-main-card">
        <div className="all-services-main-first-card">
          <p>//DATABSE MANAGEMENT SERVICES</p>
          <h2>We craft your digital future</h2>
          <h1>
            Information & <span className="shero-span-color">Technologies</span>
          </h1>
          <span className="andriod-dev-dummytext">
            Nuhvin's cyber security solutions and assistance provide full
            defense against digital attacks, safeguarding the security and
            integrity of our clients' digital assets. We deliver bespoke cyber
            security solutions based on modern technology and industry knowledge
            to suit businesses' particular demands and issues. Our managed
            security offerings offer continuous monitoring, threat detection,
            and quick reaction capabilities, which are supplemented by strong
            access and identity management services that protect the identities
            of users and regulate their access to vital information and systems.
          </span>
        </div>
        <div className="all-services-each-card">
          <div className="services-each-single-card">
            <h2>Cloud Security</h2>
            <p>
              We gauge the safety of the cloud environment to make sure accurate
              set up access restrictions, and information security measures are
              in place.
            </p>

            {/* <span>01</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* Software development */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>Application Security</h2>
            <p>
              We do comprehensive security evaluations on your apps, detecting
              possible vulnerabilities and recommending mitigation techniques to
              prevent cyberattacks.
            </p>

            {/* <span>02</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* Web development */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>API Security</h2>
            <p>
              We assess the safety associated with your APIs, assuring safe
              authentication, authorization, and protection against typical API
              vulnerabilities
            </p>

            {/* <span>03</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* Mobile development */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>Infrastructure security</h2>
            <p>
              We evaluate the security of your network infrastructure, including
              firewalls, routers, and switches, to discover potential
              vulnerabilities and improve your overall safety stance.
            </p>

            {/* <span>04</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* E-commers service */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>DB Gap Audit</h2>
            <p>
              We We assess the database's security measures for assuring data
              confidentiality, integrity, and availability, and offer solutions
              to any gaps or vulnerabilities.
            </p>

            {/* <span>05</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          <div className="services-each-single-card">
            <h2>Infrastructure integrity</h2>
            <p>
              We assess the integrity of your infrastructure, ensuring that
              appropriate safety measures are in existence to identify and avert
              unwanted alterations or sabotage.
            </p>

            {/* <span>06</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          <div className="services-each-single-card">
            <h2>IData security</h2>
            <p>
              As a Cyber Security Company, we will look into your data
              protection policies, such as secrecy, restrictions on access, as
              well as data processing protocols, to protect confidential data
              from unintentional access or exposure.
            </p>

            {/* <span>06</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      {/* quality */}
      <div className="our-stories-second-card">
        <h2>
          Our <span className="shero-span-color">Quality</span> Management
        </h2>
        <p>
          Developing software that is of the finest excellence after extensive
          testing and optimization.
        </p>
        <p>
          With our solutions for QA testing, test automation, performance
          testing, and security testing, you can develop
        </p>
        <p>
          software that is of the highest caliber. Acquire a market edge over
          competitors.
        </p>
        <button>Nuhvin Quality</button>
      </div>
      <div className="our-stories-third-card-parents">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          className="our-stories-third-card-parents-left-card"
        >
          <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={featureVariantsAbout}
            // transition={{ duration: 18,  }}
          >
            <GiStarShuriken size={30} color="#fff" />
          </motion.span>
          <div className="our-stories-third-card-parents-left-first-images-card">
            <img src="/images/441bdc1e9b.jpg" alt="" />
          </div>
          <div className="our-stories-third-card-parents-left-second-images-card">
            <img src="/images/7f5ae780ce.jpg" alt="" />
            <div className="our-stories-third-card-parents-left-second-images-card-dotted-card">
              <span></span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="our-stories-third-card-parents-right-card"
        >
          <div className="our-stories-fisrt-card-our-story-text">
            <span></span>
            <h3>FUTURE</h3>
          </div>
          <h1>
            The way we <span className="shero-span-color">work</span>
          </h1>
          <p>
            Our approach starts with creating authenticity through a thorough
            exploration call. We collaborate closely with our customers to
            better grasp their distinct vision, brand values, and mission.
          </p>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Collaborate with client every step of the way</span> :We
              collaborate extensively with our clients throughout the design
              process, allowing for comments and adjustments to ensure their
              satisfaction with the product.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Stay up-to-date with latest design trends</span>: We stay up
              with the most recent design trends so that we can provide our
              clients timeless, contemporary designs.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>
                Provide designs of the highest caliber with short lead times.
              </span>
              : Our specialty is providing our clients with fast, high-quality
              designs so they may fulfill their deadlines and accomplish what
              they want to achieve.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Timeless</span> : It's relevant for the long term because it
              doesn't depend on specific technologies or trends.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Provide exceptional customer service</span> : We focus
              customer service and endeavor to give our clients a happy and
              stress-free experience.
            </span>
          </div>
          {/* <div className="our-stories-third-card-icons-with-text">
                    <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
                    <span>
                      <span>Sustainability</span> : To create software solutions that
                      are not only effective but also environmentally and socially
                      responsible.
                    </span>
                  </div> */}
          {/* <div className="our-stories-third-card-icons-with-text">
                    <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
                    <span>
                      <span>Diversity and inclusion</span> : To foster a diverse and
                      inclusive environment where everyone feels valued and empowered to
                      contribute their unique talents.
                    </span>
                  </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default CyberSercurity;
