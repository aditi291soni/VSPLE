import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home1.css";
import {
  serviceImg,
  premiumIcon,
  support,
  success,
  rating,
  //getInTouch,
  main,
  main2,
  //main2,
  laptop,
  tech,
  BE,
  tq,
  inst,
  quo,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirdteen,
  fourteen,
  fifteen,
  sixteen,
  carousel2,
  carousel3,
  //  avatar,1
  avatar2,
  smile,
  review,
  smile2,
  //  smile3,
  like,
  like1,
  like2,
  left,
  right,
  angular,
  angular2,
  js,
  js2,
  react,
  react2,
  apple,
  //  apple2,
  android,
  android2,
  flutter,
  flutter2,
  //  khusi ,
  //   main,
} from "../common/images";

// import { useState } from "react";

const HomeComponent = () => {
  const [animate, setAnimate] = useState(false);
  const [expandedImg, setExpandedImg] = useState(first);
  const [Img, setserviceImg] = useState(serviceImg);
  const [selectedClient, setSelectedClient] = useState(1);
  // const carouselImages = [carousel3 , carousel2, third ,first , serviceImg , ]
  const carouselImages = [
    second,
    serviceImg,
    first,
    third,
    carousel2,
    carousel3,
  ];
  const [serviceImg2, setServiceImg2] = useState(carouselImages[0]);
  const [index, setIndex] = useState(0);

  const fadeInImage = () => {
    const internalImg = document.querySelector(".internal-img img");
    internalImg.classList.add("fade-in");
    setTimeout(() => {
      internalImg.classList.remove("fade-in");
    }, 1000);
  };

  const changeImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    fadeInImage();
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 8500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setServiceImg2(carouselImages[index]);
  }, [index]);
  const clients = [
    {
      id: 1,
      name: "Anuj Singh",
      description:
        "It was a pleasure to work with Vsple, and no doubts: I will make my next project with them. They are answered in short time and give good proposal to solve problems.",
      avatar: avatar2,
    },
    {
      id: 2,
      name: "Meraz Ahmed",
      description:
        "It was a pleasure to work with Vsple, and no doubts: I will make my next project with them. They are answered in short time and give good ",
      avatar: avatar2,
    },
    {
      id: 3,
      name: "Surbhi Sahu",
      description: "I am Pagal ek no ki",
      avatar: avatar2,
    },
    {
      id: 4,
      name: "Manish Sharma",
      description:
        "no doubts: I will make my next project with them. They are answered in short time and give good proposal to solve problems.",
      avatar: avatar2,
    },
    {
      id: 5,
      name: "Kartik Maithil",
      description: "It was a pleasure to work with Vsple, and no doubts",
      avatar: avatar2,
    },
    {
      id: 6,
      name: "Shweta Yadav",
      description:
        "It was a pleasure to work with Vsple, and no doubts: I will make my next project with them. They are answered in short time and give good proposal",
      avatar: avatar2,
    },

    // Add more clients here if needed
  ];
  useEffect(() => {
    setserviceImg(carousel3);
    const fadeInImage = () => {
      const internalImg = document.querySelector(".internal-img img");
      internalImg.classList.add("fade-in");
      setTimeout(() => {
        internalImg.classList.remove("fade-in");
      }, 3000);
    };
    fadeInImage();
  }, []);
  const handleAvatarClick = (clientId) => {
    const internalImg = document.querySelector(".testimonial img");
    internalImg.classList.add("active");
    setSelectedClient(clientId);
    setAnimate(true);
  };
  // const handleImageClick = (imageUrl) => {
  //   setExpandedImg(imageUrl);
  // };
  useEffect(() => {
    if (animate) {
      const animationTimer = setTimeout(() => {
        setAnimate(false);
      }, 1000);

      return () => clearTimeout(animationTimer);
    }
  }, [animate]);
  const handleServiceImageClick = (Url) => {
    setIndex(Url);

    // setServiceImg2(Url);
    const internalImg = document.querySelector(".internal-img img");
    internalImg.classList.add("fade-in");
    setTimeout(() => {
      internalImg.classList.remove("fade-in");
    }, 1000);
  };
  const handleImageClick = (img) => {
    setExpandedImg(img);
  };

  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value  );
    switch (index) {
      case 0:
        setExpandedImg(first);
        break;
      case 1:
        setExpandedImg(second);
        break;
      case 2:
        setExpandedImg(third);
        break;
      case 3:
        setExpandedImg(fourth);
        break;
      case 4:
        setExpandedImg(fifth);
        break;
      case 5:
        setExpandedImg(sixth);
        break;
      case 6:
        setExpandedImg(seventh);
        break;
      case 7:
        setExpandedImg(eight);
        break;
      case 8:
        setExpandedImg(nine);
        break;
      case 9:
        setExpandedImg(ten);
        break;
      case 10:
        setExpandedImg(eleven);
        break;
      case 11:
        setExpandedImg(twelve);
        break;
      case 12:
        setExpandedImg(thirdteen);
        break;
      case 13:
        setExpandedImg(fourteen);
        break;
      case 14:
        setExpandedImg(fifteen);
        break;
      case 15:
        setExpandedImg(sixteen);
        break;
      default:
        break;
    }
    document
      .querySelector(".side-img")
      .scrollTo(
        0,
        document.querySelector(".side-img img").offsetHeight * index
      );
  };

  const getImageIndex = (img) => {
    switch (img) {
      case first:
        return 0;
      case second:
        return 1;
      case third:
        return 2;
      case fourth:
        return 3;
      case fifth:
        return 4;
      case sixth:
        return 5;
      case seventh:
        return 6;
      case eight:
        return 7;
      case nine:
        return 8;
      case ten:
        return 9;
      case eleven:
        return 10;
      case twelve:
        return 11;
      case thirdteen:
        return 12;
      case fourteen:
        return 13;
      case fifteen:
        return 14;
      case sixteen:
        return 15;
      default:
        return 0;
    }
  };
  // useEffect(() => {
  //   const box1 = document.querySelector(".box1");
  //   const box2 = document.querySelector(".box2");
  //   const modifier = window.innerWidth / 520;

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     box1.style.clipPath = "circle(" + scrollY * modifier + "px at 0 0)";
  //     box2.style.clipPath = "circle(" + scrollY * modifier + "px at 100% 100%)";
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="main-content container">
            <div
              className="row align-items-center"
              style={{ marginTop: "210px" }}
            >
              <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                <img src={main2} width={400} alt="" />
              </div>
              <div className="col-md-5 col-sm-12 mt-5">
                <div className="main-text">
                  <h2>VIVID SPLENDID</h2>
                  <p>
                    We strives to create IT solutions that are not only visually
                    captivating but also surpass clients' expectations in terms
                    of excellence, quality, and innovation. Our intention to
                    stand out in the industry by offering vibrant and remarkable
                    digital experiences that leave a lasting positive impression
                    on our clients. We strives to create IT solutions that are
                    not only visually captivating but also surpass clients'
                    expectations in terms of excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row align-items-center">
            <div className="col-md-5 d-flex justify-content-end">
              <div className="main-text2">
                <h2 className="mb-3">
                  Top-Notch <br /> Mobile Apps
                </h2>
                <p>
                  Ready to transform your business with a powerful mobile app?
                  Our team of experts is here to guide you through the process
                  and turn your vision into a reality. Let's create an
                  exceptional mobile experience for your users and drive your
                  business growth together.
                </p>
              </div>
            </div>
            <div className="col-md-7 d-flex justify-content-left">
              <img src={carousel2} width={"100%"} alt="" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="row align-items-center"
            style={{ marginTop: "180px" }}
          >
            <div className=" col-md-5 d-flex justify-content-end">
              <div className="main-text2">
                <h2 className="mb-4">
                  Embrace The <br /> Digital Future
                </h2>
                <p>
                  Collaborate with us and open the door to endless
                  opportunities. Experience the splendor of our innovative
                  solutions, backed by our unwavering commitment to delivering
                  excellence. Join us on this transformative journey and embrace
                  the digital future with Vsple.
                </p>
              </div>
            </div>
            <div className="col-md-7 d-flex justify-content-start">
              <img src={carousel3} width={"80%"} alt="" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* <section>
        <div className="box box1">
         <img src={first} width={'100% !important'} alt="" />
        </div>
        <div className="box box2">
        <img src={first} width={'100% !important'}alt="" />        
        </div>        
      </section> */}
      <div className="services-section container">
        <div className="row">
          <div className="col-md-6 col-12 mt-5">
            <div className="service-box">
              <img
                src={premiumIcon}
                alt="premium"
                width={"30vmax"}
                className="icon-premium mb-1"
              />
              <span className="service-name d-block mt-1 mb-2">
                Premium Services
              </span>
              <span className="service-title">
                Mobile App <br /> development
              </span>
              <p className="service-para mt-2">
                Partner with VSPLE to unlock the potential of extraordinary
                mobile app experiences across iOS, Watches, Android and Hybrid
                platforms. Contact us today to witness the transformation of
                your app idea into a premium, user-centric reality. Let's create
                mobile app solutions that elevate your business and captivate
                your users!
              </p>
              <div className="services-button">
                <a href="/">View All Services &nbsp;</a>
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
          <div className="col-md-6 col-12">
            <div className="service-container d-flex justify-content-center align-items-center shadow">
              <div className="services-icons">
                <img
                  src={serviceImg2 === carousel3 ? flutter2 : flutter}
                  alt=""
                  width={83}
                  onClick={() => handleServiceImageClick(5)}
                  style={{
                    boxShadow:
                      serviceImg2 === carousel3
                        ? "1px 1px 10px rgb(97, 219, 251)"
                        : "",
                    borderRadius: serviceImg2 === carousel3 ? "40px" : "",
                  }}
                />
                <img
                  src={serviceImg2 === carousel2 ? angular2 : angular}
                  alt=""
                  width={83}
                  onClick={() => handleServiceImageClick(4)}
                  style={{
                    boxShadow:
                      serviceImg2 === carousel2 ? "1px 1px 10px red" : "",
                    borderRadius: serviceImg2 === carousel2 ? "40px" : "",
                  }}
                />
                <img
                  onClick={() => handleServiceImageClick(3)}
                  src={serviceImg2 === third ? js2 : js}
                  alt=""
                  style={{
                    boxShadow:
                      serviceImg2 === third
                        ? "1px 1px 10px rgb(60, 135, 58)"
                        : "",
                    borderRadius: serviceImg2 === third ? "40px" : "",
                  }}
                />
                <img
                  onClick={() => handleServiceImageClick(2)}
                  src={serviceImg2 === first ? react2 : react}
                  alt=""
                  style={{
                    boxShadow:
                      serviceImg2 === first
                        ? "1px 1px 10px rgb(97, 219, 251)"
                        : "",
                    borderRadius: serviceImg2 === first ? "40px" : "",
                  }}
                />
                <img
                  onClick={() => handleServiceImageClick(1)}
                  src={apple}
                  alt=""
                  style={{
                    boxShadow:
                      serviceImg2 === serviceImg ? "1px 1px 10px silver" : "",
                    borderRadius: serviceImg2 === serviceImg ? "40px" : "",
                  }}
                />
                <img
                  onClick={() => handleServiceImageClick(0)}
                  src={serviceImg2 === second ? android2 : android}
                  alt=""
                  style={{
                    boxShadow:
                      serviceImg2 === second ? "1px 1px 10px green" : "",
                    borderRadius: serviceImg2 === second ? "40px" : "",
                  }}
                />
              </div>
              <div className="internal-img">
                <img
                  src={serviceImg2}
                  style={{
                    width: "34vw",
                    height: "58vh",
                    objectFit: "cover",
                    borderRadius: "25px",
                  }}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container ">
        <div className="ico-4">
          <img src={quo} width={100} alt="" />
        </div>
        <div className="grid" style={{ maxWidth: "79%" }}>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="ico-1">
          <img src={BE} width={150} alt="" />
        </div>
        <div className="ico-2">
          <img src={tq} width={150} alt="" />
        </div>
        <div className="ico-3">
          <img src={inst} width={120} alt="" />
        </div>
      </div>
      <div className="indus-button my-5 text-center">
        <div className="see-button">
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
        </div>
      </div>
      <div className="container industries">
        <div className="row m-0 p-0 ">
          <div className="col-md-6 col-sm-12 col-lg-6">
            <div className="box shadow">
              <div className="row">
                <div className="col-8 me-0 pe-0">
                  <div className="main-img">
                    <img
                      id="expandedImg"
                      width={"100%"}
                      height={500}
                      objectFit={"cover"}
                      alt=""
                      src={expandedImg}
                    />
                  </div>
                </div>
                <div className="col-1 m-0 p-0">
                  <div className="range-slider">
                    <input
                      className="input-range"
                      orient="vertical"
                      type="range"
                      value={getImageIndex(expandedImg)}
                      onChange={handleSliderChange}
                      min="0"
                      max="15"
                      id="myRange"
                    />
                    <span className="range-value"></span>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="">
                    <div className="side-img">
                      <div>
                        <img
                          src={first}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(first)}
                          style={{ opacity: expandedImg === first ? 1 : 0.4 }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={second}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(second)}
                          style={{ opacity: expandedImg === second ? 1 : 0.4 }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={third}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(third)}
                          style={{ opacity: expandedImg === third ? 1 : 0.4 }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={fourth}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(fourth)}
                          style={{
                            opacity: expandedImg === fourth ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={fifth}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(fifth)}
                          style={{
                            opacity: expandedImg === fifth ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={sixth}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(sixth)}
                          style={{
                            opacity: expandedImg === sixth ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={seventh}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(seventh)}
                          style={{
                            opacity: expandedImg === seventh ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={eight}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(eight)}
                          style={{
                            opacity: expandedImg === eight ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={nine}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(nine)}
                          style={{
                            opacity: expandedImg === nine ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={ten}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(ten)}
                          style={{
                            opacity: expandedImg === ten ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={eleven}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(eleven)}
                          style={{
                            opacity: expandedImg === eleven ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={twelve}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(twelve)}
                          style={{
                            opacity: expandedImg === twelve ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={thirdteen}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(thirdteen)}
                          style={{
                            opacity: expandedImg === thirdteen ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={fourteen}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(fourteen)}
                          style={{
                            opacity: expandedImg === fourteen ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={fifteen}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(fifteen)}
                          style={{
                            opacity: expandedImg === fifteen ? 1 : 0.4,
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <img
                          src={sixteen}
                          width="120"
                          alt=""
                          srcSet=""
                          onClick={() => handleImageClick(sixteen)}
                          style={{
                            opacity: expandedImg === sixteen ? 1 : 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="service-box">
              <img
                src={premiumIcon}
                alt="premium"
                className="icon-premium mb-1"
              />
              <span className="service-name d-block mt-1 mb-2">INDUSTRIES</span>
              <span className="service-title">
                Digital <br /> Transformation
              </span>
              <p className="service-para mt-2">
                We pride ourselves on being a leading IT company that serves a
                diverse range of industries. We understand that each industry
                has unique challenges and requirements, and we are committed to
                delivering tailored digital solutions that drive growth,
                efficiency, and innovation. Our expertise spans across various
                sectors, allowing us to provide comprehensive IT services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flop-card-animation text-center">
        <div className="row ">
          <div className="col-md-3 col-sm-12 col-lg-3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="inner-img">
                    <img src={support} alt="Avatar" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner-content">
                    <h1>140+</h1>
                    <p>
                      Accomplished <br /> Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="inner-img">
                    <img src={success} alt="Avatar" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner-content">
                    <h1>140+</h1>
                    <p>
                      Accomplished <br /> Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="inner-img">
                    <img src={support} alt="Avatar" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner-content">
                    <h1>140+</h1>
                    <p>
                      Accomplished <br /> Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="inner-img">
                    <img src={rating} alt="Avatar" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner-content">
                    <h1>140+</h1>
                    <p>
                      Accomplished <br /> Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bub-animation container">
        <div className="tech-container d-flex ">
          <div className="technology-box row">
            <div className="col-md-4 align-items-right">
              <img src={tech} alt="premium" className="icon-premium mb-1" />
              <span className="service-name d-block ">TECHNOLOGIES</span>
              <span className="service-title">
                Unleashing the <br /> Potential
              </span>
              <p className="service-para mt-2">
                Your trusted partner in harnessing the power of cutting-edge
                technologies. Our diverse expertise in a wide range of
                technologies enables us to deliver innovative solutions that
                drive business growth and transformation. Explore our
                comprehensive technology offerings and embark on a digital
                journey that propels your business to new heights.
              </p>
            </div>
            <div className="col-md-8 parent-container ">
              <div className="bub-anim">
                <div id="background-wrap">
                  <div className="bubble x1"></div>
                  <div className="bubble x2"></div>
                  <div className="bubble x3"></div>
                  <div className="bubble x4"></div>
                  <div className="bubble x5"></div>
                </div>
                <img className="lap" src={laptop} width={300} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5">
        <div className="row container my-5 ">
          <div className="col-md-5">
            <div className="getin-button text-center">
              <div className="see-button">
                <a>Get In Touch &nbsp;</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vmax"
                  height="2vmax"
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
      <div className="testimonial container mt-5">
        <div className="avatars">
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.avatar}
              alt=""
              onClick={() => handleAvatarClick(client.id)}
              className={selectedClient === client.id ? "selected" : ""}
            />
          ))}
          <img src={smile} alt="" />
          <img src={smile2} alt="" />
          <img src={like} alt="" />
          <img src={like1} alt="" />
          <img src={like2} alt="" />
          <img src={like2} alt="" />
          <img src={smile2} alt="" />
          {/* <img src={like1} alt="" /> */}
        </div>
        <div className="testimonial-text text-center">
          <img width={25} src={review} alt="" />

          <h2 className="my-2 slide-in">TESTIMONIAL</h2>
          {selectedClient !== null && (
            <>
              <h5 className={animate ? "slide-in" : ""}>
                {clients[selectedClient - 1].name}
              </h5>
              <p className={`my-4 ${animate ? "slide-in" : ""}`}>
                <img src={left} alt="" className="mb-3" />
                {clients[selectedClient - 1].description}
                <img src={right} alt="" />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomeComponent;
