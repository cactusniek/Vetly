import { type MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { languageAtom, showNavAtom } from '@/global/atoms/atoms'

import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'

import { locales } from '@/global/translations'

import { type Route } from '@/global/types/types'

import { CircleSmall, Divider, Logo, MenuIcon } from '@/assets'

import '@/styles/global.scss'
import './header.scss'

export default function Header() {
    const [language] = useAtom(languageAtom)
    const [showNav, setShowNav] = useAtom(showNavAtom)

    const locale = locales[language]

    const routes: Route[] = [
        { label: locale.header.home, path: '/' },
        { label: locale.header.search, path: '/search' },
    ]

    function toggleShowNav() {
        setShowNav(prev => !prev)
    }

    function openNav() {
        if (!showNav) setShowNav(true)
    }

    function keepNav(e: MouseEvent) {
        e.stopPropagation()
    }

    function closeNav() {
        setShowNav(false)
    }

    return (
        <div className="header">
            <div className="header_mobile">
                <div onClick={openNav} className="container_top">
                    <NavLink onClick={keepNav} to={'/'} className="link_Logo">
                        <img alt="image_Logo" src={Logo} className="image_Logo" />
                    </NavLink>

                    <button onClick={toggleShowNav} type="button" className="button_menu">
                        <MenuIcon className={`icon_Menu ${showNav ? 'rotate' : ''}`} />
                    </button>
                </div>

                <div className={`container_navigation ${showNav ? 'show' : ''}`}>
                    {routes.map(route => (
                        <NavLink key={route.path} onClick={closeNav} to={route.path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
                            {route.label}
                        </NavLink>
                    ))}
                </div>
            </div>

            <div className="header_desktop">
                <div onClick={openNav} className="container_top">
                    <NavLink onClick={keepNav} to={'/'} className="link_Logo">
                        <img alt="image_Logo" src={Logo} className="image_Logo" />
                    </NavLink>

                    <div className="container_navigation">
                        <CircleSmall className="icon_CircleSmall" />

                        <div className="container_routes">
                            {routes.map((route, index) => (
                                <div key={route.path} className="container_route">
                                    <NavLink to={route.path} className={({ isActive }) => `route ${isActive ? 'active' : ''}`}>
                                        {route.label}
                                    </NavLink>

                                    {index < routes.length - 1 && <Divider className="divider" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container_switchlanguage">
                <SwitchLanguage />
            </div>
        </div>
    )
}
