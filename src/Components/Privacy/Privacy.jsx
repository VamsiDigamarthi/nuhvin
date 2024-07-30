import React from "react";
// import "./Terms.css";
import { motion } from "framer-motion";
const Privacy = () => {
  const transition = { type: "spring", duration: 1 };

  return (
    <div className="terms">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            {/* <span></span> */}
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
      <div className="terms-main-card">
        <h2>Privacy Policy</h2>
        <h3>1. Introduction</h3>
        <p>
          Nuhvin Global Services Private Limited ("Nuhvin," "we," "us," or
          "our") is committed to safeguarding your privacy. This Privacy Policy
          outlines how we collect, use, disclose, and protect your information
          when you visit our website and use our services. By accessing or using
          our website or services, you agree to the terms outlined in this
          Privacy Policy.
        </p>
        <h3>2. Information We Collect</h3>
        <p>
          <span>2.1 Personal Information : </span> We may collect personal
          information that you voluntarily provide to us, including but not
          limited to:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Job title</li>
          <li>Any other information you provide in communications with us</li>
        </ul>
        <p>
          <span>2.2 Non-Personal Information : </span>We may also collect
          non-personal information, including:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Device type</li>
          <li>Usage data (e.g., pages visited, time spent on pages)</li>
        </ul>

        <h3>3. How We Use Your Information</h3>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>To provide, operate, and maintain our website and services</li>
          <li>To improve, personalize, and expand our services</li>
          <li>
            To communicate with you, including responding to inquiries and
            providing customer support
          </li>
          <li>
            To send you updates, marketing materials, and other information
            related to our services (you can opt out of these communications at
            any time)
          </li>
          <li>
            To analyze usage and trends to enhance the functionality and user
            experience of our website
          </li>
          <li>
            To comply with legal obligations and enforce our terms and
            conditions
          </li>
        </ul>
        <h3>4. How We Share Your Information</h3>
        <p>
          We do not sell or rent your personal information. We may share your
          information in the following situations:
        </p>
        <ul>
          <li>
            <span>With Service Providers:</span> We may share your information
            with third-party service providers who perform services on our
            behalf, such as website hosting, data analysis, and customer
            support.
          </li>
          <li>
            <span>For Legal Compliance:</span> We may disclose your information
            to comply with legal obligations, enforce our terms and conditions,
            and protect our rights, privacy, safety, or property, or that of
            others.
          </li>
          <li>
            <span>Business Transfers:</span> In the event of a merger,
            acquisition, or sale of all or a portion of our assets, your
            information may be transferred as part of that transaction.
          </li>
        </ul>
        <h3>5. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience on our website. Cookies are small data files that are
          placed on your device when you visit our website. You can control
          cookies through your browser settiNuhvin, but disabling cookies may
          affect your ability to use certain features of our website.
        </p>
        <h3>6. Security</h3>
        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, or alteration.
          However, no method of transmission over the internet or electronic
          storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
        <h3>7. Your Rights and Choices</h3>
        <p>
          Depending on your location and applicable laws, you may have certain
          rights regarding your personal information, including:
        </p>
        <ul>
          <li>
            The right to access, update, or delete your personal information
          </li>
          <li>
            The right to object to or restrict the processing of your personal
            information
          </li>
          <li>
            The right to withdraw your consent at any time (where applicable)
          </li>
          <li>
            To exercise your rights or if you have any questions about your
            personal information, please contact us using the information
            provided below.
          </li>
        </ul>
        <h3>8. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites that are not
          operated by us. We are not responsible for the privacy practices or
          content of these third-party sites. We encourage you to review the
          privacy policies of any third-party websites you visit.
        </p>
        <h3>9. Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this Privacy Policy periodically to stay informed about
          how we are protecting your information.
        </p>
        <h3>10. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at: info@nuhvin.com
        </p>
      </div>
    </div>
  );
};

export default Privacy;
