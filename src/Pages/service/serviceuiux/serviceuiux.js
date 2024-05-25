import React, { useState } from "react";
import "./serviceuiux.css";
import webdev from "../../../assest/developer (1) 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import main_img from "../../../assest/main-icons/Group 825 (1).png";
import main_img1 from "../../../assest/main-icons/Group 1000004859.png";
import main_img2 from "../../../assest/main-icons/Group 2199.png";
import sf from "../../../assest/main-icons/Group 1000004981.png";
import { Link } from "react-router-dom";
import FAQ from "../../../components/Faq";
// import { carousel3 } from "../../../common/images";
import carousel2 from "../../../assest/Group 1087 (1).png";
import serviceImg from "../../../assest/icons/vsple website design (4)/Group 830.png";
import first from "../../../assest/icons/vsple website design (4)/Group 833.png";
import second from "../../../assest/icons/vsple website design (4)/Group 834.png";
import third from "../../../assest/icons/vsple website design (4)/Group 832.png";

import ccc1 from "../../../assest/gifs/04uiuxdesign.gif";
import qa from "../../../assest/uiux-service/Group 1000005534.png";

import pic from "../../../assest/main-icons/services/gameServices/Pic.png";
import pic2 from "../../../assest/web-icons/websitedevelopment/Pic (1).png";
import group5369 from "../../../assest/uiux-service/Rectangle 8149.png";
import group5381 from "../../../assest/uiux-service/Group 1000005381.png";
import howWorks from "../../../assest/optimize-services/uiux/Group 1000005709.png";
import {
  premiumIcon,
  downarrow,
  uparrow,
  gamedev,
  qadev,
  uiuxdev,
  websitedev,
  frame5, leader, technology, keyIcon, mobiledev
} from "../../../common/images";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules

