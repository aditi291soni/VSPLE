import React, { useEffect, useState, useRef } from "react";
import "./breckworld.css";
import mainimg from "../../assest/web-icons/breckworld/Group 1000005575.png";
import vector from "../../assest/web-icons/breckworld/image 24880 1.png";
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
import mobile from "../../assest/web-icons/breckworld/Group 1000005219.png";
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
import breckworldViedio from "../../assest/ProjectViedios/breckworld.mp4";
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
const BreckworldComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className="breckworldTop">
        <div className="row container">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="top-content">
              <img src={vector} width={"20%"} alt="" />
              <h2 className="my-3">BreckWorld</h2>
              <div className="d-flex mb-3">
                <img src={tepmle} width={"10%"} height={"10%"} alt="" />
                <div className="ms-2">
                  <span>Industry</span>
                  <p>Lifestyle</p>
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
              className="qa-anime"
              style={{ marginTop: "18%" }}
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
            <p>iOS, Android</p>
          </div>
          <div className="plateform-box text-center ms-4">
            <img src={plateforms2} width={"30%"} alt="" />
            <h4>Tools & Tech Stack</h4>
            <p>Swift, Kotlin, etc.</p>
          </div>
        </div>
      </div>
      <div className="section-2 container">
        <div className="row mx-5">
          <div className="col-md-12 col-lg-6 p-5">
            <h4>
              The Problem <img src={sad} width={"10%"} alt="" />
            </h4>
            <p>
              Travelers faced difficulties in accessing comprehensive and
              engaging information about attractions, towns, and activities in
              Breckland. Planning a day out or a holiday in an unfamiliar area
              was challenging,Traditional tourism information did not provide an
              engaging and interactive experience for users, Some tourists might
              have been hesitant to explore the High Streets and local
              attractions, resulting in missed opportunities for businesses.
            </p>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p> */}
          </div>
          <div className="col-md-12 col-lg-6 p-5">
            <h4>
              The Solution <img src={happy} width={"10%"} alt="" />
            </h4>
            <p>
              The BreckWorld app addresses challenges in traditional tourism by
              providing immersive 360° videos and augmented reality experiences
              to enhance exploration in Breckland. It solves issues of limited
              information and difficulties in planning activities, offering an
              engaging and interactive platform. The app incentivizes
              exploration with a virtual treasure hunt, unlocking discounts and
              special offers to encourage spending in local shops. By showcasing
              hidden gems and promoting local deals, BreckWorld contributes to a
              more enjoyable and cost-effective tourism experience while
              boosting awareness and marketing for Breckland.
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
                BreckWorld is a world-first tourism app and is absolutely free!
                It includes ultra-high-definition 360° videos, virtual reality
                exploration, and an augmented reality treasure hunt to help you
                uncover some of Norfolk’s hidden gems.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <div className="Mobile-Section text-center container">
          <div className="row my-5">
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-4">

              <img className="mb-3" src={one} width={"44px"} alt="" />
              <h5> Exploration and Discovery</h5>
              <p>
                The app allows users to explore Breckland, a district in the
                heart of Norfolk, through ultra-high-definition 360° videos,
                virtual reality (VR) exploration, and an augmented reality (AR)
                treasure hunt.
              </p>
            </div>
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={two} width={"44px"} alt="" />
              <h5> Immersive 360° Videos</h5>
              <p>
                Users can experience immersive 360° videos showcasing various
                towns, attractions, free activities, and places to eat in
                Breckland. This feature helps users make informed decisions
                about their visits and holidays.
              </p>
            </div>
            <div className="col-md-12 col-lg-1"></div>
          </div>
          <div className="row my-5 justify-content-center">
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={three} width={"44px"} alt="" />
              <h5>
                Augmented Reality <br /> Treasure Hunt
              </h5>
              <p>
                Engage in a virtual treasure hunt using augmented reality.
                Discover and collect 100 virtual stars hidden across Breckland.
                For every 10 stars collected, users can unlock special discount
                offers, potentially saving up to 50% at popular attractions.
              </p>
              <img
                className="portfolioImg mb-3"
                src={five}
                width={"44px"}
                alt=""
              />
              <h5>AR Mode for High Street Exploration:</h5>
              <p>
                The app features an augmented reality mode for exploring High
                Streets in Breckland. Users can find virtual rewards and special
                deals for local shops by keeping an eye out in AR mode.
              </p>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="my-4" style={{ height: '700px' }}>

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
              <h5 className="">
                Free Rewards <br /> and Discounts
              </h5>
              <p>
                Users have the opportunity to discover free rewards hidden
                around each of Breckland's five High Streets. Additionally,
                discounts to BreckWorld attractions can be unlocked by
                collecting virtual stars during the treasure hunt.
              </p>
              <img
                className="portfolioImg mb-3"
                src={six}
                width={"44px"}
                alt=""
              />
              <h5>
                {" "}
                Savings and Special <br /> Offers
              </h5>
              <p>
                The app provides a platform for users to unlock savings and
                special offers at selected attractions and local shops, creating
                an interactive and rewarding experience.
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
                    Honestly, whoever sees this, you will be seriously lucky to
                    work with Vivek and his team at Vsple. I've never worked
                    with a project manager and team so absolutely dedicated to
                    completing the job. They are equally proficient with iOS as
                    they are with Android and have built two delicious apps to
                    the exact specifications created by our app designers. Vivek
                    and his team will also help with suggestions if they feel
                    there is a more efficient way to achieve the same or better
                    results. They have gone above and beyond what we expected
                    and have experienced with other freelancers - these happy
                    surprises happened on many occasions throughout the project.
                    I'm used to working evenings/nights with our head developer
                    (that's UK time) and Vivek (+3.5 hours ahead) would often
                    appear in chats, asking or answering questions, or sending
                    over links for us to check newly completed tasks. His
                    dedication is incredible and you will be lucky if you get
                    the opportunity to work with him and his team. I am
                    professionally in love with Vivek and the team and will 100%
                    work with them again on the next phases of our development.
                    I highly, highly recommend that you work with Vivek but
                    please don't book him for too long because I need him back
                    in the coming months! Big love to Vivek and the team. We
                    couldn't have done it without you guys!
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
                <img className="mt-4" src={salestrip} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Salestrip Clm</span>
                <p>Mobile App Development</p>
                <a href="/calvary-app-development">Case Study<img width={"10%"} src={arrow} alt="" /></a>
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

export default BreckworldComponent;
