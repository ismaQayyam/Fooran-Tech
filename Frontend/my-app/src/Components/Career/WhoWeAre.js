import React from 'react'
import "../../Style/Career/WhoWeAre.css"

const WhoWeAre = () => {
  return (
  <section className="who-section">
      <div className="who-container">

        {/* Image */}
     
        {/* Text Content */}
        <div className="who-text">
        <h2 className="who-title">
  <span className="who-highlight">Who</span> We Are
</h2>


         <p className="who-para">
  Fooran Technologies is a leading innovation-driven software company delivering
  smart, scalable, and future-ready digital solutions. We specialize in modern
  web technologies, IoT integrations, cloud platforms, and real-time data
  systems that transform ideas into high-impact products.
</p>

<p className="who-para">
  Over the years, we’ve become a trusted partner for businesses across multiple
  industries by providing end-to-end product development, seamless system
  integration, and long-term technology support for growing product lines.
</p>


          <a href="#" className="who-link">
            Know Us Better →
          </a>
        </div>
           <div className="who-image-wrapper">
          <img
            src="/Image/career 1.webp"
            alt="Who We Are"
            className="who-image"
          />
        </div>


      </div>
    </section>
  )
}

export default WhoWeAre
