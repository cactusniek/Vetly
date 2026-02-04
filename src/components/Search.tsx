import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/search.scss'

import iconSearch from '../assets/icon-search.svg'

export default function Search() {
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false)
    const [searchBarValue, setSearchBarValue] = useState<string>('')

    const [selectedAlphabeticalValue, setSelectedAlphabeticalValue] = useState<string | null>(null)

    function searchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchBarValue(e.target.value)

        // on each change start searching
    }

    function searchAlphabetical(letter: string) {}

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const firstRow = alphabet.slice(0, 14) // a - n
    const secondRow = alphabet.slice(14) // o - z

    return (
        <div className="component-search">
            <div className={`container-search-bar ${searchBarActive || searchBarValue.length > 0 ? 'shift' : ''}`}>
                <img src={iconSearch} className="icon-search-bar" />
                <input
                    type="text"
                    value={searchBarValue}
                    onChange={e => {
                        setSearchBarValue(e.target.value)
                    }}
                    onFocus={() => {
                        setSearchBarActive(true)
                        setSelectedAlphabeticalValue(null)
                    }}
                    onBlur={() => setSearchBarActive(false)}
                    placeholder="Zoek Medicijn"
                    className="input-search-bar"
                />
            </div>

            <div className={`container-search-alphabetical ${searchBarActive || searchBarValue.length > 0 ? 'disappear' : ''}`}>
                <div className="alphabet-row">
                    {firstRow.map(letter => (
                        <span
                            key={letter}
                            className={`alphabet-letter ${selectedAlphabeticalValue === letter ? 'selected' : ''}`}
                            onClick={() => {
                                if (selectedAlphabeticalValue === letter) {
                                    setSelectedAlphabeticalValue(null)
                                } else {
                                    setSelectedAlphabeticalValue(letter)
                                    setSearchBarValue('')
                                }
                            }}
                        >
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
