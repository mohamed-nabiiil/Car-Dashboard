import React from 'react'
import Router from '../routes/Router'
import SideBar from '../SideBar/SideBar'
import TopNav from '../TopNav/TopNav'

const Layout = () => {
  return (
    <div className="layout" >
        <SideBar/>
        <div className="main-layout" >
           <TopNav/>
           <div className="content" > 
           <Router/>
        </div>
        </div>
        
      
    </div>
  )
}

export default Layout
