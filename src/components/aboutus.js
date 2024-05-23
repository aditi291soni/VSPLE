import React, { useEffect, useState } from "react";
import "./aboutus.css";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import smile from "../assest/icons/vsple_website_design_5/happy 1.png";
import review from "../assest/icons/vsple_website_design_5/review 2.png";
import smile2 from "../assest/icons/vsple_website_design_5/happy 2.png";
import like from "../assest/icons/vsple_website_design_5/like (1) 1.png";
import like1 from "../assest/icons/vsple_website_design_5/like 1.png";
import like2 from "../assest/icons/vsple_website_design_5/like 2.png";
import left from "../assest/left.png";
import right from "../assest/right.png";
import avatar from "../assest/web-icons/global-icon/Screenshot_2024-02-01_at_5.16 1.png";
import selectedAvatar from "../assest/web-icons/global-icon/Screenshot_2024-02-01_at_5.16 2.png";
import frame17 from "../assest/main-icons/Frame (17).png";
import isolation from "../assest/main-icons/Isolation_Mode.png";
import group5 from "../assest/main-icons/Group (5).png";
import frame18 from "../assest/main-icons/Frame (18).png";
import frame19 from "../assest/main-icons/Frame (19).png";
import frame20 from "../assest/main-icons/Frame (20).png";
import layer1 from "../assest/main-icons/Layer_1.png";
import isolationmodel1 from "../assest/main-icons/Isolation_Mode (1).png";
import isolationmodel2 from "../assest/main-icons/Isolation_Mode (2).png";
import isolationmodel3 from "../assest/main-icons/Isolation_Mode (3).png";
import group6 from "../assest/main-icons/Group (6).png";
import nextIcon from "../assest/web-icons/hireqadev/Group 670.png";
import prevIcon from "../assest/web-icons/hireqadev/Group 670 (1).png";
import disnextIcon from "../assest/web-icons/hireqadev/Group 1057 (1).png";
import disprevIcon from "../assest/web-icons/hireqadev/Group 1057 (2).png";

import { mainimg, leader, frame6, progress } from "../common/images";

