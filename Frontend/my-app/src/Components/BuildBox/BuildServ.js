import React from 'react'
import SectionBlock from "../../Components/SectionBlock";

const BuildServ = () => {
  return (
  <div className="services-root">

  {/* Section 1 */}
  <SectionBlock
    theme="light"
    title="Comprehensive System Build Box Solutions"
    cards={[
      {
        heading: "Custom System Assembly",
        text:
          "We design and assemble complete system build boxes tailored to your project requirements. Each box is configured for optimal performance, reliability, and ease of deployment in industrial or commercial environments.",
      },
      {
        heading: "Hardware Integration & Optimization",
        text:
          "Our team integrates all essential components—processors, sensors, power units, and peripherals—ensuring seamless communication and maximum efficiency. We optimize layouts for cooling, maintenance, and durability.",
      },
    ]}
  />

  {/* Section 2 */}
  <SectionBlock
    theme="pink"
    title="System Build Box Services"
    cards={[
      {
        heading: "Testing & Quality Assurance",
        text:
          "We perform rigorous functional, thermal, and stress testing on every system build box to guarantee reliability and long-term performance. Our QA ensures that each system meets industry standards before deployment.",
      },
      {
        heading: "Scalable Production & Support",
        text:
          "From prototyping to small-batch and mass production, we provide end-to-end support for your system build boxes. Our services include documentation, component sourcing, and post-deployment maintenance.",
      },
    ]}
  />

</div>

  )
}

export default BuildServ
