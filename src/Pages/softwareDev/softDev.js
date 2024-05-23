import React, { useState } from "react";
import "./softDev.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import service from "../../assest/main-icons/Group 2148.png";
import pic from "../../assest/web-icons/websitedevelopment/Pic.png";
import pic2 from "../../assest/web-icons/websitedevelopment/Pic (1).png";
import webdev from "../../assest/developer (1) 1.png";
import appleLogo from "../../assest/main-icons/Group 1410.png";
import androidLogo from "../../assest/main-icons/android (1) 1.png";
import watchLogo from "../../assest/main-icons/smart-watch 1.png";
import main_img from "../../assest/main-icons/Group 825 (1).png";
import main_img1 from "../../assest/main-icons/Group 1000004859.png";
import main_img2 from "../../assest/main-icons/Group 2199.png";
import mobileView from "../../assest/main-icons/creative-reels-composition 1.png";
import Project from "../../assest/main-icons/project (1) 1.png";
import horse from "../../assest/main-icons/strategy (2) 1.png";
import sf from "../../assest/main-icons/Group 1000004981.png";
import { Link } from "react-router-dom";
import FAQ from "../../components/Faq";
import COMMON from "../../components/sliderOpen";
// import { carousel3 } from "../../common/images";
import carousel2 from "../../assest/Group 1087 (1).png";
import carousel3 from "../../assest/Group 549.png";
import serviceImg from "../../assest/icons/vsple_website_design_4/Group 830.png";
import first from "../../assest/icons/vsple_website_design_4/Group 833.png";
import second from "../../assest/icons/vsple_website_design_4/Group 834.png";
import third from "../../assest/icons/vsple_website_design_4/Group 832.png";
import moneyBag from "../../assest/main-icons/money-bag 1 (1).png";
import trnd from "../../assest/main-icons/trend 1.png";
import hr24 from "../../assest/main-icons/24-hours-service 1.png";
import ccc from "../../assest/main-icons/Group 1000005032.png";
import ccc1 from "../../assest/gifs/03software_development.gif";
import calvary_lap from "../../assest/main-icons/Group 1000002311 1.png";
import group2315 from "../../assest/main-icons/services/softwareServices/Group 549.png";
import group5369 from "../../assest/main-icons/services/Group 1000005404.png";
import frontendarc from "../../assest/main-icons/services/softwareServices/Group 1000005211.png";
import responsiveweb from "../../assest/main-icons/services/softwareServices/Frame.png";
import uiux from "../../assest/main-icons/services/softwareServices/Group.png";
import pwadev from "../../assest/main-icons/services/softwareServices/Group 1000002411.png";
import performanceop from "../../assest/main-icons/services/softwareServices/Isolation_Mode.png";
import testing from "../../assest/main-icons/services/softwareServices/Isolation_Mode (1).png";
import craftingcode from "../../assest/web-icons/websitedevelopment/Isolation_Mode.png";
// import craftingdigital from "../../assest/web-icons/websitedevelopment/Isolation_Mode (1).png";
import innovation from "../../assest/web-icons/websitedevelopment/Isolation_Mode (1).png";
import yoursuccess from "../../assest/web-icons/websitedevelopment/Isolation_Mode (2).png";
import designthat from "../../assest/web-icons/websitedevelopment/Isolation_Mode (3).png";
import tailordto from "../../assest/web-icons/websitedevelopment/Isolation_Mode (4).png";
import customercentric from "../../assest/web-icons/websitedevelopment/Layer_1.png";
import database from "../../assest/servicesImages/database.png";
import cms from "../../assest/servicesImages/cms.png";
import microservice from "../../assest/servicesImages/microservice.png";
import ecomerce from "../../assest/servicesImages/ecomerce.png";
import api from "../../assest/servicesImages/api.png";
import backend from "../../assest/servicesImages/backend.png";
import backendlogo from "../../assest/servicesImages/backend-icon.png";
import apilogo from "../../assest/servicesImages/api-icon.png";
import databaselogo from "../../assest/servicesImages/database-icon.png";
import ecomercelogo from "../../assest/servicesImages/ecomerce-icon.png";
import microservicelogo from "../../assest/servicesImages/microservice-icon.png";
import cmslogo from "../../assest/servicesImages/cms-icon.png";

import {
  premiumIcon,
  downarrow,
  uparrow,
  gamedev,
  qadev,
  uiuxdev,
  websitedev,
  frame5,
  leader,
  technology,
  keyIcon,
} from "../../common/images";

