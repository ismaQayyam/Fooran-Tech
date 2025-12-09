import React from 'react'
import "../../Style/Embed/main.css"
import AboutSection from '../../Components/AboutSection' 

const Mainsect = () => {
  return (
    <div>
      <AboutSection
        brandDark="#Manzoor"
        brandAccent="Labs"
        title="We Build"
        highlight="Embedded Technologies"
        description="Our mission is to design and develop innovative embedded systems that connect devices, collect real-time data, and provide actionable insights for smarter solutions."
        imageSrc="/Image/embede.png"
        imageAlt="Embedded Technologies"
      />

      {/* Extra line below description */}
      <p className="about-extra-text" style={{ textAlign: "center", marginTop: "1rem" }}>
        Bringing innovative embedded solutions to life, we specialize in IoT and edge computing—transforming simple devices into smart, connected systems
      </p>
    </div>
  )
}

export default Mainsect
