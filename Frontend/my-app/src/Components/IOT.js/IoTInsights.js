import React from "react";
import IntroSection from "../../Components/IntroSection";

const IoTInsights = () => {
  return (
    <IntroSection
      heading={{
        beforeHighlight: "Partner with",
        middle: "for",
      }}
      highlights={{
        first: "Fooran Technologies",
        second: "IOT Insights",
      }}
      paragraphs={[
        "At Fooran Technologies, our expertise in IoT and device management empowers you to transform connected devices into intelligent, self-optimizing assets. By integrating AI and ML into our solutions, we help businesses gain a competitive edge, turning data into strategic value.",
        "Choose Fooran Technologies for a partnership that goes beyond traditional management. We specialize in predictive analytics and insightful decision-making, crafting IoT and device management solutions tailored to your unique challenges. Contact us to explore how we can elevate your business with connected intelligence."
      ]}
    />
  );
};

export default IoTInsights;
