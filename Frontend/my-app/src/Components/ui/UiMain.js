import React from 'react'

import AboutSection from '../../Components/AboutSection'

const UiMain = () => {
  return (
    <div>
    <AboutSection
  brandDark="#Manzoor"
  brandAccent="Labs"
  title="We Design"
  highlight="Intuitive UI/UX Experiences"
  description="We craft user-centric interfaces that blend aesthetics with functionality—ensuring seamless interactions, clear visual communication, and smooth workflows across all devices."
  imageSrc="/Image/tempsnip.png"
  imageAlt="UI/UX Design"
/>

{/* Extra line below description */}
<p className="about-extra-text" style={{ textAlign: "center", marginTop: "1rem" }}>
  Our goal is to turn complex systems into simple, usable, and visually engaging experiences through thoughtful design and modern UX practices.
</p>
    </div>
  )
}

export default UiMain
