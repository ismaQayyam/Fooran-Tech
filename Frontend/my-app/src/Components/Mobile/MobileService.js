import React from 'react'
import SectionBlock from "../../Components/SectionBlock";

const MobileService = () => {
  return (
 <div className="services-root">

      {/* Section 1 */}
      <SectionBlock
        theme="light"
        title="Building Next-Gen Mobile Experiences"
        cards={[
          {
            heading: "Mobile App Development",
            text:
              "We create high-performance mobile applications tailored to your business needs. Our team builds seamless Android and iOS apps with fast load times, smooth navigation, and intuitive user experiences, ensuring your product stands out in a competitive market.",
          },
          {
            heading: "App Performance & Optimization",
            text:
              "We optimize mobile apps for speed, stability, and efficiency. From real-time data handling to API performance tuning, we ensure your app delivers a reliable and scalable experience—even under heavy usage.",
          },
        ]}
      />

      {/* Section 2 */}
      <SectionBlock
        theme="pink"
        title="Mobile App Services"
        cards={[
          {
            heading: "UI/UX Design for Mobile",
            text:
              "We craft modern, user-friendly UI/UX designs focused on clarity, accessibility, and smooth user journeys. Every screen is designed to enhance user engagement, making your app both beautiful and intuitive.",
          },
          {
            heading: "App Automation & Smart Features",
            text:
              "Our team builds intelligent mobile features such as automated workflows, push notifications, real-time tracking, analytics, and integration with IoT devices. These smart capabilities enhance user satisfaction and boost overall business efficiency.",
          },
        ]}
      />
    </div>

  )
}

export default MobileService
