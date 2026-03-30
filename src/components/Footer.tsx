import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Logo, LinkedinIcon, WhatsappIcon, MailIcon, CircleSmall, ArrowIcon } from '../assets'

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
                    <div className="container_logo">
                        <img alt="Vetly" src={Logo} className="image_Logo" />
                    </div>

                    <div className="nav_footer">
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

                    <div className="container_socials">
                        <div className="container_updates">
                            <input type="text" spellCheck="false" className="input_mail" />

                            <img src={ArrowIcon} className="icon_Arrow" />
                        </div>

                        <img alt="Linkedin" src={LinkedinIcon} className="icon_Linkedin" />

                        <img alt="Whatsapp" src={WhatsappIcon} className="icon_Whatsapp" />

                        <img alt="Mail" src={MailIcon} className="icon_Mail" />
                    </div>

                    {/* <div className="container_search">
                        <img src={SearchIcon} className="icon_Search" />
                        <input
                            onChange={handleChange}
                            onFocus={() => {
                                setSearchActive(true)
                            }}
                            ref={searchRef}
                            value={searchValue}
                            type="text"
                            spellCheck="false"
                            placeholder="Zoek Medicijn"
                            className="input_search"
                        />
                    </div> */}
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
