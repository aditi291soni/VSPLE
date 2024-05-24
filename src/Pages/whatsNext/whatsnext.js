import React, { useEffect, useState, useRef } from "react";
// import "./whatsnext.css";
import "../../style/whatsnext.css";
import mainimg from "../../assest/gifs/ai2.gif";
import frame4 from "../../assest/main-icons/Frame (4).png";
import frame5 from "../../assest/main-icons/Frame (5).png";
import ai from "../../assest/gifs/ai.gif";
import m from "../../assest/main-icons/image 24868.png";
import vrcam from "../../assest/main-icons/Group 1000004827.png";
import augmentedReality from "../../assest/main-icons/whatsNext/AR.png";
import virtualReality from "../../assest/main-icons/whatsNext/Group 1000004826.png";
import cyberSecurity from "../../assest/main-icons/whatsNext/Group 1000004821.png";
import iot from "../../assest/main-icons/whatsNext/Group 1000004828.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Card = ({ imgSrc, title, description }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="gameBox">
      <img src={imgSrc} width="100%" alt="" />
      <h5>{title}</h5>
      <p className={showMore ? "show" : ""}>{description}</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};
const WhatsnextComponent = () => {
  const number = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  useEffect(() => {
    gsap.to("#h1", {
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 50,
      scale: 3,
      opacity: 0,
    });
    // Section 1 H2
    gsap.from("#h5", {
      scrollTrigger: {
        trigger: "#h5",
        start: "top bottom",
        end: "top 400px",
        // start: "top",
        // end: 'bottom',
        scrub: 1,
        // toggleActions: "play complete none reset"
      },
      xPercent: -100,
      opacity: 0,
    });
    // Execution heading
    gsap.from("#h3", {
      scrollTrigger: {
        trigger: "#h3",
        start: "top bottom+=100px",
        toggleActions: "play complete none reset",
      },
      xPercent: 100,
      opacity: 0.5,
      duration: 1,
    });
    // Custom trigger
    // ScrollTrigger.create({
    //   trigger: "#h3",
    //   start: "top bottom+=-200px", // 200px after the top passes the bottom of the viewport
    //   endTrigger: '#section2',
    //   end: "bottom top",
    //   onUpdate: (self) => {
    //     const progress = Math.max(2, Math.ceil(self.progress * 100)); //No lower than 2.
    //     number.current.innerHTML = progress;
    //   },
    // });

    ScrollTrigger.refresh();
  }, []);
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://grwapi.net/widget.min.js";
  //   script.type = "text/javascript";
  //   script.async = true;
  //   script.addEventListener("load", () => {
  //     console.log("Widget script has loaded.");
  //   });
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://widget.clutch.co/static/js/widget.js";
  //   script.type = "text/javascript";
  //   script.async = true;

  //   script.addEventListener("load", () => {
  //     console.log("Widget script has loaded.");
  //   });

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <div style={{ marginTop: "0%" }}>
      <div className="p-head container">
        <div className="row">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <img src={frame4} width={"6%"} className="mb-1" alt="" />
              <br />
              <span>WHAT'S NEXT</span>
              <h2 className="">
                Explore the Future <br /> with Vsple
              </h2>
              <p>
                Welcome to the future of technology innovation and solutions at
                Vsple Technologies Pvt. Ltd. Our mission is to push the
                boundaries of what's possible and to create tomorrow's digital
                landscape today. In this dynamic world of IT, we constantly
                adapt and innovate to keep our clients ahead of the curve.
                Discover the exciting journey that awaits you as we redefine the
                possibilities of technology. At Vsple, our vision is to be the
                driving force behind digital transformation. We envision a world
                where technology isn't just a tool but a strategic advantage. We
                strive to be the catalyst for change and progress in a rapidly
                evolving digital environment.
              </p>
            </div>
          </div>
          <div className="AI col-md-6 col-sm-12 col-lg-6 ">
            <img src={ai} width={"100%"} alt="" />
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br />
          <span>WHAT SETS US APART?</span>
          <h5>Transforming Tomorrow</h5>
          <p>
            At Vsple technologies Pvt. Ltd., we're constantly asking, 'What's
            Next? The future at Vsple Technologies Pvt. Ltd. is about
            innovation, transformation, and staying ahead of the curve. We're
            committed to delivering technology solutions that drive your
            success. At Vsple, we are your trusted partner in the digital age,
            and we're excited to bring you the technology of tomorrow.
          </p>
        </div>
      </div>
      <div className="container cam-sec">
        <img src={m} width={"100%"} alt="" />
        <div className="vr-cam">
          <img id="h5" src={vrcam} width={"80%"} alt="" />
        </div>
      </div>
      <div className="w-100 mt-5 ">
        <div className="container">
          <div className="row">
            <div className=" col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center align-items-start mt-4">
              <div className="main-text-service container">
                <br />
                <span>Artificial Intelligence</span>
                <h2 className="">
                  AI: Shaping Tomorrow, <br />
                  Today
                </h2>
                <p>
                  At Vsple Technologies, we believe in the transformative power
                  of AI. Artificial Intelligence is no longer a vision of the
                  future; it's here, and it's changing the way businesses
                  operate. We are committed to being at the forefront of this AI
                  revolution and helping our clients leverage its potential.
                </p>
                <p>
                  The age of Artificial Intelligence is upon us, and the
                  possibilities are endless. With Vsple Technologies by your
                  side, you can navigate this exciting journey with confidence.
                  Get in touch with us to explore the incredible world of AI and
                  unlock new opportunities for your business.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-end align-items-start ">
              <img src={mainimg} width={"100%"} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container  my-5">
        <div className="gameparent  mx-auto">
          <div className="gameBox p-5">
            <div className="text-center">
              <img src={augmentedReality} width={"60%"} alt="" />
            </div>
            <h5>Augmented Reality</h5>
            <p>
              The world of Augmented Reality is expanding, and we're at the
              forefront of this revolution. Vsple Technologies is working on AR
              applications that will enhance your business operations, from
              interactive product demonstrations to immersive training
              experiences.
            </p>
          </div>
          <div className="gameBox p-5">
            <div className="text-center">
              <img src={virtualReality} width={"70%"} alt="" />
            </div>
            <h5>Virtual Reality</h5>
            <p>
              Virtual Reality is poised to reshape industries, from gaming and
              entertainment to training and simulations. Vsple Technologies is
              investing in VR solutions that will immerse users in entirely new,
              digital worlds, offering endless possibilities for your business.
            </p>
          </div>
        </div>
        <div className="gameparent mx-auto">
          <div className="gameBox p-5">
            <div className="text-center">
              <img src={cyberSecurity} width={"70%"} alt="" />
            </div>
            <h5>Cyber Security</h5>
            <p>
              In today's digital age, the importance of cybersecurity cannot be
              overstated. Vsple Technologies is committed to providing
              state-of-the-art cybersecurity solutions, safeguarding your
              digital assets and data against ever-evolving threats.
            </p>
          </div>
          <div className="gameBox p-5">
            <div className="text-center">
              <img src={iot} width={"90%"} alt="" />
            </div>
            <h5>Internet Of Things iOT</h5>
            <p>
              The Internet of Things is redefining connectivity and automation.
              We are developing IoT solutions that will enable you to control
              and monitor devices remotely, paving the way for more efficient,
              data-driven decision-making.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-9 col-lg-9 col-12">
            <p style={{ textAlign: "left" }}>
              Contact us to discuss how these upcoming innovations can benefit
              your business.
              <br />
              <span className="inner-join">
                We look forward to working with you on these exciting ventures.
              </span>
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-12">
            <div className="getin-button-in text-center">
              <div className="see-button">
                <a href="/contact-us">Click here &nbsp;</a>
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
    </div>
  );
};
export default WhatsnextComponent;
