import React, { useState } from "react";
import "./serviceSotware.css";
import service from "../../../assest/main-icons/Group 2148.png";
import webdev from "../../../assest/developer (1) 1.png";
import appleLogo from "../../../assest/main-icons/Group 1410.png";
import androidLogo from "../../../assest/main-icons/android (1) 1.png";
import watchLogo from "../../../assest/main-icons/smart-watch 1.png";
import main_img from "../../../assest/main-icons/Group 825 (1).png";
import main_img1 from "../../../assest/main-icons/Group 1000004859.png";
import main_img2 from "../../../assest/main-icons/Group 2199.png";
import mobileView from "../../../assest/main-icons/creative-reels-composition 1.png";
import Project from "../../../assest/main-icons/project (1) 1.png";
import horse from "../../../assest/main-icons/strategy (2) 1.png";
import sf from "../../../assest/main-icons/Group 1000004981.png";
import { Link } from "react-router-dom";
import FAQ from "../../../components/Faq";

import carousel2 from "../../../assest/Group 1087 (1).png";
import carousel3 from "../../../assest/Group 549.png";
import serviceImg from "../../../assest/icons/vsple_website_design_4/Group 830.png";
import first from "../../../assest/icons/vsple_website_design_4/Group 833.png";
import second from "../../../assest/icons/vsple_website_design_4/Group 834.png";
import third from "../../../assest/icons/vsple_website_design_4/Group 832.png";
import moneyBag from "../../../assest/main-icons/money-bag 1 (1).png";
import trnd from "../../../assest/main-icons/trend 1.png";
import hr24 from "../../../assest/main-icons/24-hours-service 1.png";

