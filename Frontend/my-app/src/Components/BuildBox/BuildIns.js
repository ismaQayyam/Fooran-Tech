import React from 'react'
import IntroSection from '../../Components/IntroSection'
const BuildIns = () => {
  return (
    <div>
      <IntroSection
  heading={{
    beforeHighlight: "Partner with",
    middle: "for",
  }}
  highlights={{
    first: "Fooran Technologies",
    second: "Buildbox Game Solutions",
  }}
  paragraphs={[
    "At Fooran Technologies, our expertise with Buildbox enables businesses to create engaging, interactive, and high-quality games without complex coding. We focus on intuitive gameplay, seamless user experience, and rapid prototyping to bring your gaming ideas to life quickly.",
    "Choose Fooran Technologies for a partnership that goes beyond standard game development. We specialize in level design, game mechanics, monetization strategies, and testing to ensure your Buildbox projects are polished, enjoyable, and ready for market. Let us help you transform creative concepts into captivating games."
  ]}
/>

    </div>
  )
}

export default BuildIns
