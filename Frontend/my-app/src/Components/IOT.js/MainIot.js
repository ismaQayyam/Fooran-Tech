import React from 'react'
import "../../Style/Iot/mainiot.css"
import AboutSection from '../../Components/AboutSection'   // <-- path apni structure ke hisaab se adjust karna

const MainIot = () => {
  return (
<div>
      <AboutSection
      brandDark="#Manzoor"
      brandAccent="Labs"
      title="We Transform Concepts"
      highlight="into Tangible Products"
      description="Our mission is to turn innovative ideas into real, functional solutions that impact people and businesses."
      imageSrc="/Image/IOt.png"
      imageAlt="About Us"
    />
    <p className="about-extra-text" style={{ textAlign: "center", marginTop: "1rem" }}> Smarter devices, smarter connectivity.
We design and build IoT systems that collect, process, and communicate data in real time—turning ordinary hardware into intelligent, connected solutions that work reliably anywhere. </p>
</div>
  )
}

export default MainIot
