"use client"
import React from 'react'
import SideNavBar from '../component/Sidebar'
import SessionDetails from '../component/SessionDetails'
import Dashboard from '../component/DashHero'
import TestSeries from '../component/TestSeries'

function page() {
  return (
    <div>
      
      <div className="flex min-h-screen">
    
    <SideNavBar />
    
    <div className="flex-1 p-8 bg-gradient-to-b from-blue-200 to-green-200">
      <Dashboard/>
    </div>
  </div>
    </div>
  )
}
export default page
