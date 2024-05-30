import React, { useState } from "react";
import "./healthcare.css";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import group5096 from "../../../assest/main-icons/Group 1000005096.png";
import { frame5 } from "../../../common/images";
import hr24 from "../../../assest/main-icons/24-hours-service 1.png";
import FAQ from "../../../components/Faq";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import rectangle8297 from "../../../assest/main-icons/Rectangle 8297.png";

import dataExchange from "../../../assest/web-icons/data-exchange.png";
import isolationMode from "../../../assest/web-icons/Isolation_Mode.png";
import isolationMode2 from "../../../assest/web-icons/Isolation_Mode (1).png";
import consultationService from "../../../assest/web-icons/Isolation_Mode (7).png";
import custonDevelopment from "../../../assest/web-icons/Isolation_Mode (8).png";
import futureProofing from "../../../assest/web-icons/Isolation_Mode (9).png";
import dataSecurityCompliance from "../../../assest/web-icons/Group 1000005138.png";
import healthcareApp from "../../../assest/main-icons/Group 1000005554.png";
import Modal from "../../../common/thankyoumodal/thankyoumodal";
// import downarrow from "../../../assest/web-icons/Group 1000004946.png";
// import uparrow from "../../../assest/web-icons/Group 647.png";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {
  downarrow,
  uparrow,
  shareButton,
  implementationIntegration,
  supportMaintenance,
  wearables,
  mobileApplication,
  web,
  main,
  account,
  email,
  telephone,
  message,
  contactMail,
  btnsvg,
  loader,
} from "../../../common/images";

const HealthIndustriesComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          <span className="feature-text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Improved Patient Care
          </span>
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Enhanced Patient Records: IT solutions facilitate the creation, management, and secure storage of electronic health records (EHR). This ensures that patient information is readily accessible, enabling healthcare providers to make informed decisions quickly.
      Telemedicine: Telehealth and telemedicine technologies allow remote patient consultations, enabling access to healthcare services in distant or underserved areas. Patients benefit from the convenience and timely medical care, especially in emergencies.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Streamlined Operations
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Efficient Workflows: IT systems optimize administrative and clinical workflows, reducing manual tasks, paperwork, and human error. This leads to smoother operations and increased staff productivity.
      Resource Management: Hospital management systems and scheduling software help healthcare institutions efficiently allocate resources, such as staff and equipment, resulting in cost savings and improved patient flow.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reduced Costs
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Telemedicine Savings: By reducing the need for physical office visits and hospitalizations, telemedicine helps cut down on travel costs for patients and healthcare institutions.
      Administrative Efficiency:  IT systems automate billing, insurance claims, and administrative tasks, reducing administrative overhead and revenue cycle inefficiencies.
      Preventive Care: Predictive analytics and data-driven insights enable healthcare providers to identify at-risk patients and implement preventive care strategies, reducing long-term treatment costs.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enhanced Decision-Making
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Data Analytics: IT solutions collect and analyze large volumes of healthcare data, providing valuable insights. Clinicians can make data-driven decisions to improve patient outcomes and population health.
      Research and Innovation: IT tools support medical research and development by providing access to vast datasets, accelerating medical breakthroughs and innovations.`,
    },
    // Add more items as needed
  ];
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "What industries does Vsple Technologies serve in healthcare?",
      answer:
        "Vsple Technologies specializes in providing IT solutions and services tailored to the unique needs of the healthcare industry, ensuring enhanced patient care, streamlined operations, and robust data security and compliance.",
      open: true,
    },
    {
      question: "How can Vsple Technologies customize healthcare solutions?",
      answer:
        "We customize healthcare solutions by deeply understanding the specific needs, challenges, and goals of healthcare organizations. Our experienced team tailors technology solutions to meet industry-specific requirements, ensuring optimal performance.",
      open: false,
    },
    {
      question:
        "Can Vsple Technologies work with healthcare startups as well as established organizations?",
      answer:
        "Yes, we cater to a diverse clientele in healthcare, including startups and large healthcare enterprises. Our scalable and adaptable solutions are designed to meet the technology needs of organizations of all sizes.",
      open: false,
    },
    {
      question:
        "What benefits can healthcare organizations expect from Vsple's IT solutions?",
      answer:
        "Healthcare clients can expect benefits such as improved patient care, streamlined operations, and robust data security and compliance solutions. Our IT solutions contribute to overall efficiency and care quality in the healthcare sector.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies contribute to data security in healthcare?",
      answer:
        "We prioritize data security in healthcare by implementing robust measures to safeguard patient information, ensuring compliance with healthcare regulations, and providing secure infrastructure for healthcare organizations.",
      open: false,
    },
    {
      question:
        "What role does technology play in the healthcare solutions provided by Vsple Technologies?",
      answer:
        "In healthcare, our IT solutions focus on leveraging technology to enhance patient care, improve operational efficiency, and ensure seamless collaboration among healthcare professionals through innovative digital solutions.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies support healthcare organizations in digital transformation?",
      answer:
        "We support healthcare organizations in their digital transformation journey by providing solutions that optimize processes, enhance patient experiences, and leverage technology for improved healthcare delivery.",
      open: false,
    },
    {
      question:
        "What regulatory compliance measures does Vsple Technologies adhere to in healthcare?",
      answer:
        "Vsple Technologies adheres to strict regulatory compliance measures in healthcare, ensuring that our solutions meet industry standards and comply with regulations such as HIPAA to protect patient confidentiality and privacy.",
      open: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  const [state, setState] = useState({
    title: "Health Care",
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
        setShowModal(true);
          const modalId = document.getElementById("modal");
          modalId.style.display = "block";
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
                <span>Health Care</span>
                <h5>
                  Transforming <br /> Health & Care <br /> with IT Solutions
                </h5>
                <p>
                  In an era marked by rapidly evolving technology, the
                  integration of Information Technology (IT) in the Health &
                  Care industry has become indispensable. Embracing IT solutions
                  in healthcare yields a multitude of benefits that profoundly
                  impact patient care, operational efficiency, cost management,
                  and decision-making processes.
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
                          autoComplete="off"
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
                          autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                {showModal && (
                 <Modal id="modal" isOpen={showModal} >
                 <div className="text-center">

                   <h5>Thankyou!</h5>
                   <p>Thank you for reaching out to us at Vsple. We appreciate your interest and value your inquiry.</p>
                   <p>Our team is actively reviewing your message and will respond to your inquiry as soon as possible. We strive to address all inquiries as soon as possible.</p>
                   <p>In the meantime, we invite you to explore our website for more information about our services and our company values. If your matter requires urgent attention, please feel free to contact us directly at +91 9009797197</p>
                   <span onClick={closeModal}>Close</span>
                 </div>
               </Modal>
                )}
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
            Addressing Healthcare <br /> Challenges
          </h5>
          <p className="mt-3">
            In the ever-evolving landscape of healthcare and care, technology
            has become an indispensable tool in addressing critical industry
            challenges. As the healthcare sector faces unprecedented demands and
            changes, Vsple Technologies play a pivotal role in providing
            innovative solutions. Here, we'll delve into the few key challenges
            in the Health and Care industry:
          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-12 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={group5111} width={"12%"} alt="" />
                <br />
                <span>Healthcare Data Security and Privacy</span>
                <p>
                  With the digitization of healthcare records and sensitive
                  patient data, ensuring the security and privacy of this
                  information has become paramount. Data breaches can result in
                  severe consequences, both legally and ethically.
                </p>
              </div>
              <div className="child1">
                <img src={dataExchange} width={"12%"} alt="" />
                <br />
                <span>Interoperability and Data Exchange</span>
                <p>
                  The healthcare industry often struggles with the seamless
                  exchange of patient information between different providers
                  and systems.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={isolationMode} width={"12%"} alt="" />
                <br />
                <span>Healthcare Workforce Management</span>
                <p>
                  The shortage of healthcare professionals and the need for
                  effective workforce management are critical challenges.
                </p>
              </div>
              <div className="child1">
                <img src={isolationMode2} width={"12%"} alt="" />
                <br />
                <span>Telemedicine and Remote Care</span>
                <p>
                  In an era marked by the COVID-19 pandemic, the need for
                  telemedicine and remote care solutions has surged.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-5 text-center ">
            <img src={rectangle8297} width={"90%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex align-items-center  text-right">
            {/* <div className="pulse-button"></div> */}
            <img src={group5096} width={"90%"} alt="" />
          </div>
          {/* <div className="col-md-1 col-lg-1"></div> */}
          <div className=" key-text-div col-md-12 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h4 className="text">Advantages Of IT In Health & Care</h4>
              <span>Integration Of IT In The Health & Care</span>
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
                      className={`accordion-content ${index === activeIndex ? "active" : ""
                        }`}
                      style={{
                        maxHeight: index === activeIndex ? "140px" : "0",
                        display: "flex",
                      }}
                    >
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
            VSPLE is your trusted partner in healthcare app development. Our
            expert team combines cutting-edge technology with deep industry
            knowledge to create innovative solutions. We specialize in AI-driven
            diagnostics, telemedicine, and data security. With VSPLE, you'll
            benefit from personalized patient care, seamless remote monitoring,
            and a focus on mental health support. Your healthcare app will
            adhere to the highest data privacy standards. Let VSPLE empower your
            healthcare vision with our expertise and commitment to excellence.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img
              className="my-4"
              src={consultationService}
              width={"13%"}
              alt=""
            />
            <h5>Consultation Services</h5>
            <p>
              Gain expert guidance and insights to make informed decisions
              regarding your healthcare technology requirements. Our
              consultation services ensure that your strategies align with
              industry best practices and future trends.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={custonDevelopment}
              width={"13%"}
              alt=""
            />
            <h5>Custom Development</h5>
            <p>
              Experience tailor-made solutions crafted specifically for your
              needs. Whether it's web development, app creation, or wearable
              technology, our team specializes in creating bespoke solutions
              that cater to your unique requirements.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={futureProofing} width={"13%"} alt="" />
            <h5>Innovation and Future-Proofing</h5>
            <p>
              Stay ahead of the curve with our commitment to innovation. We not
              only provide solutions for today but also strive to future-proof
              your healthcare initiatives, incorporating the latest advancements
              and technologies.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={implementationIntegration}
              width={"13%"}
              alt=""
            />
            <h5>Implementation and Integration</h5>
            <p>
              Seamlessly integrate our solutions into your existing systems. We
              ensure a smooth transition, minimizing disruptions and maximizing
              the efficiency of your healthcare infrastructure.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={supportMaintenance}
              width={"13%"}
              alt=""
            />
            <h5>Ongoing Support and Maintenance</h5>
            <p>
              Count on us for continuous support and maintenance
              post-implementation. Our team remains dedicated to ensuring that
              your solutions not only remain cutting-edge but also continue to
              function effectively over time.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={dataSecurityCompliance}
              width={"13%"}
              alt=""
            />
            <h5>Data Security and Compliance</h5>
            <p>
              Trust Vsple Technologies to handle data security and regulatory
              compliance effectively. We prioritize the safeguarding of
              sensitive healthcare information, ensuring adherence to industry
              standards and regulations.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5 ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">HealthCare Market</h5>
              <h2 className="">Future of Healthcare Application Development</h2>
              <p>
                The future of healthcare application development is marked by a
                revolution in patient care, driven by AI-powered diagnostics and
                personalized treatment plans. Telemedicine and remote monitoring
                will be seamlessly integrated, while IoT and wearables ensure
                real-time health data collection. Data security and privacy will
                be paramount, adhering to the highest standards. Patient
                engagement and mental health support will be central, offering a
                holistic approach to well-being.
              </p>
              <span>Empowering Health, One App at a Time.</span>
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
          <span>Health Care Project Development</span>
          <h5>Our solutions</h5>
          <p className="mt-3">
            Vsple Technologies is at the forefront of revolutionizing healthcare
            application development, offering tailored solutions for a seamless
            and patient-centric experience. Our holistic approach encompasses:
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"13%"} alt="" />
            <h5>Web</h5>
            <p>
              Elevate your online presence with our web development solutions
              tailored for the Health and Care sector. We specialize in crafting
              user-friendly, responsive websites that provide seamless access to
              health information, appointment scheduling, and interactive
              patient engagement. Our web solutions prioritize security,
              compliance, and scalability, ensuring your online platform is at
              the forefront of the digital health revolution.{" "}
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
              customized healthcare app development. Whether it's a
              patient-centric app for wellness tracking, medication reminders,
              or a robust platform for healthcare providers to streamline
              workflows, we've got you covered. Our mobile health apps
              prioritize user experience, data security, and real-time
              connectivity, enhancing the efficiency of healthcare delivery.{" "}
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"13%"} alt="" />
            <h5>Wearables</h5>
            <p>
              Step into the future of healthcare with our wearable technology
              solutions. Vsple Technologies pioneers the development of
              health-centric wearables that seamlessly integrate into daily
              routines. From fitness trackers to advanced medical wearables, our
              solutions focus on real-time health monitoring, data accuracy, and
              user comfort. Experience a new era of personalized, on-the-go
              healthcare solutions.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to revolutionize your Health and Care experience?
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
      {/* <div className="h-journey d-flex justify-content-center text-center web-model">
        <div className="p-journey web-model">
          <span>Technologies</span>
          <h5>
            Our Customers Love <br /> What We Do
          </h5>
        </div>
      </div> */}
    </div>
  );
};

export default HealthIndustriesComponent;
