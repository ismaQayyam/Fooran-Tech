import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import Mobilmain from '../../Components/Mobile/Mobilmain'
import Topbar from '../../Components/Layout/Topbar'
import MobileService from '../../Components/Mobile/MobileService'
import Mobileins from '../../Components/Mobile/Mobileins'
import Bottom from '../../Components/Home/Bottom'
import Footer from '../../Components/Layout/Footer'
import Banner from '../../Components/Layout/Banner'
import TalkUsModel from "../../Components/TalkUsModel"; // Correct import
const Mobile = () => {
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
      <Mobilmain/>
      <MobileService/>
      <Mobileins/>
     
      <Bottom/>
       <Banner/>
      <Footer/>
    </div>
  )
}

export default Mobile
