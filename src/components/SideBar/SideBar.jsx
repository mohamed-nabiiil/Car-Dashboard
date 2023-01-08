import React from 'react'
import { NavLink } from 'react-router-dom'
import  navLinks from '../../assets/dummy-data/navLinks'
import './sidebar.css'
const SideBar = () => {
  return (
    <div className="sidebar" >
        <div className="side-top" >
            <h2> <span> <i class="ri-taxi-line"></i></span> Motiv.</h2>
        </div>
        <div className="sidebar-content" >
            <div className="menu" >
                <ul className="nav-list">
                    {
                        navLinks.map((item,index)=>(
                            <il className="nav-item" key={index} >
                      <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav_active nav_link ' : 'nav_link'} >  <i className={item.icon} ></i>  {item.display} </NavLink>
                    </il>
                        ))
                    }
                </ul>
            </div> 
            <div className="sidebar-bottom">
            <span> <i class="ri-settings-2-line"></i> Settings </span> <br></br>
                <span> <i class="ri-logout-box-line"></i> Logout </span>
            </div>

        </div>
      
    </div>
  )
}

export default SideBar
