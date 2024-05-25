import React, { useState } from "react";
// import "./healthcare.css";
import study from "../../../assest/main-icons/Mask group (3).png";
import study2 from "../../../assest/main-icons/Mask group (4).png";
import study3 from "../../../assest/main-icons/Mask group (4).png";
import study4 from "../../../assest/main-icons/Mask group (5).png";
import health from "../../../assest/main-icons/Group 1000004855.png";
import benefits from "../../../assest/main-icons/Rectangle 8108.png";
import insudtries_main from "../../../assest/main-icons/image 24812.png";
import healthcareApp from "../../../assest/main-icons/Group 1000005516.png";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import rec8298 from "../../../assest/web-icons/Rectangle 8298.png";
import group5096 from "../../../assest/main-icons/Group 1000005096.png";
import isolationmode from "../../../assest/main-icons/Isolation Mode.png";
import { frame5, leader } from "../../../common/images";
import hr24 from "../../../assest/main-icons/24-hours-service 1.png";
import mobileView from "../../../assest/main-icons/creative-reels-composition 1.png";
import FAQ from "../../../components/Faq";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import rectangle8297 from "../../../assest/main-icons/Rectangle 8297.png";
import interationOfIt from "../../../assest/main-icons/Isolation_Mode (9).png";
import technologyExpertise from "../../../assest/web-icons/Isolation_Mode (18).png";
import customizeSD from "../../../assest/web-icons/Isolation_Mode (19).png";
import decisionMaking from "../../../assest/web-icons/Isolation_Mode (20).png";
import dataExchange from "../../../assest/web-icons/Group 1000005110.png";
import remoteTransaction from "../../../assest/web-icons/Isolation_Mode (22).png";
import propertyManagement from "../../../assest/web-icons/Isolation_Mode (23).png";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import horse from "../../../assest/main-icons/strategy (2) 1.png";
import {
  uparrow,
  downarrow,
  shareButton,
  account,
  dataSecurity,
  email,
  telephone,
  message,
  web,
  mobileApplication,
  wearables,
  integrationScalability,
  implementationIntegration,
} from "../../../common/images";

const RealStateIndustriesComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enhanced Client Experience:
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Interactive Property Listings: Vsple's tech solutions enable the creation of interactive and visually appealing property listings, providing potential buyers with immersive experiences.
      Virtual Reality Tours: Revolutionize property viewing with virtual reality (VR) tours, allowing clients to explore properties remotely and make more informed decisions.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Streamlined Operations
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Digital Documentation: Move towards a paperless system with digital documentation and e-signatures, reducing paperwork and accelerating transaction processes.
      Automated Workflows: From lead generation to closing deals, Vsple's IT systems automate workflows, ensuring smooth operations and increased productivity for real estate professionals.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cost Efficiency
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Remote Collaboration: Cut down on travel costs and time by facilitating remote collaboration through virtual meetings, document sharing, and digital communication tools.
      Energy-Efficient Properties: Leverage technology to promote energy-efficient and sustainable property solutions, aligning with modern environmental concerns.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Informed Decision-Making
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Data Analytics: Vsple's IT solutions gather and analyze real-time market data, empowering real estate professionals to make data-driven decisions and stay ahead of market trends.
      Market Predictions: Predictive analytics can aid in forecasting property trends, enabling better investment decisions and reducing risks.`,
    },
    // Add more items as needed
  ];
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "What industries does Vsple Technologies serve in addition ?",
      answer:
        "Vsple Technologies caters to a diverse range of industries, including real estate, financial services, manufacturing, retail, education, government, hospitality, and energy and utilities.",
      open: true,
    },
    {
      question:
        "How can Vsple Technologies customize solutions for real estate businesses?",
      answer:
        "We deeply understand the specific needs and challenges of the real estate industry, tailoring technology solutions to meet industry-specific requirements and enhance operational efficiency.",
      open: false,
    },
    {
      question:
        "Can Vsple Technologies work with startups as well as established real estate businesses?",
      answer:
        "Yes, our solutions are scalable and adaptable, catering to startups and large enterprises alike, ensuring that we meet the technology needs of businesses of all sizes in the real estate sector.",
      open: false,
    },
    {
      question:
        "What benefits can real estate organizations expect from Vsple's IT solutions?",
      answer:
        "Real estate clients can expect enhanced client experiences, streamlined operations, and robust data security solutions that improve overall efficiency and customer satisfactions",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies support financial institutions with its IT services in the real estate context?",
      answer:
        "We provide financial solutions tailored for real estate, offering secure, scalable, and compliant IT services that enhance customer experiences, streamline property transactions, and ensure data security and regulatory compliance.",
      open: false,
    },
    {
      question:
        "What role does technology play in the real estate solutions provided by Vsple Technologies?",
      answer:
        "Our IT solutions for real estate focus on improving client experiences, streamlining property transactions, and overall operational excellence through the integration of cutting-edge technology.",
      open: false,
    },
    {
      question:
        "What e-commerce and retail solutions does Vsple Technologies offer in the real estate sector?",
      answer:
        "We offer real estate-specific e-commerce and retail IT solutions that drive digital transformation, enhance property listings, and increase client engagement through user-friendly platforms and data-driven strategies.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies help educational institutions with its IT services in the context of real estate?",
      answer:
        "We support educational institutions within the real estate sector by providing technology solutions that enhance learning experiences, administrative efficiency, and overall outcomes in property management through customized digital solutions.",
      open: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  const [state, setState] = useState({
    title: "Real State",
    name: "",
    email: "",
    phone: "",
    why: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      console.log('====================================');
      console.log(JSON.stringify(state));
      console.log('====================================');
      const response = await fetch("http://localhost:3000/send_industries.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        setLoading(false);
        setCommentor(true);
        setTimeout(() => {
          setCommentor(false);
        }, 2000);
        console.log("Form data sent successfully");
        setState({
          title: "Health Care",
          name: "",
          email: "",
          phone: "",
          why: "",
          message: "",

        });
      } else {
        setLoading(false);
        console.error("Failed to send form data");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error while sending form data:", error);
    }
  };
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
  return (
    <div className="containe">
      <div className="heathcare-top">
        <div className="form-head">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-5 mt-5">
              <div className="healthcare-head">
                <span>Real Estate</span>
                <h5>
                  Transforming <br /> Real Estate <br /> with IT Solutions
                </h5>
                <p>
                  Revolutionize your real estate experience with cutting-edge IT
                  solutions. Explore a world where technology meets property,
                  transforming the way we buy, sell, and manage real estate.
                  From streamlined transactions to enhanced property management,
                  discover the future of real estate with our innovative IT
                  solutions. Elevate your property journey, embrace efficiency,
                  and unlock new possibilities in the ever-evolving landscape of
                  real estate. Welcome to a seamless integration of technology
                  and property, where the future is now.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-7 ps-none ps-lg-5 ">
              <div className="contact-form form-health">
                <h5>Get In Touch With Us</h5>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex gap-2 two w-100">
                    <div className="w-100">
                      <div className="Name">
                        <img width={"5%"} src={account} alt="" />
                        <input
                          type="text"
                          name="name"
                          value={state.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="w-100">

                      <div className="email">
                        <img width={"5%"} src={email} alt="" />
                        {/* <label>Password</label> */}
                        <input
                          type="email"
                          name="email"
                          value={state.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="why">
                    <h5>How Did You Hear About Us?</h5>
                    <div className="d-flex justify-content-start">
                      <input name="why" type="radio" value="Google"
                        checked={state.why === "Google"}
                        onChange={handleInputChange} />
                      <label> Google</label>
                      <input name="why" type="radio" value="LinkedIn"
                        checked={state.why === "LinkedIn"}
                        onChange={handleInputChange} />
                      <label > LinkedIn</label>
                      <input name="why" type="radio" value="Facebook"
                        checked={state.why === "Facebook"}
                        onChange={handleInputChange} />
                      <label> Facebook</label>
                      <input className="web-model" name="why" type="radio" value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange} />
                      <label className="web-model" > Instagram</label>
                    </div>
                    <div className="d-flex justify-content-start">
                      <input className="mobile-model" name="why" type="radio" value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange} />
                      <label className="mobile-model" > Instagram</label>
                      <input name="why" type="radio" value="Other"
                        checked={state.why === "Other"}
                        onChange={handleInputChange} />
                      <label> Others</label>
                    </div>
                  </div>
                  <div className="mobileSec">
                    {/* <label>Password</label> */}
                    <img width={"4%"} src={telephone} alt="" />
                    <input
                      type="number"
                      name="phone"
                      value={state.password}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="message">
                    {/* <label>Password</label> */}
                    <img width={"5%"} src={message} alt="" />
                    <textarea
                      type="text"
                      rows="4"
                      cols="50"
                      name="message"
                      value={state.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                    />
                    <div className="button text-end">
                      <button type="submit">Send</button>
                      {/* <div className="" type="submit">
                        <img src={shareButton} width={"60%"} alt="" />
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-journey d-flex justify-content-center text-center"
        style={{ marginTop: "13%" }}
      >
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" /> */}
          <br />
          <span>Industry Challenges</span>
          <h5>
            Addressing RealEstate <br /> Challenges
          </h5>
          <p className="mt-3">
            In the dynamic realm of real estate, navigating challenges is key to
            fostering growth and sustainability. Our commitment lies in
            understanding and addressing these hurdles head-on, ensuring a
            seamless experience for our clients.
          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-12 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={dataSecurity} width={"40px"} className="mb-2" alt="" />
                <br />
                <span>Data Security and Privacy</span>
                <p>
                  Much like in healthcare, the real estate sector deals with
                  sensitive information. From client details to property
                  records, ensuring the security and privacy of this data is
                  paramount. Vsple Technologies provides state-of-the-art
                  solutions to fortify data security, protecting client
                  confidentiality and maintaining legal and ethical standards.
                </p>
              </div>
              <div className="child1">
                <img src={dataExchange} width={"40px"} className="mb-2" alt="" />
                <br />
                <span>Interoperability and Data Exchange</span>
                <p>
                  Real estate transactions involve multiple stakeholders, each
                  with its own set of data. Ensuring seamless data exchange
                  between agents, buyers, and sellers is crucial for efficient
                  operations. Vsple's expertise in creating integrated systems
                  ensures that information flows seamlessly, improving
                  collaboration and reducing delays.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={remoteTransaction} width={"40px"} className="mb-2" alt="" />
                <br />
                <span>Remote Transactions</span>
                <p>
                  In an era where remote interactions have become the norm, the
                  real estate industry is witnessing a surge in virtual property
                  tours, online document signings, and remote transactions.
                  Vsple Technologies offers innovative solutions that facilitate
                  secure virtual property tours and streamline the remote
                  transaction process, enhancing client convenience.
                </p>
              </div>
              <div className="child1">
                <img src={propertyManagement} width={"40px"} className="mb-2" alt="" />
                <br />
                <span>Property Management</span>
                <p>
                  Efficient property management is a constant challenge in real
                  estate. Vsple's IT solutions streamline workflows, from
                  listing properties to managing contracts and payments. This
                  not only boosts operational efficiency but also enhances the
                  overall experience for property owners and tenants.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-5">
            <img src={rec8298} width={"100%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex text-right justify-content-center align-items-center">
            <img src={interationOfIt} width={"100%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-12 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h5 className="text-center">Advantages Of IT In RealEstate</h5>
              <span>Integration Of IT In The RealEstate</span>
              <div className="accordion w-100">
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
                      {/* <vr
                        className="me-3"
                        style={{
                          height: "150px",
                          border: ".5px solid white",
                        }}
                      ></vr> */}
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-journey d-flex justify-content-center text-center"
        style={{ marginTop: "5%" }}
      >
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" /> */}
          <br />
          <span>Perks Of Hiring VSPLE</span>
          <h5>How can VSPLE assist?</h5>
          <p className="mt-3">
            Take your real estate endeavors to new heights with VSPLE's
            expertise in app development. Think of us as your dedicated ally,
            blending cutting-edge technology with deep industry insights to
            craft tailored solutions for the real estate domain. Our focus on
            property diagnostics, seamless virtual property tours, and robust
            data security ensures your real estate app stands out in the
            competitive market. Enjoy the benefits of personalized customer
            interactions, efficient property management, and an emphasis on
            enhancing the overall real estate journey. Rest assured, your app
            will meet the highest standards of data privacy, a reflection of our
            unwavering commitment to excellence. Let VSPLE amplify your real
            estate vision, turning it into a reality with our unique
            capabilities and steadfast dedication to your success.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img
              className="my-4"
              src={technologyExpertise}
              width={"13%"}
              alt=""
            />
            <h5>Cutting-Edge Technological Expertise</h5>
            <p>
              With a dedicated team proficient in cutting-edge technologies,
              VSPLE brings innovative solutions customized for the Real Estate
              sector. From AI-driven analytics to blockchain-based security
              measures, our expertise ensures your business stays ahead in a
              competitive market.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={customizeSD} width={"13%"} alt="" />
            <h5>Customized Software Development</h5>
            <p>
              We specialize in crafting bespoke software solutions specifically
              designed to address the unique challenges faced by Real Estate
              businesses. Whether it's CRM systems, property management
              software, or virtual property tours, our tailor-made applications
              enhance efficiency and user experience.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={decisionMaking} width={"13%"} alt="" />
            <h5>Data-driven Decision Making</h5>
            <p>
              Harness the power of data with Vsple’s analytics tools. We empower
              Real Estate companies to make informed decisions by leveraging
              comprehensive data analysis, enabling you to forecast trends,
              understand customer behavior, and optimize strategies for maximum
              impact.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={integrationScalability}
              width={"13%"}
              alt=""
            />
            <h5>Seamless Integration and Scalability</h5>
            <p>
              Our solutions seamlessly integrate with existing platforms and
              infrastructures, ensuring a smooth transition and minimal
              disruption to your operations. Moreover, our scalable systems
              adapt to your business growth, ensuring sustained performance as
              your company expands.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={ccc} width={"13%"} alt="" />
            <h5>Enhanced Security Measures</h5>
            <p>
              Protect sensitive information and transactions with Vsple’s robust
              security protocols. We implement top-notch cybersecurity measures,
              including encryption standards and continuous monitoring, to
              safeguard your data and maintain client trust.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={implementationIntegration}
              width={"13%"}
              alt=""
            />
            <h5>Dedicated Support and Maintenance</h5>
            <p>
              Experience unparalleled support from our team post-implementation.
              We provide ongoing maintenance, updates, and dedicated support to
              ensure your systems operate at peak performance, allowing you to
              focus on your core business objectives.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">Realstate Market</h5>
              <h2 className="">Future of Real Estate Application Development</h2>
              <p>
              Embark on a journey into the future of real estate with cutting-edge technology and personalized solutions. Our approach revolutionizes property management, integrating AI-driven analytics and smart automation. Seamless connectivity and real-time data empower informed decision-making. Security and privacy are our top priorities, ensuring your property transactions are safeguarded at the highest standards. Elevate your real estate experience with us.
              </p>
              <span>Transforming Spaces, Enriching Lives</span>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 mt-3 text-center">
            <img src={healthcareApp} width={"90%"} alt="" />
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Real Estate Project Development</span>
          <h5>Our solutions</h5>
          <p className="mt-3">
          Vsple Technologies is at the forefront of revolutionizing real estate application development, offering tailored solutions for a seamless and immersive experience. Our comprehensive approach includes:
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"13%"} alt="" />
            <h5>Web</h5>
            <p>
            Elevate your online presence with our specialized web development solutions. We craft user-friendly, responsive websites that grant seamless access to health information, appointment scheduling, and interactive patient engagement. Prioritizing security, compliance, and scalability, we ensure your online platform is at the forefront of the digital health revolution.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={mobileApplication}
              width={"13%"}
              alt=""
            />
            <h5>Mobile Application</h5>
            <p>
              Empower both patients and healthcare professionals with our
              customized healthcare apps. Whether it's a patient-centric app for
              wellness tracking or a robust platform for healthcare providers to
              streamline workflows, we've got you covered. Our mobile health
              apps prioritize user experience, data security, and real-time
              connectivity, enhancing the efficiency of healthcare delivery.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"13%"} alt="" />
            <h5>Wearables</h5>
            <p>
              Stay ahead of the curve with wearable technology. Our expertise
              extends to wearable app development, empowering Real Estate agents
              with on-the-go access to property listings, client communications,
              scheduling, and vital information. Enhance productivity and
              efficiency while embracing the convenience of wearable devices in
              your operations.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
            Ready to revolutionize your Real Estate experience?
              <br />
              <span className="inner-join">
              Connect with Vsple to embark on a journey!
              </span>
            </p>
          </div>
          <div className="col-md-0 col-lg-4">
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
      <div className="faqs my-5 hidden">
        <h5 className="text-center  abc">FAQ'S</h5>
        <h5 className="head-faq text-center">
          Do You Have A Question <br /> For Us?
        </h5>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="h-journey d-flex justify-content-center text-center web-model">
        <div className="p-journey web-model">
          <span>Technologies</span>
          <h5>Technologies We Use</h5>
        </div>
      </div>
      <div className="tab-content hidden container web-model">
        <Tabs defaultActiveKey={activeTab} onSelect={handleTabChange}>
          <Tab eventKey="all" title="All">
            <div className="health-boxes mx-auto mt-5">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
            <div className="health-boxes mx-auto mt-2">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
          </Tab>
          <Tab eventKey="Frontend" title="Frontend">
            <div className="health-boxes mx-auto mt-5">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
            <div className="health-boxes mx-auto mt-2">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
          </Tab>
          <Tab eventKey="Backend" title="Backend">
            <div className="health-boxes mx-auto mt-5">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
            <div className="health-boxes mx-auto mt-2">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
          </Tab>
          <Tab eventKey="IOS" title="IOS">
            <div className="health-boxes mx-auto mt-5">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
            <div className="health-boxes mx-auto mt-2">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
          </Tab>
          <Tab eventKey="Android" title="Android">
            <div className="health-boxes mx-auto mt-5">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
            <div className="health-boxes mx-auto mt-2">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
          </Tab>
          <Tab eventKey="Cloud" title="Cloud">
            <div className="health-boxes mx-auto mt-5">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
            <div className="health-boxes mx-auto mt-2">
              <div className="box">HTML</div>
              <div className="box">CSS</div>
              <div className="box">NODE JS</div>
              <div className="box">PYTHON</div>
              <div className="box">FLUTTER</div>
            </div>
          </Tab>
        </Tabs>
      </div>
      {/* <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          <span>Technologies</span>
          <h5>
            Our Customers Love <br /> What We Do
          </h5>
        </div>
      </div> */}
    </div>
  );
};

export default RealStateIndustriesComponent;
