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
      <div className="faq-question">
        <div className="row">
          <div className="col-1">
            <span>{index + 1}.</span>
          </div>
          <div className="col-11">
            {faq.question}
          </div>
        </div>
      </div>
      <div className="faq-answer">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-11">
              {faq.answer}
            </div>
          </div>
        </div>
    </div>
  );
};

export default FAQ;
