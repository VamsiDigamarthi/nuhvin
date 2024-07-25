import React from "react";
import "./Text.css";
import { motion } from "framer-motion";
import { featureVariants } from "../../data/animation";
import { Link } from "react-router-dom";
export const Text = () => {
  return (
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
        NGS relies heavily on IT elements like as AI-driven automation, powerful
        analytics, and cloud computing
      </p>
      <p>
        to modernize its companies AI-drive automation helps to simplify
        operations, while enhanced analytics provides actionable insights. Cloud
        computing provides scalability and agility, allowing for smooth
        operations. These technology developments enable NGS to optimize
        operations, improve client experiences, and generate long-term growth.
      </p>
      <button>
        <Link
          to="/out-revolution"
          style={{ color: "#fff" }}
          className="sabout-link-card"
        >
          Learn More
        </Link>
      </button>
    </motion.div>
  );
};