const SoftwareDevComponent = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const contentArray = [
    {
      text: "At Vsple Technologies, we are the backbone of your digital solutions. Our expert Backend Development team crafts robust, efficient, and secure server-side components that power your applications. From database management to server infrastructure, our full-stack approach ensures your software performs flawlessly. We architect the technology behind the scenes to create a seamless and responsive user experience on the front-end.",
      image: backend,
    },
    {
      text: "Our APIs (Application Programming Interfaces) are the bridges that connect your software to the world. Vsple Technologies excels at designing and developing custom APIs that facilitate data exchange, integration, and communication between your applications and external systems. With a focus on scalability and security, we ensure your software remains flexible and responsive, meeting the ever-evolving demands of the digital landscape.",
      image: api,
    },
    {
      text: "Databases are the treasure troves of your data, and at Vsple Technologies, we design and develop them with precision. Our Database Development services encompass creating, optimizing, and maintaining databases for your software. We ensure your data is organized, accessible, and secure, allowing your applications to retrieve and manipulate information efficiently.",
      image: database,
    },
    {
      text: "Content is king, and we're the knights that protect it. Vsple Technologies excels in Content Management System (CMS) Development, building custom solutions for content organization and publication. Whether it's a corporate website, a blog, or a news outlet, our CMS solutions offer user-friendly content management, making it easy for you to keep your online presence fresh and engaging.",
      image: cms,
    },
    {
      text: "E-commerce is at the heart of the digital economy, and Vsple Technologies is your expert partner in this realm. We specialize in E-commerce Development, creating online shopping platforms that drive growth and revenue. From product listings to secure payment gateways, we build user-friendly, feature-rich online stores that cater to both you and your customers.",
      image: microservice,
    },
    {
      text: "Android is no alien term in today’s world. The global reach of the Android platform gives you enough reasons to institute an android app for your enterprise. Gaining traction through Android Apps has become a go-to marketing and relationship building strategy because a major crowd is wedged to Android. VSPLE has got a complete and trusted solution for you if you are looking for skilled Mobile App developers. Our team of experts researches aggressively to own the niche before entering into the design and development phase. Our App structure is simple yet meticulously functional; exactly as you would like it to be. Put us to work if the first thing you want is an Android Mobile app.",
      image: ecomerce,
    },
  ];

  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Platform Versatility
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `We offer mobile app development for both iOS and Android platforms, ensuring your app reaches a broad audience. Whether you aim to target Apple enthusiasts or the Android user base, we have the expertise to create exceptional apps for both ecosystems.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User-Centric Design
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Our development process places a strong emphasis on user-centered design. We prioritize creating intuitive, engaging, and visually appealing interfaces that enhance the user experience. By understanding your target audience, we design apps that resonate with your users`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cross-Platform Solutions
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `We specialize in cross-platform app development using frameworks like React Native and Flutter. This approach allows you to save time and resources by maintaining a single codebase while delivering a consistent, native-like experience on multiple platforms.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ongoing Support and Maintenance
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Our commitment doesn't end at app launch. We provide continuous support, regular updates, and bug fixes to ensure your app remains up-to-date and performs flawlessly. This long-term partnership ensures your app's sustainability and user satisfaction.`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question: "What is Software Development?",
      answer:
        " Software development is the process of designing, coding, testing, and maintaining software applications and systems. It encompasses everything from mobile apps and web platforms to complex enterprise solutions. Our software development services are tailored to meet your unique needs.",
      open: true,
    },
    {
      question: "What programming languages and technologies do you use?",
      answer:
        "We have expertise in a wide range of programming languages and technologies, including but not limited to NodeJs, Java, Python, JavaScript, Laravel, and PHP. We select the most suitable technologies based on the specific requirements of your project.",
      open: false,
    },
    {
      question: "How do you ensure the security of the software you develop?",
      answer:
        "Security is a top priority for us. We follow best practices in secure coding, conduct regular security audits, and employ encryption and other security measures to safeguard your software against potential threats.",
      open: false,
    },
    {
      question:
        "What is the typical duration for a software development project?",
      answer:
        "The project duration varies depending on its complexity and scope. Simple projects can be completed in a matter of weeks, while larger, more complex projects may take several months. We provide detailed project timelines during the initial consultation.",
      open: false,
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer post-launch support to ensure your software continues to operate smoothly. Our maintenance services include bug fixes, updates, and enhancements as needed. We're committed to the long-term success of your software.",
      open: false,
    },
    {
      question: "Can you integrate with third-party systems or APIs?",
      answer:
        "Absolutely! We have experience in integrating software with various third-party systems, APIs, and services. Whether it's payment gateways, social media platforms, or other tools, we can ensure seamless connectivity.",
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
    setActiveDiv(url);

    setIndex(url); // Set the new image URL

    // Adjust the timeout to match the transition duration (0.5s)
  };
  // const internalImg = document.querySelector(".internal img");
  // internalImg.classList.add("fadeMain");
  // setTimeout(() => {
  //   internalImg.classList.remove("fadeMain");
  // }, 1000);
  return (
    <div>
      <div className="container">
        <div className="hidden header row align-items-center">
          <div className=" col-md-6 col-lg-6 col-12 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h2 className="">
                Software
                <br />
                Development
              </h2>
              <p>
                Empowering Your Vision Through Software Excellence. At Vsple, we
                turn your ideas into innovative software solutions. Our team of
                expert developers, designers, and engineers is dedicated to
                crafting custom-tailored software that meets your unique needs.
                Whether you're looking to enhance your business operations,
                create user-friendly apps, or implement robust solutions, we're
                here to transform your vision into reality. Explore the
                limitless possibilities of software development with us and take
                your business to new heights
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12 d-flex justify-content-center">
            <img src={group2315} width={"100%"} alt="" />
          </div>
        </div>
        <div className="services-page hidden container mt-5">
          <img className="mb-2" src={webdev} width={20} alt="" />
          <br />
          <span className="mb-0">Services</span>
          <h5>Software Development</h5>
        </div>
        <div className="custom-flicker web-model">
          <div
            className={`secondDiv ${activeDiv === 0 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(0)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={backendlogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>BACKEND</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 1 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(1)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={apilogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>APIS</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 2 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(2)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={databaselogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>DATABASE</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 3 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(3)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={cmslogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>CMS</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 4 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(4)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={microservicelogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>MICROSERVICE</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 5 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(5)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={ecomercelogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>E-COMMERCE</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 0 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(0)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={backendlogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>BACKEND</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 1 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(1)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={apilogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>APIS</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 2 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(2)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={databaselogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>DATABASE</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 3 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(3)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={cmslogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>CMS</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 4 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(4)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={microservicelogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>MICROSERVICE</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 5 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(5)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={ecomercelogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>E-COMMERCE</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content-div hidden container">
          <p className="content-main">{contentArray[index].text}</p>
          <div className="my-5 image-container text-center">
            <img src={contentArray[index].image} alt="" />
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center container">
          <div className="p-journey">
            <span>Approach</span>
            <h5>Our Approach to Software Development</h5>
          </div>
        </div>
        <div className="main-boxes hidden container">
          <div className="row">
            <div className="b">
              <img className="my-4" src={frontendarc} width={"15%"} alt="" />
              <h5>Understanding Your Vision</h5>
              <p>
                Before we start writing a single line of code, we take the time
                to understand your vision and business goals. We work closely
                with you to grasp the unique challenges you're facing and the
                outcomes you want to achieve.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={responsiveweb} width={"15%"} alt="" />
              <h5>Custom Tailored Solutions</h5>
              <p>
                One size doesn't fit all in the world of software. We specialize
                in crafting custom-tailored solutions. Whether it's a CMS
                application, APIs development, or a complex enterprise system,
                our solutions are designed with your business in mind.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={uiux} width={"15%"} alt="" />
              <h5>Agile Methodology</h5>
              <p>
                We embrace the agile development methodology, allowing us to
                adapt and respond to changing requirements quickly. This
                iterative approach ensures that we can incorporate your feedback
                throughout the development process, resulting in a solution that
                truly aligns with your evolving needs
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={pwadev} width={"15%"} alt="" />
              <h5>Transparency and Collaboration</h5>
              <p>
                We consider our clients as partners in the development journey.
                We maintain transparent communication, provide regular updates,
                and encourage collaboration to ensure you're always informed and
                engaged in the development process.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={performanceop} width={"15%"} alt="" />
              <h5>Quality Assurance</h5>
              <p>
                Quality is non-negotiable. Our dedicated quality assurance team
                meticulously tests every aspect of the software to ensure it's
                robust, secure, and reliable. We don't consider our job done
                until the software meets the highest standards.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={testing} width={"15%"} alt="" />
              <h5>Client-Centric Commitment</h5>
              <p>
                Our software is designed for scalability and adaptability,
                sparing you from expensive overhauls.Timely delivery is our
                pledge, so you can swiftly reap the benefits in a fast-paced
                tech landscape. We're dedicated to continuous support, keeping
                your software efficient and adaptable post-launch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-leader web-model">
        <div className="container">
          <div className="h-leader-row row py-5">
            <div className=" col-md-5 col-sm-12 col-lg-6">
              <div className="p-leader">
                <img className="my-1" src={technology} width={"20"} alt="" />
                <br />
                <span>Technologies</span>
                <h5>Tech Stack we use</h5>
                <p>
                  We harness a versatile and powerful technology stack to drive
                  excellence across a spectrum of development domains. Our
                  backend development relies on languages such as Python, Java,
                  and Node.js. We craft APIs using RESTful and GraphQL standards
                  to facilitate secure and efficient data exchange. In database
                  development, we leverage both relational databases like MySQL,
                  PostgreSQL, and SQL Server, and NoSQL databases such as
                  MongoDB, ensuring data is structured and accessible as needed.
                  Our proficiency extends to microservices architecture,
                  employing Docker and Kubernetes to enhance modularity and
                  scalability.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="img">
                <img
                  src={ccc1}
                  alt=""
                  width={"100%"}
                  style={{ marginLeft: "10%" }}
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
      <div className="container key-feature-div hidden">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center mt-5 ">
            <img src={group5369} width={"85%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-5 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              {/* <img className="my-3" src={keyIcon} width={"24"} alt="" /> */}
              <br />
              <h5>Features</h5>
              <span>Key Features</span>
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
                      className={`accordion-content ${
                        index === activeIndex ? "active" : ""
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
        </div>
      </div>
      <div className=" container m-feature-box hidden">
        <div className="row">
          <div className=" col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={craftingcode} className="mb-3" width={"9%"} alt="" />
              <h5>Crafting Digital Dreams</h5>
              <p>
                At Vsple, we're not just building websites; we're crafting
                digital dreams. Our team of skilled developers and designers
                takes your vision and transforms it into a captivating online
                reality. We're passionate about creating unique, user-centric
                websites that capture the essence of your brand.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={innovation} className="mb-3" width={"9%"} alt="" />
              <h5>Innovation as a Trademark</h5>
              <p>
                Innovation is our trademark. We're not here to follow trends;
                we're here to set them. Our commitment to staying at the
                forefront of technology means you get cutting-edge, future-ready
                websites that stand out in the digital landscape.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={yoursuccess} className="mb-3" width={"9%"} alt="" />
              <h5>Your Success, Our Mission</h5>
              <p>
                At Vsple, your success is our mission. We see your website as an
                integral part of your business growth. That's why we go above
                and beyond to ensure your online presence not only looks amazing
                but also drives results and boosts your brand's success.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={designthat} className="mb-3" width={"9%"} alt="" />
              <h5>Design That Speaks Volumes</h5>
              <p>
                Our design isn't just visually appealing; it speaks volumes
                about your brand. We believe that the design is the face of your
                business online, and we take pride in creating designs that
                leave a lasting impression on your visitors.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={tailordto} className="mb-3" width={"9%"} alt="" />
              <h5>Tailored to Your Unique DNA</h5>
              <p>
                Your business is unique, and your website should reflect that.
                We don't believe in one-size-fits-all solutions. Vsple
                custom-tailors each website to match the DNA of your brand,
                ensuring a distinct online identity that resonates with your
                audience.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img className="mb-3" src={customercentric} width={"9%"} alt="" />
              <h5>Customer-Centric Excellence</h5>
              <p>
                Excellence is our hallmark, and our clients are at the heart of
                everything we do. Our customer-centric approach ensures that
                you're not just a client; you're a partner in the journey to
                success. We're here to provide exceptional service, responsive
                support, and a dedication to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="miniportfolio container mt-5">
        <h5>Bytes to Brilliance: Software Development Portfolio</h5>
        <div className="parent">
          <div className="child1">
            <img src={pic} width={"100%"} alt="" />
            <div className="pt-4 px-3">
              <span>Calvary Temple Foundation</span>
              <p className="my-2">
                The project is built for a non-profit organization to perform
                and view users’ activity and take various types of donations. We
                delivered the website, backend APIs and admin portal solution
                for this client. This not only streamlined internal operations
                but also set the foundation for our client's digital
                transformation journey. The result was a highly efficient,
                data-driven system that met the unique needs of their non-profit
                organization.
              </p>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/calvary-app-development">See More &nbsp;</a>
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
                  <a href="/trademark-app-development">See More &nbsp;</a>
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
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to start your software development journey with us?
              <br />
              <span className="inner-join">
                Contact us today to discuss your project!
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
                  Discover the art of impactful web presence with Vsple
                  Technologies. Our expert web developers blend creativity...
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
                  Embark on a journey of immersive gaming experiences with Vsple
                  Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple
                  Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={qadev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Quality Assurance
                </p>
                <p className="slider-title-p">
                  At Vsple Technologies, quality is not a compromise it's a
                  promise. Our dedicated QA experts meticulously...
                </p>
                <a href="/quality-assurance-services">Read More</a>
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
                  Discover the art of impactful web presence with Vsple
                  Technologies. Our expert web developers blend...
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
                  Embark on a journey of immersive gaming experiences with Vsple
                  Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple
                  Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
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
                <p className="slider-title text-light">Website Development</p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple
                  Technologies. Our expert web developers blend creativity...
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
                  Embark on a journey of immersive gaming experiences with Vsple
                  Technologies. Our passionate team of developers and...
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
                  User experience is at the heart of everything we do. Vsple
                  Technologies specializes in crafting intuitive, visually...
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
        <h5 className="text-center  abc">FAQ'S</h5>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};
export default SoftwareDevComponent;
