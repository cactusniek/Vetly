import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { routesAtom, showNavAtom, disappearNavAtom } from '../global/atoms/atoms'

import { Logo, MenuIcon, CircleSmall, Divider } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/header.scss'

export default function Header() {
    const [routes] = useAtom(routesAtom)

    // fix for wider screens, set a max-width to container
    // draggable="false" on elements, maybe?

    // if showNav === true page must not be scrollable - so make this variable a atom & pass it to global.css
    const [showNav, setShowNav] = useAtom(showNavAtom)
    const [disappearNavMobile, setDisappearNavMobile] = useAtom(disappearNavAtom)

    const [animation, setAnimation] = useState<Boolean>()

    // when page has hit bottom, make setHitBottom(true) if hitBottom === true then setAnimation = false
    const [hitBottom, setHitBottom] = useState<Boolean>()

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 740) {
                setShowNav(false)
            }
        }

        setAnimation(true)

        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
                <div className="container_top">
                    <NavLink to={'/'} className="anchor_Logo">
                        <img alt="Vetly" src={Logo} className="image_Logo" />
                    </NavLink>

                    <div className={`container_animation ${animation ? 'animate' : ''}`}>
                        <img src={CircleSmall} className="icon_CircleSmall" />

                        <div className="navigation">
                            {routes.map(({ path, label }, index) => (
                                <div key={label} className="container_route">
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
        </div>
    )
}
