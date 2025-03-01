import React from 'react'
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
const about = () => {
  return (
    <div>
       <Navbar/>
        <Heroimg2 heading="ABOUT ME." text="Web dev based in Los Angeles, CA."/>
       <Footer/>
    </div>
  )
}

export default about
