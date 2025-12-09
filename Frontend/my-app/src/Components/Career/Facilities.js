import React, { useState } from "react";
import "../../Style/Career/facility.css";
import GlobalButton from "../../Components/GlobalButton"; // adjust path if needed
import { AiOutlineArrowDown } from "react-icons/ai";

const perksData = [
  {
    title: "Work‑Life Harmony",
    description:
      "At Fooran, we believe in true work‑life harmony — with a hybrid work model that lets our team flexibly blend office time and remote work, so you can personalize your schedule without compromising productivity.",
  },
  {
    title: "Paid Time Off",
    description:
      "We provide generous paid time off, including vacation days, sick leave, and recharge breaks — because rest is as important as hard work.",
  },
  {
    title: "Health Coverage",
    description:
      "Comprehensive health insurance for you (and optionally your family) to ensure peace of mind and well‑being in every stage of life.",
  },
  {
    title: "Invest in Your Education",
    description:
      "We support continuous growth: access to professional development programs, reimbursement for courses/certifications, and a learning budget so you can sharpen your skills and advance your career.",
  },
  {
    title: "Recognition of Work",
    description:
      "Your contributions don’t go unnoticed — we celebrate achievements with regular shoutouts, performance rewards, and peer recognition programs.",
  },
  {
    title: "Years of Service Awards",
    description:
      "Loyalty matters. We honor long-term commitment through milestone awards, service bonuses, and special celebrations for employee anniversaries.",
  },
  {
    title: "Stock Options",
    description:
      "Eligible team members can opt into our stock option plan — become an owner, share in Fooran’s success, and grow with us.",
  },
  {
    title: "Attractive Tax‑Saving Benefits – Car Lease",
    description:
      "Optimize your compensation with tax-saving benefits like car lease options, helping you save more while enjoying important assets.",
  },
];

const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="perks-section">
      <div className="perk-inside">
        <h2 className="perks-title">Perks & Benefits</h2>
        <p className="perks-subtitle">
          At Fooran Technologies, our people are our priority – they're our brand
          ambassadors! We provide our talented, hardworking team with
          cutting-edge benefits, fostering work-life synergy and enabling them
          to make optimal choices for themselves.
        </p>

        <div className="accordion">
          {perksData.map((perk, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <span>{perk.title}</span>
                <span className="arrow">
                  {activeIndex === index ? (
                    <img
                      src="/Image/arrow1.png"
                      alt="Down Arrow"
                      style={{ width: "20px", height: "20px" }}
                    />
                    
                  ) : (
                  <AiOutlineArrowDown size={20} />
                  )}
                </span>
              </div>
              {activeIndex === index && (
                <div className="accordion-body">{perk.description}</div>
              )}
            </div>
          ))}
        </div>

        {/* ===== CTA Section ===== */}
        <div className="cta-section">
          <h3><span style={{color:"#dc3545", fontWeight:"bold"}}> Want To </span>Join Our Talent Pool?</h3>
          <p>
            Ready to ignite your career? Submit your CV/Resume and we'll notify
            you when any job opportunity matching your skills comes up.
          </p>
          <GlobalButton size="md" style={{ marginTop: "20px" }}>
            Apply Now
          </GlobalButton>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
