import React from "react";
import "./faq.css";

const FAQSEC = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">&nbsp;{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQSEC;