import "./App.css";
import { About } from "./Components/About/About";
import { ApplyJob } from "./Components/ApplyJob/ApplyJob";
import { Career } from "./Components/Career/Career";
import Contact from "./Components/Contact/Contact";

import { DetailAbout } from "./Components/DetailAbout/DetailAbout";
import DetailCareer from "./Components/DetailCareer/DetailCareer";
import { DetailServices } from "./Components/DetailServices/DetailServices";

import DetailText from "./Components/DetailText/DetailText";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import HowItsWork from "./Components/HowItsWork/HowItsWork";
import { OurMission } from "./Components/OurMission/OurMission";
// import { OurServices } from "./Components/OurServices/OurServices";
import { OurStory } from "./Components/OurStory/OurStory";
import OurVisition from "./Components/OurVisition/OurVisition";
import Quality from "./Components/Quality/Quality";
import SecondAbout from "./Components/SecondAbout/SecondAbout";
// import Services from "./Components/Services/Services";
// import { Hero } from "./Components/Hero/Hero";
// import SecondSection from "./Components/SecondSection/SecondSection";
import { SHero } from "./Components/SHero/SHero";
import Testimonials from "./Components/Testimonials/Testimonials";
import { Text } from "./Components/Text/Text";
import ThirdSection from "./Components/ThirdSection/ThirdSection";

import { WhatWeOffer } from "./Components/WhatWeOffer/WhatWeOffer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SoftwareDevelopemtDetail from "./Components/SoftwareDevelopemntDetail/WebDevelopmentDetail";
import WebDevelopment from "./Components/WebDevelopemnt/WebDevelopment";
import { AndriodDevDetail } from "./Components/AndriodDevDetail/AndriodDevDetail";
import DatabseManagementDetail from "./Components/DatabaseManagementDetail/DatabseManagementDetail";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
// import Image from "./Components/Image/Image";
import AdvancedSlider from "./Components/Slider/Slider";
import Terms from "./Components/Terms/Terms";
import Privacy from "./Components/Privacy/Privacy";
import JobForm from "./Components/JobForm/JobForm";
import Services from "./Components/Services/Services";
import CyberSercurity from "./Components/CyberDetails/CyberDetails";
import Ai from "./Components/Ai/Ai";
import Devops from "./Components/Devops/Devops";

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTopOnRouteChange />
        <Header />
        <Routes>
          {/* <Hero /> */}
          <Route
            path="/"
            element={
              <>
                <AdvancedSlider />
                <Text />
                {/* <Services /> */}
                {/* <HowItsWork /> */}
                <About />
                <ThirdSection />
                <SecondAbout />
                <WhatWeOffer />
                <Quality />
                {/* <Image /> */}
                <Testimonials />
              </>
            }
          />

          <Route path="/out-story" element={<OurStory />} />
          <Route path="/out-visition" element={<OurVisition />} />
          <Route path="/out-mission" element={<OurMission />} />
          <Route path="/out-revolution" element={<DetailText />} />
          <Route path="/our-services" element={<DetailServices />} />
          <Route path="/detail-about" element={<DetailAbout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/detail-career" element={<DetailCareer />} />
          <Route path="/apply-job" element={<ApplyJob />} />
          <Route
            path="/software-developemnt-details"
            element={<SoftwareDevelopemtDetail />}
          />
          <Route path="/web-details" element={<WebDevelopment />} />
          <Route path="/andriod-details" element={<AndriodDevDetail />} />
          <Route
            path="/database-management-details"
            element={<DatabseManagementDetail />}
          />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/job-form" element={<JobForm />} />
          <Route path="/cloud-computing-details" element={<CyberSercurity />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/dev-ops" element={<Devops />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
