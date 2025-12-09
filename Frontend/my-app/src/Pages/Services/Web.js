import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import Topbar from '../../Components/Layout/Topbar'
import WebMain from '../../Components/Web/webmain'
import WebServ from '../../Components/Web/WebServ'
import WebIns from '../../Components/Web/WebIns'
import Bottom from '../../Components/Home/Bottom'
import Footer from '../../Components/Layout/Footer'
import Banner from '../../Components/Layout/Banner'
import TalkUsModel from "../../Components/TalkUsModel"; // Correct import

const Web = () => {
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
      <WebMain/>
      <WebServ/>
      <WebIns/>
  
      <Bottom/>
          <Banner/>
      <Footer/>
    </div>
  )
}

export default Web
