import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import TalkUsModel from "../../Components/TalkUsModel"; // Correct import
import Topbar from '../../Components/Layout/Topbar'
import BuildMain from '../../Components/BuildBox/BuildMain'
import BuildServ from '../../Components/BuildBox/BuildServ'
import Bottom from '../../Components/Home/Bottom'
import Footer from '../../Components/Layout/Footer'
import BuildIns from '../../Components/BuildBox/BuildIns'
import Banner from '../../Components/Layout/Banner'

const BuildBox = () => {
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
      />      <BuildMain/>
      <BuildServ/>
      <BuildIns/>
  
      <Bottom/>
          <Banner/>
      <Footer/>
    </div>
  )
}

export default BuildBox
