import React, { useEffect, useState, useRef } from "react";
import "./truda.css";
import mainimg from "../../assest/web-icons/truda/Group 1000005584.png";
import vector from "../../assest/web-icons/truda/Group 58 4.png";
import desktop from "../../assest/main-icons/image 24843.png";
import tepmle from "../../assest/main-icons/Group 1000002047.png";
import plateforms from "../../assest/main-icons/Group 1000002006.png";
import plateforms2 from "../../assest/web-icons/calvary/Group 1000002003.png";
import social from "../../assest/main-icons/Group 1000002045.png";
import main2 from "../../assest/main-icons/Group 1000001983.png";
import sad from "../../assest/main-icons/Component 1.png";
import happy from "../../assest/main-icons/Component 2.png";
import breckworldViedio from "../../assest/ProjectViedios/truda.mp4";
import Carousel from "react-bootstrap/Carousel";
import rec from "../../assest/main-icons/Group 1000005569 (1).png";
import study from "../../assest/main-icons/Group 1440.png";
import isolation from "../../assest/web-icons/calvary/Group 1000001961.png";
import mobile from "../../assest/web-icons/truda/Group 1000005221.png";
import mask from "../../assest/main-icons/Mask group (1).png";
import unbounded from "../../assest/main-icons/Group 1000004879 (1).png";
import salestrip from "../../assest/main-icons/Group 1000004882 (1).png";
import hobbyist from "../../assest/main-icons/Group 1000005569 (3).png";
import QRscape from "../../assest/main-icons/Group 1000004879 (2).png";
import trade from "../../assest/main-icons/Group 1000004879 (5).png";
import tnumber from "../../assest/main-icons/Group 1000004879 (6).png";
import truda from "../../assest/web-icons/Group 1000004879.png";
import tictac from "../../assest/main-icons/Group 1000004879 (3).png";
import tradeTips from "../../assest/main-icons/Group 1000004879 (4).png";
import breckworld from "../../assest/main-icons/Group 1000005569 (2).png";
import appleLogo from "../../assest/main-icons/Group 2197 (3).png";
import website from "../../assest/web-icons/Group 1000005573.png";
import storeLogo from "../../assest/main-icons/Group 2198 (1).png";
import web from "../../assest/main-icons/Group 1000005570.png";
import arrow from "../../assest/web-icons/Group 647 (1).png";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  playStoreIcon,
  webStoreIcon,
  appStoreIcon,
  webIcon,
} from "../../common/images";

const TrudaComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className="trudaTop">
        <div className="row container">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="top-content">
              <img src={vector} width={"20%"} alt="" />
              <h2 className="my-3">Truda - Truth or Dare</h2>
              <div className="d-flex">
                <img src={tepmle} width={"10%"} height={"10%"} alt="" />
                <div className="ms-2">
                  <span>Industry</span>
                  <p>Entertaintment</p>
                </div>
              </div>
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/calvary-temple-india/id1661280048" rel="noreferrer"
              >
                <img className="ms-2" src={appStoreIcon} width={"12%"} alt="" />
              </a>
              {/* <img src={social} width={"40%"} alt="" /> */}
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center aling-items-center">
            <img
              style={{ marginTop: "16%" }}
              src={mainimg}
              width={"90%"}
              alt=""
            />
          </div>
          {/* <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="big-c">
              <img className="circle-img" src={mainimg} width={"94%"} alt="" />
            </div>
          </div> */}
        </div>
        <div className="boxe mt-5">
          <div className="plateform-box text-center">
            <img src={plateforms} width={"30%"} alt="" />
            <h4>Plateforms</h4>
            <p>iOS</p>
          </div>
          <div className="plateform-box text-center ms-4">
            <img src={plateforms2} width={"30%"} alt="" />
            <h4>Tools & Tech Stack</h4>
            <p>Swift, UIkit, etc.</p>
          </div>
        </div>
      </div>
      <div className="section-2 ">
        <div className="row">
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Problem <img src={sad} width={"10%"} alt="" />
            </h4>
            <p>
            Users faced limitations in adapting the game to different group sizes and experienced monotony in challenges. Manual user management, task repetition, and a lack of visual engagement were common issues. The app resolves these challenges by providing dynamic user management, personalized tasks, an attractive UI with spinning bottle animation, and real-time score tracking, offering a more engaging and versatile Truth and Dare experience.
            </p>
          </div>
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Solution <img src={happy} width={"10%"} alt="" />
            </h4>
            <p>
            With the Truth and Dare app, users now enjoy dynamic group flexibility, easily adding or removing participants at any point. The app introduces a variety of personalized tasks, eliminating monotony, and provides an engaging visual experience with a spinning bottle animation and an attractive UI. The game's real-time score tracking, social sharing options, and accessibility features address challenges, creating a more enjoyable, interactive, and adaptable Truth and Dare experience for users.
            </p>

            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p> */}
          </div>
        </div>
        <div className="mt-5 container">
          <div className="row introduction">
            <div className="col-md-3 col-sm-12 left-portfolio">
              <span>Introduction</span>
              <h4>Background</h4>
            </div>
            <div className="col-md-8 col-sm-12 text-left">
              <h4>Client</h4>
              <p>
              The Truth and Dare app boasts dynamic user management, enabling users to add or remove participants at runtime. With an engaging UI, users experience an attractive spinning bottle animation and personalized task completion challenges. Customizable truth and dare tasks, real-time score tracking, and the option for social sharing enhance the interactive and competitive aspects of the game. The app's adaptability, offline mode, and accessibility features contribute to a versatile and inclusive gaming experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <img src={isolation} width={"3%"} className="mb-1" alt="" />
            <br />
            <span>Mobile App</span>
            <h5>Platform Features</h5>
            {/* <p>
              Lorem ipsum
            </p> */}
          </div>
        </div>
        <div className="Mobile-Section text-center container">
          <div className="row  justify-content-center">
            <div className="col-md-12 col-lg-2"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={one} width={"44px"} alt="" />
              <h5>Dynamic User Management</h5>
              <p>
                Users can add and remove participants dynamically, allowing
                flexibility in the number of players involved in the game.
              </p>
            </div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={two}width={"44px"} alt="" />
              <h5>Task Completion Mechanism</h5>
              <p>
                Integration of a task completion mechanism where users perform
                truth or dare tasks when the bottle points to them during the
                spinning round
              </p>
            </div>
            <div className="col-md-12 col-lg-2"></div>
          </div>
          <div className="row ex-5 justify-content-center">
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={three}width={"44px"}alt="" />
              <h5>Attractive UI/UX</h5>
              <p>
                An engaging and visually appealing user interface that enhances
                the overall gaming experience.
              </p>
              <img
                className="mb-3"
                style={{ marginTop: "40%" }}
                src={five}
                width={"44px"}
                alt=""
              />
              <h5>Runtime User Addition/Removal</h5>
              <p>
                Users have the ability to add or remove participants during the
                game, providing adaptability to changing group sizes or
                preferences.
              </p>
            </div>
            <div className="col-md-12 col-lg-5">
            <div className="my-4" style={{ height: '600px' }}>

              <video muted autoPlay loop ref={videoRef} height={"100%"} style={{ borderRadius: '20px' }} >
                <source
                  src={breckworldViedio}
                  type="video/webm"
                />
              </video>
            </div>
            {/* <img src={mobile} width={"100%"} alt="" /> */}
          </div>
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={four} width={"44px"}alt="" />
              <h5 className="">Bottle Spinning Animation</h5>
              <p>
                A visually appealing animation for the spinning bottle, adding a
                dynamic and fun element to the game.
              </p>
              <img
                className="mb-3"
                style={{ marginTop: "40%" }}
                src={six}
                width={"44px"}
                alt=""
              />
              <h5>Task Customization</h5>
              <p>
                Users can customize truth and dare tasks, adding a personal
                touch to the challenges presented during the game
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="testimonial-calvary web-model">
          <h4>Client Testimonial</h4>
          <div className="single-testimonial container">
            <div className="single-testi">
              <div className="single-t my-5">
                <div className="single-testimial-box">
                  <p className="text-light">
                    -As the virus emerged, we accelerated work on our policies
                    and programs. We know that caring for the well-being of our
                    employees includes helping with child care issues,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
            Want to get the IT Puzzle solved?
              <br />
              <span className="inner-join">
                Let’s connect to see how VSPLE can resolve your Dilemma.
              </span>
            </p>
          </div>
          <div className="col-md-0 col-lg-4">
            <div className="getin-button-in  -model">
              <div className="see-button">
                <a href="/contact-us">Get In Touch &nbsp;</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <circle cx="18.5" cy="18.5" r="18" stroke="#FAE29E" />
                  <path
                    d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                    fill="#FAE29E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="success-stories container mt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-6">
            <span>Success Stories</span>
            <h4>From Problem to Progress</h4>
          </div>
          <div className="col-md-6 col-lg-6 col-6 d-flex align-items-end justify-content-end">
            <div className="see-button me-5 mt-4">
              <a href="/our-portfolio">View More &nbsp;</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 37 37"
                fill="none"
              >
                <circle cx="18.5" cy="18.5" r="18" stroke="#FAE29E" />
                <path
                  d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                  fill="#FAE29E"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
            <div className="tab-cont">
              <div className="chatie-upper-section">
                <div className="text-end mb-5">
                  {/* <img src={appleLogo} width={"20%"} alt="" /> */}
                  <img className="ms-2" src={appleLogo} width={"20%"} alt="" />
                </div>
                <img src={rec} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Chattie</span>
                <p>Mobile & Web App Development</p>
                <a href="/chatie-app-development">
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
                <img className="mt-4" src={unbounded} width={"100%"} alt="" />
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
                <img className="mt-4"  src={salestrip} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Salestrip CLM</span>
                <p>Mobile App Development</p>
                <a href="/calvary-app-development">
                  Case Study <img width={"10%"} src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrudaComponent;
