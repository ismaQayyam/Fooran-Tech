import React from 'react'
import SectionBlock from "../SectionBlock";
const UiServices = () => {
  return (
   <div className="services-root">

      {/* Section 1 */}
      <SectionBlock
        theme="light"
        title=" Digital Experiences"
        cards={[
          {
            heading: "User Interface (UI) Design",
            text:
              "We design visually stunning and modern interfaces that blend aesthetics with functionality. Our UI approach ensures consistency, clarity, and a polished look across all screens while reflecting your brand identity.",
          },
          {
            heading: "User Experience (UX) Strategy",
            text:
              "Through research-driven UX design, we craft seamless user journeys that reduce friction and improve engagement. From user flows to wireframes, every step is optimized to create meaningful and intuitive interactions.",
          },
        ]}
      />

      {/* Section 2 */}
      <SectionBlock
        theme="pink"
        title="UI/UX Services"
        cards={[
          {
            heading: "Prototyping & Wireframing",
            text:
              "We create interactive prototypes and detailed wireframes to visualize your product early. This helps refine functionality, improve usability, and accelerate development with clear direction.",
          },
          {
            heading: "Design Systems & Brand Consistency",
            text:
              "Our team builds scalable design systems with reusable components, color palettes, typography, and UI guidelines. This ensures consistency across platforms, faster development, and a cohesive product experience.",
          },
        ]}
      />

    </div>
  )
}

export default UiServices
