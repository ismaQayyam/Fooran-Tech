import React from 'react'
import IntroSection from '../../Components/IntroSection'

const Mobileins = () => {
  return (
<IntroSection
  heading={{
    beforeHighlight: "Partner with",
    middle: "for",
  }}
  highlights={{
    first: "Fooran Technologies",
    second: "Mobile App Solutions",
  }}
  paragraphs={[
    "At Fooran Technologies, our mobile app development expertise helps businesses create intuitive, high-performance applications for both iOS and Android. We focus on user-centric design, seamless functionality, and scalable architecture to ensure your app stands out in a competitive market.",
    "Choose Fooran Technologies for a partnership that goes beyond just coding. We specialize in cross-platform frameworks, native app development, and tailored solutions that meet your unique business needs. Let us turn your ideas into engaging mobile experiences that drive user engagement and growth."
  ]}
/>

  )
}

export default Mobileins
