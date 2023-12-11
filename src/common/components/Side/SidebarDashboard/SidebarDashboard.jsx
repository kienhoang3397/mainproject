import React from 'react'

import { PiPackage } from 'react-icons/pi'
import { RxDashboard } from 'react-icons/rx'

import { NavLink, Outlet } from 'react-router-dom'
import Theme from '../../Themes/Theme'
import './SidebarDashBoard.css'

function SidebarDashboard() {

    return (
      <div className="SidebarDashboard">
        <div className="sider">
          <aside className="theme">
          
            <Theme></Theme>
          </aside>
          <aside className="menu">
            <div className="mainMenu">
              <NavLink to="maindashboard" className="menuItem">
                <RxDashboard className="menuIcon" />
                <p className="menuContent">Dashboard</p>
              </NavLink>
              <NavLink to="add" className="menuItem">
                <PiPackage className="menuIcon" />
                <p className="menuContent">Products</p>
              </NavLink>

            
            </div>
          </aside>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
}

export default SidebarDashboard;
