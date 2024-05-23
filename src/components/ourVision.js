import React from "react";
import "./ourVision.css";
import mainimg from "../assest/main-icons/Group 933 (1).png";
import goal from "../assest/main-icons/Group 1517 (1).png";
import principles from "../assest/main-icons/Group 1518.png";
import key from "../assest/main-icons/Group 948 (1).png";
import future from "../assest/main-icons/Group 1521.png";
import frame7 from "../assest/main-icons/Frame (7).png";
import valuePrinciple from "../assest/web-icons/hireqadev/Group 1000005591.png";
import keyInitate from "../assest/web-icons/hireqadev/Group 948.png";
import futureOutlook from "../assest/web-icons/hireqadev/Group 1000005592.png";
import goals from "../assest/main-icons/Group 948.png";
import keys from "../assest/main-icons/Group 948 (1).png";

const visionComponent = () => {
  return (
    <div className="p-head">
      <div className="p-header container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 text-center">
            <img src={mainimg} width={"60%"} alt="" />
          </div>
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <img src={frame7} width={"5%"} className="mb-1" alt="" />
              <br />
              <span>Vision</span>
              <h2 className="">Our Vision</h2>
              <p>
              We do not see VSPLE changing the world out there, nor do we aim to do that in the future. But we do want to see the people we are working for, witness the change they dreamt of while subscribing to our services. We see each one of the institutions we have developed and designed, touching new heights and evolving for the better. We visualize various ventures getting what they deserve in the future with our little support and assistance. Our vision is global but we act locally because we believe that small changes can make a huge difference.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="goals-container mt-4">
        <div className="row p-none p-lg-5 mx-3">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <img src={goals} width={"10%"} className="mb-1" alt="" />
              <br />
              <h5 className="">Objectives and Goals</h5>
              <p>
              At the core of our vision is the ambition to secure a distinguished leadership position in our industry by establishing clear objectives and pursuing audacious goals. We aspire not only to be a player in the industry but also to set the benchmark for excellence and sustainable growth. We have devised a roadmap outlining our path to leadership, and we remain committed to staying the course, continuously evaluating and adjusting our trajectory as we progress.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center">
            <img
              src={goal}
              width={'90%'}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="p-header container mt-4" >
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-7 text-center">
            <img
              src={principles}
              alt=""
              width={'70%'}
            />
          </div>
          <div className=" col-md-5 col-sm-12 col-lg-5 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <img src={valuePrinciple} width={"10%"} className="mb-1" alt="" />
              <br />
              <h5 className="">Values and Principles</h5>
              <p>
              We unwaveringly adhere to a set of core values and principles that serve as guiding principles for our actions and decisions. Our vision centers on establishing an organizational culture that exemplifies these values, earning profound respect and admiration from all those we interact with. These values and principles are not mere slogans but the very essence of our being, guiding every action we take and every decision we make.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="goals-container mt-4">
        <div className="row p-none p-lg-5 mx-3">
          <div
            className=" col-md-5 col-sm-12 col-lg-5 d-flex justify-content-start align-items-center"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          >
            <div className="main-text-service">
              <img src={keyInitate} width={"10%"}className="mb-1" alt="" />
              <br />
              <h5 className="">Key Initiatives</h5>
              <p>
              We are deeply committed to embarking on strategic initiatives that drive growth, sustainability, and a profoundly positive impact. Our vision encompasses the active pursuit of these initiatives, understanding that they will play a pivotal role in securing our long-term prosperity. These initiatives span a wide spectrum, from technological innovations to environmental sustainability to social responsibility. Each initiative is viewed as an opportunity to create positive change and enhance our contribution to the world.
              </p>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-lg-7 text-center">
            <img
              src={key}
              alt=""
              width={'80%'}
            />
          </div>
        </div>
      </div>
      <div className="p-header container mt-4">
        <div className="row">
          <div className="col-md-7 col-sm-12 col-lg-7 text-center">
            <img
              src={future}
              width={'80%'}
              alt=""
            />
          </div>
          <div className=" col-md-5 col-sm-12 col-lg-5 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <img src={futureOutlook} width={"10%"} className="mb-1" alt="" />
              <br />
              <h5 className="">Future Outlook</h5>
              <p>
              Our vision extends far into the future, where we envision ourselves as a forward-thinking, adaptable company that not only embraces change but takes an active role in shaping it. We aspire to position ourselves at the forefront of industry trends and developments, ensuring that we remain not only relevant but influential. We view ourselves as a dynamic and adaptable company that doesn't merely follow trends but sets them, actively contributing to the evolution of our industries. We don't wait for change to happen; we make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default visionComponent;
