import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import { type Route } from '@/global/types/types'

import { CircleSmall, Divider, Logo } from '@/assets'

import '@/styles/global.scss'
import './outro.scss'

const github = 'https://github.com/cactusniek'

export default function Outro() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    const routes: Route[] = [
        { label: locale.header.home, path: '/' },
        { label: locale.header.search, path: '/search' },
    ]

    const year = new Date().getFullYear()

    return (
        <div className="container_outro">
            <div className="container_nav">
                <NavLink to={'/'} className="link_Logo">
                    <img alt="image_Logo" src={Logo} className="image_Logo" />
                </NavLink>

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

            <div className="container_bottom">
                <span className="text_copyright">&copy; {year}</span>

                <CircleSmall className="icon_CircleSmall" />

                <div className="container_credits">
                    <span className="text_credit">{locale.sections.credits}</span>

                    <a href={github} target="_blank" rel="noopener noreferrer" className="anchor_credit">
                        Niek
                    </a>
                </div>
            </div>
        </div>
    )
}
