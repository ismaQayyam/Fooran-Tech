import React from 'react'
import "../../Style/About Us/mainsec.css"

const MainSec = () => {
  return (
    <section className="about-section">
      <div className="about-content">
      
        <div className="about-text">
               <span style={{ color: "#000", fontWeight: "700" }}>#Manzoor</span>{" "}
        <span style={{ color: "#ff5a2c", fontWeight: "700" }}>Labs</span>
   
          <h2> We Transform Concepts <span style={{color:"#ff5a2c", fontWeight:"bold"}}>into Tangible Products</span></h2>
          <p>
            Our mission is to turn innovative ideas into real, functional solutions 
            that impact people and businesses.
          </p>
        </div>

        <div className="about-image">
          <img src='/Image/Home-page-banner-3-scaled-1.webp' alt="About Us" style={{}}/>
        </div>

      </div>
    </section>
  )
}

export default MainSec
