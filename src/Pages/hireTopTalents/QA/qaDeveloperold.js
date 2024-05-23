import React, { useState, useEffect } from "react";
// import "./mobileAppDev.css";
import frame4 from "../../../assest/main-icons/Frame (4).png";
import qaMain from "../../../assest/main-icons/Group 1000005037.png";
import appleLogo from "../../../assest/main-icons/Group 1127.png";
import mobileApp from "../../../assest/main-icons/Mask group (2).png";
import frame1 from "../../../assest/main-icons/Frame (13).png";
import techWeUse from "../../../assest/web-icons/hireqadev/Group 1000005589.png";
import FAQ from "../../../components/Faq";
import frame5 from "../../../assest/main-icons/Frame (5).png";
// import phone1 from "../../../assest/main-icons/Group 2401.png";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import ooredo from "../../../assest/main-icons/Ooredoo logo white@3x  1 (2).png";
import calvaryLogo from "../../../assest/main-icons/Group 1000004560.png";
import tradeTips from "../../../assest/main-icons/Group 1000004561.png";
import unbound from "../../../assest/main-icons/Group 1000004579 (1).png";
import chatie from "../../../assest/main-icons/Group 1000004566.png";
import tnumber from "../../../assest/main-icons/white@3x 1.png";
import jupieter from "../../../assest/main-icons/LOGO PNG@3x 1.png";
import tools from "../../../assest/main-icons/Group 1000005038.png";
import manualtesting from "../../../assest/main-icons/Group (3).png";
import mobileapptesting from "../../../assest/main-icons/Vector (2).png";
import performancetesting from "../../../assest/main-icons/Group 1000002419.png";
import qaconsultant from "../../../assest/main-icons/Vector (3).png";
import regulatoryconsultant from "../../../assest/main-icons/Vector (4).png";
import shortlist from "../../../assest/main-icons/Vector (5).png";
import interview from "../../../assest/main-icons/Group (4).png";
import developer from "../../../assest/main-icons/Frame (15).png";
import requirment from "../../../assest/main-icons/Frame (16).png";
import { render } from "react-dom";
// import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const QaDeveloperComponen = () => {
  // const [scaleIndex, setScaleIndex] = useState(1);
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
        // scrub: true
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
  const [faqs, setFaqs] = useState([
    {
      question: "What is the role of a Quality Analyst in software development?",
      answer:
        "Quality Analysts play a pivotal role in ensuring the reliability and functionality of software by thoroughly testing and identifying any issues or bugs before the product reaches the end-user.",
      open: true,
    },
    {
      question: "How does Vsple Technologies ensure the quality of its software products?",
      answer: "At Vsple Technologies, our Quality Analysts employ industry-leading testing methodologies, including automated testing and comprehensive manual testing, to guarantee the highest standards of software quality and performance.",
      open: false,
    },
    {
      question:
        "What qualifications and skills do your Quality Analysts possess?",
      answer: "Our Quality Analysts at Vsple Technologies are highly qualified professionals with a strong background in software testing, possessing a combination of technical expertise, analytical skills, and a commitment to delivering flawless software.",
      open: false,
    },
    {
      question:
        "Can you explain the significance of automated testing in the QA process?",
      answer: "Automated testing expedites the testing process, increases test coverage, and enhances the accuracy of results. At Vsple Technologies, we leverage cutting-edge automated testing tools to streamline QA processes and ensure efficiency.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies address security testing for software applications?",
      answer: "Security is a top priority for us. Our Quality Analysts conduct thorough security testing to identify and address vulnerabilities, safeguarding your software applications against potential threats and ensuring data integrity.",
      open: false,
    },
    {
      question:
        "What is the typical workflow of a Quality Analyst at Vsple Technologies?",
      answer: "Our Quality Analysts follow a meticulous workflow that includes requirements analysis, test planning, test execution, defect tracking, and reporting. This ensures a systematic and comprehensive approach to software quality assurance.",
      open: false,
    },
    {
      question:
        "How do you stay updated on the latest QA methodologies and technologies?",
      answer: "Continuous learning is ingrained in our culture. Our Quality Analysts regularly participate in training programs, attend industry conferences, and stay informed about the latest advancements in QA methodologies and technologies.",
      open: false,
    },
    {
      question:
        "Can I hire Quality Analysts from Vsple Technologies for a specific project or on a long-term basis?",
      answer: "This many!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "Absolutely! Whether you need QA experts for a short-term project or long-term collaboration, we offer flexible hiring models to meet your unique requirements. Contact us to discuss your project and find the right QA solutions for your needs.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  // useEffect(() => {
  //   const sliderBox = document.querySelector(".slider-box");
  //   if (sliderBox) {
  //     const rect = sliderBox.getBoundingClientRect();
  //     const position = {
  //       top: rect.top + window.scrollY,
  //       left: rect.left + window.scrollX,
  //       bottom: rect.bottom + window.scrollY,
  //       right: rect.right + window.scrollX,
  //       width: rect.width,
  //       height: rect.height,
  //     };

  //     console.log("Position of .slider-box:", position);
  //   } else {
  //     console.error(".slider-box element not found.");
  //   }
  //   const slideElements = document.querySelectorAll(".slide-trackT .slideT");

  //   const targetPosition = {
  //     bottom: 1429.4792251586914,
  //     height: 396.66668701171875,
  //     left: 148.23785400390625,
  //     right: 648.2378845214844,
  //     top: 1032.8125381469727,
  //     width: 500.0000305175781,
  //   };

  //   slideElements.forEach((element, index) => {
  //     const rect = element.getBoundingClientRect();
  //     const position = {
  //       top: rect.top + window.scrollY,
  //       left: rect.left + window.scrollX,
  //       bottom: rect.bottom + window.scrollY,
  //       right: rect.right + window.scrollX,
  //       width: rect.width,
  //       height: rect.height,
  //     };

  //     const isMatch =
  //       position.bottom > targetPosition.bottom &&
  //       position.height === targetPosition.height &&
  //       position.left < targetPosition.left
  //        &&
  //       position.right > targetPosition.right;

  //     if (isMatch) {
  //       console.log(`Slide ${index + 1} matches the target position.`);
  //     }
  //   });
  //   const scaleNextElement = () => {
  //     if (scaleIndex < 6) {
  //       const elementToScale = slideElements[scaleIndex];

  //       const scaleFactor = 2;
  //       elementToScale.style.transform = `scale(${scaleFactor})`;
  //       elementToScale.style.transition = "2s";
  //       elementToScale.style.animationPlayState = "paused";

  //       setTimeout(() => {
  //         elementToScale.style.animationPlayState = "play";
  //         elementToScale.style.transform = "scale(1.5)";
  //         setScaleIndex(scaleIndex + 1);
  //       }, 3000);
  //     }
  //   };

  //   scaleNextElement();
  // }, [scaleIndex]);
  return (
    <>
      <div className="h-header web">
        <div className="p-head mobileApp container">
          <div className="row" style={{ height: "inherit" }}>
            <div
              className="col-md-6 col-sm-12 col-lg-6 p-0 "
              style={{ height: "inherit" }}
            >
              <img
                src={qaMain}
                alt=""
                width={"100%"}
                style={{ height: "100%" }}
              />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 p-0 d-flex justify-content-start align-items-center">
              <div className="main-text-service">
                {/* <img src={frame4} width={"6%"} className="mb-1" alt="" />
                <br /> */}
                <span className="title">Ensuring Excellence</span>
                <h2 className="">Hire Vsple's Top Quality Analysts</h2>
                <p>
                  Precision in Every Pixel, Perfection in Every Process. At
                  Vsple Technologies Pvt. Ltd., our quality analysts uphold the
                  highest standards, ensuring flawlessness in digital solutions.
                  Explore top-tier talent dedicated to meticulous testing and
                  quality assurance. Welcome to Vsple - Where Diligence Meets
                  Digital Perfection.
                </p>
              <div className="getin-button text-center mt-5">
                <div className="see-button">
                  <a>Let's Talk &nbsp;</a>
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
        {/* <div className="hire-developer container mt-5">
          <div className="p-journey">
            <br />
            <h5>Hire vsple Developers</h5>
            <p>
              Unlock your potential with exclusive access to career
              opportunities
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="lang-con-b">
                <div className="flicker-content row">
                  <div className="col-md-3">
                    <div className="rouded-content-b"></div>
                    <img src={appleLogo} width={"50%"} alt="" />
                  </div>
                  <div className="col-md-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "1.8vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "1vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-md-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vmax"
                      height="3vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="lang-con-b">
                <div className="flicker-content row">
                  <div className="col-md-3">
                    <div className="rouded-content-b"></div>
                    <img src={appleLogo} width={"50%"} alt="" />
                  </div>
                  <div className="col-md-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "1.8vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "1vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-md-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vmax"
                      height="3vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="lang-con-b">
                <div className="flicker-content row">
                  <div className="col-md-3">
                    <div className="rouded-content-b"></div>
                    <img src={appleLogo} width={"50%"} alt="" />
                  </div>
                  <div className="col-md-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "1.8vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "1vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-md-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vmax"
                      height="3vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="lang-con-b">
                <div className="flicker-content row">
                  <div className="col-md-3">
                    <div className="rouded-content-b"></div>
                    <img src={appleLogo} width={"50%"} alt="" />
                  </div>
                  <div className="col-md-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "1.8vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "1vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-md-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vmax"
                      height="3vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="lang-con-b">
                <div className="flicker-content row">
                  <div className="col-md-3">
                    <div className="rouded-content-b"></div>
                    <img src={appleLogo} width={"50%"} alt="" />
                  </div>
                  <div className="col-md-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "1.8vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "1vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-md-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vmax"
                      height="3vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="lang-con-b">
                <div className="flicker-content row">
                  <div className="col-md-3">
                    <div className="rouded-content-b"></div>
                    <img src={appleLogo} width={"50%"} alt="" />
                  </div>
                  <div className="col-md-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "1.8vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "1vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-md-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vmax"
                      height="3vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="tec-slider container" style={{ marginTop: "10%" }}>
          <div className=" sliderT container-fluid">
            <div className="slider-box-t">
              <h2 className="text-light" style={{ fontSize: "2.7vmax" }}>
                Lorem Ipsum is <br /> simply dummy text <br /> of the printing
              </h2>
              <p className="text-light">
                Unlock your potential with exclusive access to career
                opportunities
              </p>
              <div className="inner-content-button d-flex justify-content-center align-items-center">
                <span>Get Started &nbsp;</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vmax"
                  height="2vmax"
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
            <div className="slide-trackT">
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"65%"} alt="" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br /> */}
            <span>Services</span>
            <h5>
              Robust & Reliable Software Testing Assurance with Certified QA
              <br /> Engineers
            </h5>
          </div>
        </div>
        <div className="main-boxes hidden container">
          <div className="row">
            <div className="b">
              <img className="my-4" src={manualtesting} width={"15%"} alt="" />
              <h5>Manual Qa Testing</h5>
              <p>
                Before we start writing a single line of code, we take the time
                to understand your vision and business goals. We work closely
                with you to grasp the unique challenges you're facing and the
                outcomes you want to achieve.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={manualtesting} width={"15%"} alt="" />
              <h5>Automation Testing</h5>
              <p>
                Before we start writing a single line of code, we take the time
                to understand your vision and business goals. We work closely
                with you to grasp the unique challenges you're facing and the
                outcomes you want to achieve.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={mobileapptesting} width={"15%"} alt="" />
              <h5>Mobile App Testing</h5>
              <p>
                Before we start writing a single line of code, we take the time
                to understand your vision and business goals. We work closely
                with you to grasp the unique challenges you're facing and the
                outcomes you want to achieve.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={performancetesting} width={"15%"} alt="" />
              <h5>Performance Testing </h5>
              <p>
                Before we start writing a single line of code, we take the time
                to understand your vision and business goals. We work closely
                with you to grasp the unique challenges you're facing and the
                outcomes you want to achieve.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={qaconsultant} width={"15%"} alt="" />
              <h5>Qa Consultants</h5>
              <p>
                Before we start writing a single line of code, we take the time
                to understand your vision and business goals. We work closely
                with you to grasp the unique challenges you're facing and the
                outcomes you want to achieve.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={regulatoryconsultant} width={"15%"} alt="" />
              <h5>Regulatory Compliance</h5>
              <p>
                Before we start writing a single line of code, we take the time
                to understand your vision and business goals. We work closely
                with you to grasp the unique challenges you're facing and the
                outcomes you want to achieve.
              </p>
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br /> */}
            <span>Benefits</span>
            <h5>
              How To Hire Top Remote Quality <br /> Analyst Through Vsple?
            </h5>
            <p>
              Explore our other related services to enhance the <br />{" "}
              performance of your digital product.
            </p>
          </div>
        </div>
        <div className="main-boxes-w hidden container">
          <div className="row">
            <div className="b">
              <img className="my-4" src={requirment} width={"25%"} alt="" />
              <h5>Tell Us Your Requirements</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={shortlist} width={"25%"} alt="" />
              <h5>We Shortlist The Best Talents</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={interview} width={"25%"} alt="" />
              <h5>Take Their Interview</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={developer} width={"25%"} alt="" />
              <h5>Hire The Developers</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="h-click">
          <div className="inner-content container d-flex ">
            <div className="me-auto">
              <span>
                Schedule A Call With Our Team <br /> Right Now
              </span>
            </div>
            <div className="inner-content-btn d-flex justify-content-center align-items-center">
              <span>Hire Us Now &nbsp;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vmax"
                height="2vmax"
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
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <span>Expertise</span>
            <h5>Our Working Tools</h5>
          </div>
        </div>
        <div className="header container mt-5">
          <img id="h5" src={tools} width={"100%"} alt="" />
        </div>
        <div className="tec-we-use">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="contents">
                <span>Technologies</span>
                <h3>Tech Stack we use</h3>
                <p>
                  Creating exceptional mobile applications requires a precise
                  blend of technology, innovation, and expertise. At Vsple, we
                  take immense pride in our mobile app development prowess,
                  driven by a carefully chosen tech stack that empowers us to
                  craft high-quality, user-friendly, and feature-rich mobile
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="text-center">
                <img src={techWeUse} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br /> */}
            <span>Trusted Us</span>
            <h5>Businesses Who Trusted Us</h5>
            <p>
            We're committed to delivering tailored solutions and exceptional service to each and every client, helping them achieve their goals and thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="slider-div hidden">
          <div className="sliderS-wearable container-fluid">
            <div className="slide-trackN-wearable">
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={ooredo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={calvaryLogo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tradeTips} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={chatie} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tnumber} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={jupieter} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={unbound} width={"90%"} alt="" />
                </div>
              </div>
              {/* <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={sf} width={"100%"} alt="" />
              </div>
            </div> */}
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={ooredo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={calvaryLogo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tradeTips} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={chatie} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tnumber} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={jupieter} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={unbound} width={"90%"} alt="" />
                </div>
              </div>
              {/* <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={sf} width={"100%"} alt="" />
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <div className="faqs my-5 hidden">
          <h5 className="text-center  abc">FAQ'S</h5>
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        {/* <div className="h-click">
          <div className="inner-content container d-flex ">
            <div className="me-auto">
              <span>
                Are you looking to hire remote <br /> Dvelopers For Your
                Project?{" "}
              </span>
            </div>
            <div className="inner-content-btn d-flex justify-content-center align-items-center">
              <span>Click Here &nbsp;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vmax"
                height="2vmax"
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
        </div> */}
        {/* <div className="mt-5 d-flex justify-content-center text-center">
          <div className="p-jour mb-5">
            <h5>
              How To Hire Top Remote <br />
              Developers Through <br /> Vsple?
            </h5>
            <p>
              Explore our other related services to enhance the <br />{" "}
              performance of your digital product.
            </p>
          </div>
        </div>
        <div className="container box-mobile d-flex">
          <div className="box-1">
            <img className="mb-3" src={frame1} width={"18%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="box-1">
            <img className="mb-3" src={frame1} width={"18%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="box-1">
            <img className="mb-3" src={frame1} width={"18%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="box-1">
            <img className="mb-3" src={frame1} width={"18%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div> */}
      </div>
      <div className="h-header mobile">
        <div className="p-head container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 p-0">
              <img src={qaMain} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 p-0 d-flex justify-content-start align-items-center">
              <div className="main-text-service mt-4">
                {/* <img src={frame4} width={"6%"} className="mb-1" alt="" />
                <br /> */}
                <span className="title">Business Consultation</span>
                <h2 className="">
                  Hire Top testing For Expert quality analyst
                </h2>
                <p>
                  When you hire iOS developers from Vsple, you get a reliable
                  team member who delivers quality work. After working with more
                  than 7,000 clients worldwide, we realized what it meant to
                  have the right people in your team
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hire-developer container mt-4">
          <div className="p-journey">
            <br />
            <h5>Hire vsple Developers</h5>
            <p>
              Unlock your potential with exclusive access to career
              opportunities
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="lang-con-b p-4">
                <div className="flicker-content row">
                  <div className="col-3">
                    {/* <div className="rouded-content-b"></div> */}
                    <img src={appleLogo} width={"100%"} alt="" />
                  </div>
                  <div className="col-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "2.5vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "2vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4vmax"
                      height="4vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="lang-con-b p-4">
                <div className="flicker-content row">
                  <div className="col-3">
                    {/* <div className="rouded-content-b"></div> */}
                    <img src={appleLogo} width={"100%"} alt="" />
                  </div>
                  <div className="col-6 ms-4">
                    <h5
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "2.5vmax",
                        textAlign: "start",
                      }}
                    >
                      Hire React Native Developer
                    </h5>
                    <p
                      style={{
                        color: "white",
                        opacity: ".7",
                        fontSize: "2vmax",
                        textAlign: "start",
                      }}
                    >
                      Our team of talented Android app developers specializes
                      in...
                    </p>
                  </div>
                  <div className="flicker-text col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4vmax"
                      height="4vmax"
                      viewBox="0 0 37 37"
                      fill="none"
                    >
                      <circle cx="18.5" cy="18.5" r="18" stroke="#504F4D" />
                      <path
                        d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tec-slider container" style={{ marginTop: "10%" }}>
          <div className=" sliderT container-fluid">
            {/* <div className="slider-box"></div> */}
            <div className="slider-box-t">
              <h2 className="text-light" style={{ fontSize: "3.5vmax" }}>
                Lorem Ipsum is <br /> simply dummy text <br /> of the printing
              </h2>
              <p className="text-ligh">
                Unlock your potential with exclusive access to career <br />
                opportunities
              </p>
              <div className="inner-content-button d-flex justify-content-center align-items-center">
                <span>Get Started &nbsp;</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.5vmax"
                  height="3.5vmax"
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
            <div className="slide-trackT">
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
              <div className="slideT">
                <img src={mobileApp} width={"100%"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="faqs mb-5 hidden">
          <h5 className="text-center  abc">FAQ'S</h5>
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div className="h-click">
          <div className="inner-content container ">
            <div className="text-start mb-3">
              <span>
                Are you looking to hire remote <br /> Dvelopers For Your
                Project?{" "}
              </span>
            </div>
            <div className="inner-content-button d-flex justify-content-center align-items-center">
              <span>Click Here &nbsp;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.5vmax"
                height="3.5vmax"
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
        <div className="mt-5 d-flex justify-content-center text-center">
          <div className="p-jour mb-5">
            <h5>
              How To Hire Top Remote <br />
              Developers Through <br /> Vsple?
            </h5>
            <p>
              Explore our other related services to enhance the <br />{" "}
              performance of your digital product.
            </p>
          </div>
        </div>
        <div className="container box-mobile d-fle">
          <div className="box-1">
            <img className="mb-3" src={frame1} width={"15%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="box-1 mt-4">
            <img className="mb-3" src={frame1} width={"15%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="box-1 mt-4">
            <img className="mb-3" src={frame1} width={"15%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="box-1 mt-4">
            <img className="mb-3" src={frame1} width={"15%"} alt="" />
            <br />
            <span>
              Tell Us Your <br /> Requirements
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QaDeveloperComponen;
