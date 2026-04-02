import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { routesAtom } from '../global/atoms/atoms'

import { Logo, MenuIcon, CircleSmall, Divider } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/header.scss'

export default function Header() {
    const [routes] = useAtom(routesAtom)

    // make this global?
    const [showNav, setShowNav] = useState(false)
    // if openNav = true page must not be scrollable
    // if screensize goes below ... setOpenNav(false)

    return (
        <div className="header">
            <div onClick={() => setShowNav(true)} className="container_header">
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
                </div>

                <div className={`navigation_mobile ${showNav ? 'show' : ''}`}>
                    {routes.map(({ path, label }) => (
                        <NavLink key={label} to={path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
                            {label}
                        </NavLink>
                    ))}
                </div>

                <div className="navigation_desktop">
                    <img src={CircleSmall} className="icon_CircleSmall" />

                    <div className="navigation">
                        {routes.map(({ path, label }, index) => (
                            <div key={label} className="navigation_route">
                                <NavLink to={path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
                                    {label}
                                </NavLink>
                                {index < routes.length - 1 && <img src={Divider} className="divider" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        // <div className="logo">
        //                             <NavLink to={'/'}>
        //                                 <img alt="Vetly" src={Logo} className="image_Logo" />
        //                             </NavLink>
        //                         </div>

        //                         <img src={CircleSmall} className="icon_CircleSmall" />

        //                         <div className="navigation">
        //                             {routes.map(({ path, label }, index) => (
        //                                 <div key={label} className="navigation_route">
        //                                     <NavLink to={path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
        //                                         {label}
        //                                     </NavLink>
        //                                     {index < routes.length - 1 && <img src={Divider} className="divider" />}
        //                                 </div>
        //                             ))}
        //                         </div>
    )
}
