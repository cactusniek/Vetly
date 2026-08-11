import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { languageAtom, showNavAtom } from '@/global/atoms/atoms'

import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'

import { locales } from '@/global/translations'

import { type HeaderProps, type Route } from '@/global/types/types'

import { CircleSmall, Divider, Logo, MenuIcon } from '@/assets'

import '@/styles/global.scss'
import './header.scss'

export default function Header({ intro }: HeaderProps) {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    const [showNav, setShowNav] = useAtom(showNavAtom)

    const routes: Route[] = [
        { label: locale.header.home, path: '/' },
        { label: locale.header.search, path: '/search' },
    ]

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 740px)')

        const handleBreakpoint = (e: MediaQueryListEvent) => {
            if (e.matches) setShowNav(false)
        }

        desktop.addEventListener('change', handleBreakpoint)
        return () => desktop.removeEventListener('change', handleBreakpoint)
    }, [setShowNav])

    function toggleShowNav() {
        setShowNav(prev => !prev)
    }

    function closeNav() {
        setShowNav(false)
    }

    return (
        <div className={`header ${intro ? 'intro' : ''}`}>
            <div className="header_mobile">
                <div className="container_top">
                    <NavLink to={'/'} className="link_Logo">
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
                <div className="container_top">
                    <NavLink to={'/'} className="link_Logo">
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

            <SwitchLanguage />
        </div>
    )
}
