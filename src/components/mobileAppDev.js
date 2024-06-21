import React, { useState, useRef, useEffect } from "react";
import "./mobileAppDev.css";
import FAQ from "./Faq";
import ccc1 from "../assest/gifs/01mobile_app_development.gif";
import softwaredeveloper from "../assest/web-icons/hiremobiledev/Group (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import watach2 from "../assest/web-icons/Group 1000005549.png";
//frame (21)
import appleLogo from "../assest/main-icons/Group 1410.png";
import appleLogo2 from "../assest/main-icons/Group 1000004599 (1).png";
import Android from "../assest/web-icons/Group 1000004598.png";
import Hybrid from "../assest/web-icons/Group 1000004998.png";
import fullstack from "../assest/web-icons/Group 1000004841.png";
import frame5 from "../assest/web-icons/Group 1000005565.png";
import ooredo from "../assest/main-icons/Ooredoo logo white@3x  1 (2).png";
import calvaryLogo from "../assest/main-icons/Group 1000004560.png";
import tradeTips from "../assest/main-icons/Group 1000004561.png";
import unbound from "../assest/main-icons/Group 1000004579 (1).png";
import chatie from "../assest/main-icons/Group 1000004566.png";
import tnumber from "../assest/main-icons/white@3x 1.png";
import jupieter from "../assest/main-icons/LOGO PNG@3x 1.png";
import ccc from "../assest/main-icons/Group 1000005032.png";
import hybrid from "../assest/web-icons/hireqadev/Group 1000004998.png";
import trademarkC from "../assest/web-icons/global-icon/Screenshot_at_Feb_01_15-49-19-removebg-preview 1 (1).png";
import salestrip from "../assest/web-icons/global-icon/Group 1000005596 (1).png";
import breckW from "../assest/web-icons/global-icon/Group 1000005597 (1).png";
import hobbyst from "../assest/web-icons/global-icon/Group 1000005603.png";
import qrScape from "../assest/web-icons/global-icon/Group 1000005604.png";

//dfdf
import rectangle8297 from "../assest/main-icons/Rectangle 8297.png";
import dataExchange from "../assest/web-icons/data-exchange.png";
import isolationMode from "../assest/web-icons/Isolation_Mode.png";
import isolationMode2 from "../assest/web-icons/Isolation_Mode (1).png";
import group5111 from "../assest/main-icons/Group 1000005111.png";

