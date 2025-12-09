import React from "react";
import "../../Style/Embed/servicesec.css";
import SectionBlock from "../../Components/SectionBlock";

const ServicesSection = () => {
  return (
    <div className="services-root">

      <SectionBlock
        theme="light"
        title="Fulfilling Your Vision"
        cards={[
          {
            heading: "From IoT to Intelligent Edge",
            text:
              "We go beyond simply connecting IoT devices to the cloud by empowering them to process and analyze data locally. In addition, we ensure your smart devices are secure and can be properly managed in any use case.",
          },
          {
            heading: "Engineering the Future",
            text:
              "Our talented engineers are experts in leveraging Edge Computing, IoT and Machine Learning to craft world-class devices and ensure you are able to create future-ready products and solutions.",
          },
        ]}
      />

      <SectionBlock
        theme="pink"
        title="Our Services"
        cards={[
          {
            heading: "Edge AI R&D",
            text:
              "From concept to MVP or final product, we provide tailored innovative solutions to build tomorrow’s smart devices.",
          },
          {
            heading: "Small Language Models",
            text:
              "We develop and train compact Language Models optimized for microcontrollers and embedded systems.",
          },
        ]}
      />

    </div>
  );
};

export default ServicesSection;
