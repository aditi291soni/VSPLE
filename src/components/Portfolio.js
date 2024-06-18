// import mainimg from "../assest/main-icons/Ellipse 375.png";
// import frame4 from "../assest/main-icons/Frame (4).png";
import rec from "../assest/main-icons/Group 1000005569 (1).png";
import web from "../assest/main-icons/Group 1000005570.png";
import chatie from "../assest/main-icons/Group 1000004879.png";
import new3 from "../assest/portfolio2.png";
import new4 from "../assest/portfolio1.png";

import unbounded from "../assest/main-icons/Group 1000004879 (1).png";
import salestrip from "../assest/main-icons/Group 1000004882 (1).png";
import hobbyist from "../assest/main-icons/Group 1000005569 (3).png";
import QRscape from "../assest/main-icons/Group 1000004879 (2).png";
import trade from "../assest/main-icons/Group 1000004879 (5).png";
import tnumber from "../assest/main-icons/Group 1000004879 (6).png";
import truda from "../assest/web-icons/Group 1000004879.png";
import tictac from "../assest/main-icons/Group 1000004879 (3).png";
import tradeTips from "../assest/main-icons/Group 1000004879 (4).png";
import breckworld from "../assest/main-icons/Group 1000005569 (2).png";
import appleLogo from "../assest/main-icons/Group 2197 (3).png";
import website from "../assest/web-icons/Group 1000005573.png";
import storeLogo from "../assest/main-icons/Group 2198 (1).png";
import arrow from "../assest/web-icons/Group 647 (1).png";
import React, { useState } from "react";
import "./portfolio.css";
import port from "../assest/web-icons/Group (2).png";
import phone from "../assest/main-icons/Group 2399.png";
import phone1 from "../assest/main-icons/Group 2401.png";
import cool from "../assest/main-icons/Group 2149.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const PortfolioComponent = () => {
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <>
      <div className="h-headers">
        <div className="p-head">
          <div className="row ">
            <div className="col-md-8 col-sm-12 col-lg-5 d-flex justify-content-start align-items-start">
              <div className="main-text-service w-75 mx-auto">
                <img className="mb-1" src={port} width={"5%"} alt="" />
                <br />
                <span className="portfolio">Portfolio</span>
                <h2>
                  <span className="innerText">We</span> Make Something Trendy
                  And Cool!
                </h2>
                <img className="mt-5" src={cool} width={"100%"} alt="" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-7 w-70 web-model">
              <div className="anime-containe"></div>
              <div className="anime-container">
                <div className="circle">
                  <img
                    className="new"
                    style={{ height: "73%" }}
                    src={phone}
                    alt=""
                  />
                  <img
                    className="new3"
                    style={{ height: "83%" }}
                    src={new3}
                    alt=""
                  />
                  <img
                    className="new4"
                    style={{ height: "83%" }}
                    src={new4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-content hidden text-center"
          style={{ margin: "5% " }}
        >
          <span>Portfolio</span>
          <h4 className="mb-4" style={{ lineHeight: "35px" }}>
            Explore the Pinnacle of <br /> Innovation with Vsple
          </h4>
          <p className="h-tab">
            Our portfolio is a testament to our commitment to excellence and the
            diverse range of solutions we've crafted for our clients.
            <br /> Immerse yourself in a collection of successful projects that
            showcase our expertise in transforming ideas into impactful IT
            solutions. <br /> Welcome to the vsple technologies Portfolio -
            Where Every Project is a Story of Innovation.
          </p>

          <Tabs defaultActiveKey={activeTab} onSelect={handleTabChange}>
            <Tab eventKey="all" title="">
              <div className="row mt-5">
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="chatie-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                      </div>
                      <img
                        className="mt-4"
                        src={chatie}
                        width={"100%"}
                        alt=""
                      />
                    </div>
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile App Development</p>
                      <a href="/chatie-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="calvary-upper-section">
                      <div className="text-end mb-4">
                        <img
                          className="me-2"
                          src={website}
                          width={"20%"}
                          alt=""
                        />
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={web} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Calvary Temple</span>
                      <p>Complete Solution Development</p>
                      <a href="/calvary-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="unbounded-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                      </div>
                      <img
                        className="mt-4"
                        src={unbounded}
                        width={"100%"}
                        alt=""
                      />
                    </div>
                    <div className="tab-text1">
                      <span>Unbounded</span>
                      <p>Mobile App Development</p>
                      <a href="/unbounded-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="salestrip-upper-section ">
                      <div className="text-end ">
                        <img src={appleLogo} width={"20%"} alt="" />
                        {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                      </div>
                      <img src={salestrip} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Salestrip CLM</span>
                      <p>Mobile App Development</p>
                      <a href="/salestrip-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="breckworld-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={breckworld} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>BreckWorld</span>
                      <p>Mobile App Development</p>
                      <a href="/breckworld-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="hobbyist-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                      </div>
                      <img src={hobbyist} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Hobbyist</span>
                      <p>Mobile App Development</p>
                      <a href="/hobbyist-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="QrScape-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                      </div>
                      <img src={QRscape} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>QRScape</span>
                      <p>Mobile App Development</p>
                      <a href="/qrscape-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="tictac-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={tictac} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>CrossO - Tic Tac Toe</span>
                      <p>Website Development</p>
                      <a href="/crosso-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="tradetips-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                      </div>
                      <img src={tradeTips} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>TradeTips</span>
                      <p>Mobile App Development</p>
                      <a href="/tradetips-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="truda-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                      </div>
                      <img src={truda} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Truda - Truth or Dare</span>
                      <p>Mobile App Development</p>
                      <a href="/truda-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="trade-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={trade} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>TradeMark Cockpit</span>
                      <p>Website Development</p>
                      <a href="/trademark-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="tnumber-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={tnumber} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1 mb-4">
                      <span>Tnumber Rewards</span>
                      <p>Mobile App Development</p>
                      <a href="/tnumber-app-development">
                        Case Study <img width={"10%"} src={arrow} alt="" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            {/* <Tab eventKey="Website" title="Website">
              <div className="row mt-5">
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Softwares" title="Softwares">
              <div className="row mt-5">
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="mobileApps" title="Mobile Apps">
              <div className="row mt-5">
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="text-end mb-4">
                      <img src={appleLogo} width={"20%"} alt="" />
                      <img
                        className="ms-2"
                        src={storeLogo}
                        width={"20%"}
                        alt=""
                      />
                    </div>
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="text-end mb-4">
                      <img src={appleLogo} width={"20%"} alt="" />
                      <img
                        className="ms-2"
                        src={storeLogo}
                        width={"20%"}
                        alt=""
                      />
                    </div>
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="text-end mb-4">
                      <img src={appleLogo} width={"20%"} alt="" />
                      <img
                        className="ms-2"
                        src={storeLogo}
                        width={"20%"}
                        alt=""
                      />
                    </div>
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="text-end mb-4">
                      <img src={appleLogo} width={"20%"} alt="" />
                      <img
                        className="ms-2"
                        src={storeLogo}
                        width={"20%"}
                        alt=""
                      />
                    </div>
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="text-end mb-4">
                      <img src={appleLogo} width={"20%"} alt="" />
                      <img
                        className="ms-2"
                        src={storeLogo}
                        width={"20%"}
                        alt=""
                      />
                    </div>
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="text-end mb-4">
                      <img src={appleLogo} width={"20%"} alt="" />
                      <img
                        className="ms-2"
                        src={storeLogo}
                        width={"20%"}
                        alt=""
                      />
                    </div>
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="ui/ux" title="UI/UX">
              <div className="row mt-5">
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={web} width={"100%"} className="mb-2" alt="" />
                    <div className="tab-text1 mt-4">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <img src={rec} width={"70%"} className="mb-2" alt="" />
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                     <a href="/calvary-app-development">
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab> */}
          </Tabs>
        </div>
      </div>
      {/* <div className="h-header container mobile-model">
        <div className="p-head">
          <div className="row ">
            <div className="col-md-12">
              <div className="main-text-service w-100">
                <span className="portfolio">Portfolio</span>
                <h2 className="my-2">
                  <span className="innerText">WE</span> Make Something Trendy
                  And Cool!
                </h2>
                <img className="mt-5" src={cool} width={"100%"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-content hidden container"
          style={{ marginTop: "10%" }}
        >
          <h4 className="mb-4" style={{ lineHeight: "35px" }}>
            Explore the Pinnacle of <br /> Innovation with Vsple
          </h4>
          <p className="h-tab">
            Our portfolio is a testament to our commitment to excellence and the
            diverse range of solutions we've crafted for our clients.
            <br /> Immerse yourself in a collection of successful projects that
            showcase our expertise in transforming ideas into impactful IT
            solutions. <br /> Welcome to the vsple technologies Portfolio -
            Where Every Project is a Story of Innovation.
          </p>

          <Tabs defaultActiveKey={activeTab} onSelect={handleTabChange}>
            <Tab eventKey="all" title="">
              <div className="row mt-5">
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="Chatie-upper-section">
                      <div className="text-end mb-5">
                        <img
                          className="ms-2"
                          src={appleLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={rec} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Chatie</span>
                      <p>Mobile & Web App Development</p>
                      <a href="/Chatie">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="calvary-upper-section">
                      <div className="text-end mb-4">
                        <img className="me-2" src={website} width={"20%"} alt="" />
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={web} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Calvary Temple</span>
                      <p>Complete Solution Development</p>
                      <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="unbounded-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                       
                      </div>
                      <img
                        className="mt-4"
                        src={unbounded}
                        width={"100%"}
                        alt=""
                      />
                    </div>
                    <div className="tab-text1">
                      <span>Unbounded</span>
                      <p>Mobile App Development</p>
                      <a href="/unbounded-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="salestrip-upper-section ">
                      <div className="text-end ">
                        <img src={appleLogo} width={"20%"} alt="" />
                      
                      </div>
                      <img src={salestrip} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Salestrip CLM</span>
                      <p>Mobile App Development</p>
                      <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="breckworld-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={breckworld} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>BreckWorld</span>
                      <p>Mobile App Development</p>
                      <a href="/breckworld-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="hobbyist-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                    
                      </div>
                      <img src={hobbyist} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Hobbyist</span>
                      <p>Mobile App Development</p>
                      <a href="/hobbyist-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="QrScape-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                   
                      </div>
                      <img src={QRscape} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>QRScape</span>
                      <p>Mobile App Development</p>
                      <a href="/qrscape-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="tictac-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={tictac} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>CrossO - Tictactoe</span>
                      <p>Website Development</p>
                      <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="tradetips-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                       
                      </div>
                      <img src={tradeTips} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>TradeTips</span>
                      <p>Mobile App Development</p>
                      <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /> </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="truda-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                       
                      </div>
                      <img src={truda} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Truda - Truth or Dare</span>
                      <p>Mobile App Development</p>
                      <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="trade-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={trade} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>TradeMark Cockpit</span>
                      <p>Website Development</p>
                      <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                  <div className="tab-cont">
                    <div className="tnumber-upper-section">
                      <div className="text-end mb-4">
                        <img src={appleLogo} width={"20%"} alt="" />
                        <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        />
                      </div>
                      <img src={tnumber} width={"100%"} alt="" />
                    </div>
                    <div className="tab-text1">
                      <span>Tnumber Rewards</span>
                      <p>Mobile App Development</p>
                      <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /> </a>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div> */}
    </>
  );
};

export default PortfolioComponent;
