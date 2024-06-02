import React, { useEffect, useState, useRef } from "react";
import "./chatie.css";
import mainimg from "../../assest/main-icons/Group 1000005569 (4).png";
import vector from "../../assest/web-icons/chatie/Group 1000004566.png";
import desktop from "../../assest/main-icons/image 24843.png";
import tepmle from "../../assest/web-icons/chatie/Group 1000005574.png";
import plateforms from "../../assest/main-icons/Group 1000002006.png";
import social from "../../assest/main-icons/Group 1000002045.png";
import main2 from "../../assest/main-icons/Group 1000001983.png";
import sad from "../../assest/main-icons/Component 1.png";
import happy from "../../assest/main-icons/Component 2.png";
import Carousel from "react-bootstrap/Carousel";
import plateforms2 from "../../assest/web-icons/calvary/Group 1000002003.png";
// import rec from "../../assest/main-icons/Group 1439.png";
import study from "../../assest/main-icons/Group 1440.png";
import isolation from "../../assest/main-icons/Isolation_Mode.png";
import mobile from "../../assest/web-icons/chatie/Group 1000005219.png";
import rec from "../../assest/main-icons/Group 1000005569 (1).png";
import web from "../../assest/main-icons/Group 1000005570.png";
import unbounded from "../../assest/main-icons/Group 1000004879 (1).png";
import salestrip from "../../assest/main-icons/Group 1000004882 (1).png";
import hobbyist from "../../assest/main-icons/Group 1000005569 (3).png";
import QRscape from "../../assest/main-icons/Group 1000004879 (2).png";
import tictac from "../../assest/main-icons/Group 1000004879 (3).png";
import tradeTips from "../../assest/main-icons/Group 1000004879 (4).png";
import breckworld from "../../assest/main-icons/Group 1000005569 (2).png";
import appleLogo from "../../assest/main-icons/Group 2197 (3).png";
import storeLogo from "../../assest/main-icons/Group 2198 (1).png";
import chattieViedio from "../../assest/ProjectViedios/ChatieVideo.mp4";
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
const ChatieComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className="chatieTop">
        <div className="row container">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="top-content">
              <img src={vector} width={"20%"} alt="" />
              <h2 className="my-3">Chatie</h2>
              <div className="d-flex mb-3">
                <img src={tepmle} width={"10%"} height={"10%"} alt="" />
                <div className="ms-2">
                  <span>Industry</span>
                  <p>Entertainment</p>
                </div>
              </div>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/chatie-ai-friend-fun-coach/id6449620310?platform=iphone"
              >
                <img className="" src={appStoreIcon} width={"12%"} alt="" />
              </a>
              {/* <img src={social} width={"40%"} alt="" /> */}
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center aling-items-center">
            <img
              style={{ marginTop: "15%" , marginRight:'2%' }}
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
        <div className="row ">
          <div className="col-md-12 col-lg-6 p-lg-5">
            <h4>
              The Problem <img src={sad} width={"10%"} alt="" />
            </h4>
            <p>
              In a fast-paced and often hectic world, people often find
              themselves in need of companionship, motivation, and support. The
              challenge was to create an innovative solution that not only
              addressed these needs but also delivered an engaging and
              interactive experience. Our client envisioned an app that would
              serve as an intelligent virtual friend and a personal coach,
              providing users with entertainment, motivation, and a sense of
              connection in a convenient and accessible manner.
            </p>
          </div>
          <div className="col-md-12 col-lg-6 p-lg-5">
            <h4>
              The Solution <img src={happy} width={"10%"} alt="" />
            </h4>
            <p>
              Introducing Chatie - AI Friend, Fun Coach. Our team at Vsple
              Technologies Pvt. Ltd. took on the challenge and developed a
              cutting-edge solution that has since garnered positive user
              feedback. Chatie is not just an app; it's a companion designed to
              deliver an interactive and entertaining experience. Leveraging our
              expertise in SwiftUI and Swift, we crafted a platform that goes
              beyond the conventional, offering users a unique blend of
              entertainment and utility.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="row introduction">
            <div className="col-md-3 col-sm-12 left-portfolio">
              <span>Introduction</span>
              <h4>Background</h4>
            </div>
            <div className="col-md-8 col-sm-12 text-left">
              <h4>Client</h4>
              <p>
                Chatie has become a beacon of joy for users seeking a virtual
                friend and a personal coach. The app has gained traction for its
                ability to deliver not only entertainment but also motivation
                and support. As part of the development team, we contributed to
                strengthening our iOS development skills and collaborated within
                a dynamic team to create an app that has a positive impact on
                users' lives.
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
            <h5>Platform Features</h5>
            <p>
              Chatie offers a seamless subscription module through in-app purchases, providing users with access to premium features and an enhanced experience.
            </p>
          </div>
        </div>
        <div className="Mobile-Section text-center container">
          <div className="row my-5">
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={one} width={"50px"} alt="" />

              <h5 className="">Text-Based Chat <br /> Suggestions</h5>
              <p>
                To make conversations even more effortless, Chatie provides text-based chat suggestions. Users can choose from pre-generated suggestions, reducing the need to type and facilitating a smoother interaction.
              </p>
            </div>
            <div className="col-md-12 col-lg-2"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={two} width={"50px"} alt="" />

              <h5>Text-to-Speech <br />Functionality</h5>
              <p>
                For those who prefer to listen rather than read, Chatie incorporates a text-to-speech feature. Users can easily have messages spoken aloud, enhancing accessibility and user experience.

              </p>
            </div>
            <div className="col-md-12 col-lg-1"></div>
          </div>
          <div className="row my-5">
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={three} width={"50px"} alt="" />
              <h5>Intelligent ChatBot <br /> Interaction</h5>
              <p>
                Users can engage with Chatie through default ChatBot talk, adding an element of spontaneity to conversations. The app also features a search option for more personalized interactions.
              </p>
              <img

                className=" portfolioImg mb-3"
                src={five}
                width={"50px"}
                alt=""
              />
              <h5>Customizable Chatbots <br /> with Avatars</h5>
              <p>
                Chatie allows users to personalize their experience by creating their own chatbot complete with avatars. Users have the flexibility to manage their chatbots, editing, removing, and customizing them as desired.
              </p>
            </div>
            <div className="col-md-12 col-lg-6">
              {/* <img src={mobile} width={"100%"} alt="" /> */}
              <div className="my-4" style={{ height: '700px' }}>

                <video muted autoPlay loop ref={videoRef} height={"100%"} style={{ borderRadius: '20px' }} >
                  <source
                    src={chattieViedio}
                    type="video/webm"
                  />
                </video>
              </div>

            </div>
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={four} width={"50px"} alt="" />
              <h5>Subscription Module by <br /> In-App Purchase</h5>
              <p>
                Chatie offers a seamless subscription module through in-app purchases, providing users with access to premium features and an enhanced experience.
              </p>
              <img
                className="portfolioImg mb-3"
                src={six}
                width={"50px"}
                alt=""
              />

              <h5>Customizable App <br /> Themes</h5>
              <p>
                From backend we have the flexibility to change the app's color theme and background, allowing for a personalized and visually appealing experience as per occasion and treding festivals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="testimonial-calvary">
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
      </div>
      <div className="success-stories container mt-5">
        <span>Success Stories</span>
        <h4>From Problem to Progress</h4>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
            <div className="tab-cont">
              <div className="salestrip-upper-section ">
                <div className="text-end ">
                  <img src={appleLogo} width={"20%"} alt="" />
                  <img className="ms-2" src={storeLogo} width={"20%"} alt="" />
                </div>
                <img src={salestrip} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Salestrip Clm</span>
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
        </div>
      </div>
    </div>
  );
};

export default ChatieComponent;
