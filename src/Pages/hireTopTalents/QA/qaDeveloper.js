import React, { useState, useEffect } from "react";
import FAQ from "../../../components/Faq";
import frame5 from "../../../assest/web-icons/Group 1000005565.png";
import watch from "../../../assest/web-icons/hireqadev/Group 1000005267.png";
import ooredo from "../../../assest/main-icons/Ooredoo logo white@3x  1 (2).png";
import calvaryLogo from "../../../assest/main-icons/Group 1000004560.png";
import tradeTips from "../../../assest/main-icons/Group 1000004561.png";
import unbound from "../../../assest/main-icons/Group 1000004579 (1).png";
import chatie from "../../../assest/main-icons/Group 1000004566.png";
import tnumber from "../../../assest/main-icons/white@3x 1.png";
import jupieter from "../../../assest/main-icons/LOGO PNG@3x 1.png";
import appleLogo from "../../../assest/main-icons/Group 1410.png";
import ccc1 from "../../../assest/gifs/05Quality-Assurance.gif";
import aaacopy1 from "../../../assest/main-icons/OBJECTS.png";
import expertise from "../../../assest/web-icons/hireqadev/Isolation_Mode.png";
import cuttingEdge from "../../../assest/web-icons/hireqadev/Isolation_Mode (1).png";
import globalReach from "../../../assest/web-icons/hireqadev/Isolation_Mode (2).png";
import securityCompliance from "../../../assest/web-icons/hireqadev/Isolation_Mode (3).png";
import functionalTessting from "../../../assest/web-icons/hireqadev/Isolation_Mode (4).png";
import automationTesting from "../../../assest/web-icons/hireqadev/Isolation_Mode (5).png";
import mobileapp from "../../../assest/web-icons/hireqadev/Isolation_Mode (10).png";
import regressionTesting from "../../../assest/web-icons/hireqadev/Layer_1.png";
import performanceTesting from "../../../assest/web-icons/hireqadev/Isolation_Mode (6).png";
import securityTesting from "../../../assest/web-icons/hireqadev/Isolation_Mode (7).png";
import uatProfessional from "../../../assest/web-icons/hireqadev/Isolation_Mode (8).png";
import idustrySpecific from "../../../assest/web-icons/hireqadev/Isolation_Mode (11).png";
import trademarkC from "../../../assest/web-icons/global-icon/Screenshot_at_Feb_01_15-49-19-removebg-preview 1 (1).png";
import salestrip from "../../../assest/web-icons/global-icon/Group 1000005596 (1).png";
import breckW from "../../../assest/web-icons/global-icon/Group 1000005597 (1).png";
import hobbyst from "../../../assest/web-icons/global-icon/Group 1000005603.png";
import qrScape from "../../../assest/web-icons/global-icon/Group 1000005604.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  upArroForHire,
  downArroForHire,
  rewuirementImg,
  interviewImg,
  shortlistImg,
  hireDevImg,
  employeProcess,
  full,
  devo,
  mobiledev,
  wearable,
  uiux,
  cross
  // expertise,
  // cuttingEdge,
  // globalReach,
  // securityCompliance,
} from "../../../common/images";
const QaDeveloperComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [scaleIndex, setScaleIndex] = useState(1);
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    title: "QA App Development",
    phone: "",
    role: "",
    experience: "",
    where: "",
    howlong: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        setLoading(false);
        setCommentor(true);
        setTimeout(() => {
          setCommentor(false);
        }, 2000);
        console.log("Form data sent successfully");
        setState({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setLoading(false);
        console.error("Failed to send form data");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error while sending form data:", error);
    }
  };
  const [langConB, setLangConB] = useState([
    {
      content:
        "Equipped with comprehensive knowledge across both front-end and back-end technologies...",
      logo: full,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: functionalTessting,
      afterdLogo: functionalTessting,
      para: "Our Functional Testing Analysts focus on...",
      para2:
        "Our Functional Testing Analysts focus on validating each function of your software to ensure it meets the specified requirements. They meticulously assess functionality, usability, and user interface, guaranteeing a seamless end-user experience.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: automationTesting,
      afterdLogo: automationTesting,
      para: "Our Automation Testing Analysts leverage advanced...",
      para2:
        "Our Automation Testing Analysts leverage advanced tools and frameworks to create automated test scripts. They streamline the testing process, enhancing test coverage and accelerating the overall QA cycle.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: mobileapp,
      afterdLogo: mobileapp,
      para: "For mobile application projects, Our Mobile App...",
      para2:
        " For mobile application projects, Our Mobile App Testing Analysts specialize in testing across different devices, platforms, and networks. They ensure your mobile app functions flawlessly and provides a consistent experience across various devices.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: regressionTesting,
      afterdLogo: regressionTesting,
      para: "Hire our Regression Testing Analysts to...",
      para2:
        "Hire our Regression Testing Analysts to verify that recent code changes haven't adversely affected the existing functionalities of your software. They ensure the new features work without impacting the established functionalities.",
    },
    {
      content:
        "Equipped with comprehensive knowledge across both front-end and back-end technologies...",
      logo: full,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: performanceTesting,
      afterdLogo: performanceTesting,
      para: "Hire our Performance Testing Analysts to...",
      para2:
        "Hire our Performance Testing Analysts to evaluate the speed, responsiveness, and stability of your software under various conditions. They conduct rigorous performance tests to optimize your software's efficiency and scalability.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: securityTesting,
      afterdLogo: securityTesting,
      para: "Ensure the robustness of your software against...",
      para2:
        " Ensure the robustness of your software against potential vulnerabilities by hiring our Security Testing Analysts. They conduct comprehensive security assessments, identifying and mitigating risks to safeguard your data and user privacy.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: uatProfessional,
      afterdLogo: uatProfessional,
      para: "Our User Acceptance Testing Analysts...",
      para2:
        "Our User Acceptance Testing Analysts work closely with end-users to validate software functionality and usability. They conduct real-world scenario-based tests, ensuring the software meets user expectations and business objectives.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: idustrySpecific,
      afterdLogo: idustrySpecific,
      para: "Tailored to specific industries such as healthcare...",
      para2:
        "Tailored to specific industries such as healthcare, finance, or e-commerce, our Industry-Specific QA Analysts possess domain-specific knowledge. They understand the unique challenges of your industry, ensuring compliance and quality within sector-specific regulations.",
    },
  ]);
  // const handleMouseEnter = () => {
  //   setLangConB(
  //     langConB.map((item, index) => {
  //       if (index === 0) {
  //         item.content = item.para2;
  //         item.logo = item.beforelogo;
  //         item.arrow = item.afterArrow;
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const handleMouseLeave = () => {
  //   setLangConB(
  //     langConB.map((item, index) => {
  //       if (index === 0) {
  //         item.content = item.para;
  //         item.logo = item.beforelogo;
  //         item.arrow = item.beforeArrow;
  //       }
  //       return item;
  //     })
  //   );
  // };
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
      question:
        "What is the role of a Quality Analyst in software development?",
      answer:
        "Quality Analysts play a pivotal role in ensuring the reliability and functionality of software by thoroughly testing and identifying any issues or bugs before the product reaches the end-user.",
      open: true,
    },
    {
      question:
        "How does Vsple Technologies ensure the quality of its software products?",
      answer:
        "At Vsple Technologies, our Quality Analysts employ industry-leading testing methodologies, including automated testing and comprehensive manual testing, to guarantee the highest standards of software quality and performance.",
      open: false,
    },
    {
      question:
        "What qualifications and skills do your Quality Analysts possess?",
      answer:
        "Our Quality Analysts at Vsple Technologies are highly qualified professionals with a strong background in software testing, possessing a combination of technical expertise, analytical skills, and a commitment to delivering flawless software.",
      open: false,
    },
    {
      question:
        "Can you explain the significance of automated testing in the QA process?",
      answer:
        "Automated testing expedites the testing process, increases test coverage, and enhances the accuracy of results. At Vsple Technologies, we leverage cutting-edge automated testing tools to streamline QA processes and ensure efficiency.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies address security testing for software applications?",
      answer:
        "Security is a top priority for us. Our Quality Analysts conduct thorough security testing to identify and address vulnerabilities, safeguarding your software applications against potential threats and ensuring data integrity.",
      open: false,
    },
    {
      question:
        "What is the typical workflow of a Quality Analyst at Vsple Technologies?",
      answer:
        "Our Quality Analysts follow a meticulous workflow that includes requirements analysis, test planning, test execution, defect tracking, and reporting. This ensures a systematic and comprehensive approach to software quality assurance.",
      open: false,
    },
    {
      question:
        "How do you stay updated on the latest QA methodologies and technologies?",
      answer:
        "Continuous learning is ingrained in our culture. Our Quality Analysts regularly participate in training programs, attend industry conferences, and stay informed about the latest advancements in QA methodologies and technologies.",
      open: false,
    },
    {
      question:
        "Can I hire Quality Analysts from Vsple Technologies for a specific project or on a long-term basis?",
      answer:
        "Absolutely! Whether you need QA experts for a short-term project or long-term collaboration, we offer flexible hiring models to meet your unique requirements. Contact us to discuss your project and find the right QA solutions for your needs.",
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
    <div className="p-header" style={{ marginTop: "0%" }}>
      <div className="p-h">
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br />
            <span>HIRE TOP TALENTS</span>
            <h5>Hire Vsple's Top Quality Analysts</h5>
            <p>
              Precision in Every Pixel, Perfection in Every Process. At Vsple
              Technologies Pvt. Ltd., our quality analysts uphold the highest
              standards, ensuring flawlessness in digital solutions. Explore
              top-tier talent dedicated to meticulous testing and quality
              assurance. Welcome to Vsple - Where Diligence Meets Digital
              Perfection.
            </p>
            <div
              className="getin-button-w text-center my-5"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="see-button">
                <a>Hire Quality Analyst &nbsp;</a>
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

        <div className="--watch-wearable">
          <img src={watch} width={"60%"} alt="" />
        </div>
      </div>
      {/* <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br />
          <span>Whats Next</span>
          <h5>MacoS App Development</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div> */}
      {/* <div className="container cam-sec">
        <img src={m} width={"100%"} alt="" />
        <div className="vr-cam">
          <img id="h5" src={vrcam} width={"80%"} alt="" />
        </div>
      </div> */}
      <div className="--employee-process ">
        <div className="h-leader-row hidden">
          <div className="p-leader">
            <img className="mb-2" src={employeProcess} width={"35px"} alt="" />
            <br />
            <span>Employee Process</span>
            <h5>
              The process of embarking on a journey to ensure the Quality for
              seamless development and delivery of superior solutions can be
              broken down into four key steps
            </h5>
            <p>
              Explore our other related services to enhance the performance of
              your digital product.
            </p>
          </div>
          <div className="main-boxes-w hidden">
            <div className="row">
              <div className="b">
                <img
                  className="my-4"
                  src={rewuirementImg}
                  width={"16%"}
                  alt=""
                />
                <h5>Tell Us Your Requirements</h5>
                <p>
                  Let's initiate the process with a thorough examination of your
                  project's requirements and objectives. This initial step
                  allows us to gain a deep understanding of your needs.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={shortlistImg} width={"16%"} alt="" />
                <h5>We Shortlist The Best Talents</h5>
                <p>
                  Finding the Right Fit: Next, we roll up our sleeves and work
                  on finding the top-quality analysts for your project. We
                  consider your project's scope, requirements, and company
                  culture to make sure it's a seamless match.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={interviewImg} width={"16%"} alt="" />
                <h5>Take Their Interview</h5>
                <p>
                  Once we've identified potential candidates, we put them
                  through a rigorous screening process. We assess their skills,
                  experience, and expertise to ensure they meet your
                  expectations. This is like auditioning the best talent for
                  your team.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={hireDevImg} width={"16%"} alt="" />
                <h5>Hire The QA</h5>
                <p>
                  When you've chosen the quality analysts who fit like a glove,
                  we help you onboard them smoothly. We're there to assist
                  throughout the process. Plus, we offer ongoing support to make
                  sure your newly hired employee thrives in your team and
                  contributes to your project's success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div id="form-modal">
          <h5>Get In Touch With Us</h5>
          <img
            src={cross}
            width={"2%"}
            alt=""
            onClick={() => setIsModalOpen(false)}
          />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="Name">
                  {/* <img width={"22px"} src={account} alt="" /> */}
                  <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleInputChange}
                    placeholder="Full Name*"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="email">
                  {/* <img width={"22px"} src={email} alt="" /> */}
                  {/* <label>Password</label> */}
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    placeholder="Email Address*"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"22px"} src={telephone} alt="" /> */}
                  <input
                    type="number"
                    name="phone"
                    value={state.number}
                    onChange={handleInputChange}
                    placeholder="Mobile Number*"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="message">
                  {/* <label>Password</label> */}
                  {/* <img width={"22px"} src={message} alt="" /> */}
                  <input
                    type="text"
                    name="role"
                    value={state.reason}
                    onChange={handleInputChange}
                    placeholder="What role are you looking to hire for?"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"5%"} src={telephone} alt="" /> */}
                  <input
                    type="text"
                    name="experience"
                    value={state.suggestExp}
                    onChange={handleInputChange}
                    placeholder="Please suggest the experience level?"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"5%"} src={telephone} alt="" /> */}
                  <input
                    type="text"
                    name="howlong"
                    value={state.howLong}
                    onChange={handleInputChange}
                    placeholder="For how long you are planning to hire?"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"5%"} src={telephone} alt="" /> */}
                  <input
                    type="text"
                    name="budget"
                    value={state.password}
                    onChange={handleInputChange}
                    placeholder="Any Budget In Mind"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6 w-50 hireform-radio">
              <div className="why">
                    <h5 className="text-start">How Did You Hear About Us?</h5>
                    <div className="ms-3 mb-4">
                    <div className="d-flex justify-content-start">
                      <input name="where" type="radio" value="Google"
                        checked={state.why === "Google"}
                        onChange={handleInputChange} />
                      <label> Google</label>
                      <input name="where" type="radio" value="LinkedIn"
                        checked={state.why === "LinkedIn"}
                        onChange={handleInputChange} />
                      <label > LinkedIn</label>
                      <input name="where" type="radio" value="Facebook"
                        checked={state.why === "Facebook"}
                        onChange={handleInputChange} />
                      <label> Facebook</label>
                      <input className="web-model" name="where" type="radio" value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange} />
                      <label className="web-model" > Instagram</label>
                    </div>
                    <div className="d-flex justify-content-start">
                      <input className="mobile-model" name="where" type="radio" value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange} />
                      <label className="mobile-model" > Instagram</label>
                      <input name="where" type="radio" value="Other"
                        checked={state.why === "Other"}
                        onChange={handleInputChange} />
                      <label> Others</label>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="message">
              {/* <label>Password</label> */}
              {/* <img width={"6%"} src={message} alt="" /> */}
              <textarea
                type="text"
                rows="4"
                cols="50"
                name="message"
                value={state.message}
                onChange={handleInputChange}
                placeholder="Message"
                autocomplete="off"
                required
              />
              <div className="buttons ">
                <div className="modalButton mx-auto my-2">
                  <button type="submit">Send</button>
                </div>
              </div>
            </div>
          </form>
          {/* <button
            className="mx-auto"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button> */}
        </div>
      )}
      <div className="h-journey d-flex justify-content-center text-center hidden">
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Hire Us</span>
          <h5>Hire Quality Analysts?</h5>
          <p>
            At Vsple Technologies Pvt. Ltd., we understand that the diverse
            landscape of software development demands various expertise in
            Quality Analysis. We offer a range of specialized Quality Analysts,
            each adept in different types of QA to cater to your unique project
            needs. Here are the types of QA professionals you can hire from us
          </p>
        </div>
      </div>
      <div className="hire-developer container mt-5 hidden">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[0].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[0].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Functional Testing Experts
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[0].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[0].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[0].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[0].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[1].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[1].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Automation Testing Professionals
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[1].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[1].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[1].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[1].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[2].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[2].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Mobile App Testing Specialists
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[2].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[2].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[2].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[2].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[3].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[3].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Regression Testing Experts
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[3].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[3].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[3].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[3].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[4].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[4].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8 1.6rem">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Performance Testing Specialists
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[4].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[4].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[4].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[4].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[5].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[5].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Security Testing Consultants
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[5].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[5].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[5].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[5].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[6].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[6].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire UAT Professionals
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[6].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[6].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[6].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[6].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-2">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[7].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[7].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Industry-Specific Specialists
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[7].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[7].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[7].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[7].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-12 col-sm-12 col-lg-6">
            <div className="parent">
              <div className="child1">
                <img src={expertise} width={"12%"} alt="" />
                <br />
                <span>Integrated Approach</span>
                <p>
                  Vsple Technologies employs a holistic approach to quality
                  analysis, seamlessly integrating cutting-edge tools and
                  methodologies to ensure comprehensive software testing. Our
                  multifaceted approach covers automated, manual, and
                  performance testing to guarantee robust and flawless software.
                </p>
              </div>
              <vr
                className="me-3 web-model"
                style={{
                  height: "100% !important",
                  border: "0.5px solid #ffffff94",
                }}
              ></vr>
              <div className="child1">
                <img src={cuttingEdge} width={"12%"} alt="" />
                <br />
                <span>Specialized Expertise</span>
                <p>
                  Our Quality Analysts possess specialized expertise across
                  various industries and domains. Their in-depth knowledge and
                  experience enable them to understand the unique needs of
                  diverse projects, ensuring tailored QA solutions for each
                  client.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={globalReach} width={"12%"} alt="" />
                <br />
                <span>Innovation-driven Solutions</span>
                <p>
                  At Vsple Technologies, we thrive on innovation. Our Quality
                  Analysts constantly explore and adopt new testing techniques,
                  emerging technologies, and industry best practices, staying
                  ahead of the curve to deliver innovative and efficient QA
                  solutions.
                </p>
              </div>
              <vr
                className="me-3 web-model"
                style={{
                  height: "100% !important",
                  border: "0.5px solid #ffffff94",
                }}
              ></vr>
              <div className="child1">
                <img src={securityCompliance} width={"12%"} alt="" />
                <br />
                <span>Client-Centric Focus</span>
                <p>
                  We prioritize understanding our clients' goals and objectives.
                  Our approach to quality analysis is client-centric, aiming to
                  align our testing strategies with the specific needs of each
                  project. We emphasize transparent communication and
                  collaboration to ensure client satisfaction at every stage of
                  the QA process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="main-text-service w-100 p-0 m-0">
              <span>Benefits</span>
              <h2 className="">
                Why Vsple Technologies <br /> Pvt. Ltd. Sets Mobile <br /> App
                Development Apart
              </h2>
              <p>
                Hiring Mobile app developers from Vsple Technologies Pvt. Ltd.
                is a strategic choice that promises numerous advantages. With
                specialized expertise, customized solutions, and a commitment to
                staying at the forefront of mobile app technology, the benefits
                are plentiful.
                <br /> Our streamlined processes, ongoing support, and
                cost-effective solutions add value to your mobile app
                development journey, making us an exceptional choice in this
                dynamic industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-leader web-model">
        <div className="h-leader-row row p-5 hidden">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="p-leader">
              <span>Technologies</span>
              <h5>Tech Stack we use</h5>
              <p>
              Quality Analysts leverage a comprehensive tech stack to ensure the robustness and reliability of software products. This typically includes test automation tools such as Selenium WebDriver for web application testing and Appium for mobile application testing. Test management tools like Jira and TestRail facilitate efficient test case management and bug tracking.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <div className=" img">
              <img
                src={ccc1}
                alt=""
                width={"100%"}
                style={{ marginLeft: '10%' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-lg-6 text-center d-flex align-items-center ">
            <img src={aaacopy1} width={"90%"} alt="" />
          </div>
          <div className="col-md-7 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service container">
              <h2 className="">Key Reason To Hire Quality Analytics</h2>
              <ul>
                <li>
                  Quality Analysts play a pivotal role in ensuring the
                  reliability, functionality, and overall quality of software
                  products. Their meticulous testing helps identify and resolve
                  issues before deployment, reducing risks and enhancing user
                  satisfaction.
                </li>
                <li>
                  By conducting rigorous testing, Quality Analysts contribute
                  significantly to improving the user experience. They identify
                  usability issues, bugs, and performance bottlenecks, ensuring
                  a smoother and more satisfying experience for end-users.
                </li>
                <li>
                  Investing in Quality Analysts upfront helps in mitigating
                  potential risks and reducing costs associated with fixing
                  errors post-deployment. Their efforts in early detection and
                  resolution of issues save both time and resources in the long
                  run.
                </li>
                <li>
                  Quality Analysts contribute to upholding the company's
                  reputation by ensuring that only high-quality, reliable
                  software reaches the market. Consistently delivering bug-free
                  products fosters trust and credibility among users, bolstering
                  the company's brand image.
                </li>
              </ul>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/contact-us">Connect Today &nbsp;</a>
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
      <div className=" p-head why-choose-section container web-model">
        <div className="card">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-12">
              <div className="card-section card-section-full">
                <div>
                  <h3>
                    Why choose Team <br /> Vsple?
                  </h3>
                  <p>
                  QA developers bring specialized skills in programming languages
                  </p>
                  <div className="text-start">
                    <div className="see-button">
                      <a href="/contact-us">Connect Today &nbsp;</a>
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
              <div className="row">
                <div className="col-md-12 col-lg-6 col-12"></div>
                <div className="col-md-12 col-lg-6 col-12 h-100">
                  <div className="card-section card-section-full-c text-center">
                    <img src={uiux} width={"18%"} alt="" />
                    <br />
                    <h5>
                      UI/UX <br /> Designer
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-12">
              <div className="row">
                <div className="col-md-6 px-2">
                  <div className="w-100 text-center card-section card-section-half"></div>
                  <div className="w-100 text-center card-section card-section-full-b">
                    <img src={wearable} width={"18%"} alt="" />
                    <h5 className="mt-3">
                      Wearable App <br /> Developers
                    </h5>
                  </div>
                  <div className="w-100 text-center card-section-r card-section-half-c">
                    <img src={full} width={"18%"} alt="" />
                    <h5 className="ms-3" style={{fontSize:'1.2rem'}}>
                      Full Stack <br /> Developer
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="w-100 text-center card-section card-section-full-c border-radius">
                    <img src={mobiledev} width={"18%"} alt="" />
                    <h5 className="mt-3">
                      Mobile App <br /> Developer
                    </h5>
                  </div>
                  <div className="w-100 text-center card-section card-section-full-c border-radius">
                    <img src={devo} width={"18%"} alt="" />
                    <h5 className="mt-3">
                      Devops <br /> Development
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center hidden">
        <div className="p-journey">
          <span>Trusted Us</span>
          <h5>Businesses Who Trusted Us</h5>
          <p>
          We're committed to delivering tailored solutions and exceptional service to each and every client, helping them achieve their goals and thrive in the digital age.
          </p>
        </div>
      </div>
      <div className="container">
        <hr />
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
              <div className="service-box-slider-wearable">
                <img src={trademarkC} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={unbound} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable">
                <img src={salestrip} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable p-4">
              <div className="service-box-slider-wearable">
                <img src={breckW} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable p-4">
              <div className="service-box-slider-wearable">
                <img src={qrScape} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable p-4">
              <div className="service-box-slider-wearable">
                <img src={hobbyst} width={"100%"} alt="" />
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
                <img src={unbound} width={"100%"} alt="" />
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
        <h5 className="text-center abc">FAQ'S</h5>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Empower your app with precision and quality!
              <br />
              <span className="inner-join">
                Connect with Vsple to enlist our top-notch Quality Analysts.
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
    </div>
  );
};

export default QaDeveloperComponent;
