import React, { useEffect, useState, useRef } from "react";
import "./websiteDeveloper.css";
import mainimg from "../../../assest/main-icons/Group 2113 (2).png";
import leader from "../../../assest/main-icons/Group 1522.png";
import frame from "../../../assest/main-icons/Frame (1).png";
import group from "../../../assest/main-icons/Group.png";
import frame2 from "../../../assest/main-icons/Frame (2).png";
import frame3 from "../../../assest/main-icons/Frame (3).png";
import journey from "../../../assest/main-icons/Group 2114.png";
import frame4 from "../../../assest/main-icons/Frame (4).png";
import frame5 from "../../../assest/web-icons/Group 1000005565.png";
import frame6 from "../../../assest/main-icons/Frame (6).png";
import upwork from "../../../assest/main-icons/Group 911.png";
import mask from "../../../assest/main-icons/Mask group (1).png";
import link from "../../../assest/main-icons/image 24805.png";
import clutch from "../../../assest/main-icons/Ellipse 196.png";
import nexticon from "../../../assest/main-icons/Group 670.png";
import previcon from "../../../assest/main-icons/Group 670 (1).png";
import gog from "../../../assest/main-icons/Group 918 (1).png";
import watch from "../../../assest/web-icons/wesbsitedev/Group 1000005573.png";
import backend from "../../../assest/icons/Isolation_Mode.png";
import ecommerce from '../../../assest/main-icons/check-out(1) 1.png'
import appleLogo from "../../../assest/main-icons/Group 1410.png";
import appleLogo2 from "../../../assest/main-icons/Group 1000004599 (1).png";
import ai from "../../../assest/main-icons/faceman.gif";
import sf from "../../../assest/main-icons/Group 1000004981.png";
import m from "../../../assest/main-icons/image 24868.png";
import vrcam from "../../../assest/main-icons/Group 1000004827.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import mobileApp from "../../../assest/main-icons/Mask group (6).png";
import watach2 from "../../../assest/main-icons/Group 1000005568.png";
// import appleLogo from "../../../assest/main-icons/Group 1410.png";
import ooredo from "../../../assest/main-icons/Ooredoo logo white@3x  1 (2).png";
import calvaryLogo from "../../../assest/main-icons/Group 1000004560.png";
import tradeTips from "../../../assest/main-icons/Group 1000004561.png";
import unbound from "../../../assest/main-icons/Group 1000004579 (1).png";
import chatie from "../../../assest/main-icons/Group 1000004566.png";
import tnumber from "../../../assest/main-icons/white@3x 1.png";
import jupieter from "../../../assest/main-icons/LOGO PNG@3x 1.png";
import rectangle8297 from "../../../assest/main-icons/Rectangle 8297.png";
import dataExchange from "../../../assest/web-icons/data-exchange.png";
import isolationMode from "../../../assest/web-icons/Isolation_Mode.png";
import isolationMode2 from "../../../assest/web-icons/Isolation_Mode (1).png";
import ccc1 from "../../../assest/gifs/02website_development.gif";
import group5111 from "../../../assest/main-icons/Group 1000005111.png";
import ccc from "../../../assest/main-icons/Group 1000005032.png";
import trademarkC from "../../../assest/web-icons/global-icon/Screenshot_at_Feb_01_15-49-19-removebg-preview 1 (1).png";
import salestrip from "../../../assest/web-icons/global-icon/Group 1000005596 (1).png";
import breckW from "../../../assest/web-icons/global-icon/Group 1000005597 (1).png";
import hobbyst from "../../../assest/web-icons/global-icon/Group 1000005603.png";
import qrScape from "../../../assest/web-icons/global-icon/Group 1000005604.png";
import "swiper/css";
import fullstack from '../../../assest/main-icons/services/Isolation_Mode (1).png'
import FAQ from "../../../components/Faq";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { render } from "react-dom";
import {
  upArroForHire,
  downArroForHire,
  rewuirementImg,
  interviewImg,
  full,
  devo,
  shortlistImg,
  hireDevImg,
  expertise,
  cuttingEdge,
  globalReach,
  securityCompliance,
  mobiledev,
  wearable,
  architectDev,
  frontendDev,
  backendDev,
  employeProcess,
  cross,
  uiux,
} from "../../../common/images";
// import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WebsiteDeveloperComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const number = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [langConB, setLangConB] = useState([
    {
      content:
        "Equipped with comprehensive knowledge across both front-end and back-end technologies...",
      logo: full,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: frontendDev,
      afterdLogo: frontendDev,
      para: "Our frontend developers are masters of crafting...",
      para2:
        "Our frontend developers are masters of crafting visually appealing and intuitive user interfaces. They are proficient in HTML, CSS, JavaScript, and various frontend frameworks like React, Angular, and Vue.js. They excel in creating seamless user experiences and responsive designs that captivate your audience.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: fullstack,
      afterdLogo: fullstack,
      para: "Our full-stack developers possess a comprehensive...",
      para2:
        "Our full-stack developers possess a comprehensive skill set covering both frontend and backend development. They are adept at handling the entire web development process, from conceptualization and design to implementation and deployment. Their expertise in multiple technologies allows for cohesive and efficient development of feature-rich websites.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: appleLogo,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: frontendDev,
      afterdLogo: frontendDev,
      para: "If content management is your priority, our...",
      para2:
        "If content management is your priority, our CMS specialists excel in customizing and optimizing various content management systems like WordPress, Drupal, Joomla, and more. They ensure streamlined content workflows, user-friendly interfaces, and robust website management solutions tailored to your requirements.",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: backend,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: backend,
      afterdLogo: backend,
      para: "For businesses seeking specialized e-commerce...",
      para2:
        "For businesses seeking specialized e-commerce solutions, our ecommerce developers have the expertise to build secure and user-friendly online stores. They are proficient in platforms like Shopify, WooCommerce, Magento, and custom ecommerce development, enabling seamless online shopping experiences for your customers",
    },
    {
      content: "Our team of talented Android app developers specializes in...",
      logo: ecommerce,
      arrow: downArroForHire,
      beforeArrow: downArroForHire,
      afterArrow: upArroForHire,
      beforelogo: ecommerce,
      afterdLogo: ecommerce,
      para: "For businesses seeking specialized e-commerce...",
      para2:
        "For businesses seeking specialized e-commerce solutions, our ecommerce developers have the expertise to build secure and user-friendly online stores. They are proficient in platforms like Shopify, WooCommerce, Magento, and custom ecommerce development, enabling seamless online shopping experiences for your customers",
    },
  ]);
  // const handleMouseEnter = () => {
  //   setExpanded(true);
  //   setLangConB(
  //     langConB.map((item, index) => {
  //       if (index === 0) {
  //         item.content = item.para2;
  //         item.logo = item.beforelogo;
  //         item.arrow = item.afterArrow;
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const handleMouseLeave = () => {
  //   setExpanded(false);
  //   setLangConB(
  //     langConB.map((item, index) => {
  //       if (index === 0) {
  //         item.content = item.para;
  //         item.logo = item.beforelogo;
  //         item.arrow = item.beforeArrow;
  //       }
  //       return item;
  //     })
  //   );
  // };
  const [faqs, setFaqs] = useState([
    {
      question:
        "What qualifications and expertise do your website developers possess?",
      answer:
        "Our team comprises seasoned developers proficient in various programming languages and frameworks. They hold degrees in computer science or related fields, and many have certifications in specialized areas like web design, UX/UI, and backend/frontend development.",
      open: true,
    },
    {
      question: "How do you ensure the quality of your website developers?",
      answer:
        "We have a rigorous vetting process that includes technical assessments, portfolio reviews, and in-depth interviews. We only onboard developers who showcase exceptional skills, experience, and a proven track record of delivering high-quality websites.",
      open: false,
    },
    {
      question: "Can you match developers to specific project requirements?",
      answer:
        "Absolutely. We analyze project needs thoroughly to match developers with the right skill sets and expertise. Whether it's frontend, backend, full-stack development, e-commerce solutions, or CMS customization, we ensure a tailored fit for your project.",
      open: false,
    },
    {
      question:
        "What methodologies and technologies do your developers work with?",
      answer:
        "Our developers are well-versed in Agile, Scrum, and other project management methodologies. They're adept with a wide array of technologies, including but not limited to HTML5, CSS3, JavaScript, React, Angular, Node.js, PHP, Python, and various content management systems (CMS).",
      open: false,
    },
    {
      question: "How do you handle communication and project updates?",
      answer:
        "We prioritize clear communication and transparency. Our developers regularly update clients on project milestones, progress, and any challenges encountered. We leverage various communication channels like email, project management tools, and scheduled meetings to ensure seamless collaboration.",
      open: false,
    },
    {
      question:
        "What measures do you take to ensure security and scalability in website development?",
      answer:
        "Security and scalability are paramount in our development process. Our developers follow industry best practices, implement robust security protocols, perform regular code reviews, and design websites with scalability in mind to accommodate future growth and technological advancements.",
      open: false,
    },
    {
      question: "Can I review past projects or client testimonials?",
      answer:
        "Certainly! We're proud to showcase our portfolio and client testimonials. You can explore our previous projects and hear from our satisfied clients about their experiences working with our talented website developers.",
      open: false,
    },
    {
      question:
        "What is the typical timeline for website development projects?",
      answer:
        "The timeline varies depending on project scope, complexity, and specific requirements. We conduct a thorough project assessment and provide a detailed timeline tailored to your project's needs during the initial consultation phase.",
      open: false,
    },
  ]);
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
  useEffect(() => {
    gsap.to("#h1", {
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 50,
      scale: 3,
      opacity: 0,
    });
    // Section 1 H2
    gsap.from("#h5", {
      scrollTrigger: {
        trigger: "#h5",
        start: "top bottom",
        end: "top 400px",
        // start: "top",
        // end: 'bottom',
        scrub: 1,
        // toggleActions: "play complete none reset"
      },
      xPercent: -100,
      opacity: 0,
    });
    // Execution heading
    gsap.from("#h3", {
      scrollTrigger: {
        trigger: "#h3",
        start: "top bottom+=100px",
        // scrub: true
        toggleActions: "play complete none reset",
      },
      xPercent: 100,
      opacity: 0.5,
      duration: 1,
    });
    // Custom trigger
    // ScrollTrigger.create({
    //   trigger: "#h3",
    //   start: "top bottom+=-200px", // 200px after the top passes the bottom of the viewport
    //   endTrigger: '#section2',
    //   end: "bottom top",
    //   onUpdate: (self) => {
    //     const progress = Math.max(2, Math.ceil(self.progress * 100)); //No lower than 2.
    //     number.current.innerHTML = progress;
    //   },
    // });

    ScrollTrigger.refresh();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    <div className="row">
      <div
        className="col-md-7 col-sm-12 col-lg-6"
        style={{ position: "relative" }}
      >
        <div className="p-modules-box">
          <div className="box-1 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame} alt="" width={"55%"} />
              <span>
                Project <br />
                Based Model
              </span>
            </div>
          </div>
          <div className="box-2 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={group} alt="" width={"55%"} />
              <span>
                Time And <br />
                Material Model
              </span>
            </div>
          </div>
          <div className="box-3 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame2} alt="" width={"55%"} />
              <span>
                Project <br />
                Based Model
              </span>
            </div>
          </div>
          <div className="box-4 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame3} alt="" width={"55%"} />
              <span>
                Time And <br />
                Material Model
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-sm-12 col-lg-6 mt-5">
        <div className="p-modules-name mx-auto">
          <span>Project-Based Model</span>
          <p>
            In this model, IT companies work on specific projects for clients
            with defined scope, deliverables, and timelines.
          </p>
          <span>Time and Material Model (T&M)</span>
          <p>
            This model involves billing the client based on the actual time and
            resources spent on the project. The client pays for the number of
            hours worked,
          </p>
          <span>Dedicated Team Model</span>
          <p>
            With this approach, the IT company provides a dedicated team of
            professionals to work exclusively on the client's projects.
          </p>
          <span>Managed Services Model</span>
          <p>
            In this model, the IT company takes on the responsibility of
            managing the client's IT infrastructure, applications,
          </p>
        </div>
      </div>
    </div>,
    <div className="row">
      <div
        className="col-md-7 col-sm-12 col-lg-6"
        style={{ position: "relative" }}
      >
        <div className="p-modules-box">
          <div className="box-1 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame} alt="" width={"55%"} />
              <span>
                Project <br />
                Based Model
              </span>
            </div>
          </div>
          <div className="box-2 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={group} alt="" width={"55%"} />
              <span>
                Time And <br />
                Material Model
              </span>
            </div>
          </div>
          <div className="box-3 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame2} alt="" width={"55%"} />
              <span>
                Project <br />
                Based Model
              </span>
            </div>
          </div>
          <div className="box-4 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame3} alt="" width={"55%"} />
              <span>
                Time And <br />
                Material Model
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-sm-12 col-lg-6 mt-5">
        <div className="p-modules-name mx-auto">
          <span>Project-Based Model</span>
          <p>
            In this model, IT companies work on specific projects for clients
            with defined scope, deliverables, and timelines.
          </p>
          <span>Time and Material Model (T&M)</span>
          <p>
            This model involves billing the client based on the actual time and
            resources spent on the project. The client pays for the number of
            hours worked,
          </p>
          <span>Dedicated Team Model</span>
          <p>
            With this approach, the IT company provides a dedicated team of
            professionals to work exclusively on the client's projects.
          </p>
          <span>Managed Services Model</span>
          <p>
            In this model, the IT company takes on the responsibility of
            managing the client's IT infrastructure, applications,
          </p>
        </div>
      </div>
    </div>,
    <div className="row">
      <div
        className="col-md-7 col-sm-12 col-lg-6"
        style={{ position: "relative" }}
      >
        <div className="p-modules-box">
          <div className="box-1 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame} alt="" width={"55%"} />
              <span>
                Project <br />
                Based Model
              </span>
            </div>
          </div>
          <div className="box-2 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={group} alt="" width={"55%"} />
              <span>
                Time And <br />
                Material Model
              </span>
            </div>
          </div>
          <div className="box-3 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame2} alt="" width={"55%"} />
              <span>
                Project <br />
                Based Model
              </span>
            </div>
          </div>
          <div className="box-4 d-flex justify-content-center align-items-center">
            <div className="content">
              <img className="" src={frame3} alt="" width={"55%"} />
              <span>
                Time And <br />
                Material Model
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-sm-12 col-lg-6 mt-5">
        <div className="p-modules-name mx-auto">
          <span>Project-Based Model</span>
          <p>
            In this model, IT companies work on specific projects for clients
            with defined scope, deliverables, and timelines.
          </p>
          <span>Time and Material Model (T&M)</span>
          <p>
            This model involves billing the client based on the actual time and
            resources spent on the project. The client pays for the number of
            hours worked,
          </p>
          <span>Dedicated Team Model</span>
          <p>
            With this approach, the IT company provides a dedicated team of
            professionals to work exclusively on the client's projects.
          </p>
          <span>Managed Services Model</span>
          <p>
            In this model, the IT company takes on the responsibility of
            managing the client's IT infrastructure, applications,
          </p>
        </div>
      </div>
    </div>,
  ];
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://grwapi.net/widget.min.js";
    script.type = "text/javascript";
    script.async = true;

    // Add an event listener to check when the script has loaded
    script.addEventListener("load", () => {
      // The script has loaded, you can now use its functionality
      console.log("Widget script has loaded.");
    });

    // Append the script to the document's body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.type = "text/javascript";
    script.async = true;

    script.addEventListener("load", () => {
      console.log("Widget script has loaded.");
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [commentor, setCommentor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    title: "Mobile App Development",
    phone: "",
    role: "",
    experience: "",
    where: "",
    howlong: "",
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
      const response = await fetch("http://localhost:3000/sendmail", {
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
          name: "",
          email: "",
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
  return (
    <div className="p-header" style={{ marginTop: "0%" }}>
      <div className="p-h">
        <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
            <img src={frame5} width={"5%"} className="mb-1" alt="" />
            <br />
            <span>HIRE TOP TALENTS</span>
            <h5>Hire TOP Developers for Expert website Development</h5>
            <p>
            Shaping Exceptional Online Experiences. At Vsple Technologies Pvt. Ltd., our website developers are the architects of digital landscapes, sculpting captivating platforms that resonate with audiences. Explore top-tier talent dedicated to creating immersive and user-centric websites. Welcome to Vsple - Where Vision Meets Web Innovation.
            </p>
            <div
              className="getin-button-w text-center my-5"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="see-button">
                <a>Hire website Developers &nbsp;</a>
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
        <div className="--watch-wearable">
          <img src={watch} width={"60%"} alt="" />
        </div>
      </div>
      {/* <div className="h-journey d-flex justify-content-center text-center">
        <div className="p-journey">
          <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br />
          <span>Whats Next</span>
          <h5>MacoS App Development</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div> */}
      {/* <div className="container cam-sec">
        <img src={m} width={"100%"} alt="" />
        <div className="vr-cam">
          <img id="h5" src={vrcam} width={"80%"} alt="" />
        </div>
      </div> */}
      <div className="--employee-process-webdeveloper hidden">
        <div className="h-leader-row">
          <div className="p-leader">
          <img src={employeProcess} width={"30px"} className="mb-1" alt="" />
            <br />
            <h4 className="text">Employee Process</h4>
            {/* <span ></span> */}
            <h5>How To Hire Top Remote Website developers Through Vsple?</h5>
            <p>
              Explore our other related services to enhance the performance of
              your digital product.
            </p>
          </div>
          <div className="main-boxes-w hidden">
            <div className="row">
              <div className="b">
                <img
                  className="my-4"
                  src={rewuirementImg}
                  width={"20%"}
                  alt=""
                />
                <h5>Tell Us Your Requirements</h5>
                <p>
                  Let's initiate the process with a thorough examination of your
                  project's requirements and objectives. This initial step
                  allows us to gain a deep understanding of your needs.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={shortlistImg} width={"20%"} alt="" />
                <h5>We Shortlist The Best Talents</h5>
                <p>
                  Finding the Right Fit: Next, we roll up our sleeves and work
                  on finding the perfect developers for your project. We
                  consider your project's scope, requirements, and your company
                  culture to make sure it's a seamless match.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={interviewImg} width={"20%"} alt="" />
                <h5>Take Their Interview</h5>
                <p>
                  Once we've identified potential candidates, we put them
                  through a rigorous screening process. We assess their skills,
                  experience, and expertise to ensure they meet your
                  expectations. This is like auditioning the best talent for
                  your team.
                </p>
              </div>
              <div className="b">
                <img className="my-4" src={hireDevImg} width={"20%"} alt="" />
                <h5>Hire The Developers</h5>
                <p>
                  When you've chosen the developers who fit like a glove, we
                  help you onboard them smoothly. We're there to assist
                  throughout the process. Plus, we offer ongoing support to make
                  sure your newly hired developers thrive in your team and
                  contribute to your project's success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div id="form-modal">
          <h5>Get In Touch With Us</h5>
          <img
            src={cross}
            width={"2%"}
            alt=""
            onClick={() => setIsModalOpen(false)}
          />
        <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="Name">
                  {/* <img width={"22px"} src={account} alt="" /> */}
                  <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleInputChange}
                    placeholder="Full Name*"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="email">
                  {/* <img width={"22px"} src={email} alt="" /> */}
                  {/* <label>Password</label> */}
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    placeholder="Email Address*"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"22px"} src={telephone} alt="" /> */}
                  <input
                    type="number"
                    name="phone"
                    value={state.number}
                    onChange={handleInputChange}
                    placeholder="Mobile Number*"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="message">
                  {/* <label>Password</label> */}
                  {/* <img width={"22px"} src={message} alt="" /> */}
                  <input
                    type="text"
                    name="role"
                    value={state.reason}
                    onChange={handleInputChange}
                    placeholder="What role are you looking to hire for?"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"5%"} src={telephone} alt="" /> */}
                  <input
                    type="text"
                    name="experience"
                    value={state.suggestExp}
                    onChange={handleInputChange}
                    placeholder="Please suggest the experience level?"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"5%"} src={telephone} alt="" /> */}
                  <input
                    type="text"
                    name="howlong"
                    value={state.howLong}
                    onChange={handleInputChange}
                    placeholder="For how long you are planning to hire?"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mobileSec">
                  {/* <label>Password</label> */}
                  {/* <img width={"5%"} src={telephone} alt="" /> */}
                  <input
                    type="text"
                    name="budget"
                    value={state.password}
                    onChange={handleInputChange}
                    placeholder="Any Budget In Mind"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6 w-50 hireform-radio">
              <div className="why">
                    <h5 className="text-start">How Did You Hear About Us?</h5>
                    <div className="ms-3 mb-4">
                    <div className="d-flex justify-content-start">
                      <input name="where" type="radio" value="Google"
                        checked={state.why === "Google"}
                        onChange={handleInputChange} />
                      <label> Google</label>
                      <input name="where" type="radio" value="LinkedIn"
                        checked={state.why === "LinkedIn"}
                        onChange={handleInputChange} />
                      <label > LinkedIn</label>
                      <input name="where" type="radio" value="Facebook"
                        checked={state.why === "Facebook"}
                        onChange={handleInputChange} />
                      <label> Facebook</label>
                      <input className="web-model" name="where" type="radio" value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange} />
                      <label className="web-model" > Instagram</label>
                    </div>
                    <div className="d-flex justify-content-start">
                      <input className="mobile-model" name="where" type="radio" value="Instagram"
                        checked={state.why === "Instagram"}
                        onChange={handleInputChange} />
                      <label className="mobile-model" > Instagram</label>
                      <input name="where" type="radio" value="Other"
                        checked={state.why === "Other"}
                        onChange={handleInputChange} />
                      <label> Others</label>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="message">
              {/* <label>Password</label> */}
              {/* <img width={"6%"} src={message} alt="" /> */}
              <textarea
                type="text"
                rows="4"
                cols="50"
                name="message"
                value={state.message}
                onChange={handleInputChange}
                placeholder="Message"
                autocomplete="off"
                required
              />
              <div className="buttons ">
                <div className="modalButton mx-auto my-2">
                  <button type="submit">Send</button>
                </div>
              </div>
            </div>
          </form>
          {/* <button
            className="mx-auto"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button> */}
        </div>
      )}
      <div className="h-journey d-flex justify-content-center text-center hidden">
        <div className="p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Hire Us</span>
          <h5>Hire Website Developers ?</h5>
          <p>
          At Vsple Technologies Pvt. Ltd., we offer a diverse pool of highly skilled website developers, each specializing in distinct areas of web development. Whether you're seeking expertise in frontend, backend, or full-stack development, we have the right talent to bring your vision to life.
          </p>
        </div>
      </div>
      <div className="hire-developer container mt-5 hidden">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className={`lang-con-b p-4 hire-section`}onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-3">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[0].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[0].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire Frontend Developers
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[0].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[0].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[0].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[0].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={`lang-con-b p-4 hire-section`}onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-3">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[1].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[1].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire Full-stack Developers
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[1].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[1].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[1].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[1].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={`lang-con-b p-4 hire-section`}onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-3">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[2].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[2].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    CMS Specialists
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[2].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[2].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[2].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[2].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-3">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[3].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[3].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire Backend Developers
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[3].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[3].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[3].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[3].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={`lang-con-b p-4 hire-section`} onClick={(e) => {
              const element = e.currentTarget;
              const isHovered = element.classList.contains('hover');
              
              document.querySelectorAll('.hire-section').forEach(element => {
                element.classList.remove('hover');
              });
              
              if (!isHovered) {
                element.classList.add('hover');
              }
            }}>
              <div className="flicker-content row">
                <div className="col-3">
                  {/* <div className="rouded-content-b"></div> */}
                  <img
                    className="beforeLogo"
                    src={langConB[4].beforelogo}
                    width={"50%"}
                    alt=""
                  />
                  <img
                    className="afterLogo"
                    src={langConB[4].afterdLogo}
                    width={"50%"}
                    alt=""
                  />
                </div>
                <div className="col-6 ">
                  <h5
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1.6rem",
                      textAlign: "start",
                    }}
                  >
                    Hire Ecommerce Developers
                  </h5>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="beforeContent"
                  >
                    {langConB[4].para}
                  </p>
                  <p
                    style={{
                      color: "white",
                      opacity: ".7",
                      fontSize: "1vmax",
                      textAlign: "start",
                    }}
                    className="afterContent"
                  >
                    {langConB[4].para2}
                  </p>
                </div>
                <div className="flicker-text col-2">
                  <img
                    className="beforeArrow"
                    width={"70%"}
                    src={langConB[4].beforeArrow}
                    alt=""
                  />
                  <img
                    className="afterArrow"
                    width={"70%"}
                    src={langConB[4].afterArrow}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden mt-5">
        <div className="row">
          <div className="miniportfolio col-md-12 col-sm-12 col-lg-6">
            <div className="parent">
              <div className="child1">
                <img src={expertise} width={"15%"} alt="" />
                <br />
                <span>Expertise and Specialization</span>
                <p>
                  Vsple Technologies specializes in software development,
                  ensuring you have access to developers with in-depth knowledge
                  and experience in this niche, resulting in high-quality and
                  innovative solutions.
                </p>
              </div>
              <vr
                className="me-3"
                style={{
                  height: "100% !important",
                  border: "0.5px solid #ffffff94",
                }}
              ></vr>
              <div className="child1">
                <img src={cuttingEdge} width={"15%"} alt="" />
                <br />
                <span>Cutting-Edge Technology</span>
                <p>
                  Vsple Technologies stays at the forefront of software
                  development technology trends, so you can be confident that
                  your apps will leverage the latest advancements in the field.
                </p>
              </div>
            </div>
            <div className="parent">
              <div className="child1">
                <img src={globalReach} width={"15%"} alt="" />
                <br />
                <span>Global Reach</span>
                <p>
                  The company prioritizes data security and compliance, ensuring
                  that your softwares adhere to the highest security and privacy
                  standards.
                </p>
              </div>
              <vr
                className="me-3"
                style={{
                  height: "100% !important",
                  border: "0.5px solid #ffffff94",
                }}
              ></vr>
              <div className="child1">
                <img src={securityCompliance} width={"15%"} alt="" />
                <br />
                <span>Security and Compliance</span>
                <p>
                  With a global presence, Vsple Technologies can serve clients
                  from around the world, providing you with a diverse
                  perspective and access to a global talent pool.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="main-text-service w-100 p-0 m-0">
              <h5 className="text">Benefits</h5>
              <h2 className="">
                Why Vsple Technologies <br /> Pvt Ltd Sets Software <br />{" "}
                Development Apart
              </h2>
              <p>
                Hiring Software developers from Vsple Technologies Pvt. Ltd. is
                a strategic choice that promises numerous advantages. With
                specialized expertise, customized solutions, and a commitment to
                staying at the forefront of Software technology, the benefits
                are plentiful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-leader web-model">
        <div className="h-leader-row row p-5">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="p-leader">
              <span>Technologies</span>
              <h5>Tech Stack we use</h5>
              <p>
              A robust tech stack typically includes a combination of programming languages, frameworks, libraries, and tools tailored to meet the specific requirements of the project.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6">
            <div className=" img">
              <img
                src={ccc1}
                alt=""
                width={"100%"}
                style={{ marginLeft: '10%' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-head hidden">
        <div className="row">
          <div className=" col-md-6 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service container">
              <h2 className="">
                Vsple Brings Advanced <br /> Tech To Your Wearable <br /> Apps
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 ">
            <img src={mobileApp} width={"100%"} alt="" />
          </div>
        </div>
      </div> */}
      <div className="p-head hidden">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6 text-center">
            <img src={watach2} width={"90%"} alt="" />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-start align-items-center">
            <div className="main-text-service container">
              <h2 className="">
                Key Reasons to Hire <br /> Website Developers
              </h2>
              <ul>
                <li>
                  Our developers bring specialized skills in various aspects of
                  web development, whether it's frontend, backend, full-stack,
                  e-commerce solutions, or CMS customization. Their expertise
                  ensures that your project benefits from the latest
                  technologies and industry best practices.
                </li>
                <li>
                  We understand that each business has unique needs. Our
                  developers tailor their approach to align with your specific
                  requirements, ensuring that the websites they build are not
                  just functional but also aligned with your brand identity and
                  objectives.
                </li>
                <li>
                  Our developers don't just write code; they create experiences.
                  They blend technical prowess with a keen eye for design and
                  user experience, ensuring that your website not only functions
                  seamlessly but also engages and retains your audience
                  effectively.
                </li>
                <li>
                  We are committed to delivering projects on time without
                  compromising quality. Beyond project completion, our
                  developers offer ongoing support, ensuring that your website
                  continues to perform optimally and stays up-to-date with
                  evolving technologies and trends.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-head why-choose-section container web-model">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="card-section card-section-full">
                <div>
                  <h3>
                    Why choose Team <br /> Vsple?
                  </h3>
                  <p>
                  Website developers bring specialized skills in programming languages
                  </p>
                  <div className="text-start">
                    <div className="see-button">
                      <a href="/contact-us"> Connect Today &nbsp;</a>
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
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 h-100">
                  <div className="card-section card-section-full-c text-center">
                    <img src={uiux} width={"20%"} alt="" />
                    <br />
                    <h5>
                      UI/UX <br /> Designer
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 px-2">
                  <div className="w-100 text-center card-section card-section-half"></div>
                  <div className="w-100 text-center card-section card-section-full-b">
                    <img src={wearable} width={"20%"} alt="" />
                    <h5 className="mt-3">
                      Wearable App <br /> Developers
                    </h5>
                  </div>
                  <div className="w-100 text-center card-section-r card-section-half-c">
                    <img src={full} width={"20%"} alt="" />
                    <h5 className="ms-3" style={{fontSize:'1.2rem'}}>
                      Full Stack <br /> Developer
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="w-100 text-center card-section card-section-full-c border-radius">
                    <img src={mobiledev} width={"18%"} alt="" />
                    <h5 className="mt-3">
                      Mobile App <br /> Developer
                    </h5>
                  </div>
                  <div className="w-100 text-center card-section card-section-full-c border-radius">
                    <img src={devo} width={"20%"} alt="" />
                    <h5 className="mt-3">
                      Devops <br /> Development
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center hidden">
        <div className="p-journey">
          <span>Trusted Us</span>
          <h5>Businesses Who Trusted Us</h5>
          <p>
          We're committed to delivering tailored solutions and exceptional service to each and every client, helping them achieve their goals and thrive in the digital age.
          </p>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="slider-div hidden">
        <div className="sliderS-wearable container-fluid">
          <div className="slide-trackN-wearable">
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={ooredo} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={calvaryLogo} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={tradeTips} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={chatie} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={tnumber} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={jupieter} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable">
                <img src={trademarkC} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={unbound} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable">
                <img src={salestrip} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable p-4">
              <div className="service-box-slider-wearable">
                <img src={breckW} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable p-4">
              <div className="service-box-slider-wearable">
                <img src={qrScape} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable p-4">
              <div className="service-box-slider-wearable">
                <img src={hobbyst} width={"100%"} alt="" />
              </div>
            </div>

            {/* <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={sf} width={"100%"} alt="" />
              </div>
            </div> */}
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={ooredo} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={calvaryLogo} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={tradeTips} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={chatie} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={tnumber} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={jupieter} width={"100%"} alt="" />
              </div>
            </div>
            <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={unbound} width={"100%"} alt="" />
              </div>
            </div>
            {/* <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={sf} width={"100%"} alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="faqs my-5 hidden">
        <h5 className="text-center  abc">FAQ'S</h5>
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Ready to elevate your Website idea?
              <br />
              <span className="inner-join">
                Let's match you with top-tier website developers at Vsple!
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
    </div>
  );
};
export default WebsiteDeveloperComponent;
