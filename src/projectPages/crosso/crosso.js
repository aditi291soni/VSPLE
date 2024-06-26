import React, { useEffect, useState, useRef } from "react";
import "./crosso.css";
import mainimg from "../../assest/web-icons/crosso/Group 1000005585.png";
import vector from "../../assest/web-icons/crosso/Group 137.png";
import desktop from "../../assest/main-icons/image 24843.png";
import tepmle from "../../assest/main-icons/Group 1000002047.png";
import plateforms from "../../assest/main-icons/Group 1000002006.png";
import plateforms2 from "../../assest/web-icons/calvary/Group 1000002003.png";
import social from "../../assest/main-icons/Group 1000002045.png";
import main2 from "../../assest/main-icons/Group 1000001983.png";
import sad from "../../assest/main-icons/Component 1.png";
import happy from "../../assest/main-icons/Component 2.png";
import breckworldViedio from "../../assest/ProjectViedios/crosso.MOV";
import Carousel from "react-bootstrap/Carousel";
import rec from "../../assest/main-icons/Group 1000005569 (1).png";
import study from "../../assest/main-icons/Group 1440.png";
import isolation from "../../assest/web-icons/calvary/Group 1000001961.png";
import mobile from "../../assest/web-icons/crosso/Group 1000005219.png";
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
const CrossoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className="crossoTop">
        <div className="row container">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="top-content">
              <img src={vector} width={"30%"} alt="" />
              <h2 className="my-2">Crosso Tictactoe</h2>
              <div className="d-flex mb-3">
                <img src={tepmle} width={"10%"} height={"10%"} alt="" />
                <div className="ms-2">
                  <span>Industry</span>
                  <p>Entertaintment</p>
                </div>
              </div>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.calvarytemple"
              >
                <img src={playStoreIcon} width={"12%"} alt="" />
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/calvary-temple-india/id1661280048   "
              >
                <a target="_blank" href="https://www.calvarytemple.in/"></a>
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
        <div className="boxe">
          <div className="plateform-box text-center">
            <img src={plateforms} width={"30%"} alt="" />
            <h4>Plateforms</h4>
            <p>iOS, Android</p>
          </div>
          <div className="plateform-box text-center ms-4">
            <img src={plateforms2} width={"30%"} alt="" />
            <h4>Tools & Tech Stack</h4>
            <p>Flutter, etc.</p>
          </div>
        </div>
      </div>
      <div className="section-2 container">
        <div className="row">
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Problem <img src={sad} width={"10%"} alt="" />
            </h4>
            <p>
              Users faced challenges like limited personalization due to the
              absence of avatar selection. The gameplay lacked excitement
              without winning sound effects, and users couldn't track victories
              with a player-winning count, reducing the sense of achievement.
              The introduction of the app addressed these issues, offering a
              more engaging experience with customizable avatars, winning
              excitement, and a player-winning count, making the Tic-Tac-Toe
              game on mobile more dynamic and enjoyable for users.
            </p>
          </div>
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Solution <img src={happy} width={"10%"} alt="" />
            </h4>
            <p>
              The "Cross O" Tic-Tac-Toe app effectively resolved user challenges
              by introducing avatar selection for enhanced personalization,
              winning sound effects for exciting victories, and a player-winning
              count to track achievements. These features not only addressed the
              previous limitations but also made the gameplay more dynamic,
              engaging, and competitive. With these additions, the app provides
              a thoroughly enriched and enjoyable Tic-Tac-Toe experience on
              mobile devices.
            </p>
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
                The "Cross O" app is a tic-tac-toe game that goes beyond the
                traditional gameplay, offering a customized and engaging
                experience. With a visually enhanced custom advanced view, users
                can select unique avatars and play against each other. The game
                includes a winning sound effect, adding an extra layer of
                excitement upon victory. This app provides a modern and
                personalized take on the classic tic-tac-toe, making it a fun
                and interactive gaming experience for users.
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
            <p>
              Calvary Temple India stands as a mega-church and the world's
              second-largest rapidly expanding religious congregation. Its
              mobile applications cater to both Apple and Android users,
              boasting an array of features carefully designed to ensure market
              readiness and maximum utility for its intended audience.
            </p>
          </div>
        </div>
        <div className="Mobile-Section text-center container">
          <div className="row my-5 justify-content-center">
            <div className="col-md-12 col-lg-2"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={one} width={"44px"} alt="" />
              <h5>Custom Advanced View</h5>
              <p>
                Users have the ability to contribute financially through the
                app, allowing for donations of any amount.
              </p>
            </div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={two} width={"44px"} alt="" />
              <h5>Grow Spiritual Life</h5>
              <p>
                The app provides a visually enhanced and customizable game
                interface, likely with unique design elements and layout.
              </p>
            </div>
            <div className="col-md-12 col-lg-2"></div>
          </div>
          <div className="row my-5 justify-content-center">
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={three} width={"44px"} alt="" />
              <h5>Two-User Selection</h5>
              <p>
                Users can choose to play against another human player, promoting
                interactive gameplay and competition.
              </p>
              <img
                className="mb-3"
                style={{ marginTop: "40%" }}
                src={five}
                width={"44px"}
                alt=""
              />
              <h5>Avatar Selection</h5>
              <p>
                The ability for each player to select a personalized avatar adds
                a fun and customizable element to the gaming experience.
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
              <img className="mb-3" src={four} width={"44px"} alt="" />
              <h5 className="">Winning Sound</h5>
              <p>
                The inclusion of a winning sound effect enhances user
                engagement, providing audio feedback upon successful completion
                of the game.
              </p>
              <img
                className="mb-3"
                style={{ marginTop: "40%" }}
                src={six}
                width={"44px"}
                alt=""
              />
              <h5>4x4 Grid Extended Complexity</h5>
              <p>
                The 4x4 grid introduces additional complexity and strategic
                depth to the game compared to the classic 3x3 version. With more
                cells to consider, players have a broader range of moves and
                potential winning combinations, requiring a higher level of
                strategic thinking
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div className="testimonial-calvary web-model">
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
        </div> */}
      </div>
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
        </div>
      </div>
    </div>
  );
};

export default CrossoComponent;
