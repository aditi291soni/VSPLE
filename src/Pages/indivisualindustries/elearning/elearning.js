import React, { useState } from "react";
import "./elearning.css";
import study from "../../../assest/main-icons/Mask group (3).png";
import study2 from "../../../assest/main-icons/Mask group (4).png";
import study3 from "../../../assest/main-icons/Mask group (4).png";
import study4 from "../../../assest/main-icons/Mask group (5).png";
import health from "../../../assest/main-icons/Group 1000004855.png";
import benefits from "../../../assest/main-icons/Rectangle 8108.png";
import insudtries_main from "../../../assest/main-icons/image 24812.png";
import healthcareApp from "../../../assest/main-icons/Group 1000005517 (1).png";
import remoteLearning from "../../../assest/web-icons/elearning/Isolation_Mode.png";
import technologyIntegration from "../../../assest/web-icons/elearning/Isolation_Mode (1).png";
import Security from "../../../assest/web-icons/elearning/Isolation_Mode (2).png";
import administrative from "../../../assest/web-icons/elearning/Isolation_Mode (3).png";
import rec8298 from "../../../assest/main-icons/Mask group (23).png";
import group5096 from "../../../assest/main-icons/Group 1000005096.png";
import isolationmode from "../../../assest/main-icons/Group 1000005023 (1).png";
import { frame5, leader } from "../../../common/images";
import hr24 from "../../../assest/main-icons/24-hours-service 1.png";
import mobileView from "../../../assest/main-icons/creative-reels-composition 1.png";
import FAQ from "../../../components/Faq";
// import ccc from "../../../assest/web-icons/elearning/Isolation_Mode (4).png";
import tailored from "../../../assest/web-icons/elearning/Isolation_Mode (4).png";
import robustTechnology from "../../../assest/web-icons/elearning/Isolation_Mode (5).png";
import scalable from "../../../assest/web-icons/elearning/Isolation_Mode (6).png";
import expertCalculation from "../../../assest/web-icons/elearning/Isolation_Mode (7).png";
import foocusOn from "../../../assest/web-icons/elearning/Isolation_Mode (8).png";
import continiousnnovation from "../../../assest/web-icons/elearning/Isolation_Mode (9).png";
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

const ElearningIndustriesComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interactive Learning Experiences
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Vsple Technologies creates immersive e-learning platforms that foster interactive learning experiences. Our solutions include virtual classrooms, multimedia content, and gamified learning modules to engage students effectively.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Personalized Learning Paths
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Tailored learning experiences are at the core of our e-learning solutions. Vsple Technologies employs AI-driven algorithms to analyze student performance and provide personalized learning paths, ensuring each student can thrive at their own pace.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Collaborative Platforms
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Our platforms facilitate collaboration among students and educators, fostering a sense of community in the virtual learning environment. Real-time communication tools, group projects, and discussion forums are seamlessly integrated.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Assessment and Analytics
          <img
            src={activeIndex === 3 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Vsple Technologies leverages data analytics to provide insightful assessments of student progress. Educators can make data-driven decisions to refine teaching strategies and ensure optimal learning outcomes.`,
    },
    // Add more items as needed
  ];
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "How can e-learning benefit educational institutions?",
      answer:
        "E-learning offers institutions the flexibility to provide accessible and engaging educational content, allowing students to learn at their own pace from anywhere. This approach enhances the overall learning experience and accommodates diverse learning styles.",
      open: true,
    },
    {
      question: " What measures does Vsple Technologies take to ensure the security of student data in e-learning platforms?",
      answer:
        "Vsple Technologies employs state-of-the-art security protocols and encryption techniques to safeguard student data. Our commitment to data privacy ensures compliance with industry regulations, providing a secure environment for online learning.",
      open: false,
    },
    {
      question:
        "How does personalized learning work in e-learning solutions, and what benefits does it offer to students?",
      answer:
        "Personalized learning in e-learning involves leveraging AI-driven algorithms to tailor educational content based on individual student performance. This approach ensures that students receive content suited to their learning styles, promoting a more effective and engaging learning journey.",
      open: false,
    },
    {
      question:
        "Can Vsple Technologies adapt e-learning solutions to the specific needs of different educational sectors, such as K-12 or higher education?",
      answer:
        "Yes, Vsple Technologies specializes in customizing e-learning solutions to meet the unique requirements of various educational sectors, including K-12, higher education, vocational training, and professional development. Our solutions are scalable and adaptable to diverse educational models.",
      open: false,
    },
    {
      question:
        "How do collaborative learning platforms enhance the virtual learning experience?",
      answer:
        "Collaborative learning platforms by Vsple Technologies facilitate real-time communication, group projects, and discussion forums, creating a sense of community in the virtual learning environment. This collaborative approach enhances student engagement and interaction.",
      open: false,
    },
    {
      question:
        "What role does data analytics play in assessing student progress in e-learning platforms?",
      answer:
        "Vsple Technologies utilizes data analytics to provide insightful assessments of student progress. Educators can access detailed analytics to understand individual and collective performance, allowing them to make data-driven decisions to refine teaching strategies and optimize learning outcomes.",
      open: false,
    }

  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  const [state, setState] = useState({
    title: "E-Learning",
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
      <div className="elearning-top">
        <div className="form-head">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-5 mt-5">
              <div className="healthcare-head">
                <span>E-Learning</span>
                <h5>
                  E-Learning
                  <br /> with IT Solutions
                </h5>
                <p>
                  Step into the dynamic world of e-learning where technology
                  meets education seamlessly. Explore the e-learning landscape
                  and witness how Information Technology (IT) has become the
                  backbone of this industry. Delve into the transformative
                  impact on learning methodologies, accessibility, and the
                  overall educational experience. Our platform is your gateway
                  to staying ahead in the e-learning evolution, providing
                  insights into the latest trends, innovations, and best
                  practices. Embrace a learning journey that is flexible,
                  personalized, and at the forefront of educational technology.
                  Join us in shaping the future of e-learning.
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
            Addressing E-Learning <br /> Challenges
          </h5>
          <p className="mt-3">
            In the dynamic landscape of the IT industry, the e-learning sector
            faces unique challenges that demand innovative solutions. Rapid
            technological advancements, evolving learning preferences, and the
            constant need for up-to-date content pose significant hurdles. Let's
            delve into the key challenges:
          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-7 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={remoteLearning} width={"12%"} alt="" />
                <br />
                <span>Remote Learning and Accessibility</span>
                <p className="mt-2">
                  The shift towards remote learning has highlighted the need for accessible and engaging e-learning platforms, ensuring students can seamlessly access educational resources from anywhere.
                </p>
              </div>
              <div className="child1">
                <img src={technologyIntegration} width={"12%"} alt="" />
                <br />
                <span>Technology Integration in Teaching</span>
                <p className="mt-2">
                  Educators face the challenge of effectively integrating technology into teaching methodologies to enhance the learning experience and keep pace with evolving educational trends.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={Security} width={"12%"} alt="" />
                <br />
                <span>Data Security and Privacy</span>
                <p className="mt-2">
                  With the digitization of student records and sensitive educational data, safeguarding the privacy and security of this information is paramount. Vsple Technologies employs state-of-the-art measures to prevent data breaches and ensure compliance with privacy regulations.
                </p>
              </div>
              <div className="child1">
                <img src={administrative} width={"12%"} alt="" />
                <br />
                <span>Administrative Efficiency</span>
                <p className="mt-2">
                  Streamlining administrative processes is crucial for educational institutions to operate efficiently. Vsple Technologies provides solutions for automated workflows, student management systems, and communication platforms to enhance administrative efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 col-lg-5 text-center">
            <img src={rec8298} width={"90%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center">
            {/* <div className="pulse-button"></div> */}
            <img src={isolationmode} width={"85%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-5 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h5>Advantages Of IT In E-Learning</h5>
              <span>Integration Of IT In The E-Learning</span>
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
            Vsple Technologies emerges as the catalyst for educational
            transformation. As your dedicated partner in e-learning development,
            we bring together a team of experts who marry technological
            innovation with a deep understanding of educational dynamics. Our
            specialization lies in crafting AI-driven interactive content,
            tailoring personalized learning paths, and fortifying data security.
            Experience a paradigm shift in e-learning—let Vsple Technologies
            amplify your institution's educational vision with an unwavering
            commitment to excellence.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={tailored} width={"13%"} alt="" />
            <h5>Tailored E-Learning Solutions</h5>
            <p>
              We understand that every educational institution or corporate entity has unique requirements. Our team excels in crafting bespoke E-Learning solutions, harnessing cutting-edge technologies, and integrating adaptive learning techniques to suit your specific needs.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={robustTechnology} width={"13%"} alt="" />
            <h5>Robust Technology Integration</h5>
            <p>
              Leveraging the latest advancements in IT, we seamlessly integrate diverse technological solutions into your E-Learning platforms. Whether it's AI-driven learning analytics, immersive virtual reality modules, or interactive content, we ensure a technologically enriched learning experience.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={scalable} width={"13%"} alt="" />
            <h5>Scalable and Agile Development</h5>
            <p>

              Our agile development methodology allows for flexibility and scalability. We adapt swiftly to evolving requirements, ensuring timely delivery without compromising on quality. Count on us for scalable solutions that grow with your audience.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={expertCalculation} width={"13%"} alt="" />
            <h5>Expert Consultation and Support</h5>
            <p>
              Our team of seasoned professionals doesn't just deliver a product; we provide ongoing consultation and support. From initial conceptualization to implementation and beyond, we're dedicated to your success, offering expert guidance at every step.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={foocusOn} width={"13%"} alt="" />
            <h5>Focus on User Experience</h5>
            <p>
              User experience is at the core of what we do. Our designs prioritize intuitive interfaces, seamless navigation, and engaging content, fostering a positive and effective learning environment for your audience.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={continiousnnovation} width={"13%"} alt="" />
            <h5>Continuous Innovation and Upgradation</h5>
            <p>

              In the dynamic realm of technology, stagnation is never an option. We continually innovate and upgrade our solutions, keeping pace with industry trends, and integrating the latest advancements to enhance your E-Learning experience.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">E-Learning Market</h5>
              <h2 className="">Future of E-Learning Application Development</h2>
              <p>
                The future of e-learning is marked by a revolution in personalized education, driven by AI-powered adaptive learning platforms. Vsple Technologies envisions a seamless integration of virtual classrooms, AI tutors, and immersive learning experiences. Data security and privacy will be at the forefront, ensuring a safe and enriching educational journey for students.
              </p>
              <span>Empowering Minds, One Click at a Time</span>
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
          <span>E-Learning Project Development</span>
          <h5>Our solutions</h5>
          <p className="mt-3">
            Healthcare applications are deployed across various platforms, including:
          </p>
        </div>
      </div>

      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"13%"} alt="" />
            <h5>Web</h5>
            <p>
              Elevate your online educational presence with our web development solutions. We craft user-friendly, responsive websites that provide seamless access to educational resources, interactive lessons, and student collaboration tools.

            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={mobileApplication}
              width={"13%"}
              alt=""
            />
            <h5>Application Development</h5>
            <p>
              Empower educators and students with our customized e-learning app development. Whether it's a student-centric app for interactive learning or a robust platform for educators to streamline workflows, we've got you covered.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"13%"} alt="" />
            <h5>Wearables</h5>
            <p>
              Step into the future of education with our wearable technology solutions. Vsple Technologies pioneers the development of educational wearables that seamlessly integrate into students' daily routines, enhancing the learning experience.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to revolutionize your E-Learning experience?
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
    </div>
  );
};

export default ElearningIndustriesComponent;
