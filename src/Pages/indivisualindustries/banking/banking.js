import React, { useState } from "react";
import "./banking.css";
import study from "../../../assest/main-icons/Mask group (3).png";
import study2 from "../../../assest/main-icons/Mask group (4).png";
import study3 from "../../../assest/main-icons/Mask group (4).png";
import study4 from "../../../assest/main-icons/Mask group (5).png";
import health from "../../../assest/main-icons/Group 1000004855.png";
import benefits from "../../../assest/main-icons/Rectangle 8108.png";
import insudtries_main from "../../../assest/main-icons/image 24812.png";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import security from "../../../assest/web-icons/Banking/Isolation_Mode.png";
import digital from "../../../assest/web-icons/Banking/Isolation_Mode (1).png";
import regulatoryCompliance from "../../../assest/web-icons/Banking/Isolation_Mode (2).png";
import fintechDisruption from "../../../assest/web-icons/Banking/Isolation_Mode (3).png";
import customizedBanking from "../../../assest/web-icons/Banking/Isolation_Mode (4).png";
import scalability from "../../../assest/web-icons/Banking/Isolation_Mode (5).png";
import regulatoryCompliance2 from "../../../assest/web-icons/Banking/Isolation_Mode (6).png";
import enchancedCustomer from "../../../assest/web-icons/Banking/Isolation_Mode (7).png";
import analyticsDriven from "../../../assest/web-icons/Banking/Isolation_Mode (8).png";
import continuousupport from "../../../assest/web-icons/Banking/Isolation_Mode (9).png";
import healthcareApp from "../../../assest/main-icons/Group 1000005518.png";
import rec8298 from "../../../assest/main-icons/Mask group (19).png";
import group5096 from "../../../assest/main-icons/Group 1000005096.png";
import isolationmode from "../../../assest/main-icons/Frame (22).png";
import { frame5, leader } from "../../../common/images";
import hr24 from "../../../assest/main-icons/24-hours-service 1.png";
import mobileView from "../../../assest/main-icons/creative-reels-composition 1.png";
import FAQ from "../../../components/Faq";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import rectangle8297 from "../../../assest/main-icons/Rectangle 8297.png";
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
const BankingIndustriesComponent = () => {
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [state, setState] = useState({
    title: "Banking",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer Experience
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `User-Friendly Interfaces: Digital banking solutions provide intuitive and user-friendly interfaces, enhancing the overall customer experience and satisfaction.
                Personalized Services: Advanced analytics enable banks to offer personalized services and targeted product recommendations based on customer behavior and preferences.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Operational Efficiency
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Automated Processes: Digital solutions streamline and automate various banking processes, reducing manual intervention, minimizing errors, and improving overall operational efficiency.
             Real-time Transactions: Instant and real-time transaction processing leads to faster and more efficient banking operations, enhancing customer service.,`,
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
      content: `Reduced Overheads: Digitalization reduces the need for extensive physical infrastructure, leading to cost savings on premises, maintenance, and staffing.
        Data-Driven Decision-Making: Analytics and data-driven insights help banks optimize resource allocation, marketing strategies, and product offerings, contributing to cost-effectiveness.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Strategic Decision-Making
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Predictive Analytics: Digital solutions provide banks with predictive analytics, empowering them to make informed decisions about market trends, risk management, and investment strategies.
      Innovation Adoption: Staying abreast of emerging technologies allows banks to adopt innovative solutions, fostering a culture of continuous improvement and strategic growth.`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question:
        "What digital solutions does Vsple offer for the banking industry?",
      answer:
        "Vsple provides a comprehensive suite of digital solutions tailored for the banking sector. This includes web development, mobile applications, digital wallets, and contactless payment solutions designed to enhance customer experiences and streamline banking operations.",
      open: true,
    },
    {
      question:
        "How can Vsple help banks improve customer experience through digital solutions?",
      answer:
        "Vsple specializes in developing user-friendly and secure digital platforms. These solutions aim to elevate online banking experiences, offering seamless access to services, account management, and interactive financial tools to enhance overall customer satisfaction.",
      open: false,
    },
    {
      question:
        "In what ways does Vsp address cybersecurity concerns for banks?",
      answer:
        "Security is a top priority for Vsple. Our digital solutions incorporate robust cybersecurity measures to safeguard sensitive financial data and protect against cyber threats. We implement cutting-edge technologies to ensure the highest standards of data security and compliance.",
      open: false,
    },
    {
      question:
        "Can Vsple customize digital solutions based on the specific needs of individual banks?",
      answer:
        "Yes, Vsple understands that each bank has unique requirements. Our experienced team customizes digital solutions to align with the specific needs, challenges, and goals of individual banking institutions, ensuring a tailored and effective approach.",
      open: false,
    },
    {
      question: "How can Vsple contribute to cost optimization for banks?",
      answer:
        "Digitalization through Vsple's solutions reduces operational overheads by automating processes, minimizing manual errors, and optimizing resource allocation. This leads to significant cost savings in terms of infrastructure, maintenance, and staffing.",
      open: false,
    },
    {
      question:
        " What role does Vsple play in the future of banking technology?",
      answer:
        "Vsple is committed to driving the future of banking technology by adopting emerging trends such as AI-powered insights, personalized financial solutions, and seamless integration of online and offline banking experiences. We strive to keep our clients at the forefront of innovation.",
      open: false,
    },
    {
      question:
        "How does Vsple ensure regulatory compliance for banking institutions?",
      answer:
        "Navigating the complex landscape of regulatory requirements is a challenge for banks. Vsple stays abreast of ever-changing regulations and ensures that our digital solutions comply with industry standards, reducing the risk of legal consequences for our banking clients.",
      open: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
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
      <div className="banking-top">
        <div className="form-head">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-lg-5 mt-5">
              <div className="healthcare-head">
                <span>Banking</span>
                <h5>
                  Transforming <br /> Banking <br /> with IT Solutions
                </h5>
                <p>
                  In a fast-paced financial landscape, the incorporation of
                  cutting-edge Digital Solutions in the banking industry has
                  become imperative. Embracing digital technologies in banking
                  offers a plethora of advantages that significantly impact
                  customer experience, operational efficiency, risk management,
                  and strategic decision-making processes.
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
                    <img width={"4%"}  src={telephone} alt="" />
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
        style={{ marginTop: "13%" }}
      >
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" /> */}
          <br />
          <span>Industry Challenges</span>
          <h5>Addressing Banking Challenges</h5>
          <p className="mt-3">
            Amidst the dynamic nature of the banking sector, technology plays a
            pivotal role in addressing critical industry challenges. As banks
            grapple with unprecedented demands and changes, Vsple emerges as a
            key player in providing innovative solutions. Let's explore some key
            challenges in the banking industry.
          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-7 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={security} width={"12%"} alt="" />
                <br />
                <span>Security and Data Protection</span>
                <p>
                  With the increasing reliance on digital platforms and the vast
                  amounts of sensitive customer data, safeguarding against cyber
                  threats and ensuring data protection have become paramount.
                  Any breach can have severe repercussions, both in terms of
                  trust and regulatory compliance.
                </p>
              </div>
              <div className="child1">
                <img src={digital} width={"12%"} alt="" />
                <br />
                <span>Digital Transformation and Customer Experience</span>
                <p>
                  Banks often face the challenge of seamlessly integrating
                  digital channels while maintaining a superior customer
                  experience. Striking the right balance between innovation and
                  customer satisfaction is crucial in the digital age.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={regulatoryCompliance} width={"12%"} alt="" />
                <br />
                <span>Regulatory Compliance</span>
                <p>
                  Navigating the complex landscape of regulatory requirements
                  poses a significant challenge for banks. Keeping up with
                  ever-changing regulations and ensuring compliance is essential
                  to avoid legal consequences.
                </p>
              </div>
              <div className="child1">
                <img src={fintechDisruption} width={"12%"} alt="" />
                <br />
                <span>Fintech Disruption</span>
                <p>
                  The rise of fintech disruptors introduces competition and
                  necessitates traditional banks to adapt swiftly to evolving
                  technologies to stay relevant.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-lg-5 text-center">
            <img src={rec8298} width={"90%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 text-right">
            {/* <div className="pulse-button"></div> */}
            <img src={isolationmode} width={"90%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-5 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h5 className="text">Advantages of IT in Banking</h5>
              <span>Integration of IT in the Banking</span>
              <div className="accordion">
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
            At Vsple, we proudly stand as your steadfast companion in reshaping
            banking through cutting-edge technology solutions. Our seasoned
            team, well-versed in both technology and the intricacies of the
            banking industry, crafts bespoke and innovative solutions. With a
            core focus on cybersecurity, elevating customer experiences, and
            ensuring regulatory compliance, Vsple positions your bank at the
            forefront of progress. Immerse yourself in personalized banking
            services, effortless digital transactions, and ironclad data
            protection by making Vsple your trusted technology ally.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img
              className="my-4"
              src={customizedBanking}
              width={"13%"}
              alt=""
            />
            <h5>Customized Banking Solutions</h5>
            <p>
              Tailored to suit the unique needs of your financial institution,
              our custom-built IT solutions encompass a wide spectrum of banking
              operations. From secure transaction processing to customer
              relationship management, we craft bespoke solutions for seamless
              functionality.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={scalability} width={"13%"} alt="" />
            <h5>Scalability and Flexibility</h5>
            <p>
              Adaptability is key in a dynamic market. Our agile approach to
              development ensures scalable solutions that evolve with your
              growing needs. Experience seamless scalability without
              compromising on efficiency.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={regulatoryCompliance2}
              width={"13%"}
              alt=""
            />
            <h5>Regulatory Compliance Expertise</h5>
            <p>
              Navigating the complex regulatory landscape can be daunting. Vsple
              Technologies Pvt. Ltd. offers expertise in ensuring compliance
              with evolving banking regulations, minimizing risks, and keeping
              your institution on the right side of the law.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={enchancedCustomer}
              width={"13%"}
              alt=""
            />
            <h5>Enhanced Customer Experience</h5>
            <p>
              Elevate your customers' banking experience with our user-centric
              solutions. We prioritize intuitive interfaces, mobile
              optimization, and personalized banking experiences to delight and
              retain your clientele.{" "}
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={analyticsDriven} width={"13%"} alt="" />
            <h5>Analytics-Driven Insights</h5>
            <p>
              Leverage the power of data. Our solutions come equipped with
              comprehensive analytics tools, providing actionable insights into
              customer behavior, financial trends, and operational efficiencies
              to drive informed decision-making.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={continuousupport} width={"13%"} alt="" />
            <h5>Continuous Support and Upgradation</h5>
            <p>
              Our commitment doesn't end with implementation. We provide ongoing
              support and maintenance, ensuring smooth operations. Additionally,
              we continually upgrade our solutions to keep you at the forefront
              of banking technology.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">Banking Market</h5>
              <h2 className="">Future of Banking Application Development</h2>
              <p>
                Embark on a journey into the future of banking technology, where
                Vsple spearheads a transformation in customer engagement. Fueled
                by AI-powered insights and tailor-made financial solutions, our
                vision encompasses the seamless integration of online and
                offline banking experiences. In this ever-evolving scenario,
                Vsple remains unwaveringly committed to upholding the highest
                standards of security, fostering innovation, and placing
                customer-centricity at the forefront.
              </p>
              <span>Ushering in a New Era of Banking</span>
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
          <span>Banking Project Development</span>
          <h5>Our Solutions</h5>
          <p className="mt-3">
            Our commitment in transforming the Banking industry through bespoke
            project development services. Experience the convergence of
            innovation and financial services with our expertise in web, app,
            and wearable technologies. We bring your banking vision to life,
            offering tailored solutions that enhance customer experiences,
            streamline operations, and embrace the future of digital finance.
            Explore the possibilities with us as we redefine the landscape of
            banking through cutting-edge technology solutions.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"12%"} alt="" />
            <h5>Web</h5>
            <p>
              Elevate your online banking presence with our tailored web
              development solutions. We craft user-friendly, secure websites
              that provide seamless access to banking services, account
              management, and interactive financial tools
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={mobileApplication}
              width={"12%"}
              alt=""
            />
            <h5>Mobile Applications</h5>
            <p>
              Empower customers with our customized banking app development.
              Whether it's a user-centric app for account management,
              transaction tracking, or a robust platform for banking
              professionals, our mobile solutions prioritize user experience,
              data security, and real-time connectivity.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"12%"} alt="" />
            <h5>Wearables</h5>
            <p>
              Embracing the future, we extend our expertise to wearable
              technology. Our development team innovates and creates wearable
              banking applications, ensuring accessibility and ease of use
              through devices like smartwatches, offering a new dimension of
              convenience to customers.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
            Ready to revolutionize your Banking experience?
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
      <div className="h-journey d-flex justify-content-center text-center">
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

export default BankingIndustriesComponent;
