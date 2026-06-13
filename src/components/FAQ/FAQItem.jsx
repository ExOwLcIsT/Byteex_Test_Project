import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-list-item">
      <div className="faq-header">
        <div className="faq-question">{question}</div>
        <div className="faq-expander" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}
