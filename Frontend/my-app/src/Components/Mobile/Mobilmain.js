import React from 'react'
import AboutSection from '../../Components/AboutSection'  // <-- path adjust kar lena

const Mobilmain = () => {
  return (
   <div>
     <AboutSection
      brandDark="#Manzoor"
      brandAccent="Labs"
      title="We Build"
      highlight="Mobile Apps"
      description="Our mission is to turn innovative concepts into user-friendly mobile applications that engage users and drive business growth."
      imageSrc="/Image/mobilmain.png"
      imageAlt="About Us"
    />
     <p className="about-extra-text" style={{ textAlign: "center", marginTop: "1rem" }}>
   Smarter apps, smarter experiences.
We build fast, intuitive mobile applications that connect seamlessly with IoT and cloud systems—delivering smooth performance anytime, anywhere.
      </p> 
   </div>
    
  )
}

export default Mobilmain
