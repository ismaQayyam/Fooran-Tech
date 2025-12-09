import React from 'react'
import AboutSection from '../../Components/AboutSection'

const BuildMain = () => {
  return (
    <div>
      <AboutSection
  brandDark="#Manzoor"
  brandAccent="Labs"
  title="We Build"
  highlight="Custom Hardware Enclosures"
  description="We design and develop robust, well-engineered enclosure solutions that protect electronics, improve usability, and enhance the overall product experience—from concept to functional prototype."
 imageSrc="/Image/BUILDbOX.png"
  imageAlt="Build Box Enclosure"
/>

{/* Extra line below description */}
<p className="about-extra-text" style={{ textAlign: "center", marginTop: "1rem" }}>
  Whether it's a compact IoT housing or a fully customized device enclosure, we create durable, practical, and visually refined build boxes tailored to your hardware needs.
</p>

    </div>
  )
}

export default BuildMain
