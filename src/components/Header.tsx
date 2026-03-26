import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/global/global.scss'
import '../styles/site/header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="container_header">
                <div className="logo">Animale</div>
            </div>
        </div>
    )
}
