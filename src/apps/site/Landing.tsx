import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import { Api } from '../../global/api/api'

import Header from '../../components/Header'

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
            </div>
        </>
    )
}

export default Landing