const ServiceSoftwareComponent = () => {
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
          <img src={Project} width={30} alt="" /> &nbsp; Project Management
        </div>
      ),
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: (
        <div className="h-feature-list">
          <img src={moneyBag} width={30} alt="" /> &nbsp; Financial Security
        </div>
      ),
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: (
        <div className="h-feature-list">
          <img src={trnd} width={30} alt="" /> &nbsp; Succesful Market
        </div>
      ),
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: (
        <div className="h-feature-list">
          <img src={hr24} width={30} alt="" /> &nbsp; 24/7 Support
        </div>
      ),
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
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
      <div className="container hidden">
        <div
          className="header row align-items-center"
          style={{ marginTop: "20vh" }}
        >
          <div className="col-md-6 d-flex justify-content-center">
            <img src={service} width={"90%"} alt="" />
          </div>
          <div className=" col-md-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h2 className="">Software Development</h2>
              <p>
                Collaborate with us and open the door to endless opportunities.
                Experience the splendor of our innovative solutions, backed by
                our unwavering commitment to delivering excellence. Join us on
                this transformative journey and embrace the digital future with
                Vsple.
              </p>
            </div>
          </div>
        </div>
        <div className="services-page hidden">
          <img src={webdev} width={20} alt="" />
          <span className="mb-0 mt-1">SERVICES</span>
          <span>Mobile App Development</span>
        </div>
        <div className="custom-flicker">
          <div className="firstDiv" onClick={() => handleServiceImageClick(0)}>
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={appleLogo} width={"60vw"} alt="" />
              </div>
              <div className="flicker-text col-md-8 ">
                <h5>IOS APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div className="secondDiv" onClick={() => handleServiceImageClick(1)}>
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={androidLogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>ANDROID APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div className="secondDiv" onClick={() => handleServiceImageClick(2)}>
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={watchLogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>WATCH APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
          <div className="secondDiv">
            <div className="flicker-content row">
              <div className="col-md-4 text-center">
                <img src={androidLogo} width={"60vw"} alt="" />
              </div>
              <div className="notActive col-md-8 ">
                <h5>HYBRID APP</h5>
                <span>DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content-div hidden">
          <p>{contentArray[index].text}</p>

          <div className="my-5 image-container">
            <img src={contentArray[index].image} width={"100%"} alt="" />
          </div>
        </div>
        <div className="technology-div hidden">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6"></div>
            <div className="col-md-6 col-sm-12 col-lg-6"></div>
          </div>
        </div>
        <div className="key-feature-div hidden">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 text-right">
              {/* <div className="pulse-button"></div> */}
              <img src={mobileView} width={"90%"} alt="" />
            </div>
            <div className="col-md-1 col-lg-1"></div>
            <div className=" key-text-div col-md-5 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
              <div className="key-text">
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
                        <vr
                          className="me-3"
                          style={{
                            height: "150px",
                            border: ".5px solid white",
                          }}
                        ></vr>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-feature-box hidden">
          <div className="row">
            <div className=" col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
              <div className="feature-box select p-4">
                <img src={horse} alt="" />
                <h5>Strategy</h5>
                <p>
                  Partner with VSPLE to unlock the potential of extraordinary
                  mobile app experiences across iOS, Watches, Android and Hybrid{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
              <div className="feature-box select p-4">
                <img src={horse} alt="" />
                <h5>Strategy</h5>
                <p>
                  Partner with VSPLE to unlock the potential of extraordinary
                  mobile app experiences across iOS, Watches, Android and Hybrid{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
              <div className="feature-box select p-4">
                <img src={horse} alt="" />
                <h5>Strategy</h5>
                <p>
                  Partner with VSPLE to unlock the potential of extraordinary
                  mobile app experiences across iOS, Watches, Android and Hybrid{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
              <div className="feature-box select p-4">
                <img src={horse} alt="" />
                <h5>Strategy</h5>
                <p>
                  Partner with VSPLE to unlock the potential of extraordinary
                  mobile app experiences across iOS, Watches, Android and Hybrid{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
              <div className="feature-box select p-4">
                <img src={horse} alt="" />
                <h5>Strategy</h5>
                <p>
                  Partner with VSPLE to unlock the potential of extraordinary
                  mobile app experiences across iOS, Watches, Android and Hybrid{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 ps-0 pe-0">
              <div className="feature-box select p-4">
                <img src={horse} alt="" />
                <h5>Strategy</h5>
                <p>
                  Partner with VSPLE to unlock the potential of extraordinary
                  mobile app experiences across iOS, Watches, Android and Hybrid{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-5">
            <div className="getin-button text-center">
              <div className="see-button">
                <a>Get In Touch &nbsp;</a>
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
          <div className="col-md-7">
            <p style={{ textAlign: "right" }}>
              Whether you're embarking on a new project or seeking
              collaboration. <br />{" "}
              <span className="inner-join">
                Let's join forces to create something exceptional!
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="services-page container hidden">
        <img src={webdev} width={20} alt="" />
        <h5 className="mb-0 mt-1">SERVICES</h5>
        <span>Other Service</span>
      </div>
      <div className="slider-div hidden">
        <div className="sliderS container-fluid">
          <div className="slide-trackN">
            <div className="slideN">
              <div className="service-box-slider p-4">
                {/* <div className="icon-box"></div> */}
                {/* <img src={sf} width={"50%"} alt="" /> */}
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="text-light">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider px-4">
                <p className=" slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="text-light">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider px-4">
                <p className=" slider-title text-light p-0 m-0">
                  UI/UX Designing
                </p>
                <p className="text-light">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider px-4">
                <p className=" slider-title text-light p-0 m-0">
                  Project Management
                </p>
                <p className="text-light">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider px-4">
                <p className=" slider-title text-light p-0 m-0">
                  UI/UX Designing
                </p>
                <p className="text-light">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider px-4">
                <p className=" slider-title text-light p-0 m-0">
                  Project Management
                </p>
                <p className="text-light">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider px-4">
                <p className=" slider-title text-light p-0 m-0">
                  Project Management
                </p>
                <p className="text-light">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
              </div>
            </div>
          </div>
        </div>
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
export default ServiceSoftwareComponent;