const AboutComponent = () => {
  const [animate, setAnimate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedClient, setSelectedClient] = useState(1);
  const clients = [
    {
      id: 1,
      name: "Max V.",
      description:
        "Vivek is efficient and available, highly recommend him! Vivek did a great job and completed the work really quickly & efficiently! Great communication, great work.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 2,
      name: "Aniket M.",
      description:
        "I have been working with Vsple for 5 years and they never let me down in terms of delivery and quality of the project. Great understanding of requirements and strong technical knowledge is the key to their success.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 3,
      name: "Balraj S.",
      description:
        "Great Job! Vsple delivered the work as always with quality and timely. Highly recommend and look forward to working on more projects in the future.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 4,
      name: "Dipesh G.",
      description:
        "Vivek has a strong understanding of current development best practices. He is particularly skilled with iOS Development and has been a valuable addition to our team! I would gladly recommend Vivek and team for all development projects!",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 5,
      name: "Anurag A.",
      description:
        "Vsple has great experience with iOS and built several applications that are loved by all users. Their technical expertise is great. They also has very positive attitude and gets the work done really well. I recommend Vsple highly and would love to be associated always.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 6,
      name: "Enrico B.",
      description:
        "It was a pleasure to work with Vsple, and no doubts: I will make my next project with them. They are answered in short time and give good proposal to  solve problems.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 7,
      name: "Thomas M.",
      description:
        "Everything was perfect! Highly recommended!. The UX looks amazing and my client loves it. Communication was easy and efficient - all the changes were done quickly and to our full satisfaction.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 8,
      name: "Max V.",
      description:
        "Vivek is efficient and available, highly recommend him! Vivek did a great job and completed the work really quickly & efficiently! Great communication, great work.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },

    // Add more clients here if needed
  ];
  const handleAvatarClick = (clientId) => {
    const internalImg = document.querySelector(".testimonial img");
    internalImg.classList.add("active");
    setSelectedClient(clientId);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
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
  return (
    <div className="p-header">
      <div className="p-head container">
        <div className="row">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h4 className="text">
                <img src={frame17} width={"6%"} className="mb-1" alt="" />
                <br />
                VSPLE
              </h4>
              <h2>Unveiling Our Story</h2>
              <p>
                At vsple technologies Pvt. Ltd., we are more than just a name;
                we are a symbol of excellence. As an ISO-certified company with
                a commitment to quality. We're often asked where our name came
                from, and that’s simple – our working philosophy is defined by
                two soul words: Vivid + Splendid. We believe that actual
                innovation and zeal to hit the goal is achieved by working
                something SPLENDID, i.e Magnificent. We gather broad insight,
                and requirements before commitment accordingly adapt strategies
                to the individual challenges our customer face.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <img src={mainimg} width={"100%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          <img src={isolation} width={"6%"} className="mb-1" alt="" />
          <br />
          <span>Vsple</span>
          <h5>Epic Journey</h5>
          <p>
            From a single spark to a blazing fire, from a small team to a
            vibrant family, VSPLE Technologies Pvt. Ltd. has truly come of age.
            Our journey is an ode to determination, innovation, and the
            relentless pursuit of excellence. We invite you to be a part of this
            extraordinary voyage as we continue to script our legacy.
          </p>
        </div>
      </div>
      <div className="text-center container">
        <img src={progress} width={"100%"} alt="" />
      </div>
      <div className="h-leader">
        <div className="h-leader-row row p-5">
          <div className=" col-md-12 col-12 col-lg-5 ">
            <div className="p-leader">
              <img src={group5} width={"6%"} className="mb-1" alt="" />
              <br />
              <span>Leading With Innovation</span>
              <h5>Guiding With Heart</h5>
              <p>
                -As the virus emerged, we accelerated work on our policies and
                programs. We know that caring for the well-being of our
                employees includes helping with child care issues, sick family
                members, flexibility with working hours, and access to paid sick
                leave, mental health resources, financial support and
                technologies for working remotely
              </p>
            </div>
          </div>
          <div className="col-md-12 col-12 col-lg-7 text-end">
            <div className="leader-container img">
              <img
                src={leader}
                alt=""
                width={"65%"}
                // height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          <img src={frame6} width={"4%"} className="mb-1" alt="" />
          <br />
          <span>One Size Doesn’t Fit All</span>
          <h5>Choose The Model That Fits You</h5>
          <p>
            At vsple technologies Pvt. Ltd., we bring innovation to life through
            our unique working models. Our name is synonymous with versatility,
            adaptability, and a deep commitment to meeting the evolving needs of
            our clients. Explore our working models and see how we turn concepts
            into reality, challenges into solutions, and ideas into impact
          </p>
        </div>
      </div>
      {/* <div className="web-model image-container container d-block mt-5">
        {data[currentIndex]}
      </div>
      <div className="web-model toggle-icon">
        <div className="prev-button">
          <img onClick={handlePrevClick} src={previcon} width={"100%"} alt="" />
        </div>
        <div className="next-button">
          <img onClick={handleNextClick} src={nexticon} width={"100%"} alt="" />
        </div>
      </div> */}
      <div className="image-container container d-block mt-5">
        <Carousel activeIndex={index}>
          <Carousel.Item>
            <div className="row">
              <div
                className="web-model col-md-12 col-sm-12 col-lg-6"
                style={{ position: "relative" }}
              >
                <div className="p-modules-box">
                  <div className="box-1 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <div style={{ width: "60%" }}>
                        <img src={frame18} alt="" width={"100%"} />
                      </div>
                      <span>Project Based Model</span>
                    </div>
                  </div>
                  <div className="box-2 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <div style={{ width: "65%" }}>
                        <img src={group6} alt="" width={"55%"} />
                      </div>
                      <span>
                        Time And <br />
                        Material Model
                      </span>
                    </div>
                  </div>
                  <div className="box-3 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <img src={frame19} alt="" width={"55%"} />
                      <span>
                        Dedicated <br />
                        Team Model
                      </span>
                    </div>
                  </div>
                  <div className="box-4 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <img src={frame20} alt="" width={"50%"} />
                      <span>
                        Managed IT <br /> Services Model
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6">
                <div className="p-modules-name mx-auto">
                  <span>Project-Based Model</span>
                  <p>
                    In the Project-Based Model, IT services are tailored to meet
                    the specific needs of a project. Clients agree to a fixed
                    price, and the IT provider takes responsibility for
                    completing the project within the agreed-upon budget and
                    timeline.
                  </p>
                  <span>
                    Time And <br /> Material Based Model
                  </span>
                  <p>
                    This model offers flexibility, with clients paying for IT
                    services based on the actual time and materials used. Costs
                    are incurred as the project progresses, allowing adjustments
                    to scope and budget as needed.
                  </p>
                  <span>Dedicated Team Model</span>
                  <p>
                    With the Dedicated Team Model, clients have the advantage of
                    a specialized IT team exclusively focused on their projects.
                    This approach provides ongoing support and expertise,
                    helping clients achieve their long-term IT objectives.
                  </p>
                  <span>Managed IT Services Model</span>
                  <p>
                    Managed Service Providers (MSPs) offer comprehensive IT
                    support and management for a fixed monthly fee. This model
                    ensures proactive monitoring, maintenance, and support for a
                    client's IT infrastructure.
                  </p>
                </div>
              </div>
            </div>
            ,
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div
                className="web-model col-md-7 col-sm-12 col-lg-6"
                style={{ position: "relative" }}
              >
                <div className="p-modules-box">
                  <div className="box-1 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <img src={isolationmodel1} alt="" width={"55%"} />
                      <span>
                        Remote/Hybrid <br /> Model
                      </span>
                    </div>
                  </div>
                  <div className="box-2 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <img src={isolationmodel2} alt="" width={"25%"} />
                      <span>
                        IT Staff <br /> Augmentation Model
                      </span>
                    </div>
                  </div>
                  <div className="box-3 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <img src={layer1} alt="" width={"55%"} />
                      <span>
                        Consulting <br /> Business Model
                      </span>
                    </div>
                  </div>
                  <div className="box-4 d-flex justify-content-center align-items-center">
                    <div className="content">
                      <img src={isolationmodel3} alt="" width={"55%"} />
                      <span>
                        Agency-Based <br /> Business Model
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6 mt-1">
                <div className="p-modules-name mx-auto">
                  <span>Remote/Hybrid Model</span>
                  <p>
                    The Remote/Hybrid Model delivers IT services remotely, with
                    teams operating from various locations or through a
                    combination of on-site and remote work. It provides the
                    flexibility to adapt to different client requirements.
                  </p>
                  <span>Just-in-Time IT Staff Augmentation Model</span>
                  <p>
                    This model allows for the rapid scaling of IT teams on
                    short-term, long-term, or project-based contracts,
                    addressing resource needs with flexibility and tailored
                    contract options.
                  </p>
                  <span>Consulting Business Model</span>
                  <p>
                    IT consulting firms provide expert guidance, advice, and
                    strategic recommendations to assist clients in making
                    informed decisions and addressing complex IT challenges.
                  </p>
                  <span>Agency-Based Business Model</span>
                  <p>
                    IT agencies act as intermediaries, connecting clients with
                    specialised IT professionals or teams for specific projects.
                    They handle project coordination, management, and quality
                    assurance, ensuring successful outcomes.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mt-2 w-100 text-center web-model">
        <img
          width={"5%"}
          onClick={() => handleSelect(index - 1)}
          src={index === 0 ? disprevIcon : prevIcon}
          alt=""
        />
        <img
          className="ms-4"
          width={"5%"}
          onClick={() => handleSelect(index + 1)}
          src={index === maxIndex ? disnextIcon : nextIcon}
          alt=""
        />
      </div>
      <div className="mt-2 w-100 text-center mobile-model">
        <img
          width={"10%"}
          onClick={() => handleSelect(index - 1)}
          src={index === 0 ? disprevIcon : prevIcon}
          alt=""
        />
        <img
          className="ms-4"
          width={"10%"}
          onClick={() => handleSelect(index + 1)}
          src={index === maxIndex ? disnextIcon : nextIcon}
          alt=""
        />
      </div>
      {/* <div className="mobile-model toggle-icon">
        <div className="prev-button">
          <img onClick={handlePrevClick} src={previcon} width={"30%"} alt="" />
        </div>
        <div className="next-button">
          <img onClick={handleNextClick} src={nexticon} width={"30%"} alt="" />
        </div>
      </div> */}
      <div className="h-reviews container mobile-model">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-start align-items-center">
            <div className="p-review w-100">
              <h4 className="text">CREDEBILITY</h4>
              <h5 className="text">Presence</h5>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 col-lg-8">
            <div className="p-review-box">
              <div className="upwork-clutch">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="1"
                  data-height="40"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale="10"
                  data-clutchcompany-id="1460414"
                ></div>
              </div>
              <div className="upwork mt-4">
                <div
                  className="review-widget_net"
                  data-uuid="9a232af8-cda8-422d-94b9-0c7e56fa73d3"
                  data-template="10"
                  data-lang="en"
                  data-theme="dark"
                ></div>
              </div>
              {/* <div className="upwork">
      <img src={gog} width={"22%"} alt="" />
      <div>
        <div className="ms-2">
          <span>Google</span>
        </div>
        <div className="star ms-2">
          <span className="fa fa-star checked "></span>
          <span className="fa fa-star checked ms-1"></span>
          <span className="fa fa-star checked ms-1"></span>
          <span className="fa fa-star ms-1"></span>
          <span className="fa fa-star ms-1"></span>
        </div>
      </div>
      <div className="reviwed text-center ms-3">
        <span className="rating-no">5.0</span>
        <p className="rating-review">10 Reviews</p>
      </div>
    </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="h-reviews container web-model">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4 d-flex justify-content-start align-items-center">
            <div className="p-review">
              <span>Credebility</span>
              <h5>Presence</h5>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="p-review-box">
              <div className="upwor mt-4">
                <div
                  className="review-widget_net"
                  data-uuid="9a232af8-cda8-422d-94b9-0c7e56fa73d3"
                  data-template="10"
                  data-lang="en"
                  data-theme="dark"
                ></div>
              </div>
              {/* <div className="upwork">
      <img src={gog} width={"22%"} alt="" />
      <div>
        <div className="ms-2">
          <span>Google</span>
        </div>
        <div className="star ms-2">
          <span className="fa fa-star checked "></span>
          <span className="fa fa-star checked ms-1"></span>
          <span className="fa fa-star checked ms-1"></span>
          <span className="fa fa-star ms-1"></span>
          <span className="fa fa-star ms-1"></span>
        </div>
      </div>
      <div className="reviwed text-center ms-3">
        <span className="rating-no">5.0</span>
        <p className="rating-review">10 Reviews</p>
      </div>
    </div> */}
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="p-review-box">
              <div className="upwor mt-4">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="1"
                  data-height="40"
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale="10"
                  data-clutchcompany-id="1460414"
                ></div>
              </div>
              {/* <div className="upwork">
      <img src={gog} width={"22%"} alt="" />
      <div>
        <div className="ms-2">
          <span>Google</span>
        </div>
        <div className="star ms-2">
          <span className="fa fa-star checked "></span>
          <span className="fa fa-star checked ms-1"></span>
          <span className="fa fa-star checked ms-1"></span>
          <span className="fa fa-star ms-1"></span>
          <span className="fa fa-star ms-1"></span>
        </div>
      </div>
      <div className="reviwed text-center ms-3">
        <span className="rating-no">5.0</span>
        <p className="rating-review">10 Reviews</p>
      </div>
    </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="web-model testimonial">
        <div className="avatars">
          {clients.map((client) => (
            <img
              key={client.id}
              src={
                selectedClient === client.id
                  ? client.avatar
                  : client.selectedAvatar
              }
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
          {/* <img src={like2} alt="" />
          <img src={smile2} alt="" /> */}
        </div>
        <div className="testimonial-text text-center">
          <img width={25} src={review} alt="" />

          <h2 className="my-2 slide-i">Testimonial</h2>
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
      <div className="mobile-model mobile-swiper">
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
            <div className="testimonial-about mt-5">
              <div className="imgnstars">
                <div className="img d-flex">
                  {/* <img src={mask} width={"30%"} alt="" /> */}
                  <div className="cname ms-3 text-center">
                    <span className="client">Max V.</span>
                    <br />
                    <span className="client-D">Developer</span>
                  </div>
                </div>
                <div className="star mt-2">
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                </div>
              </div>
              <p className="text-light">
                Vivek is efficient and available, highly recommend him! Vivek
                did a great job and completed the work really quickly &
                efficiently! Great communication, great work
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-about mt-5">
              <div className="imgnstars">
                <div className="img d-flex">
                  {/* <img src={mask} width={"30%"} alt="" /> */}
                  <div className="cname ms-3 text-center">
                    <span className="client">Balraj S.</span>
                    <br />
                    <span className="client-D">Developer</span>
                  </div>
                </div>
                <div className="star mt-2">
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                </div>
              </div>
              <p className="text-light">
                Great Job! Vsple delivered the work as always with quality and
                timely. Highly recommend and look forward to working on more
                projects in the future
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-about mt-5">
              <div className="imgnstars">
                <div className="img d-flex">
                  {/* <img src={mask} width={"30%"} alt="" /> */}
                  <div className="cname ms-3 text-center">
                    <span className="client">Dipesh G.</span>
                    <br />
                    <span className="client-D">Developer</span>
                  </div>
                </div>
                <div className="star mt-2">
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                </div>
              </div>
              <p className="text-light">
                Vivek has a strong understanding of current development best
                practices. He is particularly skilled with iOS Development and
                has been a valuable addition to our team! I would gladly
                recommend Vivek and team for all development projects!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-about mt-5">
              <div className="imgnstars">
                <div className="img d-flex">
                  {/* <img src={mask} width={"30%"} alt="" /> */}
                  <div className="cname ms-3 text-center">
                    <span className="client">Enrico B</span>
                    <br />
                    <span className="client-D">Developer</span>
                  </div>
                </div>
                <div className="star mt-2">
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star checked ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                  <span className="fa fa-star ms-2"></span>
                </div>
              </div>
              <p className="text-light">
                It was a pleasure to work with Vsple, and no doubts: I will make
                my next project with them. They are answered in short time and
                give good proposal to solve problems.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default AboutComponent;
