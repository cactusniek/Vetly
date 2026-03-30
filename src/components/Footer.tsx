import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo, LinkedinIcon, WhatsappIcon, MailIcon, CircleSmall, ArrowIcon, Divider } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/footer.scss'

export default function Footer() {
    // const [openNav, setOpenNav] = useState(false)

    function getYear() {
        return new Date().getFullYear()
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

                        <div className="nav_footer">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/contact', label: 'Contact' },
                                { path: '/ToS', label: 'ToS' },
                                { path: '/login', label: 'Login' },
                            ].map(({ path, label }, index, arr) => (
                                <div key={label} className="nav_route">
                                    <NavLink to={path} className={({ isActive }) => `nav_route ${isActive ? ' active' : ''}`}>
                                        {label}
                                    </NavLink>
                                    {index < arr.length - 1 && <img src={Divider} className="nav_divider" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container_socials">
                        <div className="container_updates">
                            <span className="input_text">Ontvang updates in uw inbox</span>

                            <div className="container_input">
                                <input type="text" spellCheck="false" className="input_mail" />

                                <img src={ArrowIcon} className="icon_Arrow" />
                            </div>
                        </div>

                        <img alt="Linkedin" src={LinkedinIcon} className="icon_Linkedin" />

                        <img alt="Whatsapp" src={WhatsappIcon} className="icon_Whatsapp" />

                        <img alt="Mail" src={MailIcon} className="icon_Mail" />
                    </div>
                </div>

                <div className="container_bottom">
                    <span className="text_copyright">&copy; {getYear()}</span>

                    <img src={CircleSmall} className="icon_CircleSmall" />

                    <div className="credits">
                        <div className="text_credit">Designed & made by</div>
                        <a href="https://github.com/cactusniek" target="_blank" rel="noopener noreferrer" className="anchor_credit">
                            Niek
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
