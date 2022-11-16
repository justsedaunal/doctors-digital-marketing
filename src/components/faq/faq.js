import React from "react";
import "./faq.css";
import { faqData } from "../../data/faqData";

function Faq() {
  faqData.map((item) => {
    return (
      <div key={item.id} className="container" id="faq">
        <h1 className="faq-header">Frequently Asked Questions</h1>
        <details>
          <summary> {item.question} </summary>
          <div>{item.answer}</div>
        </details>
      </div>
    );
  });
}

export default Faq;
