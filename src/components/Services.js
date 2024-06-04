import React, { useState } from "react";
import "./service.css";
import service from "../assest/main-icons/Group 2148.png";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import webdev from "../assest/developer (1) 1.png";
import appleLogo from "../assest/main-icons/Group 1410.png";
import androidLogo from "../assest/servicesImages/android-icon.png";
import watchLogo from "../assest/main-icons/smart-watch 1.png";
import ios from "../assest/servicesImages/ios.png";
import android from "../assest/servicesImages/android.png";
import wearable from "../assest/servicesImages/wearable.png";
import websitedev from "../assest/servicesImages/sliding-services/website-development.png";
import uiuxdev from "../assest/servicesImages/sliding-services/ui-ux.png";
import qadev from "../assest/servicesImages/sliding-services/qualitydev.png";
import gamedev from "../assest/servicesImages/sliding-services/gamedev.png";
import main_img1 from "../assest/main-icons/Group 1000004859.png";
import main_img2 from "../assest/main-icons/Group 2199.png";
import mobileView from "../assest/main-icons/Group 1000005568 (1).png";
import Project from "../assest/main-icons/project (1) 1.png";
import horse from "../assest/main-icons/strategy (2) 1.png";
import faqsIcon from "../assest/web-icons/mobileappdevelopment/help 2.png";
import sf from "../assest/main-icons/Group 1000004981.png";
import { Link } from "react-router-dom";
import FAQ from "./Faq";
import carousel2 from "../assest/Group 1087 (1).png";
import carousel3 from "../assest/Group 549.png";
import serviceImg from "../assest/icons/vsple_website_design_4/Group 830.png";
import first from "../assest/icons/vsple_website_design_4/Group 833.png";
import second from "../assest/icons/vsple_website_design_4/Group 834.png";
import third from "../assest/icons/vsple_website_design_4/Group 832.png";
import {
  Android,
  AndroidOnClick,
  Hybrid,
  HybridOnClick,
  IOS,
  IOSOnClick,
  Wearable,
  WearableOnClick,
} from "../assest/icons/mobile-app-service";
import moneyBag from "../assest/main-icons/money-bag 1 (1).png";
import trnd from "../assest/main-icons/trend 1.png";
import hr24 from "../assest/main-icons/24-hours-service 1.png";
import ccc from "../assest/main-icons/Group 1000005032.png";
import ccc1 from "../assest/gifs/01mobile_app_development.gif";
import isolationmode4 from "../assest/main-icons/Isolation_Mode (4).png";
import isolationmode5 from "../assest/main-icons/Isolation_Mode (5).png";
import isolationmode6 from "../assest/main-icons/Isolation_Mode (6).png";
import isolationmode7 from "../assest/main-icons/Isolation_Mode (7).png";
import isolationmode8 from "../assest/main-icons/Isolation_Mode (8).png";
import craftingcode from "../assest/web-icons/mobileappdevelopment/Layer_1.png";
import appalchemist from "../assest/web-icons/mobileappdevelopment/Isolation_Mode.png";
import usercentric from "../assest/web-icons/mobileappdevelopment/Isolation_Mode (1).png";
import crossplateform from "../assest/web-icons/mobileappdevelopment/Layer_1 (1).png";
import appfairies from "../assest/web-icons/mobileappdevelopment/Isolation_Mode (2).png";
import enchantingResult from "../assest/web-icons/mobileappdevelopment/Isolation_Mode (3).png";
import wearablelogo from "../assest/servicesImages/wearable-icon.png";
import hybrid from "../assest/servicesImages/hybird.png";
import ioslogo from "../assest/servicesImages/apple-icon.png";
import hybridlogo from "../assest/servicesImages/hybrid-icon.png";
import { premiumIcon, downarrow, uparrow } from "../common/images";

