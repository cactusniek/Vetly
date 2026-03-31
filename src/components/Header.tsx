import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo, MenuIcon, CircleSmall } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/header.scss'

export default function Header() {
    const [showNav, setShowNav] = useState(false)
    // if openNav = true page must not be scrollable
    // if screensize goes below ... setOpenNav(false)

    return (
        <div className="header">
            <div onClick={() => setShowNav(true)} className="container_header">
                <div className="container_top">
                    <div className="container_logo">
                        <NavLink to={'/'}>
                            <img alt="Vetly" src={Logo} className="image_Logo" />
                        </NavLink>

                        <div
                            onClick={e => {
                                e.stopPropagation()
                                setShowNav(prev => !prev)
                            }}
                            className="button_menu"
                        >
                            <img src={MenuIcon} className={`icon_Menu ${showNav ? 'rotate' : ''}`} />
                        </div>

                        <NavLink to={'/login'} className="button_login">
                            Login
                        </NavLink>
                    </div>
                </div>

                {/* make it like in Footer.tsx */}
                <div className={`nav_mobile ${showNav ? 'show' : ''}`}>
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
