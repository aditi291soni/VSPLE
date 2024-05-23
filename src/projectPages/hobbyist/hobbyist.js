import React, { useEffect, useState, useRef } from "react";
import "./hobbyist.css";
import mainimg from "../../assest/web-icons/hobbyist/Group 1000005577.png";
import vector from "../../assest/web-icons/hobbyist/Mask group.png";
import desktop from "../../assest/main-icons/image 24843.png";
import tepmle from "../../assest/main-icons/Group 1000002047.png";
import plateforms from "../../assest/main-icons/Group 1000002006.png";
import social from "../../assest/main-icons/Group 1000002045.png";
import main2 from "../../assest/main-icons/Group 1000001983.png";
import website from "../../assest/web-icons/Group 1000005573.png";
import plateforms2 from "../../assest/web-icons/calvary/Group 1000002003.png";
import sad from "../../assest/main-icons/Component 1.png";
import happy from "../../assest/main-icons/Component 2.png";
import arrow from "../../assest/web-icons/Group 647 (1).png";
import Carousel from "react-bootstrap/Carousel";
// import rec from "../../assest/main-icons/Group 1439.png";
import study from "../../assest/main-icons/Group 1440.png";
import isolation from "../../assest/main-icons/Isolation_Mode.png";
import mobile from "../../assest/web-icons/hobbyist/Group 1000005219.png";
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
import breckworldViedio from "../../assest/ProjectViedios/hobbyst.mov";
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
const HobbyistComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className="hobbyistTop">
        <div className="row container">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="top-content">
              <img src={vector} width={"20%"} alt="" />
              <h2 className="my-3">Hobbyist</h2>
              <div className="d-flex">
                <img src={tepmle} width={"10%"} height={"10%"} alt="" />
                <div className="ms-2">
                  <span>Industry</span>
                  <p>Entertainment</p>
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
      <div className="section-2">
        <div className="row">
          <div className="col-md-12 col-lg-6 py-4 px-3">
            <h4>
              The Problem <img src={sad} width={"10%"} alt="" />
            </h4>
            <p>
              Before our Hobbyist Social Media app, hobby enthusiasts faced
              challenges such as a lack of specialized platforms for
              hobby-centric content sharing and difficulty finding like-minded
              users. Sharing hobby-related content on general social media
              platforms was often inconvenient, leading to privacy concerns and
              limited interactions around specific interests. Our app addresses
              these issues by offering a dedicated space with tailored features,
              enabling users to seamlessly connect, share, and engage with
              content related to their passions.
            </p>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p> */}
          </div>
          <div className="col-md-12 col-lg-6 py-4 px-3">
            <h4>
              The Solution <img src={happy} width={"10%"} alt="" />
            </h4>
            <p>
              With the Hobbyist Social Media app, users now have a specialized
              platform for seamless hobby-centric content sharing. The app
              addresses challenges by providing tailored features, including
              hobby-centric news feeds, enhanced privacy controls, and a
              dedicated following system. Users can easily connect with
              like-minded individuals, fostering a vibrant community centered
              around shared interests. The application offers a solution to the
              previous limitations, creating a more engaging and meaningful
              experience for hobby enthusiasts.
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
            <div className="col-md-3 col-sm-12 left-portfolio">
              <span>Introduction</span>
              <h4>Background</h4>
            </div>
            <div className="col-md-8 col-sm-12 text-left">
              <h4>Client</h4>
              <p>
                Hobbyist Social Media app — a dynamic platform where users can
                seamlessly share their passions through videos and images.
                Connect with like-minded individuals, follow inspiring users,
                and engage in vibrant discussions through comments. Manage your
                personalized profile, explore trending content, and enjoy a
                tailored news feed showcasing posts from your network. With a
                robust following system, direct messaging, and privacy controls,
                our app offers a secure and interactive space for hobbyists to
                build meaningful connections and share their interests
                effortlessly.
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
          </div>
        </div>
        <div className="Mobile-Section text-center container">
          <div className="row ex-5 justify-content-center">
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={one} width={"44px"} alt="" />
              <h5>Profile Management</h5>
              <p>
              User-friendly profile management allowing users to upload profile pictures, edit personal information, and manage account settings.
Content Upload
              </p>
            </div>
            <div className="col-md-12 col-lg-2"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={two} width={"44px"}alt="" />
              <h5>Notifications</h5>
              <p>
              Real-time notifications for activities such as new followers, comments, or likes, keeping users informed about interactions on their content.
              </p>
            </div>
            <div className="col-md-12 col-lg-1"></div>
          </div>
          <div className="row ex-5 justify-content-center">
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={three} width={"44px"}alt="" />
              <h5>Following/Followers System</h5>
              <p>
              A system that enables users to follow other users and gain followers, creating a network of connections based on shared interests.
              </p>
              <img
                className="portfolioImg mb-3"
                src={five}
                width={"44px"}
                alt=""
              />
              <h5>Responsive Design</h5>
              <p>
              A responsive design ensuring a seamless user experience across various devices and screen sizes.
              </p>
            </div>
            <div className="col-md-12 col-lg-6">
              {/* <img src={mobile} width={"100%"} alt="" /> */}
              <div className="my-3" style={{ height: '600px' }}>
                <video  muted autoPlay loop ref={videoRef} height={"100%"} style={{ borderRadius: '20px' }} >
                  <source
                    src={breckworldViedio}
                    type="video/webm"
                  />
                </video>
              </div>
            </div>
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={four} width={"44px"} alt="" />
              <h5 className="">Commenting Feature</h5>
              <p>
              A comment section for each post, allowing users to engage in discussions, share thoughts, and interact with content.

              </p>
              <img
                className="portfolioImg mb-3"
                src={six}
                width={"44px"}
                alt=""
              />
              <h5>News Feed</h5>
              <p>
              A personalized news feed showcasing posts from followed users, ensuring users see content relevant to their interests.
              </p>
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
                    Great Job! Vsple delivered the work as always with quality
                    and timely. Highly recommend and look forward to working on
                    more projects in the future.
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
                <a href="/calvary-app-development">Case Study</a>
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
              <div className="calvary-upper-section">
                <div className="text-end mb-4">
                  <img className="me-2" src={website} width={"20%"} alt="" />
                  <img src={appleLogo} width={"20%"} alt="" />
                  <img className="ms-2" src={storeLogo} width={"20%"} alt="" />
                </div>
                <img src={web} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Calavary Temple</span>
                <p>Complete Solution Development</p>
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

export default HobbyistComponent;