import { frame5, leader, technology, keyIcon } from "../common/images";
const ServiceComponent = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const contentArray = [
    {
      text: "Our iOS app development services are tailored to harness the full potential of Apple's ecosystem, creating seamless, user-friendly applications for iPhones and iPads. With a team of experienced iOS developers, we craft apps that blend cutting-edge technology with elegant design, ensuring an exceptional user experience. Whether it's for business, gaming, healthcare, or any other domain, we transform your ideas into feature-rich iOS apps that stand out on the App Store. By staying updated with the latest iOS trends, we guarantee that your app remains compatible with new iOS versions, providing long-term value to your users.",
      image: ios,
    },
    {
      text: "Our Android app development services are designed to reach the vast Android user base. We create dynamic, versatile, and user-centric Android apps that cater to a wide range of industries. From concept to deployment, our team is dedicated to delivering apps that excel in performance and user engagement. We leverage the flexibility of the Android platform to build custom solutions that meet your business objectives. With a focus on compatibility and responsiveness, your app will function seamlessly on diverse Android devices and versions.",
      image: android,
    },
    {
      text: "In the era of wearable technology, we specialize in creating innovative apps that extend the capabilities of smartwatches and other wearables. Our wearable app development services empower businesses and individuals to stay connected, monitor health, and access information conveniently. We leverage the unique features of wearables, such as sensors and real-time data, to build apps that enhance user experiences. Whether it's fitness tracking, notifications, or data synchronization, we craft wearable apps that deliver value on the wrist.",
      image: wearable,
    },
    {
      text: "Our hybrid app development services offer a cost-effective and time-efficient solution to reach both iOS and Android users with a single codebase. By using cross-platform frameworks like React Native and Flutter, we develop apps that maintain a native look and feel while reducing development and maintenance costs. Hybrid apps are the answer to a broader audience reach and quicker time-to-market. We ensure that your hybrid app performs seamlessly across platforms, providing users with a consistent and engaging experience.",
      image: hybrid,
    },
    {
      text: "Our Android app development services are designed to reach the vast Android user base. We create dynamic, versatile, and user-centric Android apps that cater to a wide range of industries. From concept to deployment, our team is dedicated to delivering apps that excel in performance and user engagement. We leverage the flexibility of the Android platform to build custom solutions that meet your business objectives. With a focus on compatibility and responsiveness, your app will function seamlessly on diverse Android devices and versions.",
      image: android,
    },
    {
      text: "In the era of wearable technology, we specialize in creating innovative apps that extend the capabilities of smartwatches and other wearables. Our wearable app development services empower businesses and individuals to stay connected, monitor health, and access information conveniently. We leverage the unique features of wearables, such as sensors and real-time data, to build apps that enhance user experiences. Whether it's fitness tracking, notifications, or data synchronization, we craft wearable apps that deliver value on the wrist.",
      image: wearable,
    },
  ];
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Improved Patient Care
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Enhanced Patient Records: IT solutions facilitate the creation, management, and secure storage of electronic health records (EHR). This ensures that patient information is readily accessible, enabling healthcare providers to make informed decisions quickly.
      Telemedicine: Telehealth and telemedicine technologies allow remote patient consultations, enabling access to healthcare services in distant or underserved areas. Patients benefit from the convenience and timely medical care, especially in emergencies.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Streamlined Operations
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Efficient Workflows: IT systems optimize administrative and clinical workflows, reducing manual tasks, paperwork, and human error. This leads to smoother operations and increased staff productivity.
      Resource Management: Hospital management systems and scheduling software help healthcare institutions efficiently allocate resources, such as staff and equipment, resulting in cost savings and improved patient flow.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reduced Costs
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Telemedicine Savings: By reducing the need for physical office visits and hospitalizations, telemedicine helps cut down on travel costs for patients and healthcare institutions.
      Administrative Efficiency:  IT systems automate billing, insurance claims, and administrative tasks, reducing administrative overhead and revenue cycle inefficiencies.
      Preventive Care: Predictive analytics and data-driven insights enable healthcare providers to identify at-risk patients and implement preventive care strategies, reducing long-term treatment costs.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enhanced Decision-Making
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Data Analytics: IT solutions collect and analyze large volumes of healthcare data, providing valuable insights. Clinicians can make data-driven decisions to improve patient outcomes and population health.
      Research and Innovation: IT tools support medical research and development by providing access to vast datasets, accelerating medical breakthroughs and innovations.`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question: " What is the typical timeline for mobile app development?",
      answer:
        "The timeline for mobile app development can vary significantly depending on the complexity of your project. A simple app may take a few months, while more complex apps may require six months or longer. We'll work closely with you to provide a detailed project schedule based on your specific requirements.",
      open: true,
    },
    {
      question: "What platforms do you develop apps for?",
      answer:
        "We specialize in developing apps for both iOS and Android platforms. Whether you need an app for Apple devices, Android smartphones, or both, our team has the expertise to deliver high-quality solutions for a wide range of devices.",
      open: false,
    },
    {
      question: "Do you offer cross-platform app development?",
      answer:
        "Yes, we offer cross-platform app development using frameworks like React Native and Flutter. This approach allows you to save time and resources by maintaining a single codebase while delivering a consistent, native-like experience on multiple platforms.",
      open: false,
    },
    {
      question: "How do you ensure app security and data protection?",
      answer:
        "Security is a top priority. We follow best practices for app security and data protection, including encryption, secure authentication, and regular security audits. We also ensure compliance with relevant data protection regulations, such as GDPR.",
      open: false,
    },
    {
      question: "Can you assist with app store submission and optimization?",
      answer:
        "Absolutely, we can help you with app store submission and optimization. We'll ensure that your app meets the requirements of app stores like Apple's App Store and Google Play Store. Our ASO (App Store Optimization) services will also improve your app's visibility and rankings.",
      open: false,
    },
    {
      question: "What happens after the app is launched?",
      answer:
        "Our partnership doesn't end at the app's launch. We provide ongoing support, regular updates, and bug fixes to ensure your app remains up-to-date and performs flawlessly. We're committed to your app's long-term success.",
      open: false,
    },
  ]);
  const carouselImages = [
    second,
    serviceImg,
    first,
    third,
    carousel2,
    // main_img,
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
    setActiveDiv(url);
    // imageContainer.style.transform = "translateX(100%)";
    // setTimeout(() => {
    setIndex(url);
    //   imageContainer.style.transform = "translateX(0)";
    // }, 600);
  };
  return (
    <div>
      <div className="container">
        <div
          className="hidden header row align-items-center web-model"
          style={{ marginTop: "20vh" }}
        >
          <div className="col-md-6 d-flex justify-content-center">
            <img src={service} width={"90%"} alt="" />
          </div>
          <div className=" col-md-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service w-80">
              <h2 className="">
                Mobile App
                <br />
                Development
              </h2>
              <p>
                Ready to transform your business with a powerful mobile app? Our
                team of experts is here to guide you through the process and
                turn your vision into a reality. Let's create an exceptional
                mobile experience for your users and drive your business growth
                together.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hidden header row align-items-center mobile-model"
          style={{ marginTop: "7vh" }}
        >
          <div className="col-md-6 d-flex justify-content-center">
            <img src={service} width={"90%"} alt="" />
          </div>
          <div className=" col-md-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h2 className="">
                Mobile App
                <br />
                Development
              </h2>
              <p>
                Ready to transform your business with a powerful mobile app? Our
                team of experts is here to guide you through the process and
                turn your vision into a reality. Let's create an exceptional
                mobile experience for your users and drive your business growth
                together.
              </p>
            </div>
          </div>
        </div>
        <div className="services-page hidden mt-5">
          <img className="mb-2" src={webdev} width={20} alt="" />
          <br />
          <span className="mb-0">Services</span>
          <h5>Mobile App Development</h5>
        </div>
        <div className="custom-flicker  ">
          <div
            className={`secondDiv ${activeDiv === 0 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(0)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 0 ? (
                  <img src={IOSOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={IOS} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>iOS APP </h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 1 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(1)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 1 ? (
                  <img src={AndroidOnClick} width={"60vmax"} alt="" />
                ) : (
                  <img src={Android} width={"60vmax"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>ANDROID APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 2 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(2)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 2 ? (
                  <img src={WearableOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={Wearable} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>WEARABLE APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 3 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(3)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 3 ? (
                  <img src={HybridOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={Hybrid} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>HYBRID APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 0 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(0)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 0 ? (
                  <img src={IOSOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={IOS} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>iOS APP </h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 1 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(1)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 1 ? (
                  <img src={AndroidOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={Android} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>ANDROID APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 2 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(2)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {" "}
                {activeDiv === 2 ? (
                  <img src={WearableOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={Wearable} width={"60vw"} alt="" />
                )}{" "}
              </div>
              <div className="notActive col-8 ">
                <h5>WEARABLE APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 3 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(3)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 3 ? (
                  <img src={HybridOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={Hybrid} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>HYBRID APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 1 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(1)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 1 ? (
                  <img src={AndroidOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={Android} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>ANDROID APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div
            className={`secondDiv ${activeDiv === 2 ? "activeDiv" : ""}`}
            onClick={() => handleServiceImageClick(2)}
          >
            <div className="flicker-content row">
              <div className="col-4 text-center">
                {activeDiv === 2 ? (
                  <img src={WearableOnClick} width={"60vw"} alt="" />
                ) : (
                  <img src={Wearable} width={"60vw"} alt="" />
                )}
              </div>
              <div className="notActive col-8 ">
                <h5>WEARABLE APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content-div hidden container">
          <p className="content-main">{contentArray[index].text}</p>
          <div className="my-5 image-container">
            <img src={contentArray[index].image} width={"100%"} alt="" />
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            {/* <img src={frame5} width={"6%"} className="mb-1" alt="" /> */}
            <br />
            <span>Approach</span>
            <h5>
              Our Approach to Mobile App <br /> Development
            </h5>
          </div>
        </div>
        <div className="main-boxes hidden">
          <div className="row">
            <div className="b">
              <img className="my-4" src={ccc} width={"15%"} alt="" />
              <h5>Client-Centric Collaboration</h5>
              <p>
                We begin every project with a client-first mindset. We believe
                that effective communication and collaboration are the
                cornerstones of a successful app development journey. Our team
                works closely with you to understand your business objectives,
                target audience, and unique requirements. Your insights drive
                our creative process, ensuring that the end product aligns
                seamlessly with your vision
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={isolationmode4} width={"15%"} alt="" />
              <h5>Innovative Design and Development</h5>
              <p>
                Our approach marries creativity with technical expertise. Our
                design team crafts visually stunning interfaces that prioritize
                user experience and engagement. With an eye for detail, we
                ensure that your app not only looks great but also functions
                flawlessly. Our developers leverage the latest technologies and
                best practices to create a robust and scalable solution.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={isolationmode5} width={"15%"} alt="" />
              <h5>Platform Flexibility</h5>
              <p>
                We recognize the importance of reaching a diverse audience.
                That's why we offer mobile app development services for both iOS
                and Android platforms. Whether your goal is to captivate iPhone
                users or tap into the vast Android market, we have the skills
                and knowledge to deliver exceptional apps for both ecosystems.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={isolationmode6} width={"15%"} alt="" />
              <h5>Cross-Platform Efficiency</h5>
              <p>
                For those seeking efficiency and cost-effectiveness, our
                cross-platform development solutions are the answer. We harness
                the power of frameworks like React Native and Flutter to build
                apps that maintain a native look and feel across multiple
                platforms. This approach allows you to save time and resources
                while delivering a consistent user experience.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={isolationmode7} width={"15%"} alt="" />
              <h5>Quality Assurance</h5>
              <p>
                Quality is non-negotiable. Our dedicated quality assurance team
                meticulously tests every aspect of the software to ensure it's
                robust, secure, and reliable. We don't consider our job done
                until the software meets the highest standards.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={isolationmode8} width={"15%"} alt="" />
              <h5>Ongoing Support</h5>
              <p>
                Our relationship doesn't end at app launch. We provide
                continuous support, regular updates, and bug fixes to ensure
                that your app remains up-to-date and performs flawlessly. This
                long-term partnership ensures your app's sustainability and user
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-leader">
        <div className="container">
          <div className="h-leader-row row py-5">
            <div className=" col-md-6 col-sm-12 col-lg-6 ">
              <div className="p-leader">
                <img className="my-1" src={technology} width={"20"} alt="" />
                <br />
                <span>Technologies</span>
                <h5>Tech Stack we use</h5>
                <p>
                  At Vsple, we harness the power of cutting-edge technologies to
                  create exceptional mobile apps. Our commitment to staying at
                  the forefront of innovation is what sets us apart in the
                  dynamic world of app development. We utilize a stack of
                  advanced technologies, including React Native, Flutter, Swift,
                  Kotlin, and more, to ensure that your mobile app not only
                  meets but exceeds industry standards. By employing these
                  state-of-the-art frameworks and languages, we guarantee
                  seamless cross-platform functionality, stunning user
                  interfaces, and efficient back-end systems. With our
                  tech-driven approach, we turn your app ideas into
                  high-performance digital solutions that captivate users and
                  elevate your business. Whether it's iOS, Android, or hybrid
                  app development, we leverage the best tools available to
                  deliver results that make a difference in today's competitive
                  mobile landscape.
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
          <div className="col-md-6 col-sm-12 col-lg-6 text-right d-flex align-items-center justify-content-center">
            {/* <div className="pulse-button"></div> */}
            <img src={mobileView} width={"100%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-5 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <img className="my-3" src={keyIcon} width={"25"} alt="" />
              <h5>Features</h5>
              <span>Key Features</span>
              <div className="accordion w-100">
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
              <img src={craftingcode} width={"6%"} className="mb-3" alt="" />
              <h5>Crafting Dreams into Code</h5>
              <p>
                At Vsple, we are the architects of possibility. Just as a
                painter transforms a canvas into a masterpiece, we take your app
                vision and mold it into a functional, stunning reality. Your
                ideas are our palette, and we paint them with lines of code,
                turning dreams into digital brilliance.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={appalchemist} width={"7%"} className="mb-3" alt="" />
              <h5>The App Alchemists</h5>
              <p>
                Think of us as the alchemists of the app world. We don't turn
                base metals into gold, but we do transform your concepts into
                digital treasures. With a touch of creativity, a dash of
                innovation, and a pinch of technical expertise, we concoct apps
                that are pure magic.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={usercentric} width={"8%"} className="mb-3" alt="" />
              <h5>User-Centric Sorcery</h5>
              <p>
                Creating an app isn't magic; making it enchanting is. We blend
                technology with the art of user-centric design. Just like a
                magician knows their audience, we understand your users,
                ensuring that your app not only works flawlessly but leaves them
                spellbound.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={crossplateform} width={"9%"} className="mb-3" alt="" />
              <h5>Cross-Platform Conjurers</h5>
              <p>
                We're not just Android or iOS wizards; we're cross-platform
                conjurers. With the skill of a seasoned illusionist, we develop
                apps that seamlessly span multiple platforms, making sure your
                magic is accessible to everyone, everywhere.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={appfairies} width={"8%"} className="mb-3" alt="" />
              <h5>The App Fairies of Support</h5>
              <p>
                Our relationship with you doesn't end when the app is live; it's
                just the beginning. Like diligent fairies, we provide ongoing
                support and updates, ensuring your app continues to shine, free
                of glitches, in the ever-evolving tech forest.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img
                src={enchantingResult}
                width={"8%"}
                className="mb-3"
                alt=""
              />
              <h5>Enchanting Results</h5>
              <p>
                In our world of spells and code, we don't just make apps; we
                create enchanting experiences that have real-world impact. Your
                success is our magic potion, and we'll brew it with dedication,
                innovation, and a sprinkle of our digital fairy dust.
              </p>
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
                  Discover the art of impactful web presence with Vsple
                  Technologies. Our expert web developers blend creativity...
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
                  Embark on a journey of immersive gaming experiences with Vsple
                  Technologies. Our passionate team of developers and...
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
                  User experience is at the heart of everything we do. Vsple
                  Technologies specializes in crafting intuitive, visually...
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
                  At Vsple Technologies, quality is not a compromise it's a
                  promise. Our dedicated QA experts meticulously...
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
                  Discover the art of impactful web presence with Vsple
                  Technologies. Our expert web developers blend creativity...
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
                  Embark on a journey of immersive gaming experiences with Vsple
                  Technologies. Our passionate team of developers and...
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
export default ServiceComponent;
