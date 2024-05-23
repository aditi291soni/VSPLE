import React, { useState } from "react";
import rec8298 from "../../../assest/web-icons/Rectangle 8298 (1).png";
import isolationmode from "../../../assest/main-icons/Isolation Mode.png";
import {
  frame5,
  mobileApplication,
  wearables,
  web,
  supportMaintenance,
} from "../../../common/images";
import FAQ from "../../../components/Faq";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import sportFitnessApp from "../../../assest/main-icons/Group 1000005555.png";

import Accessibility from "../../../assest/web-icons/Isolation_Mode (3).png";
import virtualFitness from "../../../assest/web-icons/Isolation_Mode (4).png";
import performanceOptimization from "../../../assest/web-icons/Isolation_Mode (5).png";
import techSolution from "../../../assest/web-icons/Group 1000005557.png";

import insightAnalytics from "../../../assest/web-icons/Isolation_Mode (17).png";
import securityMeasures from "../../../assest/web-icons/Isolation_Mode (21).png";
import centricApproach from "../../../assest/web-icons/Group 1000005139.png";
import {
  uparrow,
  downarrow,
  shareButton,
  dataSecurity,
  integrationScalability,
  implementationIntegration,
  account,
  email,
  telephone,
  message,
} from "../../../common/images";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import horse from "../../../assest/main-icons/strategy (2) 1.png";

const SportsIndustriesComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enhanced Athlete Performance
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Performance Analytics: IT solutions enable detailed tracking and analysis of athlete performance metrics. Coaches can make data-driven decisions to enhance training strategies and optimize individual and team performance.
      Wearable Technology: Athletes can leverage wearable devices to monitor various aspects of their health and fitness, providing real-time feedback and insights for personalized training programs.`,
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
      content: `Efficient Training Workflows: IT systems streamline training programs, from scheduling sessions to monitoring progress. This efficiency contributes to better utilization of training facilities and resources.
      Facility Management: Sports organizations benefit from IT solutions that assist in managing facilities, scheduling events, and ensuring that resources are optimally allocated.
      `,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" /> &nbsp; */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cost-Efficient Strategies
          <img
            src={activeIndex === 2 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Remote Training: Virtual training sessions and online coaching reduce the need for athletes to travel, cutting down on associated costs. This is particularly advantageous for athletes in remote or underserved areas.
      Resource Optimization: IT tools aid in managing equipment and resources efficiently, minimizing unnecessary expenditures and maximizing the value of investments.
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
      content: `Data Analytics in Sports: IT solutions collect and analyze vast amounts of data related to athlete performance, injury prevention, and game strategies. Coaches and sports scientists can make informed decisions based on data-driven insights.
      Innovation in Training Methods: IT supports research and development in sports science, leading to innovative training methods and techniques that contribute to continuous improvement in athletic performance.`,
    },
    // Add more items as needed
  ];
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "What industries does Vsple Technologies serve?",
      answer:
        "Vsple Technologies specializes in providing IT solutions and services tailored for the sports and fitness industry, ensuring a tech-driven transformation for athletes, fitness enthusiasts, and organizations alike.",
      open: true,
    },
    {
      question: "How can Vsple Technologies customize solutions for the sports and fitness industry?",
      answer:
        "We delve deep into understanding the unique needs, challenges, and aspirations of the sports and fitness domain. Our adept team crafts technology solutions specifically designed to elevate training experiences and optimize operational efficiency in this dynamic industry.",
      open: false,
    },
    {
      question:
        "Can Vsple Technologies work with startups as well as established sports and fitness businesses?",
      answer:
        "Absolutely. Whether you're a startup or a well-established entity in the sports and fitness realm, our scalable and adaptable solutions are designed to meet the diverse technology needs of businesses in this exciting and ever-evolving field.",
      open: false,
    },
    {
      question:
        " What benefits can sports and fitness organizations expect from Vsple's IT solutions?",
      answer:
        "Sports and fitness clients can anticipate improved athlete performance tracking, streamlined facility management, and robust data security solutions. Our IT services are geared towards enhancing overall efficiency and maximizing the potential for success in the world of sports and fitness.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies contribute to the tech landscape of sports and fitness?",
      answer:
        "We provide innovative and secure IT services that empower sports and fitness organizations to embrace digital transformation. From cutting-edge training apps to seamless facility management systems, our solutions aim to revolutionize the sports and fitness experience.",
      open: false,
    },
    {
      question:
        "What role does technology play in optimizing athlete performance in sports and fitness solutions by Vsple Technologies?",
      answer:
        "Our IT solutions for sports and fitness are strategically designed to enhance athlete performance, training efficiency, and overall operational excellence. We integrate the latest technologies to ensure that every aspect of the sports and fitness journey is elevated to its full potential.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies support digital transformation in the sports and fitness industry?",
      answer:
        "We offer e-commerce and digital solutions tailored for the sports and fitness sector, driving a digital transformation that enhances user engagement, training experiences, and overall performance. Our focus is on leveraging technology to keep the industry at the forefront of innovation.",
      open: false,
    },
    {
      question:
        "How does Vsple Technologies help fitness enthusiasts and athletes with its IT services?",
      answer:
        "For individual fitness enthusiasts and athletes, our IT services provide personalized solutions that amplify training experiences, monitor progress, and ensure seamless integration of technology into their fitness journey. We're committed to enhancing the overall well-being and success of individuals in the sports and fitness community.",
      open: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  const [state, setState] = useState({
    title: "Sports",
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
                <span>Sports & Fitness</span>
                <h5>
                  Transforming <br /> Sports & Fitness <br /> with IT Solutions
                </h5>
                <p>
                  Revolutionize your sports and fitness experience with
                  cutting-edge IT solutions from our service company. We
                  specialize in transforming traditional approaches into
                  tech-driven excellence. From innovative training apps to
                  seamless management systems, we're dedicated to elevating
                  every aspect of your sports and fitness journey. Embrace the
                  future of wellness with our tailored IT services.
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
            Addressing Sports & Fitness <br /> Challenges
          </h5>
          <p className="mt-3">
            In the ever-changing world of sports and fitness, challenges are
            bound to arise. Our focus is on understanding and overcoming these
            industry challenges through strategic IT solutions. From athlete
            performance tracking to facility management, we tackle issues
            head-on, ensuring a seamless and efficient experience. Elevate your
            game by partnering with us to address and conquer the unique
            challenges of the sports and fitness industry.
          </p>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-12 col-sm-12 col-lg-7">
            <div className="parent">
              <div className="child1">
                <img src={dataSecurity} width={"12%"} alt="" />
                <br />
                <span>Sports Data Security and Privacy</span>
                <p>
                  With the digitalization of athlete records and sensitive
                  training data, ensuring the security and privacy of this
                  information has become paramount. Data breaches can result in
                  severe consequences, both legally and ethically.
                </p>
              </div>
              <div className="child1">
                <img src={Accessibility} width={"12%"} alt="" />
                <br />
                <span>Inclusivity and Accessibility</span>
                <p>
                  Ensuring inclusivity and accessibility in sports and fitness
                  activities is a challenge that requires attention. From
                  designing inclusive fitness programs to providing accessible
                  facilities, addressing the diverse needs of participants is
                  crucial for a more equitable industry.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={virtualFitness} width={"12%"} alt="" />
                <br />
                <span>Remote Training and Virtual Fitness</span>
                <p>
                  In an era marked by the challenges of physical gatherings and
                  travel restrictions, the need for remote training and virtual
                  fitness solutions has surged.
                </p>
              </div>
              <div className="child1">
                <img src={performanceOptimization} width={"12%"} alt="" />
                <br />
                <span>Athlete Management and Performance Optimization</span>
                <p>
                  The shortage of skilled trainers and the need for effective
                  athlete management and performance optimization are critical
                  challenges in the sports and fitness industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-5 text-center">
            <img src={rec8298} width={"90%"} alt="" />
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex align-items-center">
            {/* <div className="pulse-button"></div> */}
            <img src={isolationmode} width={"90%"} alt="" />
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className=" key-text-div col-md-12 col-sm-12 col-lg-5 d-flex align-items-start justify-content-end mt-5">
            <div className="key-text">
              <h5 className="text-center">Advantages Of IT In Sports & Fitness</h5>
              <span>Integration Of IT In The Sports & Fitness</span>
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
            VSPLE is your trusted ally in sports and fitness app development.
            Our skilled team integrates cutting-edge technology with extensive
            industry expertise to craft inventive solutions. Our focus lies in
            leveraging advanced IT solutions for tailored fitness plans,
            seamless workout tracking, and dedicated mental wellness support.
            Opting for VSPLE means enjoying personalized digital experiences,
            efficient data management, and robust security measures. Rest
            assured, your fitness app will strictly adhere to top-tier data
            privacy standards. Entrust VSPLE to enrich your sports and fitness
            vision with our proficiency and unwavering commitment to excellence.
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={techSolution} width={"13%"} alt="" />
            <h5>Tailored Technological Solutions</h5>
            <p>
              Leveraging cutting-edge technology, we design bespoke solutions
              crafted exclusively for the Sports & Fitness domain. Our team
              combines industry knowledge with IT prowess to create tailored
              applications, platforms, and software that enhance user
              experiences, streamline operations, and boost your competitive
              edge.
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
              We understand the dynamic nature of Sports & Fitness businesses.
              Our solutions are built for seamless integration into your
              existing infrastructure while offering scalability to adapt and
              grow as your needs evolve. Whether it's integrating IoT devices
              for performance tracking or developing mobile applications for
              fitness enthusiasts, we've got you covered.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={insightAnalytics} width={"13%"} alt="" />
            <h5>Data-Driven Insights and Analytics</h5>
            <p>
              Empower your decision-making with robust data analytics. Vsple
              Technologies helps you harness the power of data, providing
              actionable insights that drive strategic decisions. From analyzing
              user behaviors to predicting trends, our analytics tools pave the
              way for informed choices and business growth.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={centricApproach} width={"13%"} alt="" />
            <h5>Customer-Centric Approach</h5>
            <p>
              We prioritize your vision and your customers' needs. Our solutions
              are designed with the end-user in mind, ensuring intuitive
              interfaces and smooth user experiences. We believe in building
              technology that not only meets industry standards but exceeds user
              expectations.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={implementationIntegration}
              width={"13%"}
              alt=""
            />
            <h5>Ongoing Support and Maintenance</h5>
            <p>
              Your success is our priority even after deployment. Vsple
              Technologies offers continuous support and maintenance, ensuring
              that your systems run smoothly. Our dedicated team is always at
              your service, ready to troubleshoot, upgrade, and optimize your IT
              infrastructure.
            </p>
          </div>
          <div className="b">
            <img
              className="my-4"
              src={supportMaintenance}
              width={"13%"}
              alt=""
            />
            <h5>Innovation and Future-Readiness</h5>
            <p>
              Stay ahead of the curve with our commitment to innovation. We keep
              an eye on emerging technologies and trends, integrating futuristic
              solutions that position your Sports & Fitness business at the
              forefront of the industry.
            </p>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service m-0">
              <h5 className="text">Sports & Fitness Market</h5>
              <h2 className="">
                Future of Sports & Fitness Application Development
              </h2>
              <p>
                Embark on a new era in sports and fitness tech development,
                where innovation transforms the landscape. AI-driven insights
                and tailored training programs redefine athletic performance.
                Seamless integration of virtual coaching and real-time fitness
                tracking becomes the norm, while IoT and wearables revolutionize
                data collection. Upholding stringent standards in data security
                and privacy, we prioritize the well-rounded athlete experience.
                From immersive engagement features to comprehensive mental
                resilience support, we're shaping a holistic approach to
                achieving peak performance.
              </p>
              <span>"Elevating Performance, Redefining Fitness."</span>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 text-center">
            <img src={sportFitnessApp} width={"90%"} alt="" />
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Sports & Fitness Project Development</span>
          <h5>Our solutions</h5>
          <p className="mt-3">
            Vsple Technologies is at the forefront of revolutionizing sports and
            fitness application development, offering tailored solutions for a
            seamless and engaging experience. Our comprehensive approach
            includes:
          </p>
        </div>
      </div>
      <div className="main-boxes container hidden">
        <div className="row">
          <div className="b">
            <img className="my-4" src={web} width={"13%"} alt="" />
            <h5>Web</h5>
            <p>
              Boost your online presence with our web development solutions
              tailored for the Sports and Fitness sector. We specialize in
              crafting user-friendly, responsive websites that provide seamless
              access to sports and fitness information, event scheduling, and
              interactive user engagement. Our web solutions prioritize
              security, compliance, and scalability, ensuring your online
              platform stands out in the digital sports and fitness landscape.
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
              Empower both athletes and sports professionals with our customized
              sports and fitness app development. Whether it's an
              athlete-centric app for performance tracking, training reminders,
              or a robust platform for sports professionals to streamline
              workflows, we've got you covered. Our mobile apps prioritize user
              experience, data security, and real-time connectivity, enhancing
              the efficiency of sports and fitness management.
            </p>
          </div>
          <div className="b">
            <img className="my-4" src={wearables} width={"13%"} alt="" />
            <h5>Wearables</h5>
            <p>
              Step into the future of sports and fitness with our wearable
              technology solutions. Vsple Technologies pioneers the development
              of fitness-centric wearables that seamlessly integrate into daily
              routines. From activity trackers to advanced sports wearables, our
              solutions focus on real-time performance monitoring, data
              accuracy, and user comfort. Experience a new era of personalized,
              on-the-go sports and fitness solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to revolutionize your Sports & Fitness experience?
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

export default SportsIndustriesComponent;
