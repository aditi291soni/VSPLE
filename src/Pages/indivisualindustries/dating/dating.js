import React, { useState } from "react";
import "./dating.css";
import study from "../../../assest/main-icons/Mask group (3).png";
import study2 from "../../../assest/main-icons/Mask group (4).png";
import study3 from "../../../assest/main-icons/Mask group (4).png";
import study4 from "../../../assest/main-icons/Mask group (5).png";
import health from "../../../assest/main-icons/Group 1000004855.png";
import benefits from "../../../assest/main-icons/Rectangle 8108.png";
import insudtries_main from "../../../assest/main-icons/image 24812.png";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import rec8298 from "../../../assest/main-icons/Mask group (20).png";
import datingApp from "../../../assest/main-icons/Frame (23).png";
import group5096 from "../../../assest/main-icons/Group 1000005096.png";
import isolationmode from "../../../assest/main-icons/OBJECTS (1).png";
import { frame5, leader } from "../../../common/images";
import hr24 from "../../../assest/main-icons/24-hours-service 1.png";
import mobileView from "../../../assest/main-icons/creative-reels-composition 1.png";
import FAQ from "../../../components/Faq";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import customized from "../../../assest/web-icons/dating/Layer_1.png";
import collabration from "../../../assest/web-icons/dating/Isolation_Mode.png";
import mobileOptimization from "../../../assest/web-icons/dating/Isolation_Mode (1).png";
import securityandprivacy from "../../../assest/web-icons/dating/Isolation_Mode (2).png";
import scalableInfra from "../../../assest/web-icons/dating/Isolation_Mode (3).png";
import analytics from "../../../assest/web-icons/dating/Isolation_Mode (4).png";
import rectangle8297 from "../../../assest/main-icons/Rectangle 8297.png";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import security from "../../../assest/web-icons/Banking/Isolation_Mode.png";
import digital from "../../../assest/web-icons/Banking/Isolation_Mode (1).png";
import regulatoryCompliance from "../../../assest/web-icons/Banking/Isolation_Mode (2).png";
import fintechDisruption from "../../../assest/web-icons/Banking/Isolation_Mode (3).png";
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
const DatingIndustriesComponent = () => {
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "What makes Vsple stand out in the dating industry?",
      answer:
        "Vsple specializes in providing innovative tech solutions to enhance the dating experience. Our focus on AI-driven matchmaking, virtual dating experiences, and robust safety measures sets us apart in fostering genuine connections.",
      open: true,
    },
    {
      question: "How does Vsple ensure user privacy and security?",
      answer:
        "We prioritize data privacy and security through advanced encryption, identity verification processes, and proactive monitoring. Our commitment is to create a safe and secure environment for users to explore and connect.",
      open: false,
    },
    {
      question:
        "Can Vsple cater to niche dating markets?",
      answer:
        "Yes, we understand the diverse needs of the dating landscape. Our solutions are customizable to cater to niche markets, ensuring that every user finds a platform tailored to their preferences.",
      open: false,
    },
    {
      question:
        "What role does technology play in enhancing the matchmaking process?",
      answer:
        "Our tech solutions leverage AI to analyze user preferences, interactions, and behaviors, creating more accurate and personalized matchmaking algorithms. This ensures users are connected with compatible matches, increasing the chances of meaningful connections.",
      open: false,
    },
    {
      question:
        "How does Vsple support the safety of its users?",
      answer:
        "We employ advanced security measures, including identity verification and reporting features, to create a safe online dating community. Users can feel confident in their exploration of connections, knowing that their safety is a top priority.",
      open: false,
    },
    {
      question:
        "What trends can we expect in the future of dating app development?",
      answer:
        "The future will see an emphasis on interactive features, virtual dating experiences, and enhanced security measures. Vsple is at the forefront of these trends, ensuring that our solutions evolve with the dynamic landscape of the dating industry.",
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
        "How does Vsple contribute to a more enjoyable and authentic dating experience?",
      answer:
        "Our focus on user-friendly interfaces, innovative features like video profiles, and AI-driven recommendations enhances the overall dating journey. We believe in creating an authentic and enjoyable experience for users, making the search for love exciting and fulfilling.",
      open: false,
    },
  ]);
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
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enhanced Matchmaking
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Smart Algorithms: Tech solutions enable the development of advanced matchmaking algorithms, ensuring more accurate and personalized matches based on interests, preferences, and values.
      Virtual Dating: Innovative features like virtual reality dating experiences and interactive games enhance the dating journey, making it more engaging and fun`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Streamlined User Experience:
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Intuitive Platforms: User-friendly interfaces and intuitive features make navigating dating apps a breeze, enhancing the overall user experience.
      Real-time Chat: Instant messaging and real-time communication features foster quick and meaningful connections, eliminating unnecessary delays.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Safety Measures:
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Identity Verification: Tech solutions integrate robust identity verification processes to enhance user safety and ensure a secure dating environment.
      Reporting Features: Easy-to-use reporting features empower users to flag and report inappropriate behavior, creating a safer online dating community.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Innovative Features:
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Video Profiles: Cutting-edge technology allows users to create dynamic video profiles, providing a more authentic and immersive glimpse into their personalities.
      AI-driven Recommendations: Artificial intelligence enhances the recommendation system, offering users more relevant matches based on evolving preferences and interactions.`,
    },
    // Add more items as needed
  ];

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
      <div className="dating-top">
        <div className="form-head">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-lg-5 mt-5">
              <div className="healthcare-head">
                <span>Dating</span>
                <h5>
                  Transforming <br /> Dating <br /> with IT Solutions
                </h5>
                <p>
                  In a world where love is constantly evolving, the integration
                  of innovative solutions in the dating industry has become more
                  vital than ever. Embracing cutting-edge technology in the
                  quest for connection yields a plethora of benefits that
                  profoundly impact user experience, matchmaking efficiency,
                  safety, and the overall joy of finding that special someone.
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
            Addressing Dating <br /> Challenges
          </h5>
          <p className="mt-3">
            In the ever-evolving landscape of modern society, technology has
            become an indispensable tool in addressing critical industry
            challenges. As the dating sector faces unprecedented demands and
            changes, Vsple LoveTech plays a pivotal role in providing creative
            solutions. Here, we'll delve into the few key challenges in the
            Dating industry:
          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-7 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={security} width={"44px"} className="mb-2" alt="" />
                <br />
                <span>Data Security and Privacy</span>
                <p>
                  With the digitalization of dating profiles and sensitive user
                  information, ensuring the security and privacy of this data
                  has become paramount. Heartbreaks are hard; data breaches
                  shouldn't make them harder.
                </p>
              </div>
              <div className="child1">
                <img src={digital} width={"44px"} className="mb-2" alt="" />
                <br />
                <span>Compatibility and Match Algorithms</span>
                <p>
                  The dating industry often grapples with the seamless exchange
                  of compatibility information between different platforms and
                  systems.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img
                  src={regulatoryCompliance}
                  width={"44px"}
                  className="mb-2"
                  alt=""
                />
                <br />
                <span>Virtual Dating and Remote Connections</span>
                <p>
                  In an era marked by the need for social distancing, the demand
                  for virtual dating and remote connection solutions has surged.
                </p>
              </div>
              <div className="child1">
                <img
                  src={fintechDisruption}
                  width={"44px"}
                  className="mb-2"
                  alt=""
                />
                <br />
                <span>Profile Management and Authenticity</span>
                <p>
                  The challenge of managing profiles effectively and ensuring
                  the authenticity of user information is crucial in fostering
                  genuine connections.
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
          <div className="col-md-6 col-sm-12 col-lg-6 text-center">
            {/* <div className="pulse-button"></div> */}
            <img src={isolationmode} width={"90%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-5 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h5 className="">Advantages Of IT In Dating</h5>
              <span className="">Integration Of IT In The Dating</span>
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
            Vsple is your trusted partner in revolutionizing your dating
            platform. Our expert team combines state-of-the-art technology with
            a deep understanding of the dating landscape to create innovative
            solutions. We specialize in AI-driven matchmaking, virtual dating
            experiences, and ensuring the highest standards of data privacy.
            With Vsple, you'll benefit from a personalized and secure dating
            journey, putting the fun back in finding love. Let us empower your
            dating vision with our expertise and commitment to creating
            meaningful connections.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={customized} width={"13%"} alt="" />
            <h5>Customized Dating Platform Development</h5>
            <p>
              At Vsple, we specialize in crafting bespoke dating platforms
              tailored to your unique vision. Our team harnesses the latest IT
              trends to develop intuitive, user-friendly interfaces that
              captivate your audience and enhance their dating experience.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={collabration} width={"13%"} alt="" />
            <h5>Advanced Matching Algorithms</h5>
            <p>
              Experience the power of cutting-edge algorithms. We design and
              implement sophisticated matching algorithms driven by AI and
              machine learning, ensuring accurate and meaningful connections
              between users based on their preferences and behavior.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={mobileOptimization}
              width={"13%"}
              alt=""
            />
            <h5>Mobile Optimization and App Development</h5>
            <p>
              In an era dominated by mobile usage, we prioritize mobile
              optimization. Our expertise in app development ensures that your
              dating platform seamlessly transitions to mobile devices, offering
              users a convenient and engaging experience on-the-go.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={securityandprivacy}
              width={"13%"}
              alt=""
            />
            <h5>Security and Privacy Assurance</h5>
            <p>
              Trust is the foundation of any successful dating platform. Rest
              assured, we implement robust security measures to safeguard user
              data, prioritizing privacy and compliance with industry standards
              to instill confidence among your users.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={scalableInfra} width={"13%"} alt="" />
            <h5>Scalable Infrastructure</h5>
            <p>
              As your platform grows, scalability becomes crucial. Our IT
              solutions are designed with scalability in mind, ensuring your
              dating platform can effortlessly accommodate an expanding user
              base without compromising performance or user experience.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={analytics} width={"13%"} alt="" />
            <h5>Analytics and Insights</h5>
            <p>
              Track and analyze user behavior, engagement patterns, and success
              rates with our comprehensive analytics tools. Gain valuable
              insights that empower informed decisions, helping you fine-tune
              your platform for optimum performance.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">Dating Market</h5>
              <h2 className="">Future of Healthcare Application Development</h2>
              <p>
                The future of dating app development is marked by a revolution
                in user experience, driven by AI-powered matchmaking and
                interactive features. Virtual dating and remote connection
                capabilities will be seamlessly integrated, while advanced
                security measures ensure a safe online dating environment. User
                engagement and authenticity will be central, offering a holistic
                approach to the journey of finding love.
              </p>
              <span>Connecting Hearts, One Swipe at a Time.</span>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 mt-3">
            <img src={datingApp} width={"90%"} alt="" />
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Dating Project Development</span>
          <h5>Our solutions</h5>
          <p className="mt-3">
            Dating applications are deployed across various platforms,
            including:
          </p>
        </div>
      </div>

      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"13%"} alt="" />
            <h5>Web</h5>
            <p>
              Empower your online presence with our web development solutions
              designed for the Dating and Relationship sector. We create
              responsive websites that offer a seamless experience for profile
              management, match discovery, and interactive user engagement. Our
              web solutions prioritize security, compliance, and scalability,
              ensuring your online love hub is at the forefront of the digital
              dating evolution.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={mobileApplication}
              width={"13%"}
              alt=""
            />
            <h5>Application</h5>
            <p>
              Elevate your dating platform with our app development solutions
              tailored for the Dating industry. We specialize in crafting
              user-friendly, engaging apps that provide seamless access to
              profiles, chat features, and interactive dating experiences. Our
              app solutions prioritize security, user experience, and real-time
              connectivity, ensuring your platform stands out in the digital
              love revolution.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"13%"} alt="" />
            <h5>Wearables</h5>
            <p>
              Stay ahead in the dating industry by harnessing wearable
              technology. Our innovative approach extends to wearable app
              development, enabling your platform to tap into the growing market
              of smartwatches and other wearable devices for enhanced user
              experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to revolutionize your Dating experience?
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
          {/* <span>Technologies</span> */}
          <h5>Technologies We Use</h5>
        </div>
      </div>
      <TechnologiesWeUse />
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey web-model">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          {/* <span>Technologies</span> */}
          <h5>
            Our Customers Love <br /> What We Do
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DatingIndustriesComponent;
