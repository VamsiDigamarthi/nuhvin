import React, { useEffect, useState } from "react";
import "./ApplyJob.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export const ApplyJob = () => {
  const location = useLocation();
  console.log(location.state?.title);
  let jobTitle = location.state.title;
  const [applyData, setApplyData] = useState();

  const navigate = useNavigate();
  const goToAppyJob = () => {
    navigate(`/job-form`, {
      replace: true,
      state: { title: jobTitle },
    });
  };

  const data = [
    {
      jobTitle: "Mobile App Developer",
      title: "Job Description: Mobile App Developer at NUHVIN",
      desc: "A Mobile App Developer at Nuhvin Global Services Private Limited designs, develops, and maintains mobile apps for iOS and Android, ensuring high performance and integration with backend services. They collaborate with teams to meet user needs and improve app functionality, with responsibilities varying by project requirements.",
      subTitle: "Job Description: Mobile App Developer at NUHVIN",
      first: [
        {
          span: "Develop and Maintain Apps: ",
          d: "Design, build, and optimize mobile applications for iOS and Android, ensuring high performance and user experience.",
        },
        {
          span: "Code and Debug:",
          d: "Write clean, efficient code and troubleshoot issues to ensure smooth app functionality and reliability.",
        },
        {
          span: "Collaborate: ",
          d: "Work with cross-functional teams, including designers and product managers, to integrate features and deliver solutions.",
        },

        {
          span: "Enhance Functionality: ",
          d: "Contribute to app architecture, improve existing features, and implement new functionalities based on user needs and feedback.",
        },
        {
          span: "Code Reviews:",
          d: "Participate in peer reviews to maintain coding standards and implement best practices.",
        },
      ],
      last: "Your role will adapt to project requirements and experience, with a focus on delivering high-quality, innovative mobile applications.",
    },
    {
      jobTitle: "Python Developer",
      title: "Job Description: Python Developer at NUHVIN",
      desc: "As a Python Developer, you'll develop and maintain Python applications, write scalable code for backend systems and APIs, and ensure seamless integration with cross-functional teams. Responsibilities include debugging, code reviews, and contributing to software architecture.",
      subTitle: "Job Description: Python Developer at NUHVIN",
      first: [
        {
          span: "Develop and Maintain Applications",
          d: "Design, build, and optimize Python applications, focusing on backend systems and APIs.",
        },
        {
          span: "Code and Debug: ",
          d: "Write clean, scalable code, and troubleshoot issues to ensure high performance and reliability.",
        },
        {
          span: "Collaborate: ",
          d: "Work with cross-functional teams, including data scientists and frontend developers, to integrate and deliver solutions.",
        },
        {
          span: "Enhance Functionality: ",
          d: "Contribute to the overall architecture, improve existing features, and implement new functionalities",
        },
        {
          span: "Code Reviews: ",
          d: "Participate in peer reviews to uphold coding standards and best practices.",
        },
      ],
      last: "Your role will adapt to project requirements and experience, with a focus on delivering robust and efficient software solutions.",
    },
    {
      jobTitle: "React/Angular  Developer",
      title: "Job Description: React.js/Angular.js Developer at Nuhvin",
      desc: "As a React.js/Angular.js Developer, you'll design, develop, and maintain web applications using React.js or Angular.js. Responsibilities include writing efficient, maintainable code, debugging issues, and participating in code reviews. You'll collaborate with cross-functional teams to integrate features and ensure seamless user experiences. Your role will also involve contributing to the overall software architecture and adapting to project needs and experience levels.",
      subTitle: "Job Description:  React.js/Angular.js Developer at Nuhvin",
      first: [
        {
          span: "Develop and Maintain Applications: ",
          d: "Design, build, and optimize web applications using React.js or Angular.js, focusing on delivering high-quality, responsive user interfaces.",
        },
        {
          span: "Code and Debug: ",
          d: " Write efficient, maintainable code, troubleshoot issues, and ensure the performance and reliability of applications.",
        },
        {
          span: "Collaborate: ",
          d: " Work closely with cross-functional teams, including designers, product managers, and backend developers, to integrate features and enhance functionality.",
        },
        {
          span: "Enhance User Experience: ",
          d: "Contribute to the overall architecture, improve existing features, and implement new functionalities based on user feedback and project requirements.",
        },
        {
          span: "Code Reviews:",
          d: "Engage in peer code reviews to uphold coding standards, best practices, and ensure code quality.",
        },
      ],
      last: "Your role will adapt to project requirements and experience, with a focus on delivering robust and efficient software solutions.",
    },
  ];

  useEffect(() => {
    // console.log(jobTitle);
    const jobData = data.filter((item) => item.jobTitle === jobTitle);
    // console.log(jobData);
    setApplyData(jobData);
  }, [jobTitle]);

  return (
    <div className="detail-career-main">
      <div className="apply-job-card">
        <h3>Hyderabad</h3>
        <h1>{location.state?.title}</h1>
        {/* <Link to="/job-form"> */}
        <div onClick={goToAppyJob} className="apply-now-job-btn-card">
          <span>Apply Now</span>
          <FaLongArrowAltRight size={25} />
        </div>
        {/* </Link> */}
      </div>
      <div className="apply-now-job-form-desc-main-card">
        <div className="apply-now-job-form-desc-main-left-card">
          <h3>{applyData?.[0]?.title}</h3>
          <p>{applyData?.[0]?.desc}</p>
          <h3>J{applyData?.[0]?.subTitle}</h3>
          <h4>Role Overview:</h4>
          <ul>
            {applyData?.[0]?.first.map((each, key) => (
              <li key={key}>
                <span>{each.span}</span>
                {each.d}
              </li>
            ))}
          </ul>
          <p>
            <span> Practice Development:</span>
            {applyData?.[0]?.last}
          </p>
        </div>
        {/*  */}
        <div className="apply-now-job-form-desc-main-right-card">
          <span>Ref No</span>
          <span>54454</span>
          <span>Posted on</span>
          <span>11 jun 2024</span>

          <span>Contract Type</span>

          <span>Regular</span>

          <span>Location</span>

          <span>Hyderabad</span>

          <span>Busines Unit</span>

          <span>Engineering</span>

          <span>Department</span>

          <span>Engineering</span>
          {/* <Link to="/job-form"> */}
          <div onClick={goToAppyJob} className="apply-now-job-btn-card">
            <span>Apply Now</span>
            <FaLongArrowAltRight size={25} />
          </div>
          {/* </Link> */}
          {/* <button></button> */}
        </div>
      </div>
    </div>
  );
};
