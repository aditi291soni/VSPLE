import React from "react";
import "./JoinUs.css";
import mainimg from "../assest/main-icons/Group 1104 (1).png";
import frame4 from "../assest/main-icons/Frame (4).png";
import frame5 from "../assest/main-icons/Frame (5).png";
import remote from "../assest/main-icons/Group 2137.png";
import int from "../assest/main-icons/Group 2138.png";
import growth from "../assest/main-icons/Group 2136 (1).png";
import payouts from "../assest/main-icons/Group 2138 (1).png";
import flexibility from "../assest/main-icons/Group 2139.png";
import longTerm from "../assest/main-icons/Group 2135 (1).png";
import guidance from "../assest/main-icons/Group 2141.png";
import approach from "../assest/main-icons/Group 2116.png";
import mask from "../assest/main-icons/Mask group (1).png";
import overview from "../assest/main-icons/Group 1273.png";
import frame from "../assest/main-icons/Frame (8).png";
import certificates from "../assest/main-icons/Frame (9).png";
import react from "../assest/main-icons/Group 2143.png";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const JoinUsComponent = () => {
  return (
    <>
      <div className="h-header web">
        <div className="p-head">
          <div className="row p-0">
            <div className=" col-md-5 col-sm-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="main-text-service">
                <img src={frame4} width={"6%"} className="mb-1" alt="" />
                <br />
                <span>CAREER</span>
                <h2 className="">
                  Uncover your career <br /> prospects with Vsple!
                </h2>
                <p>
                  Matchmaking India's top technology and digital talent
                  withamazing global companies offering full-time,
                  long-term,contractual remote job opportunities that pay up to
                  2X salary
                </p>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-lg-7 text-center">
              <img src={mainimg} width={"60%"} height={"100%"} alt="" />
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <img src={frame5} width={"4%"} className="mb-1" alt="" />
            <br />
            <h5>Our Benefits</h5>
            <p>
              Unlock your potential with exclusive access to career
              opportunities
            </p>
          </div>
        </div>
        <div className="benefits-content container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 text-start">
              <div className="boxes mx-auto ">
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={remote} alt="" />
                  </div>
                  <div className="ms-3">
                    <span>Remote work</span>
                    <p className="mt-3">
                      We embrace the remote work culture, and offer flexibility
                      in choosing your convenient shift time and space to
                      maintain a proper work-life balance.
                    </p>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"91.3%"} src={longTerm} alt="" />
                  </div>
                  <div className="ms-1">
                    <span>Long-term Opportunity</span>
                    <p className=" mt-3">
                      Work with the best global brands on a contractual role. We
                      assess your expertise & skills, and get the suitable
                      projects for you.
                    </p>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={longTerm} alt="" />
                  </div>
                  <div className="ms-3">
                    <span>Long-term Opportunity</span>
                    <p className=" mt-3">
                      You can set aside the uncertainty of job security and rely
                      on us. We provide permanent remote work opportunities,
                      keeping long-term interest in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 text-start">
              <div className="boxes mx-auto">
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={payouts} alt="" />
                  </div>
                  <div className="ms-3 ">
                    <span>International Payouts</span>
                    <p className="mt-3">
                      We believe that everybody should get paid for their worth.
                      With us, you will earn up to 2X more than market
                      standards. We ensure timely payouts every.
                    </p>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={flexibility} alt="" />
                  </div>
                  <div className="ms-3">
                    <span>Work Flexibility</span>
                    <p className="mt-3">
                      Work from anywhere in the world on global projects. You’ll
                      be matched with projects that fit your skills and
                      expertise. Put forth your best
                    </p>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"92%"} src={guidance} alt="" />
                  </div>
                  <div className="ms-3 ">
                    <span>Expert Guidance</span>
                    <p className="mt-3">
                      Receive valuable guidance and get detailed, constructive
                      feedback on your interviews and tests. Our Talent Success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <h5>An Overview of VspleClan</h5>
            <p>The Significance of Identifying as a VspleClan</p>
          </div>
        </div>
        <div className="h-overview-clan container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="p-overview">
                <div className="about-me">
                  <span>
                    {" "}
                    <img src={frame} alt="" width={"5%"} /> &nbsp; About Me
                  </span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="about-me mt-4">
                  <span>
                    {" "}
                    <img src={certificates} alt="" width={"5%"} /> &nbsp;
                    Certificates
                  </span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="about-me mt-4">
                  <span>Skills</span>
                  <div className="skills d-flex">
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <img src={overview} width={"100%"} alt="" />
            </div>
          </div>
        </div>
        <div className="h-click-here ">
          <div className="inner-content d-flex justify-content-center align-content-center">
            <div>
              <span>Looking for global remote jobs?</span>
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
        <div className="h-position container">
          <span>Open Positions</span>
          <p>
            Unlock your potential with exclusive access to career opportunities
          </p>
          <div className="p-position-div">
            <div className="row align-items-center">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src={react} alt="" style={{ width: "70%" }} />
              </div>
              <div className="col-6">
                <div className="p-text m-0 p-0">
                  <h5 className="p-0 m-0">React Native</h5>
                  <span className="tec-name">
                    IT-Softwate / Software Services
                  </span>
                  <div className="job-des">
                    <p>Experince: 2-4 Year</p>
                    <p>Required: Jaipur/Permanent</p>
                    <p>Location: 3 Openings</p>
                    <p>Open Vacancies: Remote | Hybrid</p>
                  </div>
                </div>
              </div>
              <div className="col-3 ">
                <div className="postion-btn d-flex justify-content-center align-items-center">
                  <span>READ MORE &nbsp;</span>
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
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey mb-5">
            <span>WE LOVE</span>
            <h5>
              See What Our Tribe Say <br /> About Us
            </h5>
          </div>
        </div>
        <div className="sliderN container-fluid">
          <div className="slide-trackN">
            <div className="slideN">
              <div className="testimial-box">
                <p className="text-light">
                  -As the virus emerged, we accelerated work on our policies and
                  programs. We know that caring for the well-being of our
                  employees includes helping with child care issues,{" "}
                </p>
                <div className="imgnstars">
                  <div className="imgP d-flex">
                    <img src={mask} width={"20%"} alt="" />
                    <div className="ms-3">
                      <span className="clientN">Lorem Ipsum</span>
                      <br />
                      <span className="clientD">Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="stars mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideN">
              <div className="testimial-box">
                <p className="text-light">
                  -As the virus emerged, we accelerated work on our policies and
                  programs. We know that caring for the well-being of our
                  employees includes helping with child care issues,{" "}
                </p>
                <div className="imgnstars">
                  <div className="imgP d-flex">
                    <img src={mask} width={"20%"} alt="" />
                    <div className="ms-3">
                      <span className="clientN">Lorem Ipsum</span>
                      <br />
                      <span className="clientD">Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="stars mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideN">
              <div className="testimial-box">
                <p className="text-light">
                  -As the virus emerged, we accelerated work on our policies and
                  programs. We know that caring for the well-being of our
                  employees includes helping with child care issues,{" "}
                </p>
                <div className="imgnstars">
                  <div className="imgP d-flex">
                    <img src={mask} width={"20%"} alt="" />
                    <div className="ms-3">
                      <span className="clientN">Lorem Ipsum</span>
                      <br />
                      <span className="clientD">Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="stars mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideN">
              <div className="testimial-box">
                <p className="text-light">
                  -As the virus emerged, we accelerated work on our policies and
                  programs. We know that caring for the well-being of our
                  employees includes helping with child care issues,{" "}
                </p>
                <div className="imgnstars">
                  <div className="imgP d-flex">
                    <img src={mask} width={"20%"} alt="" />
                    <div className="ms-3">
                      <span className="clientN">Lorem Ipsum</span>
                      <br />
                      <span className="clientD">Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="stars mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideN">
              <div className="testimial-box">
                <p className="text-light">
                  -As the virus emerged, we accelerated work on our policies and
                  programs. We know that caring for the well-being of our
                  employees includes helping with child care issues,{" "}
                </p>
                <div className="imgnstars">
                  <div className="imgP d-flex">
                    <img src={mask} width={"20%"} alt="" />
                    <div className="ms-3">
                      <span className="clientN">Lorem Ipsum</span>
                      <br />
                      <span className="clientD">Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="stars mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideN">
              <div className="testimial-box">
                <p className="text-light">
                  -As the virus emerged, we accelerated work on our policies and
                  programs. We know that caring for the well-being of our
                  employees includes helping with child care issues,{" "}
                </p>
                <div className="imgnstars">
                  <div className="imgP d-flex">
                    <img src={mask} width={"20%"} alt="" />
                    <div className="ms-3">
                      <span className="clientN">Lorem Ipsum</span>
                      <br />
                      <span className="clientD">Lorem Ipsum</span>
                    </div>
                  </div>
                  <div className="stars mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="shoe">
      <img
        src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da29b46cb1403688b139_outsole.png"
        className="outsole piece"
        alt="outsole"
      />
      <img
        src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84d9ecb32e46bc5f1f8a8a_component.png?"
        className="heel piece"
        alt="heel"
      />
      <img
        src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da293b7f75e5a42bcacd_midsole.png?"
        className="midsole piece"
        alt="midsole"
      />
    </section> */}
      </div>
      <div className="h-header mobile container">
        <div className="p-head">
          <div className="">
            <div className="">
              <div className="main-text-service">
                <img src={frame4} width={"6%"} className="mb-1" alt="" />
                <br />
                <span>CAREER</span>
                <h2 className="">
                  Uncover your career <br /> prospects with Vsple!
                </h2>
                <p>
                  Matchmaking India's top technology and digital talent
                  withamazing global companies offering full-time,
                  long-term,contractual remote job opportunities that pay up to
                  2X salary
                </p>
              </div>
            </div>
            <div className="">
              <img src={mainimg} width={"100%"} height={"100%"} alt="" />
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br />
            <h5>Our Benefits</h5>
            <p>
              Unlock your potential with exclusive access to career
              opportunities
            </p>
          </div>
        </div>
        <div className="benefits-content container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 text-start">
              <div className="boxes w-100">
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={remote} alt="" />
                  </div>
                  <div className="ms-3">
                    <span>Remote work</span>
                    <p className="mt-3">
                      We embrace the remote work culture, and offer flexibility
                      in choosing your convenient shift time and space to
                      maintain a proper work-life balance.
                    </p>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"91.3%"} src={longTerm} alt="" />
                  </div>
                  <div className="ms-1">
                    <span>Long-term Opportunity</span>
                    <p className=" mt-3">
                      Work with the best global brands on a contractual role. We
                      assess your expertise & skills, and get the suitable
                      projects for you.
                    </p>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={longTerm} alt="" />
                  </div>
                  <div className="ms-3">
                    <span>Long-term Opportunity</span>
                    <p className=" mt-3">
                      You can set aside the uncertainty of job security and rely
                      on us. We provide permanent remote work opportunities,
                      keeping long-term interest in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 text-start">
              <div className="boxes w-100">
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={payouts} alt="" />
                  </div>
                  <div className="ms-3 ">
                    <span>International Payouts</span>
                    <p className="mt-3">
                      We believe that everybody should get paid for their worth.
                      With us, you will earn up to 2X more than market
                      standards. We ensure timely payouts every.
                    </p>
                  </div>
                </div>
                <div className="box-1 d-flex">
                  <div>
                    <img className="" width={"100%"} src={flexibility} alt="" />
                  </div>
                  <div className="ms-3">
                    <span>Work Flexibility</span>
                    <p className="mt-3">
                      Work from anywhere in the world on global projects. You’ll
                      be matched with projects that fit your skills and
                      expertise. Put forth your best
                    </p>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <h5>An Overview of VspleClan</h5>
            <p>The Significance of Identifying as a VspleClan</p>
          </div>
        </div>
        <div className="h-overview-clan container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="p-overview">
                <div className="about-me">
                  <span>
                    {" "}
                    <img src={frame} alt="" width={"5%"} /> &nbsp; About Me
                  </span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="about-me mt-4">
                  <span>
                    {" "}
                    <img src={certificates} alt="" width={"5%"} /> &nbsp;
                    Certificates
                  </span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="about-me mt-4">
                  <span>Skills</span>
                  <div className="skills d-flex">
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                    <div className="skill-inp">
                      <span>LOREM IPSUM :</span>
                      <br />
                      <div className="progress-container">
                        <div className="progress-bar" id="myProgressBar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <img src={overview} width={"100%"} alt="" />
            </div>
          </div>
        </div>
        <div className="h-click">
          <div className="inner-content container d-fle">
            <div className="me-auto">
              <span>
                Are you looking to hire remote <br /> Dvelopers For Your
                Project?{" "}
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
        <div className="h-position container">
          <span>Open Positions</span>
          <p>
            Unlock your potential with exclusive access to career opportunities
          </p>
          <div className="p-position-di">
            <div className="row">
              {/* <div className="col-3 d-flex justify-content-center align-items-center"> */}
                {/* <img src={react} alt="" style={{ width: "100%" }} /> */}
              {/* </div> */}
              <div className="col-12">
                <div className="p-text m-0 p-0">
                  <h5 className="p-0 m-0">React Native</h5>
                  <span className="tec-name">
                    IT-Softwate / Software Services
                  </span>
                  <div className="job-des">
                    <p>Experince: 2-4 Year</p>
                    <p>Required: Jaipur/Permanent</p>
                    <p>Location: 3 Openings</p>
                    <p>Open Vacancies: Remote | Hybrid</p>
                  </div>
                </div>
              </div>
              <div className="col-3 ">
                <div className="postion-btn d-flex justify-content-center align-items-center">
                  <span>Read More &nbsp;</span>
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
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey mb-5">
            <span>WE LOVE</span>
            <h5>
              See What Our Tribe Say <br /> About Us
            </h5>
          </div>
        </div>
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
          <div className="testimonial-about">
            <div className="imgnstars">
              <div className="img d-flex">
                <img src={mask} width={"30%"} alt="" />
                <div className="cname ms-3 text-center">
                  <span className="client">Anuj Singh</span>
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
              -As the virus emerged, we accelerated work on our policies and
              programs. We know that caring for the well-being of our employees
              includes helping with child care issues,{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-about">
            <div className="imgnstars">
              <div className="img d-flex">
                <img src={mask} width={"30%"} alt="" />
                <div className="cname ms-3 text-center">
                  <span className="client">Anuj Singh</span>
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
              -As the virus emerged, we accelerated work on our policies and
              programs. We know that caring for the well-being of our employees
              includes helping with child care issues,{" "}
            </p>
          </div>
        </SwiperSlide>
       
      </Swiper>
        {/* <section className="shoe">
      <img
        src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da29b46cb1403688b139_outsole.png"
        className="outsole piece"
        alt="outsole"
      />
      <img
        src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84d9ecb32e46bc5f1f8a8a_component.png?"
        className="heel piece"
        alt="heel"
      />
      <img
        src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da293b7f75e5a42bcacd_midsole.png?"
        className="midsole piece"
        alt="midsole"
      />
    </section> */}
      </div>
    </>
  );
};
export default JoinUsComponent;
