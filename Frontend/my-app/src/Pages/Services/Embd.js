import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import Topbar from '../../Components/Layout/Topbar'
import Mainsect from '../../Components/Embeded.js/Mainsect'
import ServicesSection from '../../Components/Embeded.js/ServicesSection'
import Bottom from '../../Components/Home/Bottom'
import Footer from '../../Components/Layout/Footer'
import EmbedIns from '../../Components/Embeded.js/EmbedIns'
import Banner from '../../Components/Layout/Banner'
import TalkUsModel from "../../Components/TalkUsModel"; // Correct import

const Embd = () => {
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
      <Mainsect/>
      <ServicesSection/>
      <EmbedIns/>

      <Bottom/>
            <Banner/>
      <Footer/>
    </div>
  )
}

export default Embd
