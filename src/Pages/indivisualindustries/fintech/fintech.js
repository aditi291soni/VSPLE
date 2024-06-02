import React, { useState } from "react";
import "./fintech.css";
import study from "../../../assest/main-icons/Mask group (3).png";
import study2 from "../../../assest/main-icons/Mask group (4).png";
import study3 from "../../../assest/main-icons/Mask group (4).png";
import study4 from "../../../assest/main-icons/Mask group (5).png";
import health from "../../../assest/main-icons/Group 1000004855.png";
import benefits from "../../../assest/main-icons/Rectangle 8108.png";
import insudtries_main from "../../../assest/main-icons/image 24812.png";
import healthcareApp from "../../../assest/main-icons/Frame (24).png";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import cybersecurity from "../../../assest/web-icons/Fintech/Isolation_Mode.png";
import Interoperability from "../../../assest/web-icons/Fintech/Group 1000005110.png";
import digitalBanking from "../../../assest/web-icons/Fintech/Isolation_Mode (1).png";
import financialInclusion from "../../../assest/web-icons/Fintech/Isolation_Mode (2).png";
import tailored from "../../../assest/web-icons/Fintech/Isolation_Mode (3).png";
import advanceTechnological from "../../../assest/web-icons/Fintech/Isolation_Mode (4).png";
import agileDev from "../../../assest/web-icons/Fintech/Isolation_Mode (5).png";
import regulatoryCompliance from "../../../assest/web-icons/Fintech/Isolation_Mode (6).png";
import seamlessUser from "../../../assest/web-icons/Fintech/Isolation_Mode (7).png";
import analyticDriven from "../../../assest/web-icons/Fintech/Isolation_Mode (8).png";
import rec8298 from "../../../assest/main-icons/Mask group (21).png";
import group5096 from "../../../assest/main-icons/Group 1000005096.png";
import isolationmode from "../../../assest/main-icons/Group 1000005026.png";
import { frame5, leader } from "../../../common/images";
import hr24 from "../../../assest/main-icons/24-hours-service 1.png";
import mobileView from "../../../assest/main-icons/creative-reels-composition 1.png";
import FAQ from "../../../components/Faq";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import rectangle8297 from "../../../assest/main-icons/Rectangle 8297.png";
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
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import horse from "../../../assest/main-icons/strategy (2) 1.png";

const FintechIndustriesComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transaction Efficiency
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Seamless Transactions: Fintech solutions streamline financial transactions, reducing processing times and minimizing the risk of errors. This leads to faster and more efficient financial operations.
      Mobile Banking: Mobile fintech apps provide users with on-the-go access to their financial accounts, enabling swift and convenient banking transactions.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Operational Agility
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Automation of Processes: Fintech tools automate various financial processes, from account reconciliation to regulatory compliance checks, enhancing operational efficiency and reducing manual workload.
      Blockchain Technology: The use of blockchain ensures secure and transparent transactions, reducing the need for intermediaries and enhancing trust in financial processes.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cost Optimization
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Reduced Transaction Costs: Fintech solutions contribute to cost savings by minimizing transaction fees and operational expenses associated with traditional financial processes.
     Fraud Detection: Advanced analytics and machine learning algorithms help in real-time fraud detection, preventing financial losses and safeguarding customer assets.`,
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
      content: `Data Analytics: Fintech platforms leverage data analytics to provide valuable insights into market trends, customer behavior, and risk assessments. This empowers financial institutions to make informed and strategic decisions.
      Robo-Advisors: Automated investment platforms use algorithms to offer personalized investment advice, catering to the individual risk profiles and financial goals of users.`,
    },
    // Add more items as needed
  ];
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "What industries does Vsple Technologies serve?",
      answer:
        "Vsple Technologies specializes in providing fintech solutions and services to a wide range of industries, including banking, insurance, investment, real estate, and payment processing.",
      open: true,
    },
    {
      question: "How can Vsple Technologies customize solutions for different industries?",
      answer:
        "We customize our solutions by deeply understanding the specific needs, challenges, and goals of each industry. Our experienced team tailors fintech solutions to meet industry-specific requirements.",
      open: false,
    },
    {
      question:
        "Can Vsple Technologies work with startups as well as established businesses in these industries?",
      answer:
        "Yes, we cater to a diverse clientele, from fintech startups to established financial institutions. Our solutions are scalable and adaptable, ensuring that we can meet the technology needs of businesses of all sizes.",
      open: false,
    },
    {
      question:
        "What benefits can financial organizations expect from Vsple's fintech solutions?",
      answer:
        "Financial clients benefit from enhanced transaction efficiency, operational agility, and robust cybersecurity solutions that improve overall efficiency and customer satisfaction.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies support banks and financial institutions with its fintech services?",
      answer:
        "We provide banks and financial institutions with secure, scalable, and compliant fintech services that enhance customer experiences, streamline operations, and ensure data security and regulatory compliance.",
      open: false,
    },
    {
      question:
        "What role does technology play in the real estate solutions provided by Vsple Technologies?",
      answer:
        "Our fintech solutions for real estate focus on improving transaction transparency, reducing fraud, and enhancing overall operational efficiency through the integration of blockchain technology.",
      open: false,
    },
    {
      question:
        "What e-payment and digital banking solutions does Vsple Technologies offer?",
      answer:
        "We offer e-payment and digital banking fintech solutions that drive digital transformation, enhance customer engagement, and increase transaction efficiency through user-friendly platforms and advanced security measures.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies help insurance companies with its fintech services?",
      answer:
        "We support insurance companies by providing technology solutions that improve claims processing, risk assessment, and overall operational excellence through customized digital solutions.",
      open: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  const [state, setState] = useState({
    title: "Fintech",
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
      <div className="fintech-top">
        <div className="form-head">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-lg-5 mt-5">
              <div className="healthcare-head">
                <span>Fintech</span>
                <h5>
                  Transforming <br /> Fintech<br /> with IT Solutions
                </h5>
                <p>
                In a dynamic era defined by constant technological evolution, the fusion of cutting-edge technology with the financial industry has become imperative. Embracing fintech solutions brings forth a myriad of advantages that deeply impact financial transactions, operational efficiency, risk management, and strategic decision-making processes.
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
                          placeholder="* Name"
                          required
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
                          placeholder="* Email"
                          required
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
                      placeholder="* Mobile Number"
                      required
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
                      placeholder="* Message"
                      required
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
        style={{ marginTop: "12%" }}
      >
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" /> */}
          <br />
          <span>Industry Challenges</span>
          <h5>
            Addressing Fintech <br /> Challenges
          </h5>
          <p className="mt-3">
          In the ever-changing landscape of finance, technology emerges as a pivotal player in addressing critical industry challenges. As the financial sector navigates through unprecedented demands and transformations, Vsple Technologies takes center stage in providing innovative solutions. Let's delve into some key challenges in the fintech industry:

          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-7 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={cybersecurity} width={"44px"} className="mb-2" alt="" />
                <br />
                <span>Cybersecurity and Data Privacy</span>
                <p className="mt-2">
                With the surge in digital transactions and the handling of sensitive financial data, ensuring robust cybersecurity and data privacy has become paramount. Cyber threats and breaches can result in severe financial repercussions and damage to reputation.
                </p>
              </div>
              <div className="child1">
                <img src={Interoperability} width={"44px"} className="mb-2" alt="" />
                <br />
                <span>Interoperability and Data Exchange</span>
                <p className="mt-2">
                The financial industry often grapples with seamless data exchange between different institutions and platforms, hindering the speed and efficiency of transactions.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={digitalBanking} width={"44px"} className="mb-2" alt="" />
                <br />
                <span>Digital Banking and Customer Experience</span>
                <p className="mt-2">
                In an era marked by the rise of digital banking, meeting customer expectations for seamless and user-friendly experiences is crucial.
                </p>
              </div>
              <div className="child1">
                <img src={financialInclusion} width={"44px"} className="mb-2" alt="" />
                <br />
                <span>Financial Inclusion and Accessibility</span>
                <p className="mt-2">
                Ensuring that financial services are accessible to all, including underserved populations, is a pressing challenge in the fintech landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-lg-5 text-center">
            <img src={rec8298} width={"80%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 text-center mt-5">
            {/* <div className="pulse-button"></div> */}
            <img src={isolationmode} width={"80%"} alt="" />
          </div>
          {/* <div className="col-md-1 col-lg-1"></div> */}
          <div className=" key-text-div col-md-6 col-sm-12 col-lg-6 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h5 className="text">Advantages Of IT In Fintech</h5>
              <span>Integration Of IT In The Fintech</span>
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
          Choose Vsple as your dedicated partner in fintech solutions. Our adept team combines cutting-edge technology with a profound understanding of the financial landscape to craft personalized solutions. Specializing in user-centric mobile banking experiences sets us apart. With Vsple, you'll enjoy seamless transactions and a focus on financial inclusivity. Your fintech solutions will adhere to the highest standards of security and compliance. Let Vsple empower your financial vision with our expertise and unwavering commitment to excellence.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={tailored} width={"13%"} alt="" />
            <h5>Tailored Fintech Solutions</h5>
            <p>
            At Vsple, we comprehend the intricate nature of the Fintech industry. Our team specializes in tailoring solutions that cater to your unique financial needs, leveraging cutting-edge technology to streamline operations and drive innovation.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={advanceTechnological} width={"13%"} alt="" />
            <h5>Advanced Technological Integration</h5>
            <p>
            Harnessing the power of advanced technologies like blockchain, artificial intelligence, and machine learning, we revolutionize Fintech operations. Our solutions enhance security, automate processes, and optimize financial workflows for unparalleled efficiency.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={agileDev} width={"13%"} alt="" />
            <h5>Agile Development and Scalability</h5>
            <p>
            Embracing an agile development approach, we ensure flexibility and scalability in every solution we deliver. Be it developing robust payment gateways, secure mobile banking applications, or scalable trading platforms, our solutions evolve as your business does.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={regulatoryCompliance} width={"13%"} alt="" />
            <h5>Regulatory Compliance Expertise</h5>
            <p>
            Navigating the regulatory landscape is integral to Fintech success. Vsple Technologies Pvt. Ltd. provides expertise in compliance, ensuring that your solutions adhere to industry standards and regulations, minimizing risks and ensuring trust.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={seamlessUser} width={"13%"} alt="" />
            <h5>Seamless User Experience</h5>
            <p>
            User-centric design is our forte. We prioritize intuitive interfaces and seamless experiences for your clients, ensuring optimal engagement and satisfaction, leading to increased adoption and retention rates.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={analyticDriven} width={"13%"} alt="" />
            <h5>Analytics-Driven Insights</h5>
            <p>
            Empower your decision-making with our comprehensive analytics tools. Gain actionable insights into financial trends, user behaviors, and performance metrics, enabling data-driven decisions for business growth and optimization.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">Fintech Market</h5>
              <h2 className="">Future of Fintech Application Development</h2>
              <p>
              The future of fintech solutions is marked by a revolution in financial accessibility, driven by blockchain advancements and personalized financial experiences. Digital banking and payment innovations will be seamlessly integrated, while artificial intelligence ensures real-time fraud detection and risk management. Cybersecurity and data privacy will be central, adhering to the highest standards. Customer engagement and financial inclusivity will be at the forefront, offering a holistic approach to financial well-being.
              </p>
              <span>Empowering Finances, One Transaction at a Time.</span>
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
          <span>Fintech Project Development</span>
          <h5>Our Solutions</h5>
          <p className="mt-3">
          Vsple Technologies leads the way in crafting innovative solutions for Fintech application development, ensuring a seamless and secure financial experience. Our comprehensive approach includes
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"13%"} alt="" />
            <h5>Web</h5>
            <p>
            Elevate your online financial presence with our web development solutions tailored for the fintech sector. We specialize in crafting user-friendly, secure websites that provide seamless access to financial information, transaction history, and interactive customer support. Our web solutions prioritize security, compliance, and scalability, ensuring your online platform is at the forefront of the financial technology revolution.

            </p>
          </div>
          <div className="b">
            <img className="my-4" src={mobileApplication} width={"13%"} alt="" />
            <h5>Mobile Application</h5>
            <p>
            Empower both customers and financial professionals with our customized fintech app development. Whether it's a user-centric app for seamless transactions, financial planning, or a robust platform for financial institutions to streamline operations, we've got you covered. Our mobile fintech apps prioritize user experience, data security, and real-time connectivity, enhancing the efficiency of financial services.

            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"13%"} alt="" />
            <h5>Wearables</h5>
            <p>
            Step into the future of finance with wearable technology. Vsple Technologies Pvt. Ltd. pioneers in developing wearable applications that bring convenience to financial interactions. Explore innovative ways to offer real-time data, transactions, and notifications through wearables.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
            Ready to revolutionize your Fintech experience?
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
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey web-model">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
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
      <div className="h-journey d-flex justify-content-center text-center ">
        <div className="p-journey web-model">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Technologies</span>
          <h5>
            Our Customers Love <br /> What We Do
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FintechIndustriesComponent;