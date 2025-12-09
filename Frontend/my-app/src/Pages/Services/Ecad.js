import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import Topbar from '../../Components/Layout/Topbar'
import EcadMain from '../../Components/ECAD/EcadMain'
import EcadServ from '../../Components/ECAD/EcadServ'
import Bottom from '../../Components/Home/Bottom'
import Footer from '../../Components/Layout/Footer'
import EcadIns from '../../Components/ECAD/EcadIns'
import Banner from '../../Components/Layout/Banner'
import TalkUsModel from "../../Components/TalkUsModel"; // Correct import
const Ecad = () => {
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
      <EcadMain/>
      <EcadServ/>
      <EcadIns/>
   
      <Bottom/>
         <Banner/>
      <Footer/>
    </div>
  )
}

export default Ecad
