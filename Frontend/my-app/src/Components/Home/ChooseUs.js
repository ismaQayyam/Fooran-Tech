import React from "react";
import "../../Style/Home/ChooseUs.css";
import {
  FaUserTie,
  FaHeadset,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaUndoAlt,
  FaCogs,
} from "react-icons/fa";

const ChooseUs = () => {
  return (
    <section className="chooseus-section">
      {/* Header Section */}
      <div className="chooseus-header">
 <h2 className="chooseus-title">
  Why Choose Fooran <span className="chooseus-highlight">Technologies</span>
</h2>




        <div className="chooseus-description">
          <p>
            With many years of experience and a deep understanding of the industry,
            Fooran Technologies stands as a trusted partner for modern businesses.
            We provide professional expertise, transparent collaboration, and
            customer-driven solutions to help your company grow efficiently.
          </p>
          <h3>
            We believe in long-term partnerships — built on trust, innovation, and
            guaranteed results.
          </h3>
        </div>
      </div>

      {/* Cards Section */}
      <div className="chooseus-cards">
        {/* Card 1 */}
        <div className="chooseus-card">
          <div className="chooseus-icon blue">
            <FaUserTie className="chooseus-react-icon" />
          </div>
          <h4>Top Industry Specialists</h4>
          <p>
            Our team consists of experienced professionals with deep technical
            expertise and years of industry experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="chooseus-card">
          <div className="chooseus-icon yellow">
            <FaHeadset className="chooseus-react-icon" />
          </div>
          <h4>24/7 Customer Support</h4>
          <p>
            We’re always here to help — providing real-time assistance and answers
            to your queries, anytime and anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="chooseus-card">
          <div className="chooseus-icon red">
            <FaMoneyCheckAlt className="chooseus-react-icon" />
          </div>
          <h4>Fixed Fees</h4>
          <p>
            We agree on a fixed amount at the start of the contract, ensuring
            transparency and no hidden costs throughout the project.
          </p>
        </div>

        {/* Card 4 */}
        <div className="chooseus-card">
          <div className="chooseus-icon green">
            <FaUserFriends className="chooseus-react-icon" />
          </div>
          <h4>Customer Focus</h4>
          <p>
            Our business revolves around you — we prioritize your goals,
            satisfaction, and success in every decision we make.
          </p>
        </div>

        {/* Card 5 */}
        <div className="chooseus-card">
          <div className="chooseus-icon purple">
            <FaUndoAlt className="chooseus-react-icon" />
          </div>
          <h4>100% Money-Back </h4>
          <p>
            Not satisfied with our product or service? We’ll refund the full amount —
            no questions asked.
          </p>
        </div>

        {/* Card 6 */}
       
      </div>

      {/* Footer */}
      <div className="chooseus-footer">
        <h2>
          Imagine it. <span className="done-text">We Build It.</span>
        </h2>
      </div>
    </section>
  );
};

export default ChooseUs;
