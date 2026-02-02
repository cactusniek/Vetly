import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../index.css'

import iconSearch from '../assets/icon-search.svg'

export default function Search() {
    return (
        <div className="component-search">
            <div className="container-search">
                <img src={iconSearch} className="icon-search" />
                <input type="text" value="" onChange={e => onSearch(e.target.value)} placeholder="Zoek Medicijn" className="input-search" />
            </div>
        </div>
    )
}
