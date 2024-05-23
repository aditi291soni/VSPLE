import React, { useState } from "react";
import "./qadev.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import main_img from "../../assest/main-icons/Group 825 (1).png";
import sf from "../../assest/main-icons/Group 1000004981.png";
import FAQ from "../../components/Faq";
import carousel2 from "../../assest/Group 1087 (1).png";
import serviceImg from "../../assest/icons/vsple_website_design_4/Group 830.png";
import first from "../../assest/icons/vsple_website_design_4/Group 833.png";
import second from "../../assest/icons/vsple_website_design_4/Group 834.png";
import third from "../../assest/icons/vsple_website_design_4/Group 832.png";
import ccc from "../../assest/main-icons/Group 1000005032.png";
import ccc1 from "../../assest/gifs/05Quality-Assurance.gif";
import qa from "../../assest/main-icons/Group 1000005033.png";
import group5369 from "../../assest/main-icons/services/qaSevices/Group 1000005403.png";
import {
  premiumIcon,
  downarrow,
  uparrow,
  gamedev,
  uiuxdev,
  websitedev,
} from "../../common/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const QaDevComponent = () => {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Comprehensive Testing Suites
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Experience robust and thorough testing methodologies tailored to your project needs. Our comprehensive testing suites cover functional, performance, security, and usability testing, ensuring your software meets the highest industry standards.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Automated Precision
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Embrace efficiency and accuracy with our automated testing solutions. Leverage cutting-edge tools like Selenium and Appium to expedite the testing process, identifying potential issues swiftly and allowing for rapid adaptation to evolving project requirements.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Agile Integration
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Seamlessly integrate Quality Assurance into your Agile development workflow. Our agile-centric approach, supported by tools like Jenkins and Travis CI, ensures continuous testing, quick feedback loops, and the flexibility to respond to changing project dynamics.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Transparent Collaboration
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Forge a collaborative partnership with VSple Technologies. Benefit from transparent communication and collaboration throughout the QA process. Our team works closely with you, providing insights, updates, and solutions to guarantee the success of your software projects. Elevate your software's quality assurance with VSple Technologies Pvt. Ltd. — where innovation meets reliability.`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question:
        "What does Quality Assurance (QA) mean in the context of Vsple Technologies Pvt. Ltd.?",
      answer:
        "Quality Assurance at Vsple Technologies is a meticulous process aimed at ensuring that the software solutions we deliver meet the highest standards of quality, performance, and reliability.",
      open: true,
    },
    {
      question:
        "How does QA contribute to the success of my project with Vsple Technologies?",
      answer:
        "QA is the backbone of our commitment to delivering top-notch software. It's the key to identifying and resolving potential issues early in the development cycle, ensuring a seamless and reliable end product.",
      open: false,
    },
    {
      question:
        "What is the unique approach of Vsple Technologies in the QA process?",
      answer:
        "At Vsple, we take a tailored approach to QA, aligning our strategies with the specific needs of your project. This ensures that the testing process is comprehensive and focused on the critical aspects of your software",
      open: false,
    },
    {
      question:
        "Can you highlight the types of testing covered by Vsple's QA services?",
      answer:
        "Our QA services encompass a spectrum of testing, including functional, performance, security, and usability testing. This holistic approach guarantees that your software meets not only the functional requirements but also performance and security standards.",
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
  // const internalImg = document.querySelector(".internal img");
  // internalImg.classList.add("fadeMain");
  // setTimeout(() => {
  //   internalImg.classList.remove("fadeMain");
  // }, 1000);
  return (
    <div>
      <div className="container">
        <div className="hidden header row align-items-center ">
          <div className=" col-md-6 col-lg-6 col-12 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h2 className="">
                Quality
                <br />
                Assurance
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
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/contact-us">Talk To An Expert &nbsp;</a>
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
          <div className="col-md-6 col-lg-6 col-12 d-flex justify-content-center">
            <img className="qa-anime" src={qa} width={"90%"} alt="" />
          </div>
        </div>
        <div className="container key-feature-div hidden p-0 mt-5">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-6 text-center">
              <img src={group5369} width={"90%"} alt="" />
            </div>
            <div className=" key-text-div col-md-12 col-sm-12 col-lg-6 d-flex align-items-start justify-content-end mt-5">
              <div className="key-text">
                {/* <img className="my-3" src={gameQa} width={'22'} alt=''/> */}
                <h5>Quality Assurance</h5>
                <span>
                  What Is The Need For <br /> Quality Assurance?
                </span>
                <p className="mt-3">
                  Quality Assurance is indispensable for ensuring the seamless
                  functionality, reliability, and security of software
                  applications. In a landscape marked by rapid technological
                  advancements, diverse user expectations, and stringent
                  regulatory requirements, QA serves as the bedrock of software
                  development. By rigorously testing applications at every stage
                  of the development life cycle, QA teams identify and rectify
                  potential issues, preventing the escalation of bugs that could
                  compromise the performance and user experience. This proactive
                  approach not only enhances the overall quality of the final
                  product but also proves cost-effective.
                </p>
                <p className="mt-3">
                  Moreover, QA is instrumental in upholding security standards
                  and regulatory compliance, safeguarding sensitive data, and
                  ensuring that applications adhere to industry regulations.
                  Beyond technical aspects, QA contributes to building trust and
                  reputation. Additionally, QA facilitates adaptability to
                  changing requirements, particularly in Agile methodologies,
                  ensuring that applications evolve seamlessly with the evolving
                  needs of businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center ">
          <div className="p-journey">
            <span>Process</span>
            <h5>Quality Assurance Cycle</h5>
          </div>
        </div>
        <div className="main-boxes hidden container">
          <div className="row">
            <div className="b">
              <img className="my-4" src={ccc} width={"15%"} alt="" />
              <h5>Requirement Analysis</h5>
              <p>
                The QA process at Vsple kicks off with a meticulous analysis of
                project requirements. Our expert QA team collaborates closely
                with stakeholders to gain a deep understanding of the software's
                functionalities, user expectations, and specific project goals.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={ccc} width={"15%"} alt="" />
              <h5>Test Planning</h5>
              <p>
                A comprehensive test plan is crafted, outlining the overall
                testing strategy, scope, resources, and schedule. This phase
                ensures that the QA process aligns seamlessly with project
                timelines and objectives, setting the foundation for a
                systematic and efficient testing cycle.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={ccc} width={"15%"} alt="" />
              <h5>Test Design</h5>
              <p>
                Building on the test plan, our skilled QA professionals design
                detailed test cases and scenarios. These documents outline the
                specific conditions, inputs, and expected outcomes for each
                test, ensuring a thorough examination of all aspects of the
                software's functionality, performance, and security.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={ccc} width={"15%"} alt="" />
              <h5>Test Execution</h5>
              <p>
                The designed test cases are executed meticulously, employing a
                combination of manual and automated testing methodologies. Our
                use of industry-leading tools and frameworks ensures a precise
                evaluation of the software, identifying any discrepancies
                between expected and actual outcomes.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={ccc} width={"15%"} alt="" />
              <h5>Defect Tracking and Reporting</h5>
              <p>
                Throughout the testing phase, any identified defects are
                systematically tracked and reported. This transparent approach
                allows for real-time communication, enabling quick resolution of
                issues. Our collaborative process ensures that clients are kept
                informed and engaged throughout the QA journey.
              </p>
            </div>
            <div className="b">
              <img className="my-4" src={ccc} width={"15%"} alt="" />
              <h5>Continuous Improvement</h5>
              <p>
                QA at Vsple is not just a process; it's a commitment to
                continuous improvement. Post-test analysis is conducted to
                identify areas for enhancement in both the QA process and the
                software itself. This iterative approach ensures that our QA
                practices evolve, staying ahead of industry standards and client
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-leader">
        <div className="h-leader-row row p-5">
          <div className=" col-md-6 col-sm-12 col-lg-6">
            <div className="p-leader">
              <span>Tool</span>
              <h5>Tech Stack we use</h5>
              <p className="pe-lg-5">
                At Vsple, our Quality Assurance services are underpinned by a
                state-of-the-art tech stack designed to elevate your software to
                unparalleled heights of precision and reliability. We deploy
                leading-edge tools such as Selenium, Jira, and Appium for
                automated testing, ensuring a swift and meticulous evaluation of
                your software's functionality. Our proficiency extends to
                performance testing, leveraging tools like Apache JMeter and
                LoadRunner to guarantee optimal system responsiveness under
                varying conditions. With a keen eye on user experience, we
                employ tools like UsabilityHub and UserTesting for comprehensive
                usability testing.
              </p>
              {/* <div className="see-button">
                <a href="/">See More &nbsp;</a>
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
              </div> */}
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <div className="img text-end">
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
      <div className="container technology-div hidden">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6"></div>
          <div className="col-md-6 col-sm-12 col-lg-6"></div>
        </div>
      </div>
      <div className="container key-feature-div hidden ">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 text-center">
            <img src={group5369} width={"90%"} alt="" />
          </div>
          <div className=" key-text-div col-md-6 col-sm-12 col-lg-6 d-flex align-items-start justify-content-center mt-5">
            <div className="key-text">
              {/* <img className="my-3" src={gameQa} width={'22'} alt=''/> */}
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
      {/* <div className=" container m-feature-box hidden">
        <div className="row">
          <div className=" col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={horse} alt="" />
              <h5>Crafting Dreams into Code</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={horse} alt="" />
              <h5>The App Alchemists</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={horse} alt="" />
              <h5>User-Centric Sorcery</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={horse} alt="" />
              <h5>Cross-Platform Conjurers</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={horse} alt="" />
              <h5>The App Fairies of Support</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
            <div className="feature-box select p-4">
              <img src={horse} alt="" />
              <h5>Enchanting Results</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div> */}
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
export default QaDevComponent;
