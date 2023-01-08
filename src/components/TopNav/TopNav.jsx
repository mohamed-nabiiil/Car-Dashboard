import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../../assets/images/profile-02.png'
import './topnav.css'
const TopNav = () => {
  return (
    <div className="topnav" >
        <div className="topnav-wrapper">
            <div className="search-box">
            <span><i class="ri-search-line"></i></span>
                <input type="text"  placeholder="Search or type"/>
                
            </div>
            <div className="topnav-right">
                <span className="notification" ><i class="ri-notification-3-line"></i>
                <span className="badge" >1</span>
                </span>
                <div className="profile">
                  <Link to='/settings' > <img src={profileImg} alt="" />  </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TopNav
