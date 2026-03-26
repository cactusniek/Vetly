import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Logo } from '../assets'

import '../styles/global/global.scss'
import '../styles/site/header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="container_header">
                <div className="container_logo">
                    <img alt="Animale" src={Logo} className="image_Logo" />
                </div>
            </div>
        </div>
    )
}
