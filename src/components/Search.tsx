import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/search.scss'

import { SearchIcon } from '../assets'

export default function Search() {
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false)
    const [searchBarValue, setSearchBarValue] = useState<string>('')
    const searchRef = useRef<HTMLInputElement>(null)

    const [searchAlphabeticalActive, setSearchAlphabeticalActive] = useState<boolean>(false)
    const [selectedAlphabeticalValue, setSelectedAlphabeticalValue] = useState<string | null>(null)

    function searchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchBarValue(e.target.value)

        // on each change start searching
    }

    function searchAlphabetical(letter: string) {}

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const firstRow = alphabet.slice(0, 14) // a - n
    const secondRow = alphabet.slice(14) // o - z

    useEffect(() => {
        if (searchBarValue) return

        const close = () => {
            setSearchBarActive(false)
            searchRef.current?.blur()
        }

        const onDown = (e: MouseEvent) => !searchRef.current?.contains(e.target as Node) && close()
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()

        document.addEventListener('mousedown', onDown)
        document.addEventListener('keydown', onKey)

        return () => {
            document.removeEventListener('mousedown', onDown)
            document.removeEventListener('keydown', onKey)
        }
    }, [searchBarValue])

    return (
        <div className="search">
            <div className={`container_searchbar ${searchBarActive || searchBarValue.length > 0 ? 'shift' : ''}`}>
                <img src={SearchIcon} className="icon_Search" />
                <input
                    onChange={e => {
                        setSearchBarValue(e.target.value)
                    }}
                    onFocus={() => {
                        setSearchBarActive(true)
                        setSearchAlphabeticalActive(false)
                        setSelectedAlphabeticalValue(null)
                    }}
                    ref={searchRef}
                    type="text"
                    value={searchBarValue}
                    placeholder="Zoek Medicijn"
                    className="input_searchbar"
                />
            </div>

            <div className={`container_search-alphabetical ${searchBarActive || searchBarValue.length > 0 ? 'disappear' : ''} ${searchAlphabeticalActive ? 'active' : ''}`}>
                <div className="alphabet_row">
                    {firstRow.map(letter => (
                        <span
                            key={letter}
                            className={`alphabet_letter ${selectedAlphabeticalValue === letter ? 'selected' : ''}`}
                            onClick={() => {
                                const isSame = selectedAlphabeticalValue === letter

                                if (isSame) {
                                    // deselecting a letter -> alphabetical should no longer be active
                                    setSelectedAlphabeticalValue(null)
                                    setSearchAlphabeticalActive(false)
                                } else {
                                    // select a letter -> mark alphabetical active
                                    setSelectedAlphabeticalValue(letter)
                                    setSearchBarValue('')
                                    setSearchAlphabeticalActive(true)
                                }
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                <div className="alphabet_row">
                    {secondRow.map(letter => (
                        <span
                            key={letter}
                            className={`alphabet_letter ${selectedAlphabeticalValue === letter ? 'selected' : ''}`}
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
            </div>
        </div>
    )
}
