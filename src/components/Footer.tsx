import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo, LinkedinIcon, WhatsappIcon, MailIcon, CircleSmall, ArrowIcon, Divider } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/footer.scss'

export default function Footer() {
    const [routes] = useState([
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' },
        { label: 'ToS', path: '/ToS' },
        { label: 'Login', path: '/login' },
    ])

    const [socials] = useState({
        Linkedin: '#',
        Whatsapp: '#',
        Mail: '#',
        Github: 'https://github.com/cactusniek',
    })

    function getYear() {
        return new Date().getFullYear()
    }

    function handleSubscribe() {
        // this needs to call api.ts
        // then if success border green else red
    }

    return (
        <div className="footer">
            <div className="container_footer">
                <div className="container_top">
                    <div className="container_flex">
                        <div className="container_logo">
                            <img alt="Vetly" src={Logo} className="image_Logo" />
                        </div>

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

                    <div className="container_socials">
                        <div className="container_updates">
                            <span className="input_text">Ontvang updates in uw inbox</span>

                            <div className="container_input">
                                <input type="text" spellCheck="false" className="input_mail" />

                                <img onClick={handleSubscribe} src={ArrowIcon} className="icon_Arrow" />
                            </div>
                        </div>

                        <a href={socials.Linkedin} target="_blank" rel="noopener noreferrer" className="anchor_Linkedin">
                            <img alt="Linkedin" src={LinkedinIcon} className="icon_Linkedin" />
                        </a>

                        <a href={socials.Whatsapp} target="_blank" rel="noopener noreferrer" className="anchor_Whatsapp">
                            <img alt="Whatsapp" src={WhatsappIcon} className="icon_Whatsapp" />
                        </a>

                        <a href={socials.Mail} target="_blank" rel="noopener noreferrer" className="anchor_Mail">
                            <img alt="Mail" src={MailIcon} className="icon_Mail" />
                        </a>
                    </div>
                </div>

                <div className="container_bottom">
                    <span className="text_copyright">&copy; {getYear()}</span>

                    <img src={CircleSmall} className="icon_CircleSmall" />

                    <div className="credits">
                        <div className="text_credit">Designed & made by</div>
                        <a href={socials.Github} target="_blank" rel="noopener noreferrer" className="anchor_credit">
                            Niek
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
