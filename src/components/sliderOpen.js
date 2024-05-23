import React from "react";
import "./faq.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      {/* <div className="faq-no" ></div> */}
      <div className="faq-question"> <span>{index + 1}</span> &nbsp;{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;