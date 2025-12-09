import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import Career from '../Pages/Career'
import Footer from '../Components/Layout/Footer'
import Services from '../Pages/Services'
import Mobile from '../Pages/Services/Mobile'
import Web from '../Pages/Services/Web'
import Iot from '../Pages/Services/Iot'
import Embd from '../Pages/Services/Embd'
import Uiux from '../Pages/Services/Uiux'
import Ecad from '../Pages/Services/Ecad'
import ApplyPage from '../Pages/ApplyPage'
import Contact from '../Pages/Contact'
import BuildBox from '../Pages/Services/BuildBox'



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/services/mbl" element={<Mobile />} />
      <Route path="/services/web" element={<Web />} />
      <Route path="/services/iot" element={<Iot />} />
      <Route path="/services/emb" element={<Embd />} />
      <Route path="/services/ui" element={<Uiux/>} />
      <Route path="/services/ecd" element={<Ecad />} />
      <Route path="/services/build" element={<BuildBox />} />
        <Route path='/career' element={<Career/>}/>

<Route path="/apply" element={<ApplyPage />} />
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
