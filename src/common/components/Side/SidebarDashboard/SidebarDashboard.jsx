import { Button, Checkbox, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useEffect, useState } from 'react'
import { Content } from 'antd/es/layout/layout'

import { RxDashboard } from 'react-icons/rx'
import { FiLayers, FiLogOut, FiPackage, FiSettings, FiUser, FiUsers } from 'react-icons/fi'
import { PiPackage } from 'react-icons/pi'
import { GiHandTruck } from 'react-icons/gi'
import { RiCoupon2Line } from 'react-icons/ri'
import { AiFillCaretDown, AiOutlinePicture, AiOutlineWallet } from 'react-icons/ai'
import { BiHelpCircle, BiSolidTrashAlt } from 'react-icons/bi'

import { BsFillPencilFill, BsPencil } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'
import { MenuUnfoldOutlined, MenuFoldOutlined, DashOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../Logos/Logo'
import Theme from '../../Themes/Theme'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './SidebarDashBoard.css'

function SidebarDashboard() {
    return (
        <div className="SidebarDashboard">
            <div className="sider">
                <aside className="theme">
                    <Logo></Logo>
                    <Theme></Theme>
                </aside>
                <aside className="menu">
                    <div className="mainMenu">
                        <NavLink to="maindashboard" className="menuItem">
                            <RxDashboard className='menuIcon' />
                            <p className="menuContent">Dashboard</p> 
                        </NavLink>
                        <NavLink to="add" className="menuItem">
                            <PiPackage className='menuIcon'  />
                            <p className="menuContent">Products</p>
                        </NavLink>
                       
                       
                        <Link to="/dashboard/orders" className="menuItem">
                            <GiHandTruck className='menuIcon'  />
                            <p className="menuContent">Orders</p>
                        </Link>
                        <Link to="/dashboard/coupon" className="menuItem">
                            <RiCoupon2Line className='menuIcon'  />
                            <p className="menuContent">Coupon</p>
                        </Link>
                        <Link to="/dashboard/banner" className="menuItem">
                            <AiOutlinePicture className='menuIcon'  />
                            <p className="menuContent">Banner</p>
                        </Link>
                        <Link to="/dashboard/transaction" className="menuItem">
                            <AiOutlineWallet className='menuIcon'  />
                            <p className="menuContent">Transaction</p>
                        </Link>
                    </div>
                    <div className="mainMenu">
                        <h1 className="menuTitle">USER MANAGEMENT</h1>
                        <Link to="/dashboard/manage-admins" className="menuItem">
                            <FiUsers />
                            <p className="menuContent">Manage Admins</p>
                        </Link>
                        <Link to="/dashboard/customers" className="menuItem">
                            <FiUser />
                            <p className="menuContent">Customers</p>
                        </Link>
                    </div>
                    <div className="mainMenu">
                        <h1 className="menuTitle">OTHERS</h1>
                        <section className="menuItem">
                            <FiSettings />
                            <div className="menuContent">Settings</div>
                        </section>
                        <section className="menuItem">
                            <BiHelpCircle />
                            <div className="menuContent">Helps</div>
                        </section>
                        <section className="menuItem">
                            <FiLogOut />
                            <div className="menuContent">Logout</div>
                        </section>
                    </div>
                </aside>
                
            </div>
            <Outlet />
          
        </div>
    );
}

export default SidebarDashboard;
