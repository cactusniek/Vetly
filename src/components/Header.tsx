import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo, MenuIcon, CircleSmall } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/header.scss'

export default function Header() {
    const [openNav, setOpenNav] = useState(false)
    // if openNav = true page must not be scrollable

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation()
        setOpenNav(prev => !prev)
    }

    const handleHeaderClick = () => {
        if (!openNav) {
            setOpenNav(true)
        }
    }

    return (
        <div className="header">
            <div onClick={handleHeaderClick} className="container_header">
                <div className="container_top">
                    <div className="container_logo">
                        <img alt="Vetly" src={Logo} className="image_Logo" />
                    </div>

                    <div onClick={handleToggle} className="button_menu">
                        <img src={MenuIcon} className={`icon_Menu ${openNav ? 'rotate' : ''}`} />
                    </div>

                    <NavLink to={'/login'} className="button_login">
                        Login
                    </NavLink>
                </div>

                <div className={`nav_mobile ${openNav ? 'open' : ''}`}>
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/contact', label: 'Contact' },
                        { path: '/ToS', label: 'ToS' },
                        { path: '/login', label: 'Login' },
                    ].map(({ path, label }) => (
                        <NavLink key={label} to={path} className={({ isActive }) => `nav_route ${isActive ? ' active' : ''}`}>
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}
