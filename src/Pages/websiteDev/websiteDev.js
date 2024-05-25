import React, { useState } from "react";
// import "./service.css";
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
import serviceImg from "../../assest/icons/vsple website design (4)/Group 830.png";
import first from "../../assest/icons/vsple website design (4)/Group 833.png";
import second from "../../assest/icons/vsple website design (4)/Group 834.png";
import third from "../../assest/icons/vsple website design (4)/Group 832.png";
import moneyBag from "../../assest/main-icons/money-bag 1 (1).png";
import trnd from "../../assest/main-icons/trend 1.png";
import hr24 from "../../assest/main-icons/24-hours-service 1.png";
import ccc from "../../assest/main-icons/Group 1000005032.png";
import ccc1 from "../../assest/gifs/02website_development.gif";
import calvary_lap from "../../assest/main-icons/Group 1000002311 1.png";
import group2315 from "../../assest/main-icons/services/websiteSevices/Group 1000005522.png";
import group5369 from "../../assest/main-icons/services/websiteSevices/Group 1000005369.png";
import frontendarc from "../../assest/web-icons/websitedevelopment/Group.png";
import responsiveweb from "../../assest/web-icons/websitedevelopment/Group 1000002418.png";
import uiux from "../../assest/web-icons/websitedevelopment/Vector.png";
import pwadev from "../../assest/web-icons/websitedevelopment/Group 1000002411.png";
import performanceop from "../../assest/web-icons/websitedevelopment/Vector (1).png";
import testing from "../../assest/web-icons/websitedevelopment/Vector (2).png";
import craftingcode from "../../assest/web-icons/websitedevelopment/Isolation_Mode.png";
// import craftingdigital from "../../assest/web-icons/websitedevelopment/Isolation_Mode (1).png";
import innovation from "../../assest/web-icons/websitedevelopment/Isolation_Mode (1).png";
import yoursuccess from "../../assest/web-icons/websitedevelopment/Isolation_Mode (2).png";
import designthat from "../../assest/web-icons/websitedevelopment/Isolation_Mode (3).png";
import tailordto from "../../assest/web-icons/websitedevelopment/Isolation_Mode (4).png";
import customercentric from "../../assest/web-icons/websitedevelopment/Layer_1.png";
import customweblogo from "../../assest/servicesImages/customweb-icon.png";
import staticlogo from "../../assest/servicesImages/staticweb-icon.png";
import dynamiclogo from "../../assest/servicesImages/dynamicweb-icon.png";
import ecommercelogo from "../../assest/servicesImages/ecomerce-icon.png";
import pwalogo from "../../assest/servicesImages/pwa-icon.png";
import spalogo from "../../assest/servicesImages/spa-icon.png";
import customweb from "../../assest/servicesImages/custom-web.png";
import staticweb from "../../assest/servicesImages/static-web.png";
import dynamicweb from "../../assest/servicesImages/dynamic-web.png";
import ecomerceweb from "../../assest/servicesImages/ecomerce-web.png";
import pwaweb from "../../assest/servicesImages/pwa-web.png";
import spaweb from "../../assest/servicesImages/spa-web.png";
import {
  premiumIcon,
  downarrow,
  uparrow,
  gamedev,
  qadev,
  uiuxdev,
  websitedev,
  frame5, leader, technology, keyIcon, mobiledev
} from "../../common/images";

