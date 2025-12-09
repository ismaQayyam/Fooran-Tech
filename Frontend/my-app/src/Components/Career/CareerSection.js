import React from "react";
import "../../Style/Career/career.css";

const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="career-container">
        {/* Left: Text Content */}
        <div className="career-content">
          <p className="career-subtitle"> <span style={{ color: "#000", fontWeight: "700" }}>#Manzoor</span>{" "}
        <span style={{ color: "#dc3545", fontWeight: "700" }}>Labs</span></p>
          <h1 className="career-title">
            Spark Your <br /> <span>Career With Us!</span>
          </h1>
        </div>

        {/* Right: Image */}
        <div className="career-image">
          <img
            src="/Image/career.PNG"
            alt="Career at Fooran Technologies"
            className="career-image__img"
            style={{height:"490px", width:"1200px"}}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="career-bottom">
        <h2 className="career-bottom__title">
          <span>What It’s Like</span> to Work at Fooran Technologies
        </h2>
        <p className="career-bottom__text">
          At Fooran Technologies, we are committed to fostering a culture of
          innovation and collaboration. Our engineers work together to build
          IoT, Connectivity, and Intelligent Edge solutions that shape the
          technology of tomorrow.
        </p>
        <p className="career-bottom__text">
          If you’re passionate about solving real-world challenges and want to
          grow with a forward-thinking team, join us and spark your career with
          Fooran Technologies!
        </p>
      </div>
    </section>
  );
};

export default CareerSection;
