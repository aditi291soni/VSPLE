import React, { useEffect, useState, useRef } from "react";
import "./unbounded.css";
import mainimg from "../../assest/main-icons/Group 1000005569.png";
import vector from "../../assest/main-icons/appstore-PhotoRoom 1.png";
import desktop from "../../assest/main-icons/Mask group (18).png";
import tepmle from "../../assest/main-icons/Group 1000002047.png";
import plateforms from "../../assest/main-icons/Group 1000002006.png";
import social from "../../assest/main-icons/Group 1000002045.png";
import plateforms2 from "../../assest/web-icons/calvary/Group 1000002003.png";
import main2 from "../../assest/main-icons/Group 1000001983.png";
import sad from "../../assest/main-icons/Component 1.png";
import happy from "../../assest/main-icons/Component 2.png";
import Carousel from "react-bootstrap/Carousel";
import rec from "../../assest/main-icons/Group 1439.png";
import study from "../../assest/main-icons/Group 1440.png";
import isolation from "../../assest/main-icons/Isolation_Mode.png";
import mobile from "../../assest/main-icons/Group 1000005219.png";
import unbounded from "../../assest/main-icons/Group 1000004879 (1).png";
import salestrip from "../../assest/main-icons/Group 1000004882 (1).png";
import appleLogo from "../../assest/main-icons/Group 2197 (3).png";
import website from "../../assest/web-icons/Group 1000005573.png";
import storeLogo from "../../assest/main-icons/Group 2198 (1).png";
import web from "../../assest/main-icons/Group 1000005570.png";
import arrow from "../../assest/web-icons/Group 647 (1).png";
import unboundedViedio from "../../assest/ProjectViedios/Unbounded.mp4";
import breckworld from "../../assest/main-icons/Group 1000005569 (2).png";
import hobbyist from "../../assest/main-icons/Group 1000005569 (3).png";
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
const UnboundedComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className="unboundedTop">
        <div className="row container">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="top-content">
              <img src={vector} width={"20%"} alt="" />
              <h2 className="my-2">Unbounded</h2>
              <div className="d-flex mb-3">
                <img src={tepmle} width={"10%"} height={"10%"} alt="" />
                <div className="ms-2">
                  <span>Industry</span>
                  <p>Non Profit Organization</p>
                </div>
              </div>
              {/* <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.calvarytemple"
              >
                <img src={playStoreIcon} width={"12%"} alt="" />
              </a> */}
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/calvary-temple-india/id1661280048   "
              >
                <img className="ms-2" src={appStoreIcon} width={"12%"} alt="" />
              </a>
              {/* <img src={social} width={"40%"} alt="" /> */}
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6">
            <img
              style={{ marginTop: "20%" }}
              src={mainimg}
              width={"100%"}
              alt=""
            />
          </div>
          {/* <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="big-c">
              <img className="circle-img" src={mainimg} width={"94%"} alt="" />
            </div>
          </div> */}
        </div>
        <div className="boxe">
          <div className="plateform-box text-center">
            <img src={plateforms} width={"30%"} alt="" />
            <h4>Plateforms</h4>
            <p>iOS</p>
          </div>
          <div className="plateform-box text-center ms-4">
            <img src={plateforms2} width={"30%"} alt="" />
            <h4>Tools & Tech Stack</h4>
            <p>Swift, SwiftUI, etc.</p>
          </div>
        </div>
      </div>
      <div className="section-2 container">
        <div className="row mx-5">
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Problem <img src={sad} width={"10%"} alt="" />
            </h4>
            <p>
              In a fast-paced world, finding moments of peace and tranquility is
              a challenge. Our client recognized the need for a sophisticated
              meditation tool that goes beyond basic timers. They sought a
              solution that not only facilitated meditation but also fostered a
              sense of community among users, encouraging a consistent and
              fulfilling meditation practice.
            </p>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p> */}
          </div>
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Solution <img src={happy} width={"10%"} alt="" />
            </h4>
            <p>
              Unbounded is a groundbreaking meditation timer application
              designed to address the challenges of modern mindfulness. It
              offers a seamless blend of functionality and community engagement
              to create a holistic meditation experience.
            </p>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p> */}
          </div>
        </div>
        <div className="mt-5">
          <div className="row introduction">
            <div className="col-md-12 col-lg-3 col-sm-12 left-portfolio">
              <span>Introduction</span>
              <h4>Background</h4>
            </div>
            <div className="col-md-12 col-lg-8 col-sm-12 text-left">
              <h4>Client</h4>
              <p>
                Unbounded is not just a timer; it's a comprehensive meditation
                companion. Developed using cutting-edge technologies like
                SwiftUI and WatchOS, it brings meditation into the digital age
                with a focus on user experience and connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <img src={isolation} width={"6%"} className="mb-1" alt="" />
            <br />
            <span>Mobile App</span>
            <h5>Plateform Features</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="Mobile-Section text-center container">
          <div className="row my-5">
            <div className="col-md-12 col-lg-2"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={one} width={"44px"}alt="" />
              <h5> Timer</h5>
              <p>
                Users can set their preferred meditation duration, allowing for
                a customized and flexible practice.
              </p>
            </div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={two} width={"44px"} alt="" />
              <h5> Interval Bells</h5>
              <p>
                Configure interval bells to ring at specified moments during
                meditation, providing gentle guidance and enhancing mindfulness.
              </p>
            </div>
            <div className="col-md-12 col-lg-2"></div>
          </div>
          <div className="row my-5">
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={three} width={"44px"} alt="" />
              <h5>Ambient Sounds</h5>
              <p>
                Select from a curated collection of soothing ambient sounds to
                create a serene meditation environment.
              </p>
              <img
                className="portfolioImg mb-3"
                src={four}
                width={"44px"}
                alt=""
              />
              <h5>Meditation Stats</h5>
              <p>
                Keep track of meditation sessions, including date, duration, and
                any personalized settings. Understand your progress and
                celebrate your journey.
              </p>
            </div>
            <div className="col-md-12 col-lg-6">

            <div style={{ height: '600px' }} className="my-4">

                <video muted autoPlay loop ref={videoRef} height={"100%"} style={{ borderRadius: '20px' }} >
                  <source
                    src={unboundedViedio}
                    type="video/webm"
                  />
                </video>
              </div>
              {/* <img src={mobile} width={"100%"} alt="" /> */}
            </div>
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={five} width={"44px"}alt="" />
              <h5 className="">Reminders</h5>
              <p>
                Set reminders to establish a consistent meditation routine,
                ensuring that moments of mindfulness are seamlessly integrated
                into daily life.
              </p>
              <img
                className="portfolioImg mb-3"
                src={six}
                width={"44px"}
                alt=""
              />
              <h5>Customization</h5>
              <p>
                Personalize your meditation experience by choosing from a
                variety of ambient sounds, allowing for a tailored and immersive
                session.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <div className="side-section">
              <img src={desktop} width={"100%"} alt="" />
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="sec-4-content">
              <span>Apple Watch</span>
              <h4>Elevate Mindfulness Anytime</h4>
              <p>
                Seamlessly Control Your Meditation Practice with Apple Watch
                Integration
              </p>
              <p>
                Unbounded goes beyond being just a mobile app; it becomes a
                wearable companion on your wrist through seamless integration
                with the Apple Watch. This integration offers users the
                convenience and flexibility to manage their meditation sessions
                in a more accessible and immediate manner.
              </p>
              <ul>
                <li>
                  Control the Timer: With Apple Watch Integration, users can
                  initiate, pause, and stop their meditation timer directly from
                  their Apple Watch. This feature eliminates the need to reach
                  for their iPhone, providing a hands-free and effortless
                  control experience.
                </li>
                <li>
                  Meditate Directly from Your Wrist: The integration enables
                  users to start their meditation sessions directly from the
                  Apple Watch. Whether you're at home, in the office, or on the
                  go, your meditation practice is just a tap away on your wrist,
                  promoting a truly portable and versatile experience.
                </li>
                <li>
                  Watch Connectivity: The term "Watch Connectivity" refers to
                  the seamless communication and interaction between the
                  Unbounded Meditation Timer App on the iPhone and the Apple
                  Watch. This ensures that the two devices work harmoniously,
                  exchanging information in real time and providing a
                  synchronized experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="testimonial-calvary web-model">
          <h4>Client Testimonial</h4>
          <div className="single-testimonial container">
            <div className="single-testi">
              <div className="single-t my-5">
                <div className="single-testimial-box">
                  <p className="text-light">
                    Vivek and the team's work on our project was great. They
                    provided high-quality results, demonstrating exceptional
                    professionalism and expertise. Vivek was incredibly
                    responsive, ensuring our queries were promptly addressed,
                    and he adjusted to feedback effortlessly. I deeply
                    appreciate the meticulous attention to detail and commitment
                    to deliver timely, quality output.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch my-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Want To Get The IT Puzzle Solved?
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
      {/* <div className="container">
        <div className="testimonial-calvary">
          <h4>Client Testimonial</h4>
        </div>
      </div> */}
      <div className="success-stories container mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <span>Success Stories</span>
            <h4>From Problem to Progress</h4>
          </div>
          <div className="col-md-12 col-lg-6 d-flex align-items-end justify-content-end">
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
              <div className="hobbyist-upper-section">
                <div className="text-end mb-4">
                  <img src={appleLogo} width={"20%"} alt="" />
                  <img className="ms-2" src={storeLogo} width={"20%"} alt="" />
                </div>
                <img src={hobbyist} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Hobbyist</span>
                <p>Mobile App Development</p>
                <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
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
                <a href="/calvary-app-development">
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
                  <img className="ms-2" src={storeLogo} width={"20%"} alt="" />
                </div>
                <img src={breckworld} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>BreckWorld</span>
                <p>Mobile App Development</p>
                <a href="/calvary-app-development">Case Study <img width={'10%'} src={arrow} alt='' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnboundedComponent;
