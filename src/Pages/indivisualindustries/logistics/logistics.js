import React, { useState } from "react";
import "./logistics.css";
import study from "../../../assest/main-icons/Mask group (3).png";
import study2 from "../../../assest/main-icons/Mask group (4).png";
import study3 from "../../../assest/main-icons/Mask group (4).png";
import study4 from "../../../assest/main-icons/Mask group (5).png";
import health from "../../../assest/main-icons/Group 1000004855.png";
import benefits from "../../../assest/main-icons/Rectangle 8108.png";
import insudtries_main from "../../../assest/main-icons/image 24812.png";
import healthcareApp from "../../../assest/main-icons/Frame (25).png";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import supplychain from "../../../assest/web-icons/Logistic/Isolation_Mode.png";
import warehouse from "../../../assest/web-icons/Logistic/Isolation_Mode (1).png";
import lastmile from "../../../assest/web-icons/Logistic/Isolation_Mode (2).png";
import Sustainability from "../../../assest/web-icons/Logistic/Isolation_Mode (3).png";
import customLogistic from "../../../assest/web-icons/Logistic/Isolation_Mode (4).png";
import smartAutomation from "../../../assest/web-icons/Logistic/Isolation_Mode (5).png";
import realTime from "../../../assest/web-icons/Logistic/Isolation_Mode (6).png";
import enchancedCustomer from "../../../assest/web-icons/Logistic/Isolation_Mode (7).png";
import scalability from "../../../assest/web-icons/Logistic/Isolation_Mode (8).png";
import futureReadySollution from "../../../assest/web-icons/Logistic/Isolation_Mode (9).png";
import rec8298 from "../../../assest/main-icons/Mask group (22).png";
import group5096 from "../../../assest/main-icons/Group 1000005096.png";
import isolationmode from "../../../assest/main-icons/2201.w021.n001.434B.p15 1.png";
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
import TechnologiesWeUse from "../../../components/TechnologiesWeUse";

const LogisticsIndustriesComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enhanced Supply Chain
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Utilizing advanced tracking technologies, Vsple Technologies ensures real-time visibility across the entire supply chain. This facilitates proactive decision-making, minimizing disruptions and enhancing customer satisfaction.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Warehouse Automation
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Leveraging automation and robotics, our solutions optimize warehouse operations, ensuring efficient inventory management, reduced errors, and faster order processing.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Optimize Last-Mile Delivery
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Cutting-edge route optimization algorithms enhance last-mile delivery efficiency, reducing delivery times, fuel consumption, and overall operational costs.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sustainable Practices
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Vsple Technologies is committed to integrating eco-friendly practices within logistics operations. This includes optimizing transportation routes, adopting electric vehicles, and implementing packaging solutions with minimal environmental impact.`,
    },
    // Add more items as needed
  ];
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "What industries does Vsple Technologies serve in the logistics sector?",
      answer:
        "Vsple Technologies caters to a diverse range of industries, including e-commerce, manufacturing, retail, healthcare, and more. Our solutions are adaptable to meet the unique needs of each sector within the logistics industry.",
      open: true,
    },
    {
      question: "How does Vsple Technologies ensure sustainability in its logistics solutions?",
      answer:
        "Vsple Technologies promotes sustainability in its logistics IT services by implementing eco-friendly practices within the digital realm. This includes optimizing digital processes, reducing energy consumption in data centers, and utilizing green technologies in the development and deployment of IT solutions. Our commitment to sustainability extends to the digital aspects of logistics, ensuring environmentally conscious IT services.",
      open: false,
    },
    {
      question:
        "Can Vsple Technologies work with both small startups and established logistics companies?",
      answer:
        "Yes, our logistics solutions are designed to cater to businesses of all sizes. Whether you're a startup or an established player, we tailor our technology solutions to meet your specific requirements and scale with your business.",
      open: false,
    },
    {
      question:
        "What benefits can logistics companies expect from Vsple Technologies' IT solutions?",
      answer:
        "Logistics clients benefit from enhanced supply chain visibility, optimized operations, reduced costs, and sustainable practices that align with future industry trends. Our solutions are geared towards improving overall efficiency and performance.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies stay ahead in adopting emerging technologies for logistics solutions?",
      answer:
        "Our dedicated research and development team ensures that we stay at the forefront of emerging technologies in the logistics sector. We proactively integrate the latest advancements such as automation, artificial intelligence, and IoT to deliver innovative and future-proof logistics solutions.",
      open: false,
    },
    {
      question:
        "Can Vsple Technologies provide customized logistics solutions for unique business requirements?",
      answer:
        "Absolutely. We understand that each business has unique needs and challenges. Our experienced team works closely with clients to customize logistics solutions, ensuring they align with specific requirements, goals, and industry regulations.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies address the challenge of last-mile delivery in its logistics solutions?",
      answer:
        "Vsple Technologies addresses last-mile delivery challenges through advanced route optimization algorithms, ensuring efficient and timely deliveries. We focus on maximizing delivery efficiency, minimizing costs, and exceeding customer expectations for flexible delivery options.",
      open: false,
    },
    {
      question:
        "What role does technology play in enhancing supply chain visibility with Vsple Technologies?",
      answer:
        "Technology plays a pivotal role in enhancing supply chain visibility. Vsple Technologies utilizes advanced tracking technologies to provide real-time insights into inventory, shipments, and demand. This empowers businesses to make informed decisions and proactively manage their supply chains.",
      open: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  const [state, setState] = useState({
    title: "Logistic",
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
          title: "Logistics",
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
      <div className="logistic-top">
        <div className="form-head">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-lg-5 mt-5">
              <div className="healthcare-head">
                <span>Logistics</span>
                <h5>
                  Transforming <br /> Logistics <br /> with IT Solutions
                </h5>
                <p>
                  In a world dominated by constant advancements in technology,
                  the logistics industry stands at the forefront of
                  transformation through the integration of cutting-edge
                  Information Technology (IT) solutions. Embracing these
                  solutions doesn't just optimize operations; it redefines the
                  entire logistics landscape, bringing forth unparalleled
                  efficiency, cost-effectiveness, and decision-making
                  capabilities.
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
                      <input
                        name="why"
                        type="radio"
                        value="Google"
                        checked={state.why === "Google"}
                        onChange={handleInputChange}
                      />
                      <label> Google</label>
                      <input
                        name="why"
                        type="radio"
                        value="LinkedIn"
                        checked={state.why === "LinkedIn"}
                        onChange={handleInputChange}
                      />
                      <label> LinkedIn</label>
                      <input
                        name="why"
                        type="radio"
                        value="Facebook"
                        checked={state.why === "Facebook"}
                        onChange={handleInputChange}
                      />
                      <label> Facebook</label>
                      <input
                        className="web-model"
                        name="why"
                        type="radio"
                        value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange}
                      />
                      <label className="web-model"> Instagram</label>
                    </div>
                    <div className="d-flex justify-content-start">
                      <input
                        className="mobile-model"
                        name="why"
                        type="radio"
                        value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange}
                      />
                      <label className="mobile-model"> Instagram</label>
                      <input
                        name="why"
                        type="radio"
                        value="Other"
                        checked={state.why === "Other"}
                        onChange={handleInputChange}
                      />
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
            Addressing Logistics <br /> Challenges
          </h5>
          <p className="mt-3">
            In the dynamic realm of logistics, technology emerges as a
            game-changer in overcoming critical industry challenges. As the
            logistics sector copes with escalating demands and changes, Vsple
            plays a pivotal role in delivering innovative solutions. Let's delve
            into a few key challenges in the logistics industry:
          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-7 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={supplychain} width={"44px"} alt="" />
                <br />
                <span>Supply Chain Visibility and Transparency</span>
                <p>
                  Achieving real-time visibility across the supply chain is a
                  constant challenge. Efficiently tracking and tracing the
                  movement of goods is crucial for timely decision-making and
                  customer satisfaction.
                </p>
              </div>
              <div className="child1">
                <img src={warehouse} width={"44px"} alt="" />
                <br />
                <span>Warehouse Optimization</span>
                <p>
                  Efficient warehouse management is paramount for reducing
                  operational costs and ensuring swift order fulfillment. The
                  logistics industry grapples with maximizing space utilization
                  and minimizing order processing times.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={lastmile} width={"44px"} alt="" />
                <br />
                <span>Last-Mile Delivery</span>
                <p>
                  The final leg of delivery poses challenges in terms of route
                  optimization, ensuring timely deliveries, and meeting customer
                  expectations for flexible delivery options.
                </p>
              </div>
              <div className="child1">
                <img src={Sustainability} width={"44px"} alt="" />
                <br />
                <span>Sustainability</span>
                <p>
                  As the world shifts towards greener practices, the logistics
                  industry faces the challenge of adopting sustainable solutions
                  and reducing its environmental footprint.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-lg-5 text-center">
            <img src={rec8298} width={"80%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 text-right mt-5">
            {/* <div className="pulse-button"></div> */}
            <img src={isolationmode} width={"90%"} alt="" />
          </div>
          {/* <div className="col-md-1 col-lg-1"></div> */}
          <div className=" key-text-div col-md-6 col-sm-12 col-lg-6 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h4 className="text">Advantages Of IT In Logistics</h4>
              <span>Integration Of IT In The Logistics</span>
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
            Vsple Technologies is your strategic partner in logistics technology
            solutions. Our seasoned team combines technological expertise with
            in-depth industry knowledge to craft innovative solutions. We
            specialize in optimizing supply chain visibility, implementing
            warehouse automation, and promoting sustainable logistics practices.
            With Vsple Technologies, experience streamlined operations, reduced
            costs, and a logistics ecosystem designed for the future.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={customLogistic} width={"44px"} alt="" />
            <h5>Customized Logistics Software Solutions</h5>
            <p>
              We specialize in crafting bespoke software solutions tailored to
              the unique needs of your logistics operations. Our team harnesses
              advanced IT capabilities to develop intuitive, scalable, and
              efficient logistics software, ensuring seamless management of
              supply chains, inventory, and operations.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={smartAutomation} width={"44px"} alt="" />
            <h5>Smart Automation and Integration</h5>
            <p>
              Leveraging the power of automation, we integrate intelligent
              systems to optimize processes within your logistics framework.
              From warehouse management to route planning and tracking, our
              solutions drive efficiency and cost-effectiveness through
              automated workflows.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={realTime} width={"44px"} alt="" />
            <h5>Real-time Tracking and Analytics</h5>
            <p>
              Gain real-time visibility into your logistics operations with our
              sophisticated tracking and analytics tools. Monitor shipments,
              analyze data, and derive actionable insights to enhance
              decision-making, optimize routes, and improve overall efficiency.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={enchancedCustomer}
              width={"44px"}
              alt=""
            />
            <h5>Enhanced Supply Chain Management</h5>
            <p>
              We streamline supply chain complexities by deploying robust IT
              solutions that enhance collaboration among stakeholders, minimize
              bottlenecks, and optimize inventory levels. Our technology-driven
              approach ensures a seamless flow of goods from point of origin to
              destination.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={scalability} width={"44px"} alt="" />
            <h5>Scalability and Flexibility</h5>
            <p>
              Our agile development approach ensures that our solutions grow
              with your business. We design scalable systems that adapt to
              changing demands, enabling you to expand your logistics operations
              without technological constraints.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={futureReadySollution}
              width={"44px"}
              alt=""
            />
            <h5>Future-ready Solutions</h5>
            <p>
              We stay ahead of the curve by constantly innovating and
              integrating the latest technologies into our solutions. Embrace
              the future of logistics with Vsple Technologies, where innovation
              meets efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">Logistics Market</h5>
              <h2 className="">Future of Logistics Application Development</h2>
              <p>
                "The future of logistics technology is marked by a paradigm
                shift towards automation, artificial intelligence, and
                sustainable practices. Predictive analytics will play a crucial
                role in anticipating demand, optimizing routes, and minimizing
                environmental impact. Vsple Technologies is at the forefront of
                shaping this future, ensuring that your logistics operations are
                not just efficient but also environmentally conscious.
              </p>
              <span>Revolutionizing Logistics, One Innovation at a Time.</span>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 mt-3 text-center">
            <img src={healthcareApp} width={"85%"} alt="" />
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Logistics Project Development</span>
          <h5>Our solutions</h5>
          <p className="mt-3">
            Vsple Technologies is at the forefront of revolutionizing logistics
            application development, offering tailored solutions for a seamless
            and efficient experience. Our comprehensive approach includes:
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"44px"} alt="" />
            <h5>Web</h5>
            <p>
              Our expertise in web development encompasses robust logistics
              management systems, streamlined inventory tracking portals, and
              dynamic supply chain management platforms. We design and deploy
              web solutions optimized for efficiency, scalability, and seamless
              integration across devices.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={mobileApplication}
              width={"44px"}
              alt=""
            />
            <h5>Mobile Application</h5>
            <p>
              Empower your logistics operations with our custom mobile
              applications. From real-time shipment tracking and route
              optimization to driver management and customer engagement apps,
              our mobile solutions are designed to enhance accessibility,
              efficiency, and user experience.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"44px"} alt="" />
            <h5>Wearables</h5>
            <p>
              Enter the realm of cutting-edge logistics management with our
              wearable app solutions. Seamlessly integrated with wearable
              devices, our applications offer hands-free operation, providing
              real-time data insights, inventory scanning, and logistics
              coordination at your fingertips.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to revolutionize your Logistics experience?
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
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Technologies</span>
          <h5>Technologies We Use</h5>
        </div>
      </div>
      <TechnologiesWeUse />
    </div>
  );
};

export default LogisticsIndustriesComponent;