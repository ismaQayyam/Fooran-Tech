import React, { useEffect, useState } from 'react'
import Topbar from '../Components/Layout/Topbar'
import Main from '../Components/Contact/Main'
import Bottom from '../Components/Home/Bottom'
import Locations from '../Components/Contact/Locations'
import Footer from '../Components/Layout/Footer'
import Loader from '../Components/Loader'
import TalkUsModel from "../Components/TalkUsModel"; // Correct import

const Contact = () => {
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
      <Main/>
      <Bottom/>
      <Locations/>
      <Footer/>
    </div>
  )
}

export default Contact