//fdf
import {
  cross,
  shareButton,
  ando,
  expertise,
  cuttingEdge,
  globalReach,
  securityCompliance,
  employeProcess,
  upArroForHire,
  downArroForHire,
  rewuirementImg,
  interviewImg,
  shortlistImg,
  hireDevImg,
  full,
  uiux,
  wearable,
  devo,
  mobiledev,
  android,
  main,
  account,
  email,
  telephone,
  message,
  contactMail,
  btnsvg,
  loader,
} from "../common/images";
import "swiper/css";
// import FAQ from "../components/Faq";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { render } from "react-dom";
// import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const MobileAppDevComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    title: "Mobile App Development",
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
      const response = await fetch("http://localhost:3000/hire_form.php", {
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
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo2,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: appleLogo2,
      afterdLogo: appleLogo2,
      para: "Our adept iOS developers craft seamless, ...",
      para2:
        "Our adept iOS developers craft seamless, user-friendly experiences for Apple devices. They excel in Swift, Objective-C, UIkit, SwiftUI, etc. ensuring your app aligns perfectly with iOS standards while maximizing functionality.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: Android,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: hybrid,
      afterdLogo: hybrid,
      para: "Our cross-platform developers leverage ...",
      para2:
        "Our cross-platform developers leverage technologies like React Native, Flutter, etc. to build versatile apps that run smoothly across multiple platforms. They streamline development while maintaining native-like experiences.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: Hybrid,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: ando,
      afterdLogo: ando,
      para: "Our Android developers are proficient in Java and Kotlin...",
      para2:
        "Our Android developers are proficient in Java and Kotlin, creating robust, scalable apps tailored for the diverse Android ecosystem. They ensure your app performs optimally across various devices and versions.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: fullstack,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: full,
      afterdLogo: full,
      para: "For comprehensive solutions, our full-stack mobile app...",
      para2:
        "For comprehensive solutions, our full-stack mobile app developers combine all platform expertise, ensuring end-to-end development and smooth integration of all app components.",
    },
  ]);
  const [faqs, setFaqs] = useState([
    {
      question:
        "Why should I choose Vsple Technologies for hiring Mobile App Developers?",
      answer:
        "At Vsple Technologies, we curate a pool of seasoned Mobile App Developers skilled in cutting-edge technologies. Our rigorous vetting process ensures you get access to top-tier talent that aligns perfectly with your project needs.",
      open: true,
    },
    {
      question: "What expertise do your Mobile App Developers possess?",
      answer:
        "Our Mobile App Developers specialize in a wide array of technologies, including iOS, Android, React Native, Flutter, and more. They bring proficiency in UI/UX design, backend integration, and ensuring seamless user experiences",
      open: false,
    },
    {
      question: "How do you ensure the quality of your Mobile App Developers?",
      answer:
        "We meticulously assess our developers for their technical prowess, problem-solving abilities, and past project experience. Additionally, we encourage continuous learning and skill enhancement to ensure they stay updated with the latest trends and technologies.",
      open: false,
    },
    {
      question:
        "Can I hire a dedicated Mobile App Developer/team for my project?",
      answer:
        "Absolutely! We offer flexible hiring models, allowing you to hire dedicated developers or teams tailored to your project's scope and timeline. This ensures a focused approach to meet your specific requirements.",
      open: false,
    },
    {
      question: "What sets Vsple Technologies' Mobile App Developers apart?",
      answer:
        "Our developers not only excel in technical skills but also prioritize communication, collaboration, and understanding client needs. They're adept at agile methodologies, ensuring timely deliveries and constant adaptability to evolving project requirements.",
      open: false,
    },
    {
      question: "How do you handle confidentiality and security concerns?",
      answer:
        "Confidentiality and security are paramount to us. We enforce strict NDAs and adhere to robust security protocols to safeguard your intellectual property and sensitive information throughout the development process.",
      open: false,
    },
    {
      question: "What support do you offer after the app development phase?",
      answer:
        "Our commitment extends beyond the development phase. We provide post-launch support, maintenance, and updates to ensure your app remains optimized and functional, addressing any issues promptly.",
      open: false,
    },
    {
      question: "Can I conduct interviews or assess developers before hiring?",
      answer:
        "Certainly! We facilitate interviews and skill assessments, allowing you to interact with and evaluate potential developers to ensure a perfect fit for your project.",
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
    gsap.from("#h5", {
      scrollTrigger: {
        trigger: "#h5",
        start: "top bottom",
        end: "top 400px",
        scrub: 1,
      },
      xPercent: -100,
      opacity: 0,
    });
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

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://grwapi.net/widget.min.js";
    script.type = "text/javascript";
    script.async = true;
    script.addEventListener("load", () => {
      console.log("Widget script has loaded.");
    });
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.type = "text/javascript";
    script.async = true;

    script.addEventListener("load", () => {
      console.log("Widget script has loaded.");
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="p-header" style={{ marginTop: "0%" }}>
      <div className="p-h">
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br />
            <span>HIRE TOP TALENTS</span>
            <h5>Hire TOP Developers For Expert Mobile App Development</h5>
            <p>
              Empower Your Vision with Exceptional Mobile App Development. At
              Vsple Technologies Pvt. Ltd., our mobile app developers are the
              architects of innovation, crafting cutting-edge solutions that
              redefine user experiences. Explore top-tier talent dedicated to
              transforming your ideas into exceptional apps. Welcome to Vsple -
              Where Talent Meets Transformation.
            </p>
            <div
              className="getin-button-w text-center my-5"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="see-button">
                <a>Hire App Developers &nbsp;</a>
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
        <div className="--watch">
          <img src={softwaredeveloper} width={"45%"} alt="" />
        </div>
      </div>
      <div className="--employee-process -model">
        <div className="h-leader-row">
          <div className="p-leader">
            {/* <img src={employeProcess} width={"30px"} className="mb-1" alt="" />
            <br /> */}
            <h4 className="text">
              <img src={employeProcess} width={"5%"} className="mb-2" alt="" />
              <br /> Employee Process
            </h4>
            <h5>How To Hire Top Remote Mobile App developers Through Vsple?</h5>
            <p>
              Explore our other related services to enhance the performance of
              your digital product.
            </p>
          </div>
          <div className="main-boxes-w hidden hidden">
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
                <h5>Expert Pairing</h5>
                <p>
                  Finding the Right Fit: Next, we roll up our sleeves and work
                  on finding the perfect developers for your project. We
                  consider your project's scope, requirements, and your company
                  culture to make sure it's a seamless match.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={interviewImg} width={"16%"} alt="" />
                <h5>Development and Screening</h5>
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
                <h5>Onboarding and Ongoing Support</h5>
                <p>
                  When you've chosen the developers who fit like a glove, we
                  help you onboard them smoothly. We're there to assist
                  throughout the process. Plus, we offer ongoing support to make
                  sure your newly hired developers thrive in your team and
                  contribute to your project's success.
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
                    placeholder="What role are you looking to hire?"
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
                    <div className="d-flex flex-wrap justify-content-start">
                      <div className="form-check d-flex align-items-center me-3 mb-2">
                        <input
                          id="google"
                          name="where"
                          type="radio"
                          value="Google"
                          checked={state.why === "Google"}
                          onChange={handleInputChange}
                          className="form-check-input"
                        />
                        <label
                          htmlFor="google"
                          className="form-check-label ms-2"
                        >
                          Google
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center me-3 mb-2">
                        <input
                          id="linkedin"
                          name="where"
                          type="radio"
                          value="LinkedIn"
                          checked={state.why === "LinkedIn"}
                          onChange={handleInputChange}
                          className="form-check-input"
                        />
                        <label
                          htmlFor="linkedin"
                          className="form-check-label ms-2"
                        >
                          LinkedIn
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center me-3 mb-2">
                        <input
                          id="facebook"
                          name="where"
                          type="radio"
                          value="Facebook"
                          checked={state.why === "Facebook"}
                          onChange={handleInputChange}
                          className="form-check-input"
                        />
                        <label
                          htmlFor="facebook"
                          className="form-check-label ms-2"
                        >
                          Facebook
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center me-3 mb-2">
                        <input
                          id="instagram"
                          name="where"
                          type="radio"
                          value="Instagram"
                          checked={state.why === "Instagram"}
                          onChange={handleInputChange}
                          className="form-check-input web-model"
                        />
                        <label
                          htmlFor="instagram"
                          className="form-check-label ms-2 web-model"
                        >
                          Instagram
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center me-3 mb-2">
                        <input
                          id="instagram-mobile"
                          name="where"
                          type="radio"
                          value="Instagram"
                          checked={state.why === "Instagram"}
                          onChange={handleInputChange}
                          className="form-check-input mobile-model"
                        />
                        <label
                          htmlFor="instagram-mobile"
                          className="form-check-label ms-2 mobile-model"
                        >
                          Instagram
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center mb-2">
                        <input
                          id="other"
                          name="where"
                          type="radio"
                          value="Other"
                          checked={state.why === "Other"}
                          onChange={handleInputChange}
                          className="form-check-input"
                        />
                        <label
                          htmlFor="other"
                          className="form-check-label ms-2"
                        >
                          Others
                        </label>
                      </div>
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
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          <span>Hire Us</span>
          <h5>Hire Mobile App Developers?</h5>
          <p>
            Explore our other related services to enhance the performance of
            your digital product.
          </p>
        </div>
      </div>
      <div className="hire-developer container mt-5 hidden">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div
              className={`lang-con-b p-4 hire-section`}
              onClick={(e) => {
                const element = e.currentTarget;
                const isHovered = element.classList.contains("hover");

                document
                  .querySelectorAll(".hire-section")
                  .forEach((element) => {
                    element.classList.remove("hover");
                  });

                if (!isHovered) {
                  element.classList.add("hover");
                }
              }}
            >
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
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire IOS App Developer
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1.6rem",
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
                      fontSize: "1.6rem",
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

            <div
              className={`lang-con-b p-4 hire-section`}
              onClick={(e) => {
                const element = e.currentTarget;
                const isHovered = element.classList.contains("hover");

                document
                  .querySelectorAll(".hire-section")
                  .forEach((element) => {
                    element.classList.remove("hover");
                  });

                if (!isHovered) {
                  element.classList.add("hover");
                }
              }}
            >
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
                <div className="col-8 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire Hybrid App Developer
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1.6rem",
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
                      fontSize: "1.6rem",
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
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div
              className={`lang-con-b p-4 hire-section`}
              onClick={(e) => {
                const element = e.currentTarget;
                const isHovered = element.classList.contains("hover");

                document
                  .querySelectorAll(".hire-section")
                  .forEach((element) => {
                    element.classList.remove("hover");
                  });

                if (!isHovered) {
                  element.classList.add("hover");
                }
              }}
            >
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
                <div className="col-8 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire Android App Developer
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1.6rem",
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
                      fontSize: "1.6rem",
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

            <div
              className={`lang-con-b p-4 hire-section`}
              onClick={(e) => {
                const element = e.currentTarget;
                const isHovered = element.classList.contains("hover");

                document
                  .querySelectorAll(".hire-section")
                  .forEach((element) => {
                    element.classList.remove("hover");
                  });

                if (!isHovered) {
                  element.classList.add("hover");
                }
              }}
            >
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
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire full-Stack App Developer
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1.6rem",
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
                      fontSize: "1.6rem",
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
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-12 col-sm-12 col-lg-6">
            <div className="parent">
              <div className="child1">
                <img src={expertise} width={"40px"} alt="" />
                <br />
                <span>Expertise and Specialization</span>
                <p>
                  Vsple Technologies specializes in mobile app development,
                  ensuring you have access to developers with in-depth knowledge
                  and experience in this niche, resulting in high-quality and
                  innovative solutions.
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
                <img src={cuttingEdge} width={"40px"} alt="" />
                <br />
                <span>Cutting-Edge Technology</span>
                <p>
                  Vsple Technologies stays at the forefront of mobile app
                  technology trends, so you can be confident that your apps will
                  leverage the latest advancements in the field.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={globalReach} width={"40px"} alt="" />
                <br />
                <span>Global Reach</span>
                <p>
                  With a global presence, Vsple Technologies can serve clients
                  from around the world, providing you with a diverse
                  perspective and access to a global talent pool.
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
                <img src={securityCompliance} width={"40px"} alt="" />
                <br />
                <span>Security and Compliance</span>
                <p>
                  With a global presence, Vsple Technologies can serve clients
                  from around the world, providing you with a diverse
                  perspective and access to a global talent pool.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="main-text-service w-100 p-0 m-0">
              <h5 className="text">Benefits</h5>
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
          <div className=" col-md-6 col-sm-12 col-lg-6 ">
            <div className="p-leader p-5">
              <span>Technologies</span>
              <h5>Tech Stack we use</h5>
              <p>
                Creating exceptional mobile applications requires a precise
                blend of technology, innovation, and expertise. At Vsple, we
                take immense pride in our mobile app development prowess, driven
                by a carefully chosen tech stack that empowers us to craft
                high-quality, user-friendly, and feature-rich mobile solutions.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <div className=" img">
              <img
                src={ccc1}
                alt=""
                width={"100%"}
                style={{ marginLeft: "10%" }}
                // height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-head hidden container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 text-center ">
            <img src={watach2} width={"80%"} alt="" />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center mt-2 container">
            <div className="main-text-service">
              <h2 className="">
                Key Reasons to Hire
                <br />
                Mobile app Developers
              </h2>
              <ul>
                <li>
                  Mobile app developers bring specialized skills in programming
                  languages (such as Swift, Kotlin, React Native) and frameworks
                  essential for creating efficient, user-centric mobile
                  applications. Their expertise ensures the seamless functioning
                  of your app across different platforms and devices.
                </li>
                <li>
                  Hiring mobile app developers allows access to creative minds
                  that can transform your ideas into innovative solutions. They
                  bring fresh perspectives and insights to the table, enhancing
                  your app's features and user experience while keeping up with
                  industry trends.
                </li>
                <li>
                  By hiring dedicated mobile app developers, you streamline the
                  development process. Their focused attention on your project
                  reduces development time and minimizes unnecessary costs,
                  ensuring a quicker time-to-market for your app.
                </li>
                <li>
                  Mobile app developers offer tailored solutions specific to
                  your business needs. Their ongoing support post-launch ensures
                  your app remains updated, optimized, and capable of addressing
                  evolving user requirements, providing a seamless user
                  experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="why-choose-container mx-5 mt-5">
        <div className="why-choose-boxes">
          <div className="third-boxes">
            <div className="mobile-app">
              <h5>
                Mobile App <br /> Developers
              </h5>
            </div>
            <div className="devops-dev">
              <h5>
                Devops <br /> Developers
              </h5>
            </div>
          </div>
          <div className="third-boxes">
            <div className="mobile-app">
              <h5>
                Mobile App <br /> Developers
              </h5>
            </div>
            <div className="devops-dev">
              <h5>
                Devops <br /> Developers
              </h5>
            </div>
          </div>
          <div className="third-boxes">
            <div className="mobile-app">
              <h5>
                Mobile App <br /> Developers
              </h5>
            </div>
            <div className="devops-dev">
              <h5>
                Devops <br /> Developers
              </h5>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="p-head hidden">
        <div className="row">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service container">
              <h2 className="">
                Vsple Brings Advanced <br /> Tech To Your Wearable <br /> Apps
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <img src={mobileApp} width={"100%"} alt="" />
          </div>
        </div>
      </div> */}
      {/* <div className="whyChooseUs">
        <div className="row">
          <div className="col-6">
            <h5>
              Why Choose Team <br />
              Vsple?
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-6">
            <div className="whyBoxes">
              <div className="whybox"></div>
              <div className="whybox"></div>
              <div>
                <div className="whybox"></div>
                <div className="whybox mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" p-head why-choose-section container web-model">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="card-section card-section-full">
                <div>
                  <h3>
                    Why choose Team <br /> Vsple?
                  </h3>
                  <p>
                    Mobile app developers bring specialized skills in
                    programming languages
                  </p>
                  <div className="text-start">
                    <div className="see-button">
                      <a href="/contact-us">
                        Connect Today &nbsp;
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 h-100">
                  <div className="card-section card-section-full-c text-center">
                    <img src={uiux} width={"20%"} alt="" />
                    <br />
                    <h5>
                      UI/UX <br /> Designer
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 px-2">
                  <div className="w-100 text-center card-section card-section-half"></div>
                  <div className="w-100 text-center card-section card-section-full-b">
                    <img src={wearable} width={"20%"} alt="" />
                    <h5 className="mt-3">
                      Wearable App <br /> Developers
                    </h5>
                  </div>
                  <div className="w-100 text-center card-section-r card-section-half-c">
                    <img src={full} width={"20%"} alt="" />
                    <h5 className="ms-3">
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
                    <img src={devo} width={"20%"} alt="" />
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
            We're committed to delivering tailored solutions and exceptional
            service to each and every client, helping them achieve their goals
            and thrive in the digital age.
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
        <h5 className="text-center  abc">FAQ'S</h5>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to elevate your Mobile App idea?
              <br />
              <span className="inner-join">
                Let's match you with top-tier mobile app developers at Vsple and
                bring your vision to life.
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

export default MobileAppDevComponent;
