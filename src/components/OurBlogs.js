import React, { useState } from "react";
import "./OurBlog.css";
// import frame5 from "../assest/main-icons/Frame (5).png";
import frame10 from "../assest/main-icons/Frame (10).png";
import frame11 from "../assest/main-icons/Group 2169.png";
import rec from "../assest/main-icons/Rectangle 1949.png";
import recb from "../assest/main-icons/Rectangle 1952.png";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
const OurBlogComponent = () => {
  const [activeTab, setActiveTab] = useState("design");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <div className="container">
      <div className="h-blog d-flex justify-content-center text-center">
        <div className="p-blog">
          <span>Blog</span>
          <br />
          <h5 className="mt-2">Our Blogs</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="inp-txt">
        <img src={frame10} alt="" />
        <input type="" placeholder="Search our blog by topic or keywords..." />
      </div>
      <div className="ui-ux-tab mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-5 d-flex ">
            <div className="side-content my-auto">
              <span>Ui/Ux Designing</span>
              <h5 className="mt-2">
                Lorem Ipsum is simply dummy text of the printing{" "}
              </h5>
              <p className="mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-lg-7 text-end">
            <img className="img-top" src={recb} alt="" />
          </div>
        </div>
      </div>
      <div className="tab-content hidden">
        <h4>Lorem Ipsum is simply </h4>
        <p className="h-tab">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Tabs defaultActiveKey={activeTab} onSelect={handleTabChange}>
          <Tab eventKey="design" title="Design">
            <div className="row mt-5">
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" alt="" />
                <div className="tab-text">
                  <span>Designing</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" alt="" />
                <div className="tab-text">
                  <span>Designing</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} alt="" />
                <div className="tab-text">
                  <span>Designing</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>Designing</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>Designing</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} />
                <div className="tab-text">
                  <span>Designing</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="development" title="Development">
            <div className="row mt-5">
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>Development</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>Development</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} />
                <div className="tab-text">
                  <span>Development</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>Development</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>Development</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} />
                <div className="tab-text">
                  <span>Development</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="ui/ux" title="UI/UX">
            <div className="row mt-5">
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>UI/UX</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>UI/UX</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} />
                <div className="tab-text">
                  <span>UI/UX</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>UI/UX</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} className="mb-2" />
                <div className="tab-text">
                  <span>UI/UX</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
                <img src={rec} width={"100%"} />
                <div className="tab-text">
                  <span>UI/UX</span>
                  <h5 className="my-2">
                    Lorem Ipsum is <br /> simply dummy text{" "}
                  </h5>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <div className="loadMore hidden">
        <div className="load-btn">
          <span>
            Load More &nbsp;
            <svg
              width="1.8vmax"
              height="1.8vmax"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18.5"
                cy="18.5"
                r="17.5"
                stroke="#959595"
                stroke-width="2"
              />
              <path
                d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                fill="#959595"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* <div className="news-letter hidden">
        <div className="row">
          <div className="col-md-7 col-sm-12 col-lg-7">
            <div className="newsletter-sec mx-auto">
              <div className="">
                <h5>Want Our Newesletter?</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the{" "}
                </p>
                <div className="d-flex">
                  <input type="text" placeholder="Your Email Address" />
                  <div className="subscribe-btn ms-2">
                    <span>Subscribe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-lg-5">
            <div>
              <img
                src={frame11}
                width={"90%"}
                style={{ marginBottom: "-8%" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default OurBlogComponent;
