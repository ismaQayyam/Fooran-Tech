import React from 'react'
import "../../Style/Banner.css"
import GlobalButton from '../GlobalButton'

const Banner = () => {
  return (
 <div className='bnr'>
      <div className="cta-banner">
      <div className="cta-container">
        <p className="cta-text">
          Launch your innovative solution quickly and <span className="cta-bold">risk-free!</span>
        </p>

        <GlobalButton style={{ width: "120px", height: "35px", marginTop: "4px" ,borderRadius:"30px"}}> 
        Talk to Us
      </GlobalButton>
      </div>
    </div>
 </div>
  )
}

export default Banner
