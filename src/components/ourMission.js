// import hr from "../assest/main-icons/Group 2115.png";
import React from "react";
import main_img from "../assest/main-icons/Group 1065.png";
import group from "../assest/main-icons/Group (1).png";
import approach from "../assest/main-icons/Group 2116.png";
import grooup2118 from "../assest/main-icons/Group 2118.png";
import grooup2117 from "../assest/main-icons/Group 2117.png";
import grooup2119 from "../assest/main-icons/Group 2119.png";
import "./ourMission.css";

const OurMissionComponent = () => {
  return (
    <>
      <div className="h-header web-model container">
        <div className="p-head">
          <div className="row">
            <div className=" col-md-6 col-sm-12 col-lg-5 p-0 d-flex justify-content-center align-items-center">
              <div className="main-text-service">
                <img src={group} width={"6%"} className="mb-1" alt="" />
                <br />
                <span>Mission</span>
                <h2 className="">Our Mission</h2>
                <p>
                  Many experienced people in various domains have often failed to run a successful business due to the lack of appropriate IT aids and support. Our mission is to provide concrete IT solutions to people who are well-learned in their niche and wish to help others with their knowledge and expertise. The world is progressing rampantly and therefore, a technology-driven business has become a necessity to survive in this ever-changing landscape. We aim to become the smooth-running carriage for your business throughout your journey, which will help you reach the countless milestones you have set for yourself.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-7 p-0 ">
              <img src={main_img} width={"90%"} alt="" />
            </div>
          </div>
        </div>
        <div className="h-clientApproach">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 p-0"></div>
            <div className="col-md-6 col-lg-6 col-sm-12 p-0">
              <div className="clientFirstApproach">
                {/* <div className="v-hr">
    <div className="yellow-dot">
      
    </div>
    </div> */}
                <img
                  // className="mt-2"
                  width={"15%"}
                  height={"15%"}
                  src={approach}
                  alt=""
                />
                <div className="p-client-No mx-3 my-auto">
                  <span>01</span>
                </div>
                <div className="p-client-text">
                  <span>
                    CLIENT FIRST <br /> APPROACH
                  </span>
                  <p>
                    We prioritize our client's needs and satisfaction above all else. Our mission is to provide exceptional service and solutions that meet and exceed their expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 p-0">
              <div className="clientFirstApproach justify-content-end">
                <div className="p-client-text text-start">
                  <span>
                    TRUSTED <br /> PERFORMANCE
                  </span>
                  <p>
                    We are committed to delivering consistent, high-quality performance in all our endeavors. Our mission is to earn the trust and confidence of our clients through our actions and results.
                  </p>
                </div>
                <div className="p-client-No mx-3 my-auto">
                  <span>02</span>
                </div>
                <img
                  // className="mt-2"
                  width={"15%"}
                  height={"15%"}
                  src={grooup2118}
                  alt=""
                />
                {/* <div className="l-hr">
      <div className="yellow-dot"></div>
    </div> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 p-0"></div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 p-0"></div>
            <div className="col-md-6 col-lg-6 col-sm-12 p-0">
              <div className="clientFirstApproach mt-4">
                {/* <div className="v-hr">
    <div className="yellow-dot"></div>
    </div> */}
                <img
                  // className="mt-2"
                  width={"15%"}
                  height={"15%"}
                  src={grooup2117}
                  alt=""
                />
                <div className="p-client-No mx-3 my-auto">
                  <span>03</span>
                </div>
                <div className="p-client-text">
                  <span>INTEGRITY</span>
                  <p>
                    We uphold the highest ethical standards in everything we do. Our mission is to conduct our business with honesty, transparency, and a strong sense of moral responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 p-0">
              <div className="clientFirstApproach justify-content-end mt-4">
                <div className="p-client-text text-start">
                  <span>INNOVATION</span>
                  <p>
                    We are dedicated to pushing the boundaries of technology and creativity. Our mission is to continually innovate and offer cutting-edge solutions to address our clients' evolving needs.
                  </p>
                </div>
                <div className="p-client-No mx-3 my-auto">
                  <span>04</span>
                </div>
                <img
                  // className="mt-2"
                  width={"15%"}
                  height={"15%"}
                  src={grooup2119}
                  alt=""
                />
                {/* <div className="l-hr">
    <div className="yellow-dot"></div>
    </div> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 p-0"></div>
          </div>
        </div>
      </div>
      <div className="h-header mobile-model container">
        <div className="p-head">
          <div className="row">
            <div className=" col-md-6 col-sm-12 col-lg-5 p-0 d-flex justify-content-center align-items-center">
              <div className="main-text-service">
                <h5 className="text">
                  <img src={group} width={"6%"} className="mb-2" alt="" />
                  <br />
                  Mission
                </h5>
                <h2 className="text-center">Our Mission</h2>
                <p>
                  Many experienced people in various domains have often failed to run a successful business due to the lack of appropriate IT aids and support. Our mission is to provide concrete IT solutions to people who are well-learned in their niche and wish to help others with their knowledge and expertise. The world is progressing rampantly and therefore, a technology-driven business has become a necessity to survive in this ever-changing landscape. We aim to become the smooth-running carriage for your business throughout your journey, which will help you reach the countless milestones you have set for yourself.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-7 p-0 ">
              <img src={main_img} width={"90%"} height={"90%"} alt="" />
            </div>
          </div>
        </div>
        <div className="mobile-model">
          <div className="row">
            <div className="col-12 p-0">
              <div className="clientFirstApproach">
                <img
                  className="mt-2"
                  width={"20%"}
                  // height={"15%"}
                  src={approach}
                  alt=""
                />
                <div className="p-client-No mx-3 my-2">
                  <span>01</span>
                </div>
                <div className="p-client-text">
                  <span>
                    CLIENT FIRST <br /> APPROACH
                  </span>
                  <p>
                    We prioritize our client's needs and satisfaction above all else. Our mission is to provide exceptional service and solutions that meet and exceed their expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <div className="clientFirstApproach">
                <img
                  className="mt-2"
                  width={"20%"}
                  // height={"15%"}
                  src={grooup2118}
                  alt=""
                />
                <div className="p-client-No mx-3 my-2">
                  <span>02</span>
                </div>
                <div className="p-client-text">
                  <span>
                    TRUSTED <br /> PERFORMANCE
                  </span>
                  <p>
                    We are committed to delivering consistent, high-quality performance in all our endeavors. Our mission is to earn the trust and confidence of our clients through our actions and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <div className="clientFirstApproach">
                <img
                  className="mt-2"
                  width={"20%"}
                  // height={"15%"}
                  src={grooup2117}
                  alt=""
                />
                <div className="p-client-No mx-3 my-2">
                  <span>03</span>
                </div>
                <div className="p-client-text">
                  <span>INTEGRITY</span>
                  <p>
                    We uphold the highest ethical standards in everything we do. Our mission is to conduct our business with honesty, transparency, and a strong sense of moral responsibility.
                  </p>
                </div>
              </div>
              <div className="clientFirstApproach">
                <img
                  className="mt-2"
                  width={"20%"}
                  // height={"15%"}
                  src={grooup2119}
                  alt=""
                />
                <div className="p-client-No mx-3 my-2">
                  <span>04</span>
                </div>
                <div className="p-client-text">
                  <span>INNOVATION</span>
                  <p>
                    We are dedicated to pushing the boundaries of technology and creativity. Our mission is to continually innovate and offer cutting-edge solutions to address our clients' evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMissionComponent;
