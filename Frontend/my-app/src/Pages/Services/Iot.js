import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import Topbar from '../../Components/Layout/Topbar'
import MainIot from '../../Components/IOT.js/MainIot'
import IotServices from '../../Components/IOT.js/IotServices'
import IoTInsights from '../../Components/IOT.js/IoTInsights'
import Bottom from '../../Components/Home/Bottom'
import Footer from '../../Components/Layout/Footer'
import Banner from '../../Components/Layout/Banner'
import TalkUsModel from "../../Components/TalkUsModel"; // Correct import
const Iot = () => {
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
    <MainIot/>
    <IotServices/>
    <IoTInsights/>

    <Bottom/>
        <Banner/>
    <Footer/>
    </div>
  )
}

export default Iot
