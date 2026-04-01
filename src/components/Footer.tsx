import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { routesAtom, socialsAtom } from '../global/atoms/atoms'

import { Api } from '../global/api/api'

import { Logo, LinkedInIcon, WhatsAppIcon, MailIcon, CircleSmall, ArrowIcon, Divider } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/footer.scss'

// fix for wider screens, set a max-width to container
// Header.tsx's nav to dissapear when hitting or the Footer.tsx is in view.
// draggable="false" on elements, maybe?

export default function Footer() {
    const [routes] = useAtom(routesAtom)

    const [socials] = useAtom(socialsAtom)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [email, setEmail] = useState('')

    function getYear() {
        return new Date().getFullYear()
    }

    async function handleSubscribe() {
        try {
            const success = await Api.Subscribe(email)

            if (success) {
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <div className="footer">
            <div className="container_footer">
                <div className="container_top">
                    <div className="container_nav">
                        <div className="logo">
                            <NavLink to={'/'}>
                                <img alt="Vetly" src={Logo} className="image_Logo" />
                            </NavLink>
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
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" spellCheck="false" placeholder="e-mailadres" className={`input_mail ${status}`} />

                                <img onClick={handleSubscribe} src={ArrowIcon} className="icon_Arrow" />
                            </div>
                        </div>

                        <a href={socials.LinkedIn} target="_blank" rel="noopener noreferrer" className="anchor_LinkedIn">
                            <img alt="LinkedIn" src={LinkedInIcon} className="icon_LinkedIn" />
                        </a>

                        <a href={socials.WhatsApp} target="_blank" rel="noopener noreferrer" className="anchor_WhatsApp">
                            <img alt="WhatsApp" src={WhatsAppIcon} className="icon_WhatsApp" />
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
