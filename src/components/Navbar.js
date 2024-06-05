import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/web-icons/global-icon/Mask_group-removebg-preview 1.png";
import toggle from "../assest/toggle.png";
import toggleGold from "../assest/web-icons/calvary/Group 1000005594 (1).png";
// import group from "../assest/icons/Group 576.png";
import slogo from "../assest/navi-icons/Frame (2).png";
import target from "../assest/icons/digitalization 1.png";
import eye from "../assest/navi-icons/eye 1.png";
import whatsNext from "../assest/navi-icons/Frame.png";
import interview from "../assest/icons/interview 1.png";
import mission from "../assest/navi-icons/target 1.png";
import certificate from "../assest/main-icons/Frame.png";
import arrowRight from "../assest/rightArrow.png";
import mobileApp from "../assest/navi-icons/Frame (1).png";
import mobiledev from "../assest/main-icons/mobile-development (1) 1.png";
import qadev from "../assest/navi-icons/data-analyst 1.png";
import websitedev from "../assest/web-icons/hireqadev/developer (2) 1.png";
import softDev from "../assest/main-icons/software (1) 1.png";
import dev2 from "../assest/main-icons/developer (2) 1.png";
import fullstack from "../assest/main-icons/layers 1.png";
import manager from "../assest/main-icons/manager 1.png";
import analyst from "../assest/main-icons/data-analyst 1.png";
import team from "../assest/main-icons/team 1.png";
import software from "../assest/icons/software-developer 1.png";
import webdev from "../assest/navi-icons/web-development (1) 1.png";
import testing from "../assest/main-icons/approval (1) 1 (1).png";
// import staffAug from "../assest/main-icons/staff (1) 1.png";
import staffAug from "../assest/main-icons/ux_design.png";
import devops from "../assest/main-icons/devops (1) 1.png";
import devop from "../assest/main-icons/services/gameServices/gameIcon.png";
import uiux from "../assest/main-icons/ux-design (2) 1.png";
import ecom from "../assest/main-icons/computer (1) 1.png";
import game from "../assest/main-icons/coding (3) 1.png";
import wearable from "../assest/navi-icons/smartwatch (1) 1.png";
import vspleMobile from "../assest/main-icons/icons/01 vsple.png";
import serviceMobile from "../assest/main-icons/icons/2 services.png";
import talentMobile from "../assest/main-icons/icons/3 hire top talents.png";
import contactMobile from "../assest/main-icons/icons/4 contact us.png";
import join from "../assest/main-icons/icons/5 join us.png";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isDragged, setIsDragged] = useState(false);
  const [isDraggedService, setisDraggedService] = useState(false);
  const [isDraggedOthers, setisDraggedOthers] = useState(false);
  const [isDraggedHire, setisDraggedHire] = useState(false);
  const [smallViewOpen, setSmallViewOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const toggleContent = () => {
    setIsDragged(!isDragged);
  };
  const toggleContentOthers = () => {
    setisDraggedOthers(!isDraggedOthers);
  };
  const toggleServiceContent = () => {
    setisDraggedService(!isDraggedService);
  };
  const toggleHireContent = () => {
    setisDraggedHire(!isDraggedHire);
  };
const handleMouseLeave = ()=>{
  setSmallViewOpen(false)
  setMenuOpen(!menuOpen);
}
  return (
    <>
      <nav className="navbar scrolling navbar-expand web">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} width={'100%'} alt="logo" className="navbar-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navLinks mt-3 " id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hoverable-link">
                <p
                  className="nav-link position-relative"
                  activeclassname="active"
                >
                  Vsple
                </p>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="row mb-5">
                      <div className="col-md-4 hoverEff">
                        <h5 className="megamenu-text">
                          <img src={slogo} width={'6%'} alt="" /> &nbsp; About Us
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          At VSPLE, We never “Deal” with our clients, but we
                          “Understand” their problem and make it ours.
                        </p>
                        <div className="readMore">
                          <a href="/about-us">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={mission} width={'6%'} alt="" />
                          &nbsp; Our Mission
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          Our Mission is to empower businesses with innovative
                          IT solutions and deliver exceptional digital
                          experiences.
                        </p>
                       
                        <div className="readMore">
                          <a href="/our-mission">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <div className="col-md-4 hoverEff mb-3">
                        <h5 className="megamenu-text">
                          <img src={eye} width={'6%'} alt="" />
                          &nbsp; Our Vision
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          Encompasses a future where businesses thrive in the
                          digital era by integrating technology into their
                          operations.
                        </p>
                        <div className="readMore">
                          <a href="/our-vision">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <hr className="hr"></hr>
                      <div className="col-md-4 hoverEff pt-4 ">
                        <h5 className="megamenu-text">
                          <img src={whatsNext} width={'6%'} alt="" />
                          &nbsp; What's Next
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                         When you choose us, you are partnering with an esteemed company. Check out what we have in plate for next couple of years.
                        </p>
                        <div className="readMore">
                          <a href="/what's-next">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item hoverable-link">
                <p
                  className="nav-link position-relative"
                  activeclassname="active"
                >
                  Services
                </p>
                <div className="mega-menu">
                  {/* <div className="triangle-service"></div> */}
                  <div className="mega-menu-content">
                    <div className="row mb-5">
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={mobiledev} width={'7%'} alt="" />
                          &nbsp; Mobile App Development
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          Let's create an exceptional mobile experience for your
                          users and drive your business growth together.
                        </p>
                        <div className="readMore">
                          <a href="/mobile-app-development-services">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={software} width={'7%'} alt="" />
                          &nbsp; Software Development
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          Assimilating Softwares developed by our experts in
                          your business processes will reflect a pace at each
                          level.
                        </p>
                        <div className="readMore">
                          <a href="/software-development-services">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={webdev} width={'6%'} alt="" />
                          &nbsp; Website Development
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          We create websites that charms the right people at the
                          right time in this competitive landscape.
                        </p>
                        <div className="readMore">
                          <a href="/website-development-services">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                    </div>
                    <hr className="hr"></hr>
                    <div className="row mt-5">
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={devop} width={'6%'} alt="" />
                          &nbsp; Game Development
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                         Developing captivating and immersive gaming experiences that engage users and drive success.
                        </p>
                        <div className="readMore">
                          <a href="/game-development-services">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                        <img src="./Group 468.png" alt="" srcSet="" />
                      </div>
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={staffAug} width={'6%'} alt="" />
                          &nbsp; UI/UX Development
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                         We combine creativity, strategic thinking, and user-centered design principles to craft seamless experiences.
                        </p>
                        <div className="readMore">
                          <a href="/ui-ux-designing-services">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                        <img src="./Group 468.png" alt="" srcSet="" />
                      </div>
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={testing} width={'6%'} alt="" />
                          &nbsp; Quality Assurance
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          Our Testing services help you identify defects,
                          optimize performance, and ensure a seamless user
                          experience.
                        </p>
                        <div className="readMore">
                          <a href="/quality-assurance-services">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                        <img src="./Group 468.png" alt="" srcSet="" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item hoverable-link">
                <p
                  className="nav-link position-relative"
                  activeclassname="active"
                >
                  Hire Top Talents
                </p>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="row mb-4">
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={mobiledev} width={'6%'} alt="" />
                          &nbsp;Mobile App Developers
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          We take pride in offering you the opportunity to hire
                          top talents in the field of mobile app development.
                        </p>
                        <div className="readMore">
                          <a href="/hire-mobile-application-developers">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <div className="col-md-4 hoverEff hoverEff">
                        <h5 className="megamenu-text">
                          <img src={wearable} width={'7%'} alt="" />
                          &nbsp;Wearable App Developers
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          We comprises skilled professionals who possess a deep
                          understanding of wearable devices.
                        </p>
                        <div className="readMore">
                          <a href="/hire-wearable-application-developers">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img
                            src={softDev}
                            width={'7%'}
                            className="mt-1"
                            alt=""
                          />
                          &nbsp;Software Developers
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                          Our team consists of skilled professionals who are
                          passionate about creating robust, scalable, and
                          user-centric software apps.
                        </p>
                        <div className="readMore">
                          <a href="/hire-software-developers">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                    </div>
                    <hr className="hr"></hr>
                    <div className="row mt-5">
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={websitedev} width={'6%'} alt="" />
                          &nbsp;Website Developers
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }} 
                        >
                         We Create websites that charms the right people at the right time in this competitive landscape.
                        </p>
                        <div className="readMore">
                          <a href="/hire-web-developers">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                      <div className="col-md-4 hoverEff ">
                        <h5 className="megamenu-text">
                          <img src={qadev} width={'6%'} alt="" />
                          &nbsp;Quality Analyst
                        </h5>
                        <p
                          style={{
                            opacity: 0.6000000238418579,
                            width: "80%",
                          }}
                        >
                        Our Testing services help you identify defects, optimize performance, and ensure a seamless user experience.
                        </p>
                        <div className="readMore">
                          <a href="/hire-quality-assurance-analyst">READ MORE &nbsp;</a>
                          <img alt="" src={arrowRight}></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact-us"
                  className="nav-link"
                  activeclassname="active"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link me-1 ${menuOpen ? "rotated" : ""}`}
                  activeclassname="active"
                  onClick={() => {
                    handleToggleClick();
                    setSmallViewOpen(!smallViewOpen);
                  }}
                >
                  <img
                    src={toggleGold}
                    alt="logo"
                    width={'30'}
                    className={`toggle-icon ${menuOpen ? "rotate" : ""}`}
                  />
                </Link>

                {smallViewOpen && (
                  <div className="small-view" onMouseLeave={handleMouseLeave}>
                    {
                      <ul>
                        <li>
                          <a href="/faqs">FAQ's</a>
                        </li>
                        <li>
                          <a href="/policies">Policies</a>
                        </li>
                        <li> <a href="/site-map">Sitemap</a></li>
                        <li>
                          <a href="/industries">Industries</a>
                        </li>
                        <li>
                          <a href="/our-portfolio">Portfolio</a>
                        </li>
                      </ul>
                    }
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-3 mobile">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid p-2">
            <a href="/" className="navbar-brand text-primary mr-0">
              <img width={'30%'} src={logo} alt="logo" className="navbar-logo" />
            </a>
            <div className="form-inline ml-auto">
              <div
                className={`btn btn-primary toggle-button ${
                  isOpen ? "active" : ""
                }`}
                onClick={ToggleSidebar}
              >
                <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></i>
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            {/* <h4 className="mb-0">Main Menu</h4> */}
            <div className="btn btn-primar" onClick={ToggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g opacity="0.7" clipPath="url(#clip0_8693_477)">
                  <path
                    d="M19.375 20.9998H19.0625C18.8691 20.856 18.6514 20.7379 18.4863 20.5647C15.7119 17.6617 12.9443 14.7525 10.1768 11.8427C10.1226 11.7857 10.0894 11.7076 10.0156 11.591C9.9209 11.7169 9.87842 11.7862 9.82422 11.8432C7.05615 14.7525 4.28809 17.6622 1.51367 20.5647C1.34814 20.7379 1.13086 20.856 0.9375 20.9993H0.625C0.310547 20.892 0.102539 20.6731 0 20.3428C0 20.2334 0 20.124 0 20.0145C0.136719 19.8116 0.249023 19.583 0.414062 19.4094C3.17871 16.496 5.94922 13.5899 8.72021 10.6832C8.77441 10.6267 8.84863 10.5913 8.91357 10.5461C8.91357 10.5142 8.91357 10.4819 8.91357 10.45C8.84863 10.4048 8.77441 10.3694 8.72021 10.3129C5.94922 7.40723 3.17871 4.50058 0.414062 1.58777C0.249512 1.41413 0.136719 1.18552 0 0.982603V0.654334C0.0952148 0.392335 0.227539 0.162187 0.493652 0.0589282C0.865234 -0.0854282 1.15967 0.0507086 1.42578 0.330688C4.22607 3.27587 7.0293 6.21796 9.83203 9.16109C9.88574 9.21708 9.94141 9.27102 10.0176 9.34757C10.0854 9.26589 10.1372 9.19551 10.1963 9.13283C12.9751 6.21334 15.7544 3.29436 18.5342 0.375896C18.6074 0.298837 18.6821 0.220237 18.7656 0.156536C19.1631 -0.145534 19.7114 0.00498713 19.9219 0.469907C19.9492 0.530527 19.9736 0.592687 19.9995 0.654334V0.982603C19.8628 1.18552 19.7505 1.41413 19.5854 1.58777C16.8208 4.5011 14.0503 7.40775 11.2793 10.3139C11.2251 10.3704 11.1509 10.4058 11.0396 10.4834C11.1597 10.5826 11.2256 10.6273 11.2798 10.6838C14.0503 13.5909 16.8213 16.4971 19.5854 19.4104C19.75 19.584 19.8628 19.8126 19.9995 20.0156V20.3438C19.897 20.6741 19.689 20.8925 19.3745 21.0004L19.375 20.9998Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8693_477">
                    <rect width="20" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a href="/" className="sd-link">
                  <i className="fa fa-home"> &nbsp;</i>Home
                </a>
              </li>
              <li>
                <a className="sd-link" onClick={toggleContent}>
                  <img src={vspleMobile} width={"16"} alt="" /> &nbsp;Vsple
                  &nbsp;
                  <i
                    className={`fa ${
                      isDragged ? "fa-angle-down" : "fa-angle-right"
                    }`}
                  ></i>
                </a>
                <div className={`sd-body2 ${isDragged ? "expanded" : ""}`}>
                  <ul>
                    <li>
                      <a href="/about-us" className="sd-link2">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/our-mission" className="sd-link2">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a href="/our-vision" className="sd-link2">
                        Our Vision
                      </a>
                    </li>
                    <li>
                      <a href="/what's-next" className="sd-link2">
                        {/* <img src={eye} width={12} alt="" /> &nbsp; */}
                        What’s Next
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="sd-link" onClick={toggleServiceContent}>
                  <img src={serviceMobile} width={"20"} alt="" /> &nbsp;Services
                  &nbsp;
                  <i
                    className={`fa ${
                      isDraggedService ? "fa-angle-down" : "fa-angle-right"
                    }`}
                  ></i>
                </a>
                <div
                  className={`sd-body2 ${isDraggedService ? "expanded" : ""}`}
                >
                  <ul>
                    <li>
                      <a href="/hire-mobile-application-developers" className="sd-link2">
                        <img src={mobiledev} width={12} alt="" /> &nbsp; Mobile App
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="/our-mission" className="sd-link2">
                        <img src={software} width={12} alt="" /> &nbsp; Software
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="/our-vision" className="sd-link2">
                        <img src={webdev} width={12} alt="" /> &nbsp; Website
                        Development
                      </a>
                    </li>
                    <li>
                      <a className="sd-link2">
                        <img src={devop } width={12} alt="" /> &nbsp; Game
                        Developnent
                      </a>
                    </li>
                    <li>
                      <a className="sd-link2">
                        <img src={staffAug} width={12} alt="" /> &nbsp; UI/UX
                        Development
                      </a>
                    </li>
                    <li>
                      <a className="sd-link2">
                        <img src={testing} width={12} alt="" /> &nbsp;
                        Quality Assurance
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="sd-link" onClick={toggleHireContent}>
                  <img src={talentMobile} width={"20"} alt="" /> &nbsp;Hire Top
                  Talents &nbsp;
                  <i
                    className={`fa ${
                      isDraggedHire ? "fa-angle-down" : "fa-angle-right"
                    }`}
                  ></i>
                </a>
                <div className={`sd-body2 ${isDraggedHire ? "expanded" : ""}`}>
                  <ul>
                    <li>
                      <a href="/hire-mobile-application-developers" className="sd-link2">
                        <img src={slogo} width={12} alt="" /> &nbsp; Mobile App
                        Development
                      </a>
                    </li>
                    <li>
                      <a href="/hire-wearable-application-developers" className="sd-link2">
                        <img src={mission} width={12} alt="" /> &nbsp; Wearable
                        App Development
                      </a>
                    </li>
                    <li>
                      <a href="/hire-software-developers" className="sd-link2">
                        <img src={eye} width={12} alt="" /> &nbsp; Software
                        Developers
                      </a>
                    </li>
                    <li>
                      <a href="/hire-web-developers" className="sd-link2">
                        <img src={interview} width={12} alt="" /> &nbsp; Website
                        Developers
                      </a>
                    </li>
                    <li>
                      <a href="/hire-quality-assurance-analyst" className="sd-link2">
                        <img src={certificate} width={12} alt="" /> &nbsp;
                        Quality Analyst
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/contact-us" className="sd-link">
                  <img src={contactMobile} width={"24"} alt="" /> &nbsp;Contact
                  Us
                </a>
              </li>
              {/* <hr /> */}
              <li>
                <a className="sd-link" onClick={toggleContentOthers}>
                  &nbsp; &nbsp; &nbsp; &nbsp; Others &nbsp;
                  <i
                    className={`fa ${
                      isDragged ? "fa-angle-down" : "fa-angle-right"
                    }`}
                  ></i>
                </a>
                <div
                  className={`sd-body2 ${isDraggedOthers ? "expanded" : ""} ms-5`}
                >
                  <ul>
                    <li>
                      <a href="/faqs" className="sd-link2">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/policy" className="sd-link2">
                        Policies
                      </a>
                    </li>
                    <li>
                      <a href="/sitemap" className="sd-link2">Sitemap</a>
                    </li>
                    <li>
                      <a href="/industries" className="sd-link2">Industries</a>
                    </li>
                    <li>
                      <a href="/our-portfolio" className="sd-link2">
                        Portfolio
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
