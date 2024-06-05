import "./App.css";
import React, { lazy, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import HomeComponent from "./components/Home";
import FooterComponent from "./components/Footer";
import ContactusComponent from "./components/Contactus";
import ServiceComponent from "./components/Services";
import OurVisionComponent from "./components/ourVision";
import AboutComponent from "./components/aboutus";
import OurMissionComponent from "./components/ourMission";
import JoinUsComponent from "./components/joinUs";
import OurBlogComponent from "./components/OurBlogs";
import FaqPageComponent from "./components/faqPage";
import PortfolioComponent from "./components/Portfolio";
import MobileAppDevComponent from "./components/mobileAppDev";
import ComingSoonComponent from "./Pages/comingSoon/comingsoon";
import MeetVspleComponent from "./Pages/meetVspleClan/meetVsple";
import PolicyComponent from "./Pages/policies/policies";
import CalvaryComponent from "./projectPages/calvaryTemple";
import IndustriesComponent from "./Pages/industries/industries";
import ServiceSoftwareComponent from "./Pages/service/serviceSoftware/serviceSoftware";
import WearableDeveloperComponent from "./Pages/hireTopTalents/wearableDeveloper/wearableDeveloper";
import WhatsnextComponent from "./Pages/whatsNext/whatsnext";
import SoftwareDevComponent from "./Pages/softwareDev/softDev";
import WebsiteDevComponent from "./Pages/websiteDev/websiteDev";
import QaDevComponent from "./Pages/qaDev/qadev";
import WebsiteDeveloperComponent from "./Pages/hireTopTalents/websiteDeveloper/websiteDeveloper";
import SoftwareDeveloperComponent from "./Pages/hireTopTalents/softwareDeveloper/softwareDeveloper";
import QaDeveloperComponent from "./Pages/hireTopTalents/QA/qaDeveloper";
import HealthIndustriesComponent from "./Pages/indivisualindustries/healtcare/healthcare";
import SportsIndustriesComponent from "./Pages/indivisualindustries/sports/sports";
import RealStateIndustriesComponent from "./Pages/indivisualindustries/realstate/realstate";
import ElearningIndustriesComponent from "./Pages/indivisualindustries/elearning/elearning";
import BankingIndustriesComponent from "./Pages/indivisualindustries/banking/banking";
import FintechIndustriesComponent from "./Pages/indivisualindustries/fintech/fintech";
import LogisticsIndustriesComponent from "./Pages/indivisualindustries/logistics/logistics";
import DatingIndustriesComponent from "./Pages/indivisualindustries/dating/dating";
import ChatieComponent from "./projectPages/chatie/chatie";
import UnboundedComponent from "./projectPages/unbounded/unbounded";
import BreckworldComponent from "./projectPages/breckworld/breckworld";
import HobbyistComponent from "./projectPages/hobbyist/hobbyist";
import QrscapeComponent from "./projectPages/qrscape/qrscape";
import SalestripComponent from "./projectPages/salestrip/salestrip";
import TrudaComponent from "./projectPages/truda/truda";
import CrossoComponent from "./projectPages/crosso/crosso";
import GamedevComponent from "./Pages/gameDev/gamedev";
import TrademarkComponent from "./projectPages/trademark/trademark";
import logo from "./assest/web-icons/global-icon/Mask_group-removebg-preview 1.png";
import UiuxDevComponent from "./Pages/service/serviceuiux/serviceuiux";
import SitemapComponent from "./Pages/sitemap/sitemap";
import TradetipsComponent from "./projectPages/tradetips/tradetips";
import TnumberComponent from "./projectPages/tnumber/tnumber";

// const FooterComponent = lazy(() => import("./components/Footer"));
// const ContactusComponent = lazy(() => import("./components/Contactus"));
// const ServiceComponent = lazy(() => import("./components/Services"));
// const OurVisionComponent = lazy(() => import("./components/ourVision"));
// const AboutComponent = lazy(() => import("./components/aboutus"));
// const OurMissionComponent = lazy(() => import("./components/ourMission"));
// const JoinUsComponent = lazy(() => import("./components/joinUs"));
// const OurBlogComponent = lazy(() => import("./components/OurBlogs"));
// const FaqPageComponent = lazy(() => import("./components/faqPage"));
// const PortfolioComponent = lazy(() => import("./components/Portfolio"));
// const MobileAppDevComponent = lazy(() => import("./components/mobileAppDev"));
// const ComingSoonComponent = lazy(() => import("./Pages/comingSoon/comingsoon"));
// const MeetVspleComponent = lazy(() => import("./Pages/meetVspleClan/meetVsple"));
// const PolicyComponent = lazy(() => import("./Pages/policies/policies"));
// const CalvaryComponent = lazy(() => import("./projectPages/calvaryTemple"));
// const IndustriesComponent = lazy(() => import("./Pages/industries/industries"));
// const ServiceSoftwareComponent = lazy(() => import("./Pages/service/serviceSoftware/serviceSoftware"));
// const WearableDeveloperComponent = lazy(() => import("./Pages/hireTopTalents/wearableDeveloper/wearableDeveloper"));
// const WhatsnextComponent = lazy(() => import("./Pages/whatsNext/whatsnext"));
// const SoftwareDevComponent = lazy(() => import("./Pages/softwareDev/softDev"));
// const WebsiteDevComponent = lazy(() => import("./Pages/websiteDev/websiteDev"));
// const QaDevComponent = lazy(() => import("./Pages/qaDev/qadev"));
// const WebsiteDeveloperComponent = lazy(() => import("./Pages/hireTopTalents/websiteDeveloper/websiteDeveloper"));
// const SoftwareDeveloperComponent = lazy(() => import("./Pages/hireTopTalents/softwareDeveloper/softwareDeveloper"));
// const QaDeveloperComponent = lazy(() => import("./Pages/hireTopTalents/QA/qaDeveloper"));
// const HealthIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/healtcare/healthcare"));
// const SportsIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/sports/sports"));
// const RealStateIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/realstate/realstate"));
// const ElearningIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/elearning/elearning"));
// const BankingIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/banking/banking"));
// const FintechIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/fintech/fintech"));
// const LogisticsIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/logistics/logistics"));
// const DatingIndustriesComponent = lazy(() => import("./Pages/indivisualindustries/dating/dating"));
// const ChatieComponent = lazy(() => import("./projectPages/chatie/chatie"));
// const UnboundedComponent = lazy(() => import("./projectPages/unbounded/unbounded"));
// const BreckworldComponent = lazy(() => import("./projectPages/breckworld/breckworld"));
// const HobbyistComponent = lazy(() => import("./projectPages/hobbyist/hobbyist"));
// const QrscapeComponent = lazy(() => import("./projectPages/qrscape/qrscape"));
// const SalestripComponent = lazy(() => import("./projectPages/salestrip/salestrip"));
// const TrudaComponent = lazy(() => import("./projectPages/truda/truda"));
// const CrossoComponent = lazy(() => import("./projectPages/crosso/crosso"));
// const GamedevComponent = lazy(() => import("./Pages/gameDev/gamedev"));
// const TrademarkComponent = lazy(() => import("./projectPages/trademark/trademark"));
// const UiuxDevComponent = lazy(() => import("./Pages/service/serviceuiux/serviceuiux"));
// const logo = lazy(() => import("./assest/web-icons/global-icon/Mask_group-removebg-preview 1.png"));
// const HomeComponent = lazy(() => import('./components/Home'));
function App() {
  useEffect(() => {
    const spinner = document.getElementsByClassName("spinner")[0];
    const hideWebsite = document.getElementsByClassName("full-website")[0];
    hideWebsite.style.display = "none"
    setTimeout(() => {
      spinner.style.display = "none";
      hideWebsite.style.display = "block";
    }, 1000);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add("show");
        } else {
          element.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="app">
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="spinner">
        <div className="design-spinner">
          <img src={logo} width={"40%"} alt="" />
        </div>
      </div>
      <div className="full-website">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/mobile-app-development-services" element={<ServiceComponent />} />
          <Route path="/softwareservice" element={<ServiceSoftwareComponent />} />
          <Route path="/contact-us" element={<ContactusComponent />} />
          <Route path="/our-vision" element={<OurVisionComponent />} />
          <Route path="/about-us" element={<AboutComponent />} />
          <Route path="/our-mission" element={<OurMissionComponent />} />
          <Route path="/joinUs" element={<JoinUsComponent />} />
          <Route path="/ourblog" element={<OurBlogComponent />} />
          <Route path="/faqs" element={<FaqPageComponent />} />
          <Route path="/our-portfolio" element={<PortfolioComponent />} />
          <Route path="/hire-mobile-application-developers" element={<MobileAppDevComponent />} />
          <Route path="/comingSoon" element={<ComingSoonComponent />} />
          <Route path="/meetVsple" element={<MeetVspleComponent />} />
          <Route path="/policies" element={<PolicyComponent />} />
          <Route path="/calvary-app-development" element={<CalvaryComponent />} />
          <Route path="/industries" element={<IndustriesComponent />} />
          <Route path="/hire-wearable-application-developers" element={<WearableDeveloperComponent />} />
          <Route path="/what's-next" element={<WhatsnextComponent />} />
          <Route path="/software-development-services" element={<SoftwareDevComponent />} />
          <Route path="/website-development-services" element={<WebsiteDevComponent />} />
          <Route path="/quality-assurance-services" element={<QaDevComponent />} />
          <Route path="/hire-web-developers" element={<WebsiteDeveloperComponent />} />
          <Route path="/hire-software-developers" element={<SoftwareDeveloperComponent />} />
          <Route path="/hire-quality-assurance-analyst" element={<QaDeveloperComponent />} />
          <Route path="/healthcare-technology-solutions" element={<HealthIndustriesComponent />} />
          <Route path="/sport-fitness-technology-solutions" element={<SportsIndustriesComponent />} />
          <Route path="/real-estate-technology-solutions" element={<RealStateIndustriesComponent />} />
          <Route path="/e-learning-technology-solutions" element={<ElearningIndustriesComponent />} />
          <Route path="/banking-technology-solutions" element={<BankingIndustriesComponent />} />
          <Route path="/fintech-technology-solutions" element={<FintechIndustriesComponent />} />
          <Route path="/transportation-logistics-technology-solutions" element={<LogisticsIndustriesComponent />} />
          <Route path="/dating-technology-solutions" element={<DatingIndustriesComponent />} />
          <Route path="/chatie-app-development" element={<ChatieComponent />} />
          <Route path="/unbounded-app-development" element={<UnboundedComponent />} />
          <Route path="/breckworld-app-development" element={<BreckworldComponent />} />
          <Route path="/hobbyist-app-development" element={<HobbyistComponent />} />
          <Route path="/qrscape-app-development" element={<QrscapeComponent />} />
          <Route path="/salestrip-app-development" element={<SalestripComponent />} />
          <Route path="/truda-app-development" element={<TrudaComponent />} />
          <Route path="/crosso-app-development" element={<CrossoComponent />} />
          <Route path="/game-development-services" element={<GamedevComponent />} />
          <Route path="/trademark-app-development" element={<TrademarkComponent />} />
          <Route path="/tradetips-app-development" element={<TradetipsComponent />} />
          <Route path="/tnumber-app-development" element={<TnumberComponent />} />
          <Route path="/ui-ux-designing-services" element={<UiuxDevComponent />} />
          <Route path="/site-map" element={<SitemapComponent />} />
        </Routes>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
