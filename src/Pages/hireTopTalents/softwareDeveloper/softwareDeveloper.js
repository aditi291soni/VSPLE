import React, { useEffect, useState, useRef } from "react";
import "./softwareDeveloper.css";
import "../../../components/mobileAppDev.css";
import mainimg from "../../../assest/main-icons/Group 2113 (2).png";
import leader from "../../../assest/main-icons/Group 1522.png";
import frame from "../../../assest/main-icons/Frame (1).png";
import group from "../../../assest/main-icons/Group.png";
import frame2 from "../../../assest/main-icons/Frame (2).png";
import frame3 from "../../../assest/main-icons/Frame (3).png";
import journey from "../../../assest/main-icons/Group 2114.png";
import frame4 from "../../../assest/main-icons/Frame (4).png";
import frame5 from "../../../assest/web-icons/Group 1000005565.png";
import frame6 from "../../../assest/main-icons/Frame (6).png";
import upwork from "../../../assest/main-icons/Group 911.png";
import mask from "../../../assest/main-icons/Mask group (1).png";
import link from "../../../assest/main-icons/image 24805.png";
import clutch from "../../../assest/main-icons/Ellipse 196.png";
import nexticon from "../../../assest/main-icons/Group 670.png";
import previcon from "../../../assest/main-icons/Group 670 (1).png";
import gog from "../../../assest/main-icons/Group 918 (1).png";
import softwaredeveloper from "../../../assest/web-icons/softwaredev/Group 1000005036.png";
import ai from "../../../assest/main-icons/faceman.gif";
import sf from "../../../assest/main-icons/Group 1000004981.png";
import m from "../../../assest/main-icons/image 24868.png";
import vrcam from "../../../assest/main-icons/Group 1000004827.png";
import ccc1 from "../../../assest/gifs/03software_development.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import mobileApp from "../../../assest/main-icons/Mask group (6).png";
import watach2 from "../../../assest/main-icons/Group (2).png";
// import appleLogo from "../../../assest/main-icons/Group 1410.png";
import ooredo from "../../../assest/main-icons/Ooredoo logo white@3x  1 (2).png";
import calvaryLogo from "../../../assest/main-icons/Group 1000004560.png";
import tradeTips from "../../../assest/main-icons/Group 1000004561.png";
import unbound from "../../../assest/main-icons/Group 1000004579 (1).png";
import chatie from "../../../assest/main-icons/Group 1000004566.png";
import tnumber from "../../../assest/main-icons/white@3x 1.png";
import jupieter from "../../../assest/main-icons/LOGO PNG@3x 1.png";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import aaacopy1 from "../../../assest/main-icons/Frame (21).png";
import appleLogo from "../../../assest/main-icons/Group 1410.png";
import appleLogo2 from "../../../assest/main-icons/Group 1000004599 (1).png";
import rectangle8297 from "../../../assest/main-icons/Rectangle 8297.png";
import dataExchange from "../../../assest/web-icons/data-exchange.png";
import isolationMode from "../../../assest/web-icons/Isolation_Mode.png";
import isolationMode2 from "../../../assest/web-icons/Isolation_Mode (1).png";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import "swiper/css";
import FAQ from "../../../components/Faq";
import trademarkC from "../../../assest/web-icons/global-icon/Screenshot_at_Feb_01_15-49-19-removebg-preview 1 (1).png";
import salestrip from "../../../assest/web-icons/global-icon/Group 1000005596 (1).png";
import breckW from "../../../assest/web-icons/global-icon/Group 1000005597 (1).png";
import hobbyst from "../../../assest/web-icons/global-icon/Group 1000005603.png";
import qrScape from "../../../assest/web-icons/global-icon/Group 1000005604.png";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { render } from "react-dom";
// import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  full,
  devo,
  employeProcess,
  mobiledev,
  upArroForHire,
  wearable,
  uiux,
  downArroForHire,
  rewuirementImg,
  interviewImg,
  shortlistImg,
  hireDevImg,
  expertise,
  cuttingEdge,
  globalReach,
  securityCompliance,
  frontendDev,
  backendDev,
  cross,
  architectDev,
} from "../../../common/images";
gsap.registerPlugin(ScrollTrigger);

const SoftwareDeveloperComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const number = useRef(null);
  const [langConB, setLangConB] = useState([
    {
      content:
        "Equipped with comprehensive knowledge across both front-end and back-end technologies...",
      logo: full,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: full,
      afterdLogo: full,
      para: "Our team of talented Android app developers specializes in...",
      para2:
        " Equipped with comprehensive knowledge across both front-end and back-end technologies, our full-stack developers ensure end-to-end development, handling every aspect of your project proficiently.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: architectDev,
      afterdLogo: architectDev,
      para: "Leveraging vast experience and architectural expertise...",
      para2:
        "Leveraging vast experience and architectural expertise, our software architects design scalable, future-proof solutions that align with your business objectives.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: frontendDev,
      afterdLogo: frontendDev,
      para: "Our front-end developers specialize in creating intuitive and visually...",
      para2:
        "Our front-end developers specialize in creating intuitive and visually appealing user interfaces. They excel in HTML, CSS, JavaScript, and various frameworks, ensuring a seamless user experience",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: backendDev,
      afterdLogo: backendDev,
      para: "Behind the scenes, our back-end developers work on server-side functionality...",
      para2:
        "Behind the scenes, our back-end developers work on server-side functionality, databases, and APIs, ensuring robust and secure foundations for your software applications.",
    },
  ]);
  // const handleMouseEnter = (ev) => {
  //   ev.target.classList.add('expanded')
  //   const id = ev.target.id.split("-").pop();
  //   setLangConB(
  //       langConB.map((item, index) => {
  //         if (index === (id - 1)) {
  //           item.content = item.para2;
  //           item.logo = item.beforelogo;
  //           item.arrow = item.afterArrow;
  //         } else {
  //           item.content = item.para;
  //           item.logo = item.beforelogo;
  //           item.arrow = item.beforeArrow;
  //         }
  //         return item;
  //       })
  //     );
  // };

  // const handleMouseLeave = (ev) => {
  //   ev.target.classList.remove('expanded')
  //   const id = ev.target.id.split("-").pop();
  //   setLangConB(
  //     langConB.map((item, index) => {
  //       if (index === (id - 1)) {
  //         item.content = item.para;
  //         item.logo = item.beforelogo;
  //         item.arrow = item.beforeArrow;
  //       }
  //       return item;
  //     })
  //   );
  // };
  const [faqs, setFaqs] = useState([
    {
      question: "What qualifications do your software developers possess?",
      answer:
        "Our software developers are highly qualified with degrees in computer science, engineering, or related fields. Additionally, they undergo rigorous technical assessments to ensure their expertise.",
      open: true,
    },
    {
      question: "How do you source and vet your software developers?",
      answer:
        " We employ a comprehensive screening process that includes technical evaluations, portfolio reviews, and interviews to select the best talent. Our recruitment team scouts globally to attract top-notch developers.",
      open: false,
    },
    {
      question: "Can I review samples of your developers' previous work?",
      answer:
        "Absolutely! We showcase a portfolio of our developers' projects to demonstrate their skills, expertise, and the quality of their work.",
      open: false,
    },
    {
      question:
        "What technologies and programming languages do your developers specialize in?",
      answer:
        "Our developers are proficient in a wide array of technologies and languages, including but not limited to NodeJs, ReactJs, Angular, Java, Python, JavaScript, and many more. They stay updated with the latest trends and tools in the IT industry.",
      open: false,
    },
    {
      question:
        "How do you ensure communication and collaboration between your developers and clients?",
      answer:
        "We prioritize transparent communication channels and utilize various project management tools to ensure seamless collaboration. Clients have direct access to our developers throughout the project.",
      open: false,
    },
    {
      question:
        "What is the process for hiring dedicated developers for a project?",
      answer:
        " Simply reach out to us with your project requirements, and we'll facilitate a discussion to understand your needs. From there, we'll match you with the most suitable developers for your project.",
      open: false,
    },
    {
      question:
        "Are your developers experienced in Agile or other project management methodologies?",
      answer:
        "Yes, our developers are well-versed in Agile methodologies and adapt their workflow to align with the specific needs of each project.",
      open: false,
    },
    {
      question:
        "How do you ensure the security and confidentiality of projects being handled by your developers?",
      answer:
        "   We take security seriously and enforce strict confidentiality agreements. Our infrastructure and processes are designed to protect your sensitive information throughout the development process.",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [commentor, setCommentor] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://grwapi.net/widget.min.js";
    script.type = "text/javascript";
    script.async = true;

    // Add an event listener to check when the script has loaded
    script.addEventListener("load", () => {
      // The script has loaded, you can now use its functionality
      console.log("Widget script has loaded.");
    });

    // Append the script to the document's body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
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
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    title: "Software App Development",
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
  return (
    <div className="p-header" style={{ marginTop: "0%" }}>
      <div className="p-h">
        <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
            <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br />
            <span>HIRE TOP TALENTS</span>
            <h5>Hire TOP Developers for Expert Software Development</h5>
            <p>
            When you hire iOS developers from Vsple, you get a reliable team member who delivers quality work. After working with more than 7,000 clients worldwide, we realized what it meant to have the right people in your team
            </p>
            <div
              className="getin-button-w text-center my-5"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="see-button">
                <a>Hire software Developers &nbsp;</a>
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
          <img src={softwaredeveloper} width={"60%"} alt="" />
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
      <div className="--employee-process web-model hidden">
        <div className="h-leader-row">
          <div className="p-leader">
            <img className="mb-2" src={employeProcess} width={"3%"} alt="" />
            <br />
            <span>Employee Process</span>
            <h5>How To Hire Top Remote Software Development Through Vsple?</h5>
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
                  width={"20%"}
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
                <img className="my-4" src={shortlistImg} width={"20%"} alt="" />
                <h5>We Shortlist The Best Talents</h5>
                <p>
                  Finding the Right Fit: Next, we roll up our sleeves and work
                  on finding the perfect developers for your project. We
                  consider your project's scope, requirements, and your company
                  culture to make sure it's a seamless match.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={interviewImg} width={"20%"} alt="" />
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
                <img className="my-4" src={hireDevImg} width={"20%"} alt="" />
                <h5>Hire The Developers</h5>
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
          <h5>Hire Software Developers ?</h5>
          <p>
            At Vsple Technologies Pvt. Ltd., we offer a diverse array of
            specialized software developers to cater to your unique project
            needs. Here are the types of software developers you can hire from
            us:
          </p>
        </div>
      </div>
      <div className="hire-developer container mt-5 hidden">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className={`lang-con-b p-4 hire-section`}onClick={(e) => {
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
                <div className="col-3">
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
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Full-Stack Developers
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
                <div className="col-3">
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
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Back-End Developers
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
                <div className="col-3">
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
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Front-End Developers
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
                <div className="col-3">
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
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.8vmax",
                      textAlign: "start",
                    }}
                  >
                    Hire Software Architects
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
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-12 col-sm-12 col-lg-6">
            <div className="parent">
              <div className="child1">
                <img src={expertise} width={"15%"} alt="" />
                <br />
                <span>Expertise and Specialization</span>
                <p>
                  Vsple Technologies specializes in software development,
                  ensuring you have access to developers with in-depth knowledge
                  and experience in this niche, resulting in high-quality and
                  innovative solutions.
                </p>
              </div>
              <vr
                className="me-3"
                style={{
                  height: "100% !important",
                  border: "0.5px solid #ffffff94",
                }}
              ></vr>
              <div className="child1">
                <img src={cuttingEdge} width={"15%"} alt="" />
                <br />
                <span>Cutting-Edge Technology</span>
                <p>
                  Vsple Technologies stays at the forefront of software
                  development technology trends, so you can be confident that
                  your apps will leverage the latest advancements in the field.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={globalReach} width={"15%"} alt="" />
                <br />
                <span>Global Reach</span>
                <p>
                  The company prioritizes data security and compliance, ensuring
                  that your softwares adhere to the highest security and privacy
                  standards.
                </p>
              </div>
              <vr
                className="me-3"
                style={{
                  height: "100% !important",
                  border: "0.5px solid #ffffff94",
                }}
              ></vr>
              <div className="child1">
                <img src={securityCompliance} width={"15%"} alt="" />
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
              <span>Benefits</span>
              <h2 className="">
                Why Vsple Technologies <br /> Pvt Ltd Sets Software <br />{" "}
                Development Apart
              </h2>
              <p>
                Hiring Software developers from Vsple Technologies Pvt. Ltd. is
                a strategic choice that promises numerous advantages. With
                specialized expertise, customized solutions, and a commitment to
                staying at the forefront of Software technology, the benefits
                are plentiful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-leader web-model">
        <div className="h-leader-row row p-5">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="p-leader">
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
                style={{ marginLeft: '10%' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 text-center ">
            <img src={aaacopy1} width={"90%"} alt="" />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service container">
              <h2 className="">
                Key Reasons to Hire <br /> Software Developers
              </h2>
              <ul>
                <li>
                  Software developers bring specialized skills and expertise in
                  coding, programming languages, and technology frameworks.
                  Their in-depth knowledge allows for the creation of tailored,
                  efficient, and scalable solutions.
                </li>
                <li>
                  Thanks to our team of talented and experienced wearable
                  developers, we have covered every angle. We had everything,
                  entertainment, healthcare, sports, and other things.
                </li>
                <li>
                  Developers are adept at problem-solving and innovation. They
                  can analyze complex issues, propose creative solutions, and
                  implement new features, enhancing product functionality and
                  user experience.
                </li>
                <li>
                  Hiring software developers can significantly reduce project
                  timeframes and costs. Their efficiency in coding and
                  development processes streamlines workflows, ensuring timely
                  delivery without compromising quality.
                </li>
                <li>
                  Developers excel in customizing solutions to meet unique
                  business needs. Their ability to adapt to evolving
                  requirements ensures that software remains flexible and
                  scalable, accommodating future growth and changes.
                </li>
              </ul>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a>Connect Today &nbsp;</a>
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

      {/* Why Choose Section Starts */}
      <div className="mt-5 why-choose-section container web-model">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="card-section card-section-full">
                <div>
                  <h3>
                    Why choose Team <br /> Vsple?
                  </h3>
                  <p>
                  Software developers bring specialized skills in programming languages
                  </p>
                  <div
              className="getin-button-w text-center my-5"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="see-button">
                <a>Hire Wearable Developers &nbsp;</a>
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
      {/* Why Choose Section Ends */}

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
        <h5 className="text-center  abc">FAQ'S</h5>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to elevate your software idea?
              <br />
              <span className="inner-join">
                Let's match you with top-tier software developers at Vsple!
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
export default SoftwareDeveloperComponent;
