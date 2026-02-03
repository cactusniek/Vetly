import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/search.scss'

import iconSearch from '../assets/icon-search.svg'

export default function Search() {
    const [searchBarActive, setSearchBarActive] = useState(false)
    const [searchBarValue, setSearchBarValue] = useState('')

    function searchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchBarValue(e.target.value)

        // on each change start searching
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const firstRow = alphabet.slice(0, 14) // a - n
    const secondRow = alphabet.slice(14) // o - z

    return (
        <div className="component-search">
            <div className="container-search-bar">
                <img src={iconSearch} className="icon-search-bar" />
                <input type="text" value={searchBarValue} onChange={searchBar} onFocus={() => setSearchBarActive(true)} onBlur={() => setSearchBarActive(false)} placeholder="Zoek Medicijn" className="input-search-bar" />
            </div>

            <div className="container-search-alphabetical">
                <div className="alphabet-row">
                    {firstRow.map(letter => (
                        <span key={letter} className="alphabet-letter">
                            {letter}
                        </span>
                    ))}
                </div>

                <div className="alphabet-row">
                    {secondRow.map(letter => (
                        <span key={letter} className="alphabet-letter">
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

// when searchbar is on focus move out alphabetical order, make it go up and fade out.
// then move searchbar up a little at the same time.
