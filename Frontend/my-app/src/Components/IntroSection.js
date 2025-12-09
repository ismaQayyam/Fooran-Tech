import React from "react";
import "../../src/Style/Iot/IoTInsights.css";

const IntroSection = ({ heading, highlights, paragraphs }) => {
  return (
    <div className="bdg">
      <section
        className="iot-section"
        style={{ fontFamily: "var(--font-primary)" }}
      >
        <div className="iot-heading">
          <h2>
            {heading.beforeHighlight}{" "}
                <br />
            <span
              className="highlight"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              {highlights.first}
           
            </span>{" "}
             
            {heading.middle}{" "}
        
            <span
              className="highlight"
              style={{ fontSize: "30px", fontWeight: "bold", color:"black" }}
            >
                   <br />
              {highlights.second}
            </span>
          </h2>
        </div>
        <div className="iot-content">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
