import React from 'react'
import AboutSection from '../../Components/AboutSection'

const EcadMain = () => {
  return (
    <div>
      <AboutSection
  brandDark="#Manzoor"
  brandAccent="Labs"
  title="We Engineer"
  highlight="Professional ECAD Solutions"
  description="We design high-quality electronic schematics and PCB layouts with precision, ensuring signal integrity, optimized routing, and reliable hardware performance for real-world applications."
  imageSrc="/Image/ECAD.png"
  imageAlt="ECAD Design"
/>

{/* Extra line below description */}
<p className="about-extra-text" style={{ textAlign: "center", marginTop: "1rem" }}>
  From concept to production-ready boards, we transform ideas into efficient, manufacturable electronic designs using industry-standard ECAD tools and best practices.
</p>

    </div>
  )
}

export default EcadMain
