import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import { Logo } from '@/assets'

import '@/styles/global.scss'
import './screenwarning.scss'

export default function ScreenWarning() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    return (
        <div className="screenwarning">
            <div className="container_screenwarning">
                <NavLink to={'/'} className="NavLink_Logo">
                    <img alt="Vetly" src={Logo} className="image_Logo" />
                </NavLink>

                <p className="text_screenwarning">{locale.screenwarning.message}</p>
            </div>
        </div>
    )
}
