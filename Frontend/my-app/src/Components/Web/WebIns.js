import React from 'react'
import IntroSection from '../../Components/IntroSection'

const WebIns = () => {
  return (
    <div>
        <IntroSection
      heading={{
        beforeHighlight: "Partner with",
        middle: "for",
      }}
      highlights={{
        first: "Fooran Technologies",
        second: "Web Development Excellence",
      }}
      paragraphs={[
        "At Fooran Technologies, our expertise in web development enables businesses to build scalable, secure, and high-performance applications. From responsive front-end interfaces to robust backend systems, we ensure your digital presence is seamless and efficient.",
        "Choose Fooran Technologies for a partnership that goes beyond simple coding. We specialize in modern frameworks, API-driven architectures, and innovative solutions tailored to your business needs. Let us transform your ideas into functional, intuitive web applications that drive results."
      ]}
    />
    </div>
  )
}

export default WebIns
