import React, { useState, useEffect, useRef } from "react";
import first from "../assest/animation/01.png";
import second from "../assest/animation/02.png";
import third from "../assest/animation/03.png";
import "./canvas.css";
import tech from "../assest/icons/technology 1.png";
import BE from "../assest/icons/Group 634.png";
import tq from "../assest/icons/Group 636.png";
import inst from "../assest/icons/Group 630.png";
import quo from "../assest/icons/Group 637.png";
import rating from "../assest/icons/rating 1.png";
import support from "../assest/icons/support 1.png";
import success from "../assest/icons/success 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import laptop from "../assest/icons/Group 350.png";
import avatar2 from "../assest/icons/vsple website design (5)/Group 580.png";
import smile from "../assest/icons/vsple website design (5)/happy 1.png";
import review from "../assest/icons/vsple website design (5)/review 2.png";
import smile2 from "../assest/icons/vsple website design (5)/happy 2.png";
// import smile3 from "../assest/icons/vsple website design (5)/happy 3.png";
import like from "../assest/icons/vsple website design (5)/like (1) 1.png";
import like1 from "../assest/icons/vsple website design (5)/like 1.png";
import like2 from "../assest/icons/vsple website design (5)/like 2.png";
import left from "../assest/left.png";
import right from "../assest/right.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SComponent = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const images = [first, second, third];
  const [animate, setAnimate] = useState(false);
  const [selectedClient, setSelectedClient] = useState(1);
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
  const handleAvatarClick = (clientId) => {
    const internalImg = document.querySelector(".testimonial img");
    internalImg.classList.add("active");
    setSelectedClient(clientId);
    setAnimate(true);
  };
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   contextRef.current = canvas.getContext("2d");
  //   canvas.width = '1600';
  //   canvas.height = 1000;

  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  //     const scrollFraction = scrollTop / maxScrollTop;
  //     const frameIndex = Math.min(
  //       images.length - 1,
  //       Math.ceil(scrollFraction * images.length)
  //     );

  //     requestAnimationFrame(() => {
  //       const img = new Image();
  //       img.src = images[frameIndex];
  //       img.onload = function () {
  //         contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  //         contextRef.current.drawImage(img, 0, 0);
  //       };
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [images]);

  return (
    <>
      {/* <canvas className="text-center" id="hero-lightpass" ref={canvasRef} /> */}

      <div className="h-click hclick-web">
        <div className="inner-content container d-flex ">
          <div className="me-auto">
            <span>
              Are you looking to hire remote <br /> Dvelopers For Your Project?{" "}
            </span>
          </div>
          <div className="inner-content-btn d-flex justify-content-center align-items-center">
            <span>Click Here &nbsp;</span>
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
      <div className="h-click hclick-mobile text-center">
        <div className="inner-content container">
          <span>
            Are you looking to hire remote Dvelopers For Your Project?{" "}
          </span>
          <div className=" d-flex justify-content-center align-items-center mt-2">
            <span>Click Here &nbsp;</span>
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

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
          {" "}
          <div className="row">
            <div className="col-6 d-flex justify-content-center">
              <div className="card-container mt-5 text-center">
                <div className="card-slide">
                  <div className="card-slide-front">
                    <img src="https://vsple.com/images/vsple-logo.svg" />
                  </div>
                  <div className="card-slide-back">
                    <div className="content">
                      <h5>Accomplised Projects</h5>
                      <span>1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="card-container mt-5 text-center">
                <div className="card-slide">
                  <div className="card-slide-front">
                    <img src="https://vsple.com/images/vsple-logo.svg" />
                  </div>
                  <div className="card-slide-back">
                    <div className="content">
                      <h5>Accomplised Projects</h5>
                      <span>1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-6 d-flex justify-content-center">
              <div className="card-container mt-5 text-center">
                <div className="card-slide">
                  <div className="card-slide-front">
                    <img src="https://vsple.com/images/vsple-logo.svg" />
                  </div>
                  <div className="card-slide-back">
                    <div className="content">
                      <h5>Accomplised Projects</h5>
                      <span>1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="card-container mt-5 text-center">
                <div className="card-slide">
                  <div className="card-slide-front">
                    <img src="https://vsple.com/images/vsple-logo.svg" />
                  </div>
                  <div className="card-slide-back">
                    <div className="content">
                      <h5>Accomplised Projects</h5>
                      <span>1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-6 d-flex justify-content-center">
              <div className="card-container mt-5 text-center">
                <div className="card-slide">
                  <div className="card-slide-front">
                    <img src="https://vsple.com/images/vsple-logo.svg" />
                  </div>
                  <div className="card-slide-back">
                    <div className="content">
                      <h5>Accomplised Projects</h5>
                      <span>1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="card-container mt-5 text-center">
                <div className="card-slide">
                  <div className="card-slide-front">
                    <img src="https://vsple.com/images/vsple-logo.svg" />
                  </div>
                  <div className="card-slide-back">
                    <div className="content">
                      <h5>Accomplised Projects</h5>
                      <span>1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="testimonial container mt-5 testi-web">
        <div className="avatar">
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
      <div className="testimonial container mt-5 testi-mobile">
        <div className="avatars">
          {/* {clients.map((client) => (
            <img
              key={client.id}
              src={client.avatar}
              alt=""
              onClick={() => handleAvatarClick(client.id)}
              className={selectedClient === client.id ? "selected" : ""}
            />
          ))} */}
          {/* <img src={smile} alt="" />
          <img src={smile2} alt="" />
          <img src={like} alt="" />
          <img src={like1} alt="" />
          <img src={like2} alt="" />
          <img src={like2} alt="" />
          <img src={smile2} alt="" /> */}
        </div>
        <div className="testimonial-text text-center">
          <img width={25} src={review} alt="" />
          <h2 className="my-4 slide-in">TESTIMONIAL</h2>
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
    </>
  );
};

export default SComponent;
