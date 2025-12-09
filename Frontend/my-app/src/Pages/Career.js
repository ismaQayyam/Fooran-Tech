import React, { useEffect, useState } from 'react'
import Topbar from '../../src/Components/Layout/Topbar'
import CareerSection from '../Components/Career/CareerSection'
import CareerOpr from '../Components/Career/CareerOpr'
import WhoWeAre from '../Components/Career/WhoWeAre'
import LifeInFooran from '../Components/Home/LifeInFooran'
// import Employe from '../Components/Career/Employe'
import Facilities from '../Components/Career/Facilities'
import Footer from '../Components/Layout/Footer'
import Loader from '../Components/Loader'
import Banner from '../Components/Layout/Banner'
import TalkUsModel from "../Components/TalkUsModel"; // Correct import
import CEOMessage from '../Components/Career/CEOMessage'
const Career = () => {
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

      <CareerSection/>
      <CareerOpr/>
      <WhoWeAre/>
      <LifeInFooran/>
      <CEOMessage/>
      {/* <Employe/> */}
      <Facilities/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Career
