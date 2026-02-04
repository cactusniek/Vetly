import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/result.scss'

// import animals here
import iconSearch from '../assets/icon-search.svg'

export default function Result() {
    return (
        <div className="component-result">
            <div className="container-result">
                <div className="result-left"></div>
                <div className="result-right"></div>
            </div>
        </div>
    )
}
