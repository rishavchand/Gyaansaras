"use client"
import React from 'react'
import SideNavBar from '../component/Sidebar'
import SessionDetails from '../component/SessionDetails'
import Dashboard from '../component/DashHero'
import TestSeries from '../component/TestSeries'
import Chatbot from '../component/Chatbot'

function page() {
  return (
    <div>
      
      <div className="flex min-h-screen">
    
    <SideNavBar />
    
    <div className="flex-1 p-8 bg-gradient-to-b from-blue-200 to-green-200">
      <Dashboard/>
      <Chatbot/>
    </div>
  </div>
    </div>
  )
}
export default page
