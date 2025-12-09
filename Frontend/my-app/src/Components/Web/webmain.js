import React from 'react'
import AboutSection from '../../Components/AboutSection'   // <-- adjust path

const WebMain = () => {
  return (
    <div>
      <AboutSection
        brandDark="Manzoor"
        brandAccent="Labs"
        title="We Build"
        highlight="Web Applications"
        description="We create powerful and scalable web applications tailored for modern businesses."
        imageSrc="/Image/WEB.png"
        imageAlt="Web App"
      />
        <p className="about-extra-text" style={{ textAlign: "center", marginTop: "1rem" }}>
   We build modern, high-performance web applications powered by the MERN stack. From intuitive user interfaces to scalable backend architectures, we create fast, secure, and reliable digital experiences. 
      </p> 
    </div>
  )
}

export default WebMain
