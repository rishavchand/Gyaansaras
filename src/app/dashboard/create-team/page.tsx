import TeamForm from '@/app/component/CreateTeam'
import SideNavBar from '@/app/component/Sidebar'
import React from 'react'

function page() {
  return (
    <div className="flex min-h-screen">
    
      <SideNavBar />
      
      <div className="flex-1 p-8 bg-gradient-to-b from-blue-200 to-green-200">
        <TeamForm/>
      </div>
    </div>
  )
}

export default page
