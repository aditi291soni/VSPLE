import React, { useState } from "react";
import frame10 from "../assest/main-icons/Frame (10).png";
import frame12 from "../assest/main-icons/Frame (12).png";
import FAQ from "./Faq";
import "./faqPage.css";

const FaqPageComponent = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What services does Vsple Technologies Pvt. Ltd. offer?",
      answer:
        "Vsple Technologies Pvt. Ltd. offers a wide range of services, including:  - Mobile app development , - Web development , - UI/UX design , - Quality Assurance (QA) , - Software development , - Staff Augmentation , - DevOps, etc.",
      open: true,
    },
    {
      question:
        "How does Vsple Technologies ensure the quality of its services?",
      answer:
        "We have a dedicated QA team that rigorously tests our projects to ensure they meet high-quality standards. We follow industry best practices and conduct thorough testing throughout the development lifecycle.",
      open: false,
    },
    {
      question: "Can Vsple Technologies help with custom software development?",
      answer:
        "Yes, Vsple Technologies specializes in custom software development tailored to meet specific business needs. We work closely with clients to understand their requirements and develop solutions that align with their goals.",
      open: false,
    },
    {
      question: "What platforms do you develop mobile apps for?",
      answer:
        "We develop mobile apps for various platforms, including iOS (iPhone/iPad), Android, and cross-platform solutions to ensure a wide reach and optimal user experience.",
      open: false,
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "Our web development team utilizes a wide range of technologies, including but not limited to:",
      open: false,
    },
    {
      question: "Do you provide UI/UX design services?",
      answer:
        "Yes, we offer UI/UX design services to create visually appealing and user-friendly interfaces for applications and websites.",
      open: false,
    },
    {
      question: "How does Vsple Technologies approach project management?",
      answer:
        "We employ agile methodologies for project management to ensure flexibility, transparency, and efficient collaboration. Our approach allows us to adapt to changing requirements and deliver high-quality solutions on time.",
      open: false,
    },
    {
      question:
        "Can you provide maintenance and support for the products developed by Vsple Technologies?",
      answer:
        "Yes, we offer post-development maintenance and support services to ensure the continued functionality and performance of the products we develop.",
      open: false,
    },
    {
      question: "How can I request a quote for a project?",
      answer:
        "You can request a quote by reaching out to our sales team through the 'Contact Us' section on our website. Provide detailed information about your project requirements, and we will promptly respond with a customized quote. Or simply email us complete details at info@vsple.com",
      open: false,
    },
    {
      question: "Is Vsple Technologies open to collaboration and partnerships?",
      answer:
        "Yes, we welcome collaboration and partnerships. Feel free to contact us to discuss potential collaboration opportunities and how we can work together to achieve mutual goals.",
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
  return (
    <div className="container">
      <div className="h-blog d-flex justify-content-center text-center mb-5">
        <div className="p-blog">
          <span>FAQs</span>
          <br />
          <h5 className="mt-2">Frequently Asked Questions</h5>
          <p>
            Discover Insights, Clarify Doubts, and Navigate the IT Landscape
            with Vsple technologies Pvt. Ltd. Have questions about our services,
            technologies, or processes? You're in the right place. Explore our
            FAQs section for comprehensive answers and insights into the world
            of IT solutions. Welcome to the Vsple technologies FAQs - Where Your
            Curiosity Meets Clarity.
          </p>
        </div>
      </div>
      {/* <div className="inp-txt">
        <img src={frame10} alt="" />
        <input type="" placeholder="Type keywords to find answer" />
      </div> */}
      <div style={{ marginTop: "5%" }} className="faq-sec ">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="faqs">
              {faqs.map((faq, index) => (
                <FAQ
                  faq={faq}
                  index={index}
                  key={index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
            {/* <div className="loadMore2">
              <div className="load-btn">
                <span>Load More</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPageComponent;
