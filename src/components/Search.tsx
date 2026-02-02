import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../index.css'

import iconSearch from '../assets/icon-search.svg'

export default function Search() {
    async function searchBar(e: any) {
        e.preventDefault()
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const firstRow = alphabet.slice(0, 14) // a - n
    const secondRow = alphabet.slice(14) // o - z

    return (
        <div className="component-search">
            <div className="container-search-bar">
                <img src={iconSearch} className="icon-search-bar" />
                <input type="text" value="" onChange={e => onSearch(e.target.value)} placeholder="Zoek Medicijn" className="input-search-bar" />
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
