import React from 'react'
import SectionBlock from "../../Components/SectionBlock";

const EcadServ = () => {
  return (
   <div className="services-root">

      {/* Section 1 */}
      <SectionBlock
        theme="light"
        title="Advanced ECAD Solutions for Modern Electronics"
        cards={[
          {
            heading: "PCB Design & Layout",
            text:
              "We provide precision PCB design and layout services, ensuring optimal signal integrity, thermal performance, and manufacturability. Our team leverages industry-standard ECAD tools to create efficient, high-quality boards.",
          },
          {
            heading: "Schematic Capture & Circuit Design",
            text:
              "From conceptual schematics to detailed circuit diagrams, we develop accurate and reliable designs. Our ECAD workflow ensures clear documentation, easy collaboration, and error-free design handoff to manufacturing.",
          },
        ]}
      />

      {/* Section 2 */}
      <SectionBlock
        theme="pink"
        title="ECAD Services"
        cards={[
          {
            heading: "Design Rule Check & Verification",
            text:
              "We perform comprehensive design rule checks (DRC) and electrical verification to detect potential errors early. This guarantees that your PCB designs meet industry standards and are ready for seamless production.",
          },
          {
            heading: "Library Management & Component Optimization",
            text:
              "Our team manages ECAD libraries, ensures component accuracy, and optimizes footprints. This improves design consistency, reduces errors, and accelerates development cycles for complex electronic systems.",
          },
        ]}
      />

    </div>
  )
}

export default EcadServ
