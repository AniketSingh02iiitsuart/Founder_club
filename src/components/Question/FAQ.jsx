import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './FAQ.css';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="wrapper">
      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>

        {/* First Question */}
        <div className="faq-item">
          <p onClick={() => toggleQuestion("q1")} className="faq-question">
            Is Foundersclub free to use?
            <span className={openQuestion === "q1" ? "icon-rotate" : ""}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
          {openQuestion === "q1" && <p className="faq-answer">Yes, Foundersclub offers free access...</p>}
        </div>
        <div className="underline"></div>

        {/* Second Question */}
        <div className="faq-item">
          <p onClick={() => toggleQuestion("q2")} className="faq-question">
            Who can join Foundersclub?
            <span className={openQuestion === "q2" ? "icon-rotate" : ""}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
          {openQuestion === "q2" && <p className="faq-answer">Anyone passionate about startups can join...</p>}
        </div>
        <div className="underline"></div>

        {/* Third Question */}
        <div className="faq-item">
          <p onClick={() => toggleQuestion("q3")} className="faq-question">
            Can I post job openings for my startup?
            <span className={openQuestion === "q3" ? "icon-rotate" : ""}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </p>
          {openQuestion === "q3" && <p className="faq-answer">Yes, you can post job openings...</p>}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