const WebsiteDevComponent = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const contentArray = [
    {
      text: "At Vsple Technologies Pvt. Ltd., we excel in crafting tailored web solutions that set your business apart. Our custom web development service is the epitome of uniqueness, designed to align perfectly with your brand identity. We believe that your website should be as distinct as your business. Our expert team collaborates closely with you to understand your goals and vision, and then meticulously designs and develops a website that reflects your unique essence. Whether it's an interactive portfolio or a comprehensive corporate site, we create custom web experiences that leave an indelible mark in the digital landscape.",
      image: customweb,
    },
    {
      text: "For a clean and professional online presence, our static web development service is an ideal choice. Static websites may appear simple, but their elegance lies in their straightforwardness. They are perfect for businesses seeking an efficient digital presence without the need for complex features. Using a blend of HTML and CSS, we create static websites that load lightning fast, making a lasting impression. Whether you require a minimalistic portfolio or an informative landing page, our static web development service ensures that your online presence is polished and professional.",
      image: staticweb,
    },
    {
      text: "When your business demands real-time interaction and data-driven content, our dynamic web development service rises to the occasion. We harness advanced technologies and databases to craft websites that are effortlessly updatable, ensuring a dynamic user experience. These websites are perfect for businesses that need to manage large volumes of content, user data, or frequently changing information. Whether you're launching a web portal, a news platform, or a site with interactive features, our dynamic web development expertise guarantees that your online presence remains vibrant and engaging.",
      image: dynamicweb,
    },
    {
      text: "Embark on your digital retail journey with confidence through our e-commerce web development service. We are the architects behind secure, user-friendly online stores. From detailed product listings and seamless shopping carts to robust payment gateways, our e-commerce websites are engineered for sales growth and streamlined shopping experiences. We deliver customized solutions that cater to your unique product offerings and business needs, making your online store a cornerstone of success.",
      image: ecomerceweb,
    },
    {
      text: "At Vsple Technologies Pvt. Ltd., we are at the forefront of Progressive Web App (PWA) development. PWAs merge the best of web and mobile applications, offering speedy, responsive, and immersive user experiences. These apps can be installed on users' devices, functioning seamlessly across various platforms. We craft PWAs that are intuitive, engaging, and future-ready, enabling you to connect with your audience effectively and offer them a unified experience.",
      image: pwaweb,
    },
    {
      text: "Modern businesses demand modern web experiences, and our Single Page Application (SPA) development service is designed to deliver precisely that. SPAs load the entire website on a single page, drastically reducing load times and providing interactive, dynamic user interfaces. Whether you are building a web app or a marketing site, our SPA development ensures your website is a sleek, efficient, and engaging platform, designed to captivate and retain your audience.",
      image: spaweb,
    },
  ];

  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobile-Responsive Solutions
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `   We understand that one size doesn't fit all. Our website development service is tailored to your specific needs, ensuring a unique, eye-catching design and functionality that aligns with your brand. Whether you require a simple informational website or a complex e-commerce platform, we've got you covered.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobile-Responsive Solutions
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `In today's mobile-centric world, having a responsive website is non-negotiable. We ensure that your website looks and functions flawlessly on a variety of devices, including smartphones and tablets. This mobile-responsive approach not only enhances user experience but also positively impacts your search engine rankings.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SEO Optimization
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: ` A beautiful website is only effective if it's easily discoverable. We integrate search engine optimization (SEO) best practices into the core of our development process. This ensures that your website is optimized for search engines, helping you rank higher in search results and attract more organic traffic.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ongoing Maintenance and Support
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: ` We don't just build your website and walk away. Our commitment to your success extends beyond the launch. Our website development service includes ongoing maintenance, updates, and technical support to keep your website running smoothly and securely. We're here to address any issues and make necessary improvements as your business grows.`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question: "What is website development?",
      answer:
        "Website development is the process of creating and building websites. It involves a combination of technical and creative skills to design, develop, and maintain a website that meets your specific needs and objectives. Our website development service ensures your online presence is not only visually appealing but also functional and efficient.",
      open: true,
    },
    {
      question: "Why is a professional website important for my business?",
      answer: "A professional website is your digital storefront and often the first point of contact for potential customers. It provides credibility, builds trust, and allows you to reach a wider audience. Our website development service ensures that your online presence reflects your brand and helps you stand out in a competitive digital landscape.",
      open: false,
    },
    {
      question:
        "What does your website development service include?",
      answer: "Our website development service is comprehensive and covers everything from initial design and development to ongoing maintenance and support. We create custom websites tailored to your unique requirements, ensuring they are user-friendly, mobile-responsive, and optimized for search engines.",
      open: false,
    },
    {
      question:
        "How long does it take to develop a website?",
      answer: "The timeline for website development varies depending on the complexity of the project. Simple websites can be completed in a few weeks, while more complex projects may take a few months. We will provide you with a clear project timeline during the consultation phase.",
      open: false,
    },
    {
      question:
        "What is the cost of website development?",
      answer: "The cost of website development can vary widely based on the scope of the project. Our pricing is flexible and depends on factors such as the size and functionality of the website. We offer transparent pricing and will provide you with a detailed quote after discussing your specific needs.",
      open: false,
    },
    {
      question:
        "Do you offer e-commerce website development services?",
      answer: "Yes, we specialize in e-commerce website development. Our team has extensive experience in creating secure and user-friendly online stores that can help you sell products or services efficiently.",
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
        <div
          className="hidden header row align-items-center"
        >
          <div className=" col-md-6 col-lg-6 col-12 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h2 className="">
                Website
                <br />
                Development
              </h2>
              <p>
                Elevate Your Online Presence with Expert Website Development. At
                Vsple, we specialize in crafting engaging and impactful websites
                that are more than just an online presence; they're a reflection
                of your brand's identity. Let's embark on a journey of
                innovation and excellence in web development together
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
          <h5>Website Development</h5>
        </div>
        <div className="custom-flicker web-model">
          <div
            className={`secondDiv ${activeDiv === 0 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(0)}
          >
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={customweblogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>CUSTOM WEB</h5>
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
                <img src={staticlogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>STATIC WEB</h5>
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
                <img src={dynamiclogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>DYNAMIC WEB</h5>
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
                <img src={ecommercelogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>E-COMMERCE WEB</h5>
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
                <img src={pwalogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>PWAS</h5>
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
                <img src={spalogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>SPAS</h5>
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
                <img src={customweblogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>CUSTOM WEB</h5>
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
                <img src={staticlogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>STATIC WEB</h5>
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
                <img src={dynamiclogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>DYNAMIC WEB</h5>
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
                <img src={ecommercelogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>E-COMMERCE WEB</h5>
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
                <img src={pwalogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>PWAS</h5>
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
                <img src={spalogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>SPAS</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>

        </div>
        <div className="service-content-div hidden container">
          <p className="content-main">{contentArray[index].text}</p>
          <div className="my-5 image-container">
            <img src={contentArray[index].image} width={"10%"} alt="" />
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center container">
          <div className="p-journey">
            {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br /> */}
            <span>Approach</span>
            <h5>Our Approach to website Development</h5>
          </div>
        </div>
        <div className="main-boxes hidden container">
          <div className="row">
            <div className="b">
              <img className="my-4" src={frontendarc} width={"15%"} alt="" />
              <h5>Understanding Your Vision</h5>
              <p>
                We start every web development project by thoroughly understanding your business goals, target audience, and industry. Our team collaborates closely with you to gather insights that inform the design and functionality of your website. This understanding serves as the foundation for a website that truly represents your brand.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={responsiveweb} width={"15%"} alt="" />
              <h5>Strategic Planning</h5>
              <p>
                With a clear understanding of your business, we create a strategic plan that outlines the project's scope, timeline, and goals. We set measurable objectives to ensure that the final product aligns with your business objectives, whether it's driving sales, increasing brand awareness, or providing a seamless user experience.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={uiux} width={"15%"} alt="" />
              <h5>Creative Design</h5>
              <p>
                Our web development approach places a strong emphasis on user experience and design. We create visually appealing, intuitive, and responsive websites that engage your audience and encourage them to take action. Our team ensures that your website is not only visually stunning but also easy to navigate, regardless of the device your users are using.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={pwadev} width={"15%"} alt="" />
              <h5>Custom Development</h5>
              <p>
                We understand that one size does not fit all. Our web development team specializes in custom solutions tailored to your specific needs. Whether you require an e-commerce platform, a content management system, or a web application, we'll build it from the ground up to match your requirements.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={performanceop} width={"15%"} alt="" />
              <h5>Quality Assurance</h5>
              <p>
                Quality is a top priority for us. We rigorously test every aspect of your website to ensure it functions flawlessly across various browsers and devices. Our QA process guarantees that your website performs reliably, loads quickly, and is free from any technical glitches.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={testing} width={"15%"} alt="" />
              <h5>Ongoing Support</h5>
              <p>
                Once your website is live, our commitment doesn't end. We offer ongoing support and maintenance services to keep your website up to date, secure, and optimized for peak performance. We are here to assist you whenever you need updates or improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-leader web-model">
        <div className="h-leader-row row p-5">
          <div className=" col-md-6 col-sm-12 col-lg-6">
            <div className="p-leader">
              <img className="my-1" src={technology} width={"20"} alt="" />
              <br />
              <span>Technologies</span>
              <h5>Tech Stack we use</h5>
              <p>
                We harness a versatile and powerful technology stack to drive
                excellence across a spectrum of development domains. Our backend
                development relies on languages such as Python, Java, and
                Node.js. We craft APIs using RESTful and GraphQL standards to
                facilitate secure and efficient data exchange. In database
                development, we leverage both relational databases like MySQL,
                PostgreSQL, and SQL Server, and NoSQL databases such as MongoDB,
                ensuring data is structured and accessible as needed. Our
                proficiency extends to microservices architecture, employing
                Docker and Kubernetes to enhance modularity and scalability.
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
                // height={"100%"}
                // style={{ objectFit: "contain" }}
              />
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
          <div className="col-md-6 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center">
            <img src={group5369} width={"90%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-5 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end">
            <div className="key-text">
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
        </div>
      </div>
      <div className="container m-feature-box hidden">
        <div className="row">
          <div className=" col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={craftingcode} className="mb-3" width={'9%'} alt="" />
              <h5>Crafting Digital Dreams</h5>
              <p>
                At Vsple, we're not just building websites; we're crafting digital dreams. Our team of skilled developers and designers takes your vision and
                transforms it into a captivating online reality. We're passionate about creating unique, user-centric websites that capture the essence of your
                brand.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={innovation} className="mb-3" width={'9%'} alt="" />
              <h5>Innovation as a Trademark</h5>
              <p>
                Innovation is our trademark. We're not here to follow trends; we're here to set them. Our commitment to staying at the forefront of technology means you get cutting-edge, future-ready websites that stand out in the digital landscape.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={yoursuccess} className="mb-3" width={'9%'} alt="" />
              <h5>Your Success, Our Mission</h5>
              <p>
                At Vsple, your success is our mission. We see your website as an integral part of your business growth. That's why we go above and beyond
                to ensure your online presence not only looks amazing but also drives results and boosts your brand's success.

              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={designthat} className="mb-3" width={'9%'} alt="" />
              <h5>Design That Speaks Volumes</h5>
              <p>
                Our design isn't just visually appealing; it speaks volumes about your brand. We believe that the design is the face of your business online,
                and we take pride in creating designs that leave a lasting impression on your visitors.

              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={tailordto} className="mb-3" width={'9%'} alt="" />
              <h5>Tailored to Your Unique DNA</h5>
              <p>
                Your business is unique, and your website should reflect that. We don't believe in one-size-fits-all solutions. Vsple custom-tailors each website
                to match the DNA of your brand, ensuring a distinct online identity that resonates with your audience.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img className="mb-3" src={customercentric} width={'9%'} alt="" />
              <h5>Customer-Centric Excellence</h5>
              <p>
                Excellence is our hallmark, and our clients are at the heart of everything we do. Our customer-centric approach ensures that you're not just a
                client; you're a partner in the journey to success. We're here to provide exceptional service, responsive support, and a dedication to your
                satisfaction.
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
                Trademark Cockpit - Empowering Trademark Research and Branding. This portal is developed to support trademark research and branding concepts. We delivered the website, and admin portal solution for this client. Developed with a focus on user experience and functionality, Trademark Cockpit offers a range of features and tools to support your trademark-related endeavours.
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
              Whether you're embarking on a new project or seeking
              collaboration.
              <br />
              <span className="inner-join">
                Let's join forces to create something exceptional!
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
                <img src={uiuxdev} width={75} alt="" />
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
                <img src={uiuxdev} width={75} alt="" />
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
                  Mobile App Development
                </p>
                <p className="slider-title-p">
                  Assimilating Mobile App developed by our experts in your
                  business processes will reflect a pace at...
                </p>
                <a href="/mobile-app-development-services">Read More</a>
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
        <h5 className="text-center  abc">FAQ'S</h5>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};
export default WebsiteDevComponent;
