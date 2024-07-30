import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { featureVariantsAbout } from "../../data/animation";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 1 };
const Devops = () => {
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
        <p>With NGS, business might reap the perks of DevOps.</p>
      </div>
      {/*  show tech */}
      <div className="all-services-main-card">
        <div className="all-services-main-first-card">
          <p>//DEV OPS</p>
          <h2>We craft your digital future</h2>
          <h1>
            Information & <span className="shero-span-color">Technologies</span>
          </h1>
          <span className="andriod-dev-dummytext">
            Our perform DevOps guidance and support can assist you optimize your
            software development and deployment workflows. We specialized in
            ongoing integration, automation, monitoring, security, and other
            services to help you deliver software more efficiently and reliably.
          </span>
        </div>
        <div className="all-services-each-card">
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>
              Continuous Integration and Deployment
            </h2>
            <p>
              We utilize CI/CD pipelines for automating software development,
              testing, and deployment, which results in quicker and more solid
              releases.
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
            <h2 style={{ textAlign: "center" }}>Infrastructure as code</h2>
            <p>
              We utilize infrastructure automation technologies like Terraform
              and Ansible in order to generate and manage technology-related
              resources as code, permitting us to keep growing and remain
              flexible.
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
            <h2 style={{ textAlign: "center" }}>Monitoring and Logging</h2>
            <p>
              We use sophisticated monitoring and logging systems, that include
              ELK stack , Grafana, and the Prometheus, to give instantaneous
              insight into your systems and services.
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
            <h2 style={{ textAlign: "center" }}>
              Containerization Orchestration
            </h2>
            <p>
              We use both Kubernetes and Docker to isolate your applications and
              effectively manage containerized workloads, enabling flexibility
              and mobility.
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
            <h2 style={{ textAlign: "center" }}>
              Cloud Migration and Management
            </h2>
            <p>
              We enable you in migrating your infrastructure and apps to the
              cloud, delivering smooth migrations as well as efficient
              management using cloud platforms like AWS, Azure, or Google Cloud.
            </p>

            {/* <span>05</span>
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
          {/* <div className="our-stories-fisrt-card-our-story-text">
            <span></span>
            <h3>FUTURE</h3>
          </div> */}
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

export default Devops;
