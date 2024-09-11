"use client"
import React from 'react'
import TestSeries from '@/app/component/TestSeries'
import SideNavBar from '@/app/component/Sidebar'
import VideoCall from '@/app/component/Videocall'

function page() {
  return (
    <div>
      
      <div className="flex min-h-screen">
    
    <SideNavBar/>
    
    <div className="flex-1 p-8 bg-gradient-to-b from-blue-200 to-green-200">
      <VideoCall/>
    </div>
  </div>
    </div>
  )
}
export default page
