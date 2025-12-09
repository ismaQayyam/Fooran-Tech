import React from 'react'
import IntroSection from '../../Components/IntroSection'

const EmbedIns = () => {
  return (
    <div>
      <IntroSection
  heading={{
    beforeHighlight: "Partner with",
    middle: "for",
  }}
  highlights={{
    first: "Fooran Technologies",
    second: "Embedded Systems Solutions",
  }}
  paragraphs={[
    "At Fooran Technologies, our expertise in embedded systems enables businesses to design and develop intelligent, reliable, and efficient hardware-software solutions. From IoT devices to real-time control systems, we ensure seamless integration and optimal performance.",
    "Choose Fooran Technologies for a partnership that goes beyond traditional engineering. We specialize in firmware development, system optimization, and custom embedded solutions tailored to your unique requirements. Let us help you create smart, connected devices that drive innovation and operational excellence."
  ]}
/>

    </div>
  )
}

export default EmbedIns
