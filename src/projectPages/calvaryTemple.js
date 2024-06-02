import React, { useEffect, useState, useRef } from "react";
import "../style/calvary.css";
import mainimg from "../assest/main-icons/Group 1000002119.png";
import vector from "../assest/main-icons/Vector.png";
import desktop from "../assest/web-icons/calvary/Group 1000002096.png";
import tepmle from "../assest/main-icons/Group 1000002047.png";
import plateforms from "../assest/main-icons/Group 1000002006.png";
import plateforms2 from "../assest/web-icons/calvary/Group 1000002003.png";
import social from "../assest/main-icons/Group 1000002045.png";
import main2 from "../assest/main-icons/Group 1000001983.png";
import sad from "../assest/main-icons/Component 1.png";
import happy from "../assest/main-icons/Component 2.png";
import Carousel from "react-bootstrap/Carousel";
import rec from "../assest/main-icons/Group 1000005569 (1).png";
import study from "../assest/main-icons/Group 1440.png";
import isolation from "../assest/web-icons/calvary/Group 1000001961.png";
import mobile from "../assest/main-icons/Group 1000005219.png";
import mask from "../assest/main-icons/Mask group (1).png";
import unbounded from "../assest/main-icons/Group 1000004879 (1).png";
import salestrip from "../assest/main-icons/Group 1000004882 (1).png";
import hobbyist from "../assest/main-icons/Group 1000005569 (3).png";
import QRscape from "../assest/main-icons/Group 1000004879 (2).png";
import trade from "../assest/main-icons/Group 1000004879 (5).png";
import tnumber from "../assest/main-icons/Group 1000004879 (6).png";
import truda from "../assest/web-icons/Group 1000004879.png";
import tictac from "../assest/main-icons/Group 1000004879 (3).png";
import tradeTips from "../assest/main-icons/Group 1000004879 (4).png";
import breckworld from "../assest/main-icons/Group 1000005569 (2).png";
import appleLogo from "../assest/main-icons/Group 2197 (3).png";
import calvaryViedio from "../assest/ProjectViedios/CalvaryTemple.MOV";
import website from "../assest/web-icons/Group 1000005573.png";
import storeLogo from "../assest/main-icons/Group 2198 (1).png";
import web from "../assest/main-icons/Group 1000005570.png";
import arrow from "../assest/web-icons/Group 647 (1).png";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  playStoreIcon,
  webStoreIcon,
  appStoreIcon,
  webIcon,
} from "../common/images";

const CalvaryComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className="calvaryTop">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="top-content">
              <img src={vector} width={"12%"} alt="" />
              <h2 className="my-3">Calvary Temple</h2>
              <div className="d-flex mb-3">
                <img src={tepmle} width={"8%"} height={"10%"} alt="" />
                <div className="ms-2">
                  <span>Industry</span>
                  <p>Non Profit Organization</p>
                </div>
              </div>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.calvarytemple"
              >
                <img src={playStoreIcon} width={"12%"} alt="" />
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/in/app/calvary-temple-india/id1661280048   "
              >
                <a target="_blank" href="https://www.calvarytemple.in/"></a>
                <img className="ms-2" src={appStoreIcon} width={"12%"} alt="" />
              </a>
              <img className="ms-2" src={webStoreIcon} width={"12%"} alt="" />
              {/* <img src={social} width={"40%"} alt="" /> */}
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6 d-flex justify-content-center aling-items-center">
            <img
              style={{ marginTop: "15%" }}
              src={mainimg}
              width={"90%"}
              alt=""
            />
          </div>
          {/* <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="big-c">
              <img className="circle-img" src={mainimg} width={"94%"} alt="" />
            </div>
          </div> */}
        </div>
        <div className="boxe mt-5">
          <div className="plateform-box text-center">
            <img src={plateforms} width={"30%"} alt="" />
            <h4>Plateforms</h4>
            <p>
              iOS, Android, Web <br />
              etc.
            </p>
          </div>
          <div className="plateform-box text-center ms-4">
            <img src={plateforms2} width={"30%"} alt="" />
            <h4>Tools & Tech Stack</h4>
            <p>
              Swift, Kotlin, NodeJs, Angular, MongoDB, Firebase, Mixpanel,
              RazorPay, AWS, Xcode, Android Studio
            </p>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="row">
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Problem <img src={sad} width={"10%"} alt="" />
            </h4>
            <p>
              Calvary Temple Foundation, being a non-profit organization, needed
              a robust digital platform to streamline its operations and
              effectively communicate its mission and activities to a broader
              audience. The existing digital infrastructure was outdated, not
              user-friendly, and lacked the necessary features to efficiently
              manage their programs, donations, and volunteers.
            </p>
            <p>Key problems identified were:</p>
            <ul>
              <li>
                Outdated Digital Infrastructure**: The existing website and
                applications were outdated, failing to represent the
                organization effectively
              </li>
              <li>
                Lack of Functionality and Features**: The current system lacked
                essential features, such as efficient event management, online
                donations, and volunteer coordination, hampering their ability
                to manage operations effectively.
              </li>
              <li>
                Poor User Experience**: The user interface and experience were
                not intuitive, making it difficult for users to navigate and
                engage with the platform
              </li>
              <li>
                Inefficient Program Management**: Calvary Temple Foundation
                struggled with managing their numerous community programs and
                events due to the lack of a centralized system.
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-6 p-none p-lg-5">
            <h4>
              The Solution <img src={happy} width={"10%"} alt="" />
            </h4>
            <p>
              Vsple Technologies Pvt. Ltd. took a phased approach to address the
              identified problems and provide Calvary Temple Foundation with a
              comprehensive digital solution
            </p>

            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p> */}
            <ul>
              <li>
                Needs Assessment and Planning**: - Conducted an in-depth
                analysis of the existing system, understanding the
                organization's requirements, objectives, and vision. -
                Collaborated with Calvary Temple Foundation to define a clear
                roadmap and establish goals for the new digital platform
              </li>
              <li>
                Website Redesign and Development**: - Revamped the website to
                reflect Calvary Temple Foundation's mission and activities
                effectively. - Implemented a modern, user-friendly design with
                improved navigation and responsive features to enhance the user
                experience.
              </li>
              <li>
                Admin Panel Development**: - Designed and developed a robust
                admin panel for streamlined management of events, donations,
                volunteers, and program details. - Incorporated functionalities
                for real-time analytics and reporting to facilitate informed
                decision-making.
              </li>
              <li>
                *Mobile App Development**: - Created iOS and Android mobile
                applications with a consistent and intuitive user interface. -
                Integrated features like event registration, donation
                processing, and program management, providing a seamless user
                experience across devices.
              </li>
              <li>
                Version Updates and Maintenance**: - Established an ongoing
                partnership to ensure regular updates and maintenance,
                addressing any emerging issues and continuously enhancing the
                platform based on user feedback and technological advancements.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 container">
          <div className="row introduction">
            <div className="col-md-3 col-sm-12 left-portfolio">
              <span>Introduction</span>
              <h4>Background</h4>
            </div>
            <div className="col-md-8 col-sm-12 text-left">
              <h4>Client</h4>
              <p>
                The Calvary Temple Foundation is a significant religious
                institution headquartered in Hyderabad, India. Established by
                Dr. Satish Kumar, the church has emerged as a cornerstone of
                spiritual and community development in the region. With its
                primary branch in Hyderabad, it stands as one of the largest
                churches globally, drawing a staggering weekly congregation of
                around 300,000 devoted members.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="h-journey d-flex justify-content-center text-center">
          <div className="p-journey">
            <img src={isolation} width={"3%"} className="mb-1" alt="" />
            <br />
            <span>Mobile App</span>
            <h5>Platform Features</h5>
            <p>
              Calvary Temple India stands as a mega-church and the world's
              second-largest rapidly expanding religious congregation. Its
              mobile applications cater to both Apple and Android users,
              boasting an array of features carefully designed to ensure market
              readiness and maximum utility for its intended audience.
            </p>
          </div>
        </div>
        <div className="Mobile-Section text-center container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={one} width={"44px"} alt="" />
              <h5>Make a Donation</h5>
              <p>
                Users have the ability to contribute financially through the
                app, allowing for donations of any amount.
              </p>
            </div>
            <div className="col-md-12 col-lg-2"></div>
            <div className="col-md-12 col-lg-4">
              <img className="mb-3" src={two} width={"44px"}alt="" />
              <h5>Get Membership</h5>
              <p>
                Users can apply for or manage their membership within the church
                community through the app.
              </p>
            </div>
            <div className="col-md-12 col-lg-1"></div>
          </div>
          <div className="row ex-5 justify-content-center">
            <div className="col-md-12 col-lg-3">
              <img className="mb-3" src={three} width={"44px"}alt="" />
              <h5>Grow Spiritual Life</h5>
              <p>
                A daily survey with push notifications to get the feedback on
                actual routine, with resources like daily devotionals, and
                sermons aimed at fostering spiritual growth.
              </p>
              <img
                className="portfolioImg mb-3"
                src={five}
                width={"44px"}
                alt=""
              />
              <h5>Request for Prayers</h5>
              <p>
                Users can submit prayer requests through the app using a form.
                There is a facility to submit with Image and audio form.
              </p>
            </div>
            <div className="col-md-12 col-lg-6">
              {/* <img src={mobile} width={"100%"} alt="" /> */}
              <div className="my-3" style={{ height: '600px' }}>
                <video  muted autoPlay loop ref={videoRef} height={"100%"} style={{ borderRadius: '20px' }} >
                  <source
                    src={calvaryViedio}
                    type="video/webm"
                  />
                </video>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 mt-4">
              <img className="mb-3" src={four} width={"44px"} alt="" />
              <h5 className="">Sponsor a TV Program</h5>
              <p>
                App allows users to financially support specific TV programs or
                broadcasting initiatives, choose which program they want to
                sponsor and contribute directly through the app.
              </p>
              <img
                className="portfolioImg mb-3"
                src={six}
                width={"44px"}
                alt=""
              />
              <h5>Track Church Attendance</h5>
              <p>
                Users can track their attendance at church services or events,
                and get the benefits for the maintaining a good ratio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4 mt-5">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="side-section-4">
              <img src={desktop} width={"100%"} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="sec-4-content">
              <img className="mb-2" width={"6%"} src={webIcon} alt="" />
              <br />
              <span>Desktop Web</span>
              <h4>Empowering Faith</h4>
              <p>Calvary Temple Foundation's Website</p>
              <p>
                The Calvary Temple Foundation's website has been developed with
                a range of features tailored to ensure it meets market standards
                and serves its intended audience effectively. These features
                encompass opportunities to contribute through donations, submit
                prayer requests, sponsor TV programs, and utilize a support form
                for inquiries. Users can enrich their spiritual journey by
                accessing videos curated by the Church Admin, explore detailed
                information about the foundation, and peruse the gallery and
                media sections. Additionally, the website provides access to
                review privacy policies, terms of service, and payment
                conditions. It also offers convenient links to access the mobile
                applications via the Play Store and Apple Store for seamless
                navigation.
              </p>
              {/* <ul>
              1. Admin Dashboard
                <li>
                A centralized control hub providing real-time insights and analytics on website and application performance.
                </li>
                <li>
                Visual representations and data snapshots enable quick assessment of key metrics and activities.
                </li>
                <li>
                Intuitive interface offering at-a-glance views of user engagement, donation trends, and support inquiries.
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="target-audience container">
          <div className="admin-panel text-center">
            <span>Admin Panel</span>
            <h4>Empowering Ministry Management</h4>
          </div>
          <div className="inner">
            <Carousel>
              <Carousel.Item>
                <h4 className="mb-4">Admin Dashboard</h4>
                <ul>
                  <li>
                    A centralized control hub providing real-time insights and
                    analytics on website and application performance.
                  </li>
                  <li>
                    Visual representations and data snapshots enable quick assessment
                    of key metrics and activities.
                  </li>
                  <li>
                    Intuitive interface offering at-a-glance views of user engagement,
                    donation trends, and support inquiries.
                  </li>
                  <li>
                    Customizable widgets and charts facilitate personalized tracking
                    of crucial statistics and trends.
                  </li>
                  <li>
                    Access to critical data points aids swift decision-making and
                    strategizing for improved audience interaction.
                  </li>
                  <li>
                    Provides a comprehensive overview of platform activities,
                    empowering efficient management and monitoring.
                  </li>
                  <li>
                    Offers a bird's-eye view of key performance indicators, ensuring a
                    proactive approach to decision-making.
                  </li>
                  <li>
                    Enables quick navigation and access to detailed reports,
                    empowering informed and timely actions.
                  </li>
                </ul>
                <div
                  className="row align-items-center"
                >
                  <div className="col-md-12 d-flex justify-content-center">
                    <img src={main2} width={"100%"} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h4 className="my-4">Donation History</h4>
                <ul>
                  <li>
                    Comprehensive Records: Detailed logs of all donations made through
                    the platform, including date, time, and donation amounts.
                  </li>
                  <li>
                    Donor Information: Complete donor profiles with contact details
                    and history of contributions.
                  </li>
                  <li>
                    Transaction Details: Secure storage of transaction IDs, payment
                    methods, and status (successful, pending, refunded).
                  </li>
                  <li>
                    Search and Filter: Robust search and filter options to quickly
                    access specific donation records based on criteria like date
                    range, donor name, or amount.
                  </li>
                  <li>
                    Export Capabilities: Ability to export donation data for financial
                    reporting and analysis purposes.
                  </li>
                  <li>
                    Donation Trends: Graphical representations and statistical
                    insights displaying donation trends over time.
                  </li>
                  <li>
                    Donor Engagement Metrics: Metrics showcasing donor engagement
                    levels, recurrence, and loyalty.
                  </li>
                  <li>
                    Customizable Reporting: Tailored reports and analytics to derive
                    actionable insights for fundraising strategies and donor
                    management.
                  </li>
                </ul>
                <div
                  className="row align-items-center"
                // style={{ marginTop: "180px" }}
                >
                  <div className="col-md-12 d-flex justify-content-center">
                    <img src={main2} width={"100%"} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h4 className="my-4">Members Data View & Management</h4>
                <ul>
                  <li>
                    Comprehensive User Database: Access to a detailed database
                    displaying all mobile application users along with their personal
                    information.
                  </li>
                  <li>
                    Search and Filter Options: Tools enabling quick search and
                    efficient filtering based on specific user attributes or criteria.
                  </li>
                  <li>
                    Status-based Data Management: Capability to organize and view user
                    data based on status (active, suspended, etc.) for effective
                    monitoring.
                  </li>
                  <li>
                    {" "}
                    Export Functionality: Ability to export user records into Excel
                    files for further analysis or reporting purposes.
                  </li>
                  <li>
                    Analytics Viewing: Insights and analytics tools providing a
                    comprehensive overview of user engagement, behavior, and app
                    activities.
                  </li>
                  <li>
                    Membership Status Tracking: Visibility into each user's membership
                    status within the application or community.
                  </li>
                  <li>
                    User Management Controls: Options to suspend or activate user
                    accounts as needed for administrative purposes.
                  </li>
                  <li>
                    Bulk Activity Monitoring: Comprehensive view of aggregated app
                    activities of multiple users simultaneously for streamlined
                    management.
                  </li>
                </ul>
                <div
                  className="row align-items-center"
                // style={{ marginTop: "180px" }}
                >
                  <div className="col-md-12 d-flex justify-content-center">
                    <img src={main2} width={"100%"} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h4 className="my-4">Support Inquiries View & Management</h4>
                <ul>
                  <li>
                    Comprehensive Inquiry Display: Display of all support inquiries
                    raised by users via the mobile application or website, showcasing
                    detailed information provided in the support form.
                  </li>
                  <li>
                    Search and Filter Options: Functionality to search for specific
                    inquiries and apply filters based on various criteria for
                    efficient data retrieval.
                  </li>
                  <li>
                    Status-Based Data Viewing: Option to view inquiries categorized by
                    status (open, pending, resolved), facilitating a systematic
                    approach to managing support requests.
                  </li>
                  <li>
                    {" "}
                    Export to Excel: Ability to export inquiry records into Excel
                    files for further analysis or external reporting purposes.
                  </li>
                  <li>
                    Analytics View: Access to analytics and insights derived from
                    support inquiries, aiding in understanding trends, common issues,
                    and user behavior.
                  </li>
                  <li>
                    Mark as Closed/Invalid: Capability to mark inquiries as closed or
                    invalid, ensuring proper tracking and closure of resolved or
                    irrelevant requests.
                  </li>
                  <li>
                    Reply with Attachments: Functionality to respond to user queries
                    directly from the panel, allowing attachments to be added for
                    further clarification or assistance.
                  </li>
                  <li>
                    Comprehensive Management Tools: Tools enabling the internal team
                    to efficiently manage and organize support inquiries, ensuring
                    timely and effective responses to users' concerns
                  </li>
                </ul>
                <div
                  className="row align-items-center"
                // style={{ marginTop: "180px" }}
                >
                  <div className="col-md-12 d-flex justify-content-center">
                    <img src={main2} width={"100%"} alt="" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h4 className="my-4">
                  Service Request & Prayer Request View & Management
                </h4>
                <ul>
                  <li>
                    Comprehensive Request Display: Display of all service and prayer
                    requests generated by users through the app and web, showcasing
                    detailed information from the respective forms.
                  </li>
                  <li>
                    Search and Filter Options: Functionality allowing the search for
                    specific requests and the application of filters based on various
                    criteria for efficient data retrieval.
                  </li>
                  <li>
                    Status-Based Data Viewing: Option to view requests categorized by
                    status (pending, in progress, completed), enabling organized
                    management and tracking.
                  </li>
                  <li>
                    Export to Excel: Capability to export request records into Excel
                    files for further analysis, reporting, or internal documentation
                    purposes.
                  </li>
                  <li>
                    Analytics View: Access to analytics presenting insights derived
                    from service and prayer requests, facilitating an understanding of
                    trends and user preferences.
                  </li>
                  <li>
                    Mark as Closed/Decline: Ability to mark requests as closed or
                    decline them, ensuring proper closure or rejection of completed or
                    inappropriate requests.
                  </li>
                  <li>
                    Efficient Decline Process: Option to decline requests deemed
                    unsuitable or invalid, providing a streamlined process for
                    managing requests.
                  </li>
                  <li>
                    Effective Management Tools: Tools enabling the internal team to
                    efficiently manage and organize service and prayer requests,
                    ensuring timely responses and appropriate handling of user
                    requests.
                  </li>
                </ul>
                <div
                  className="row align-items-center"
                // style={{ marginTop: "180px" }}
                >
                  <div className="col-md-12">
                    <img src={main2}  width={"100%"} alt="" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="testimonial-calvary web-model">
          <h4>Client Testimonial</h4>
          <div className="single-testimonial container">
            <div className="single-testi">
              <div className="single-t my-5">
                <div className="single-testimial-box">
                  <p className="text-light">
                    They deliver top-quality software They have the best
                    engineers and project managers They can match 100% design
                    requirements The CEO is very much available and solves
                    almost any problems They treat clients as very important and
                    try to deliver what the client wants Their Project
                    management plan and execution is top-class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
              Want To Get The IT Puzzle Solved?
              <br />
              <span className="inner-join">
                Let’s connect to see how VSPLE can resolve your Dilemma.
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

      <div className="success-stories container mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <span>Success Stories</span>
            <h4>From Problem to Progress</h4>
          </div>
          <div className="col-md-12 col-lg-6 d-flex align-items-end justify-content-end">
            <div className="see-button me-5 mt-4">
              <a href="/our-portfolio">View More &nbsp;</a>
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
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
            <div className="tab-cont">
              <div className="chatie-upper-section">
                <div className="text-end mb-5">
                  {/* <img src={appleLogo} width={"20%"} alt="" /> */}
                  <img className="ms-2" src={appleLogo} width={"20%"} alt="" />
                </div>
                <img src={rec} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Chattie</span>
                <p>Mobile & Web App Development</p>
                <a href="/chatie-app-development">
                  Case Study <img width={"10%"} src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
            <div className="tab-cont">
              <div className="unbounded-upper-section">
                <div className="text-end mb-4">
                  <img src={appleLogo} width={"20%"} alt="" />
                  {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                </div>
                <img className="mt-4" src={unbounded} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Unbounded</span>
                <p>Mobile App Development</p>
                <a href="/unbounded-app-development">
                  Case Study <img width={"10%"} src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4 p-3 text-start">
            <div className="tab-cont">
              <div className="salestrip-upper-section ">
                <div className="text-end ">
                  <img src={appleLogo} width={"20%"} alt="" />
                  {/* <img
                          className="ms-2"
                          src={storeLogo}
                          width={"20%"}
                          alt=""
                        /> */}
                </div>
                <img className="mt-4" src={salestrip} width={"100%"} alt="" />
              </div>
              <div className="tab-text1">
                <span>Salestrip CLM</span>
                <p>Mobile App Development</p>
                <a href="/calvary-app-development">
                  Case Study <img width={"10%"} src={arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalvaryComponent;
