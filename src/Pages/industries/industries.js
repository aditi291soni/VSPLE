 import React, { useState } from "react";
import "./industries.css";
import Carousel from "react-bootstrap/Carousel";
import main2 from "../../assest/Group 1260.png";
import carousel2 from "../../assest/Group 1087 (1).png";
import carousel3 from "../../assest/Group 549.png";
import study from "../../assest/main-icons/Mask group (3).png";
import study2 from "../../assest/main-icons/Mask group (4).png";
import study3 from "../../assest/main-icons/Mask group (4).png";
import empowering from "../../assest/web-icons/Group (1).png";
import industries from "../../assest/web-icons/industry 1.png";
import study4 from "../../assest/main-icons/Mask group (5).png";
import health from "../../assest/main-icons/Group 1000004855.png";
import realState from "../../assest/main-icons/Group 1000005570 (1).png";
import eLearning from "../../assest/main-icons/Group 1000005571.png";
import sports from "../../assest/main-icons/Group 1000005572.png";
import bank from "../../assest/main-icons/Group 1000004874.png";
import dating from "../../assest/main-icons/Group 1000005573.png";
import logistic from "../../assest/main-icons/Group 1000005574.png";
import fintech from "../../assest/main-icons/Group 1000005575.png";
import successLader from "../../assest/web-icons/success-ladder(1) 1.png";
import benefits from "../../assest/main-icons/Rectangle 8108 (1).png";
import nextIcon from "../../assest/web-icons/hireqadev/Group 670.png";
import prevIcon from "../../assest/web-icons/hireqadev/Group 670 (1).png";
import disnextIcon from "../../assest/web-icons/hireqadev/Group 1057 (1).png";
import disprevIcon from "../../assest/web-icons/hireqadev/Group 1057 (2).png";
import insudtries_main from "../../assest/main-icons/Group 1000005040.png";
import { nexticon, previcon } from "../../common/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { LazyLoadImage, Placeholder } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assest/main-icons/services/qaSevices/imgonline-com-ua-compressed-EFTXYQnvHwSSHoG.jpg";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
const IndustriesComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const data = [
    <div className="flex-container">
      <div className="flex-box pt-4 pb-2">
        <a href="/healthcare-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={health} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>Health & Care</span>
              <p>
                Revolutionizing Healthcare: Innovating Solutions for a Healthier
                Tomorrow
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-box pt-4 pb-2">
        <a href="/sport-fitness-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={health} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>Sports & Fitness</span>
              <p>
                Fueling Excellence: Transforming Sports & Fitness through
                Innovation
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-box pt-4 pb-2">
        <a href="/real-estate-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={health} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>Real Estate</span>
              <p>Building Tomorrow's Real Estate Solutions Today</p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-box pt-4 pb-2">
        <a href="/e-learning-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={health} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>E-Learning</span>
              <p>
                Transforming Education: Pioneering Solutions for E-Learning
                Evolution
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>,
    <div className="flex-container">
      <div className="flex-box pt-4 pb-2">
        <a href="/banking-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={bank} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>Banking</span>
              <p>
                Revolutionizing Banking: Fusing Technology with Financial
                Excellence
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-box pt-4 pb-2">
        <a href="/dating-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={health} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>Dating</span>
              <p>
                Connecting Hearts, Innovating Futures: Redefining Dating
                Dynamics
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-box pt-4 pb-2">
        <a href="/fintech-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={health} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>Fintech</span>
              <p>
                Transforming Finance, Uniting Technology: Our Fintech Footprint
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex-box pt-4 pb-2">
        <a href="/transportation-logistics-technology-solutions">
          <div className="row">
            <div className="col-4">
              <img src={health} width={"75%"} alt="" />
            </div>
            <div className="col-7 text-start ms-2">
              <span>Logistics</span>
              <p>
                Revolutionizing Logistics: Innovating Pathways to Seamless
                Operations
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>,
  ];
  const handlePrevClick = () => {
    const abc = document.querySelector(".image-container");
    if (currentIndex > 0) {
      abc.style.transform = "translateX(140%)"; // Slide out the current image
      setTimeout(() => {
        // setIndex(url); // Set the new image URL
        setCurrentIndex(currentIndex - 1);
        abc.style.transform = "translateX(0%)"; // Slide in the new image
      }, 500);
    }
  };

  const handleNextClick = () => {
    const abc = document.querySelector(".image-container");
    if (currentIndex < data.length - 1) {
      abc.style.transform = "translateX(140%)"; // Slide out the current image
      setTimeout(() => {
        // setIndex(url); // Set the new image URL
        setCurrentIndex(currentIndex + 1);
        abc.style.transform = "translateX(0)"; // Slide in the new image
      }, 500);
    }
    // if (currentIndex < data.length - 1) {
    //   setCurrentIndex(currentIndex + 1);
    // }
  };

  const [index, setIndex] = useState(0);
  const maxIndex = 1;
  const handleSelect = (selectedIndex) => {
    console.log("prevIndex: " + selectedIndex);
    if (selectedIndex > maxIndex) {
      selectedIndex = maxIndex;
    }
    if (selectedIndex < 0) {
      selectedIndex = 0;
    }
    console.log("selectedIndex: " + selectedIndex);
    setIndex(selectedIndex);
  };
  return (
    <div className="containe">
      <div className="p-head container">
        <div className="row">
          <div className=" col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <img src={industries} width={"4%"} className="mb-1" alt="" />
              <br />
              <span>Industries</span>
              <h2 className="">
                Industries Served By <br />
                Vsple
              </h2>
              <p>
                At Vsple Technologies Pvt. Ltd., we take pride in our commitment
                to excellence in IT solutions and services. Our expertise spans
                across a wide range of industries, enabling us to deliver
                tailored technology solutions that drive growth, efficiency, and
                innovation for our clients. We believe in a customer-centric
                approach. We work closely with our clients in each industry to
                understand their unique challenges and goals. We then develop
                and implement customized IT solutions that address their
                specific needs, helping them stay competitive and achieve
                long-term success.
              </p>
              <div className="getin-button text-center"></div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 text-center">
          <LazyLoadImage
              PlaceholderSrc={placeholder}
              src={insudtries_main} width={"85%"}
              alt="Image Alt"
              loading="lazy"
              effect="blur"
            />
            {/* <div className="d-flex">
              <div className="row">
                <div className="col-6 mt-5 text-right">
                  <div className="">
                    <img src={study} width={"70%"} alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <img src={insudtries_main} width={"40%"} alt="" />
                    <br />
                    <img src={study3} width={"50%"} className="mt-3" alt="" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="image-container">{data[currentIndex]}</div> */}

      <div className="mt-5 container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4">
            <LazyLoadImage
              PlaceholderSrc={placeholder}
              src={study4}
              width={"95%"}
              alt="Image Alt"
              loading="lazy"
              effect="blur"
            />
          </div>
          <div className=" col-md-12 col-sm-12 col-lg-8 d-flex justify-content-center mt-2">
            <div className="main-text-service">
              <img src={empowering} width={"4%"} className="mb-1" alt="" />
              <br />
              <span>Empowering Diverse Horizons</span>
              <h2 className="">Innovation Meets Every Industry</h2>

              <p>
                Whether you're a well-established corporation or a startup in
                any of these industries, Vsple Technologies Pvt. Ltd. is your
                reliable partner for transformative IT solutions. We have
                designed and developed digital gears for a wide range of
                industries. Our strength lies in our proficiency in developing
                stuff as per the country, region, and city.
              </p>

              <div className="image-contain  web-model">
                <Carousel activeIndex={index}>
                  <Carousel.Item>
                    <div className="flex-container">
                      <div className="flex-box pt-4 pb-2">
                        <a href="/healthcare-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={health} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Health & Care</span>
                              <p>
                                Revolutionizing Healthcare: Innovating Solutions
                                for a Healthier Tomorrow
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/sport-fitness-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={sports} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Sports & Fitness</span>
                              <p>
                                Fueling Excellence: Transforming Sports &
                                Fitness through Innovation
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/real-estate-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={realState} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Real Estate</span>
                              <p>
                                Building Tomorrow's Real Estate Solutions Today
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/e-learning-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={eLearning} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>E-Learning</span>
                              <p>
                                Transforming Education: Pioneering Solutions for
                                E-Learning Evolution
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="flex-container">
                      <div className="flex-box pt-4 pb-2">
                        <a href="/banking-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={bank} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Banking</span>
                              <p>
                                Revolutionizing Banking: Fusing Technology with
                                Financial Excellence
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/dating-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={dating} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Dating</span>
                              <p>
                                Connecting Hearts, Innovating Futures:
                                Redefining Dating Dynamics
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/fintech-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={fintech} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Fintech</span>
                              <p>
                                Transforming Finance, Uniting Technology: Our
                                Fintech Footprint
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/transportation-logistics-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={logistic} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Logistics</span>
                              <p>
                                Revolutionizing Logistics: Innovating Pathways
                                to Seamless Operations
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
                {/* <button disabled={index === 0} onClick={() => handleSelect(index-1)}>
              {index === 0 ? 'disabled Previous' : 'Previous'}
              </button> */}
                {/* disabled={index === maxIndex} */}
                {/* {index === maxIndex ? 'disabled Next' : 'Next'} */}
                <div className="mt-3 w-100 text-center">
                  <img
                    width={"8%"}
                    onClick={() => handleSelect(index - 1)}
                    src={index === 0 ? disprevIcon : prevIcon}
                    alt=""
                  />
                  <img
                    className="ms-4"
                    width={"8%"}
                    onClick={() => handleSelect(index + 1)}
                    src={index === maxIndex ? disnextIcon : nextIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="image-contai  mobile-model">
                <Swiper
                  centeredSlides={true}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper p-0"
                  autoplay={{ delay: 3000, disableOnInteraction: true }}
                >
                  <SwiperSlide>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/healthcare-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={health} width={"50%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>Health & Care</span>
                            <p>
                              Revolutionizing Healthcare: Innovating Solutions
                              for a Healthier Tomorrow
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/sport-fitness-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={sports} width={"75%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>Sports & Fitness</span>
                            <p>
                              Fueling Excellence: Transforming Sports & Fitness
                              through Innovation
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/real-estate-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={realState} width={"75%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>Real Estate</span>
                            <p>
                              Building Tomorrow's Real Estate Solutions Today
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/e-learning-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={eLearning} width={"75%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>E-Learning</span>
                            <p>
                              Transforming Education: Pioneering Solutions for
                              E-Learning Evolution
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/banking-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={bank} width={"75%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>Banking</span>
                            <p>
                              Revolutionizing Banking: Fusing Technology with
                              Financial Excellence
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/dating-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={dating} width={"75%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>Dating</span>
                            <p>
                              Connecting Hearts, Innovating Futures: Redefining
                              Dating Dynamics
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/fintech-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={fintech} width={"75%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>Fintech</span>
                            <p>
                              Transforming Finance, Uniting Technology: Our
                              Fintech Footprint
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="flex-box pt-4 pb-2">
                      <a href="/transportation-logistics-technology-solutions">
                        <div className="row">
                          <div className="col-3">
                            <img src={logistic} width={"75%"} alt="" />
                          </div>
                          <div className="col-8 text-start ms-2">
                            <span>Logistics</span>
                            <p>
                              Revolutionizing Logistics: Innovating Pathways to
                              Seamless Operations
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* <div className="web-model toggle-icon">
                <div className="prev-button">
                  <img
                    onClick={() => swiper.slideNext()}
                    src={previcon}
                    width={"100%"}
                    alt=""
                  />
                </div>
                <div className="next-button">
                  <img
                    onClick={handleNextClick}
                    src={nexticon}
                    width={"100%"}
                    alt=""
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-8 ">
            <p style={{ textAlign: "left" }}>
              Get In Touch
              <br />
              <span className="inner-join">
                Contact us today to discuss how we can empower your business
                with cutting-edge technology.
              </span>
            </p>
          </div>
          <div className="col-md-4">
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
      <div className="mt-5 container">
        <div className="row">
          <div className=" col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <img src={successLader} width={"6%"} className="mb-1" alt="" />
              <br />
              <span>Unlocking Success</span>
              <h2 className="">
                Partnering with Vsple <br /> Technologies
              </h2>
              <ul className="ps-3">
                <li>
                  Deep Industry Knowledge: We understand the unique challenges
                  and opportunities specific to each industry we serve, thanks
                  to our team's deep industry knowledge and experience.
                </li>
                <li>
                  Cutting-Edge Solutions: We offer cutting-edge IT solutions
                  that are designed to meet the evolving needs of various
                  industries.
                </li>
                <li>
                  Customized Services: Our services are always customized to
                  address the specific requirements of our clients within each
                  sector.
                </li>
              </ul>
              {/* <div className="getin-button text-center">
                <div className="see-button">
                  <a>Discover Me &nbsp;</a>
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
              </div> */}
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 text-center">
            <img src={benefits} width={"85%"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesComponent;
