
import SideNavBar from '@/app/component/Sidebar'
import React from 'react'
import CareerPlanning from '@/app/component/CareerPlanning';
import Chatbot from '@/app/component/Chatbot';

function page() {
  return (
    <div className="flex min-h-screen">
    
    <SideNavBar />
    
    <div className="flex-1 p-8 bg-gray-900">
      <CareerPlanning/>
      <Chatbot/>
    </div>
  </div>
  )
}

export default page
