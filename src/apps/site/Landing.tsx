import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import { Api } from '../../global/api/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
                        <h1 className="hero_title">Met actuele diergeneesmiddeleninformatie direct op de website van uw praktijk..</h1>
                        <h2 className="hero_subtitle">zorgt u voor overzichtelijke informatie zonder onnodig papier</h2>

                        <video src=""></video>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Landing
