import SessionDetails from '@/app/component/SessionDetails'
import SideNavBar from '@/app/component/Sidebar'
import React from 'react'

function page() {
  return (
    
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideNavBar />
      
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gradient-to-b from-blue-200 to-green-200">
        <SessionDetails />
      </div>
    </div>
          
  )
}

export default page
