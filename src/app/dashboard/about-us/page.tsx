import AboutUs from '@/app/component/Aboutus'
import Chatbot from '@/app/component/Chatbot'
import SideNavBar from '@/app/component/Sidebar'
import React from 'react'

function page() {
  return (
    <div className="flex min-h-screen">
    
    <SideNavBar />
    
    <div className="flex-1 p-8 bg-gradient-to-b from-blue-200 to-green-200">
      <AboutUs/>
      <Chatbot/>
    </div>
  </div>
  )
}

export default page
