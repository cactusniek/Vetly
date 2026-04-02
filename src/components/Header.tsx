import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { routesAtom } from '../global/atoms/atoms'

import { Logo, MenuIcon, CircleSmall, Divider } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/header.scss'

export default function Header() {
    const [routes] = useAtom(routesAtom)

    const [showNav, setShowNav] = useState(false)
    const [dissapearNav, setdissapearNav] = useState(false)

    // if openNav = true page must not be scrollable - so make this variable a atom & pass it to global.css
    // if screensize goes below ... setOpenNav(false)

    return (
        <div className="header">
            <div onClick={() => setShowNav(true)} className="header_mobile">
                <div className="container_top">
                    <NavLink to={'/'} className="anchor_Logo">
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

                <div className={`navigation ${showNav ? 'show' : ''}`}>
                    <div className="container_navigation">
                        {routes.map(({ path, label }) => (
                            <NavLink key={label} to={path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            <div className="header_desktop">
                <div className="container_navigation">
                    <NavLink to={'/'}>
                        <img alt="Vetly" src={Logo} className="image_Logo" />
                    </NavLink>

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

        // <div className="header">
        //     <div onClick={() => setShowNav(true)} className="container_header">
        //         <div className="container_logo">
        //             <NavLink to={'/'}>
        //                 <img alt="Vetly" src={Logo} className="image_Logo" />
        //             </NavLink>

        //             <div
        //                 onClick={e => {
        //                     e.stopPropagation()
        //                     setShowNav(prev => !prev)
        //                 }}
        //                 className="button_menu"
        //             >
        //                 <img src={MenuIcon} className={`icon_Menu ${showNav ? 'rotate' : ''}`} />
        //             </div>
        //         </div>

        //         <div className={`navigation_mobile ${showNav ? 'show' : ''}`}>
        //             {routes.map(({ path, label }) => (
        //                 <NavLink key={label} to={path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
        //                     {label}
        //                 </NavLink>
        //             ))}
        //         </div>

        //         <div className="navigation_desktop">

        //             <div className="navigation">
        //                 {routes.map(({ path, label }, index) => (
        //                     <div key={label} className="navigation_route">
        //                         <NavLink to={path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
        //                             {label}
        //                         </NavLink>
        //                         {index < routes.length - 1 && <img src={Divider} className="divider" />}
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