const UiuxDevComponent = () => {
  const contentArray = [
    {
      text: "Apple devices have been leading the electronic market for the longest time. The quality they provide has remained unbeaten for years now. And therefore your presence on the Apple App Store would mean a gateway to the clientele that subscribes for high-end products and services. iOS puts you forth in an ecosystem that is potent enough to offer distinguished business opportunities. We use the latest technology, libraries, and open-source framework to make Applications that are Apple worthy. Now, we are stepping ahead with the use of AI and ML. The operational AI & ML platform for producing real-world applications at scale and speed. We have the masters of AI and ML techniques to craft tailored solutions.",
      image: main_img,
    },
    {
      text: "Android is no alien term in today’s world. The global reach of the Android platform gives you enough reasons to institute an android app for your enterprise. Gaining traction through Android Apps has become a go-to marketing and relationship building strategy because a major crowd is wedged to Android. VSPLE has got a complete and trusted solution for you if you are looking for skilled Mobile App developers. Our team of experts researches aggressively to own the niche before entering into the design and development phase. Our App structure is simple yet meticulously functional; exactly as you would like it to be. Put us to work if the first thing you want is an Android Mobile app.",
      image: main_img1,
    },
    {
      text: "Android is no alien term in today’s world. The global reach of the Android platform gives you enough reasons to institute an android app for your enterprise. Gaining traction through Android Apps has become a go-to marketing and relationship building strategy because a major crowd is wedged to Android. VSPLE has got a complete and trusted solution for you if you are looking for skilled Mobile App developers. Our team of experts researches aggressively to own the niche before entering into the design and development phase. Our App structure is simple yet meticulously functional; exactly as you would like it to be. Put us to work if the first thing you want is an Android Mobile app.",
      image: main_img2,
    },
  ];

  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Discovery Phase: Understanding Your Vision
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `We kick off the design journey by immersing ourselves in your goals, target audience, and brand essence. Through collaborative workshops and discussions, we gain valuable insights that lay the foundation for a tailored design strategy.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Market and User Research
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Thorough market analysis and user research help us comprehend industry trends and user behaviors. This data-driven approach ensures that our designs not only align with your brand but also resonate with your audience.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wireframing and Conceptualization
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `With a deep understanding of your requirements, we move on to creating wireframes that outline the skeletal structure of your product. This phase focuses on layout, information architecture, and user flow, providing a blueprint for the design.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Prototyping for Interaction
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Bringing the wireframes to life, we develop interactive prototypes that simulate the user experience. This allows for early testing and feedback, ensuring that the final product meets both your expectations and user needs.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Visual Design, Testing & Feedback
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Once the prototype is approved, our creative team steps in to craft visually stunning designs. From color schemes to typography, we meticulously design every element to reflect your brand identity while enhancing user engagement. Real users are invited to interact with the prototype, and their feedback is invaluable in refining the design.`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question: "What is UI/UX design, and why is it important?",
      answer:
        "UI (User Interface) design focuses on the look and feel of the product, including its visual elements, layout, and interaction design. UX (User Experience) design, on the other hand, deals with the overall experience a user has with a product, encompassing usability, accessibility, and satisfaction. Together, UI/UX design ensures that a product not only looks good but also provides a seamless and satisfying user experience, leading to increased user engagement and retention.",
      open: true,
    },
    {
      question: "What steps do you take in the UI/UX design process?",
      answer: "Research and Analysis: Understanding user needs, market trends, and competitor analysis Wireframing: Creating low-fidelity sketches or wireframes to outline the layout and structure of the interface Prototyping: Developing interactive prototypes to visualize the user flow and test usabilityVisual Design: Applying visual elements such as color schemes, typography, and imagery to enhance the aesthetic appeal User Testing: Gathering feedback from real users to identify pain points and iterate on the design.",
      open: false,
    },
    {
      question:
        "How do you ensure that the UI/UX design aligns with our brand identity and goals?",
      answer: "We begin by conducting thorough research to understand your brand values, target audience, and business objectives. We then integrate your brand elements such as colors, fonts, and imagery into the design while ensuring consistency and coherence across all touchpoints. Our goal is to create a design that not only reflects your brand identity but also helps achieve your strategic goals.",
      open: false,
    },
    {
      question:
        "What tools and technologies do you use for UI/UX design?",
      answer: "Wireframing and Prototyping: Sketch, Adobe XD, Figma, InVision Visual Design: Adobe Photoshop, Adobe Illustrator, Sketch User Testing: UsabilityHub, UserTesting, Maze",
      open: false,
    },
    {
      question:
        "How do you approach mobile responsiveness and cross-platform compatibility in UI/UX design?",
      answer: "We adopt a mobile-first approach, prioritizing the design for smaller screens and then scaling up for larger devices. Our designs are responsive, meaning they adapt seamlessly to different screen sizes and resolutions. We also conduct thorough testing across various devices and platforms to ensure a consistent and optimized experience for all users.",
      open: false,
    },
    {
      question:
        "How do you measure the success of UI/UX design?",
      answer: "Success metrics may vary depending on the project goals, but common indicators include:User Engagement: Tracking metrics such as time on page, bounce rate, and click-through rates. User Satisfaction: Gathering feedback through surveys, interviews, or usability testing.Conversion Rates: Monitoring the percentage of users who complete desired actions such as sign-ups or purchases.Retention Rates: Assessing the percentage of users who return to the product over time.",
      open: false,
    },
    {
      question:
        "Can you provide examples of your past UI/UX design projects?",
      answer: "Certainly! We have a portfolio showcasing our previous work across various industries and project types. Feel free to explore our portfolio to see examples of our design process, outcomes, and client satisfaction.These FAQs address common inquiries related to UI/UX services and provide insights into the process, methodology, and outcomes associated with UI/UX design projects.",
      open: false,
    },
  ]);
  const carouselImages = [
    second,
    serviceImg,
    first,
    third,
    carousel2,
    main_img,
  ];
  const [serviceImg2, setServiceImg2] = useState(carouselImages[0]);

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
  const handleServiceImageClick = (url) => {
    const imageContainer = document.querySelector(".image-container");
    imageContainer.style.transform = "translateX(100%)"; // Slide out the current image
    setTimeout(() => {
      setIndex(url); // Set the new image URL
      imageContainer.style.transform = "translateX(0)"; // Slide in the new image
    }, 500); // Adjust the timeout to match the transition duration (0.5s)
  };
  return (
    <div>
      <div className="container">
        <div
          className="hidden header row align-items-center "
        >
          <div className=" col-md-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h2 className="">
                UI/UX
                <br />
                Designing
              </h2>
              <p>
                At Vsple Technologies, we redefine digital experiences through cutting-edge UI/UX design. Our dedicated team of experts combines creativity and technical proficiency to elevate your digital presence. Discover how our UI/UX services can transform your vision into a captivating and user-friendly reality.
              </p>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/contact-us">Talk To An Expert &nbsp;
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
          <div className="col-md-6 d-flex justify-content-center">
            <img className="qa-anime" src={qa} width={"100%"} alt="" />
          </div>
        </div>
        <div className="container key-feature-div hidden margin5 p-0">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-6 text-center">
              <img src={group5369} width={"80%"} alt="" />
            </div>
            <div className=" key-text-div col-md-12 col-sm-12 col-lg-6 d-flex align-items-start justify-content-end">
              <div className="main-text-service m-0">
                <br />
              <div className="center">
                <span>Unlocking Success</span>
                <h2 className="">
                  Partnering with Vsple <br /> Technologies
                </h2>
              </div>
                <ul className="ps-4 mt-3">
                  <li className="active-li">
                    Strategic Design Thinking
                  </li>
                  <p>Our approach goes beyond aesthetics. We align every design element with your business goals, ensuring a seamless blend of functionality and aesthetics.</p>
                  <hr />
                  <li className="active-li">
                    User-Centric Solutions
                  </li>
                  <p>   Putting your users first is our mantra. We create interfaces that resonate with your audience, enhancing user satisfaction and engagement.</p>
                  <hr />
                  <li className="active-li">
                    Innovative Concepts
                  </li>
                  <p>   Stay ahead of the curve with our innovative design concepts. We bring fresh ideas to the table, ensuring your digital presence stands out in the competitive landscape.</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container  hidden">
          <div className="h-journey d-flex justify-content-center text-center hidden howWorks" >
            <div className="p-journey">
              <span>Understanding UI/UX Design Better</span>
              <h5>UX is how it works,   UI is how it looks</h5>
              <p>
                At Vsple Technologies, we are passionate about crafting digital experiences that seamlessly blend UX functionality with UI aesthetics. In the dynamic realm of digital experiences, UI and UX stand as pillars that determine the success of any product. Let's delve into the core concepts:
              </p>
            </div>
          </div>
          <img className="web-model" src={howWorks} width={'100%'} alt="" />
        </div>
      </div>
      <div className="h-leader web-model">
        <div className="container hidden">
          <div className="h-leader-row row pt-5 pb-5">
            <div className=" col-md-6 col-sm-12 col-lg-6 ">
              <div className="p-leader mt-5">
                <span>Technologies</span>
                <h5>Tech Stack we use</h5>
                <p>
                In UI/UX design projects, a diverse tech stack is employed to streamline the creation of visually appealing and user-friendly interfaces. Design tools like Sketch, Adobe XD, or Figma are utilized for wireframing, prototyping, and creating mockups, enabling designers to iterate rapidly and collaborate effectively with stakeholders
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className=" img">
                <img
                  src={ccc1}
                  alt=""
                  width={"100%"}
                  style={{marginLeft:'10%'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container technology-div hidden">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6"></div>
          <div className="col-md-6 col-sm-12 col-lg-6"></div>
        </div>
      </div>
      <div className="container key-feature-div hidden " >
        <div className="row">
          <div className=" key-text-div col-md-12 col-sm-12 col-lg-6 d-flex align-items-start justify-content-center">
            <div className="key-text">
              <div className="center">
              <h5 className="mb-3">Our UI/UX Design Process</h5>
              <span>How We Design For Our Clients
              </span>
              </div>
              <div className="accordion">
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div
                      className="accordion-title"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setActiveIndex(index === activeIndex ? null : index)
                      }
                    >
                      {item.title}
                    </div>
                    <div
                      className={`accordion-content ${index === activeIndex ? "active" : ""
                        }`}
                      style={{
                        maxHeight: index === activeIndex ? "140px" : "0",
                        display: "flex",
                      }}
                    >
                      {/* <vr
                        className="me-3"
                        style={{
                          height: "150px",
                          border: ".5px solid white",
                        }}
                      ></vr> */}
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex align-items-start justify-content-center">
            <img src={group5381} width={"90%"} alt="" />
          </div>

        </div>
      </div>
      <div className="miniportfolio container mt-5 hidden">
        <h5>Bytes to Brilliance: Software Development Portfolio</h5>
        <div className="parent">
        <div className="child1">
            <img src={pic} width={"100%"} alt="" />
            <div className="pt-4 px-3">
              <span>Crosso - TicTacToe</span>
              <p className="my-2">
                TicTacToe is played by two players on a grid of three-by-three, who alternately place the marks X (FIRE) and O (WATER) in one of the nine spaces in the grid. As there are no universal rules to who plays first. Players shortly discover the best play from both parties leading to a draw.
              </p>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/crosso-app-development">See More &nbsp;</a>
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
          <div className="child1">
            <img src={pic2} width={"100%"} alt="" />
            <div className="pt-4 px-3">
              <span>TradeMark - Cockpit</span>
              <p className="my-2">
                Trademark Cockpit - Empowering Trademark Research and Branding.
                This portal is developed to support trademark research and
                branding concepts. We delivered the website, and admin portal
                solution for this client. Developed with a focus on user
                experience and functionality, Trademark Cockpit offers a range
                of features and tools to support your trademark-related
                endeavours.
              </p>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/trademark-app-development">See More &nbsp;
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
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-8 col-sm-12 col-lg-8">
            <p style={{ textAlign: "start" }}>
              Whether you're embarking on a new project or seeking
              collaboration. <br />
              <span className="inner-join">
                Let's join forces to create something exceptional!
              </span>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 text-right">
            <div className="getin-button-in text-center">
              <div className="see-button">
                <a href="/contact-us">
                  Get In Touch &nbsp;
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
      </div>
      <div className="services-page my-5 container hidden web-model">
        <img src={premiumIcon} width={25} alt="" />
        <br />
        <span>Services</span>
        <h5 className="mb-0 ">Other Services</h5>
      </div>
      <div className="slider-div hidden web-model">
        <div className="sliderS container-fluid">
          <div className="slide-trackN">
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={gamedev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Mobile App Development
                </p>
                <p className="slider-title-p">
                  Assimilating Mobile App developed by our experts in your
                  business processes will reflect a pace at...
                </p>
                <a href="/mobile-app-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={qadev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Quality Assurance
                </p>
                <p className="slider-title-p">
                  At Vsple Technologies, quality is not a compromise it's a promise. Our dedicated QA experts meticulously...
                </p>
                <a href="/quality-assurance-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={gamedev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Mobile App Development
                </p>
                <p className="slider-title-p">
                  Assimilating Mobile App developed by our experts in your
                  business processes will reflect a pace at...
                </p>
                <a href="/mobile-app-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={qadev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Quality Assurance
                </p>
                <p className="slider-title-p">
                  At Vsple Technologies, quality is not a compromise it's a promise. Our dedicated QA experts meticulously...
                </p>
                <a href="/quality-assurance-services">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-div hidden mobile-model">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slideN ms-4 my-4">
              <div className="service-box-slider p-4">

                <p className="slider-title text-light">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slideN ms-4 mt-4">
              <div className="service-box-slider p-4">
              
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slideN ms-4 mt-4">
              <div className="service-box-slider p-4">
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slideN ms-4 mt-4">
              <div className="service-box-slider p-4">
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="sliderS container-fluid">
          <div className="slide-trackN">
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={gamedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={qadev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Quality Assurance
                </p>
                <p className="slider-title-p">
                  At Vsple Technologies, quality is not a compromise it's a promise. Our dedicated QA experts meticulously...
                </p>
                <a href="/quality-assurance-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={gamedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="faqs my-5 hidden">
        <div className="text-center">
          <h5 className="text-center  abc"> FAQ'S</h5>
        </div>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};
export default UiuxDevComponent;
