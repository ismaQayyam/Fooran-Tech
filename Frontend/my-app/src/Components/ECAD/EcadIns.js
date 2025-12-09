import React from 'react'
import IntroSection from '../../Components/IntroSection'

const EcadIns = () => {
  return (
    <div>
      <IntroSection
  heading={{
    beforeHighlight: "Partner with",
    middle: "for",
  }}
  highlights={{
    first: "Fooran Technologies",
    second: "ECAD Solutions",
  }}
  paragraphs={[
    "At Fooran Technologies, our ECAD expertise helps businesses design and develop precise electronic circuits and PCB layouts with efficiency and accuracy. We combine advanced design tools with engineering best practices to optimize performance and reduce time-to-market.",
    "Choose Fooran Technologies for a partnership that goes beyond conventional design. We specialize in schematic capture, PCB design, simulation, and verification, ensuring your electronic products are reliable, scalable, and production-ready. Let us help you transform ideas into high-quality electronic designs."
  ]}
/>

    </div>
  )
}

export default EcadIns
