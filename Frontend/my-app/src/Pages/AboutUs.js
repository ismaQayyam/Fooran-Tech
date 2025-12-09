import React, { useEffect, useState } from 'react'
import Topbar from '../Components/Layout/Topbar'
import MainSec from '../Components/About Us/MainSec'
import WhatWeDo from '../Components/About Us/WhatWeDo'
import EmbeddedServices from '../Components/About Us/EmbeddedServices'
import Platform from '../Components/About Us/Platform'
import Overview from '../Components/About Us/Overview'
import Services from '../Components/About Us/Services'
import Bottom from "../../src/Components/Home/Bottom"
import Footer from "../../src/Components/Layout/Footer"
import Banner from '../Components/Layout/Banner'
import Loader from '../Components/Loader'
import TalkUsModel from "../Components/TalkUsModel"; // Correct import
const AboutUs = () => {
   const [loading, setLoading] = useState(true)
    const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000) // 3 seconds loader
      return () => clearTimeout(timer)
    }, [])
  
    if (loading) return <Loader />  // Show loader first
  
  return (
    <div>
     <Topbar onTalkClick={() => setIsTalkModalOpen(true)} />

      <TalkUsModel
        isOpen={isTalkModalOpen}
        onClose={() => setIsTalkModalOpen(false)}
      />

      <MainSec/>
      <WhatWeDo/> 
      <EmbeddedServices/>
      <Platform/>
      <Overview/>
      <Services/>

      <Bottom/>
            <Banner/>
      <Footer/>
    </div>
  )
}

export default AboutUs
