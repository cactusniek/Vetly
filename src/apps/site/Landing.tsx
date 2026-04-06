import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import { Api } from '../../global/api/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { VideoPlaceholder } from '../../assets'

import '../../styles/global/global.scss'
import '../../styles/site/landing.scss'

function Landing() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="landing">
                <Header />

                <div className="container_sections">
                    <div className="section_1">
                        <div className="container_titles">
                            <h1 className="hero_title">
                                Met actuele diergeneesmiddeleninformatie
                                <br />
                                direct op de website van uw praktijk..
                            </h1>

                            <h2 className="hero_subtitle">zorgt u voor overzichtelijke informatie zonder onnodig papier</h2>
                        </div>

                        <img src={VideoPlaceholder} className="VideoPlaceholder" />
                        {/* <video src="" poster="" preload="metadata" muted playsInline className=""></video> */}

                        {/* Click moet naar beneden scrollen, naar alle aangesloten dierenartsen */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="button_login">
                            Widget bekijken
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Landing
