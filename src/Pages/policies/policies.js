import React, { useState } from "react";
import "./policies.css";
// import frame5 from "../assest/main-icons/Frame (5).png";
import frame10 from "../../assest/main-icons/Frame (10).png";
import frame11 from "../../assest/main-icons/Group 2169.png";
import rec from "../../assest/main-icons/Rectangle 1949.png";
import recb from "../../assest/main-icons/Rectangle 1952.png";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
const PolicyComponent = () => {
  const [activeTab, setActiveTab] = useState("design");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <div className="container">
      <div className="h-blog d-flex justify-content-center text-center">
        <div className="p-blog">
          <span>Policies</span>
          <br />
          <h5 className="mt-2">Our Policies</h5>
          <p
            style={{
              fontSize: "1vmax",
              fontWeight: "400",
              lineHeight: "1.5vmax",
              letterSpacing: "0em",
              color: "white",
              opacity: ".7",
              marginTop: "5px",
            }}
          >
            At Vsple Technologies Pvt. Ltd., transparency and trust are the
            pillars of our commitment. Explore 'Our Policies' to understand the
            principles that govern our operations, ensuring clarity, fairness,
            and integrity in all our endeavors. Welcome to Vsple - Where
            Policies Reflect Our Dedication to Your Confidence.
          </p>
        </div>
      </div>
      <div className="tab-content hidden">
        <Tabs defaultActiveKey={activeTab} onSelect={handleTabChange}>
          <Tab eventKey="design" title="Privacy Policy">
            <div className="pricay-policy mt-5">
              {/* <span className="text-light">Lorem Ipsum is simply dummy</span> */}
              <p className="text-light">
                This Privacy Policy describes Our policies and procedures on the
                collection, use, and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You. We use Your Personal data to provide and
                improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this
                Privacy Policy.
              </p>
              <h5 className="policy-head text-light">
                Interpretation and Definitions
              </h5>
              <p>
                The words in which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in the plural.
              </p>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="policy-semi-transparent-content">
                <li>
                  Account means a unique account created for You to access our
                  Service or parts of our Service.
                </li>
                <li>
                  Company (referred to as either "the Company", "We", "Us" or
                  "Our" in this Agreement) refers to Vsple Technologies Pvt.
                  Ltd., 702 Skye corporate park, Plot no. 25, Scheme no. 78,
                  Part II, Niranjanpur, A.B. Road, Indore, Madhya Pradesh
                  452010, India.
                </li>
                <li>Country refers to India</li>
                <li>State refers to Madhya Pradesh</li>
                <li>
                  Device means any device that can access the Service such as a
                  computer, a cellphone, or a digital tablet.
                </li>
                <li>
                  Personal Data is any information that relates to an identified
                  or identifiable individual.
                </li>
                <li>Service refers to the Website.</li>
                <li>
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service, or to
                  assist the Company in analyzing how the Service is used.
                </li>
                <li>
                  Third-party Social Media Service refers to any website or any
                  social network website through which a user can log in or
                  create an account to use the Service.
                </li>
                <li>
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit).
                </li>
                <li>Website refers to Vsple, accessible from Vsple.com</li>
                <li>
                  You mean the individual accessing or using the Service, or the
                  company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="development" title="Disclaimer">
            <div className="pricay-policy mt-5">
              {/* <h5 className="text-light ">Lorem Ipsum is simply dummy</h5> */}
              <p className="text-light">
                Welcome to the Disclaimer Policies page of Vsple Technologies
                Pvt. Ltd. Here, we outline the various disclaimers and policies
                that govern your use of our website, services, and products.
                Please take a moment to familiarize yourself with these policies
                to ensure a safe and transparent online experience.
              </p>
              <h5>1. Website Content</h5>
              <p>
                The information provided on our website, including text,
                graphics, images, and other materials, is for informational
                purposes only. While we strive for accuracy, we make no
                warranties or representations regarding the completeness,
                accuracy, reliability, suitability, or availability of the
                information on our website. Any reliance on the information
                provided is at your own risk.
              </p>
              <h5>2. Third-Party Links</h5>
              <p>
                Our website may contain links to third-party websites. These
                links are provided for your convenience, but Vsple Technologies
                Pvt. Ltd. is not responsible for the content, accuracy, or
                reliability of these external websites. We do not endorse or
                make any representations about them, and your use of third-party
                websites is at your own risk.
              </p>
              <h5>3. Product and Service Disclaimers</h5>
              <p>
                We offer various IT products and services, and each may have its
                own terms, conditions, and disclaimers. Be sure to review the
                specific terms and policies associated with the product or
                service you are interested in.
              </p>
            </div>
          </Tab>
          <Tab eventKey="ui/ux" title="Cookie Policy">
            <div className="ui/ux mt-5">
              <div className="pricay-policy mt-5">
                {/* <span className="text-light">Lorem Ipsum is simply dummy</span> */}
                <p className="text-light">
                  Welcome to the Cookie Policies page of Vsple Technologies Pvt.
                  Ltd. We value your privacy and are committed to providing a
                  transparent online experience. This page outlines how we use
                  cookies on our website and your options for managing them.
                </p>
                <h5>What Are Cookies?</h5>
                <p>
                  Cookies are small text files that are placed on your computer,
                  smartphone, or other devices when you visit a website. They
                  are widely used to make websites work or work more
                  efficiently, as well as to provide information to the website
                  owners.
                </p>
                <h5>How We Use Cookies</h5>
                <p>At Vsple Technologies Pvt. Ltd., we use cookies for the following purposes:</p>
              </div>
            </div>
          </Tab>
        </Tabs>
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

export default PolicyComponent;
