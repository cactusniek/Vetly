import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/search.scss'

import { SearchIcon } from '../assets'

// breng searchAlphabetical terug of niet

export default function Search() {
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false)
    const [searchBarValue, setSearchBarValue] = useState<string>('')
    const searchRef = useRef<HTMLInputElement>(null)

    function searchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchBarValue(e.target.value)

        // on each change start searching
    }

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
            <div className="container_searchbar">
                <img aria-hidden="true" alt="icon_Search" src={SearchIcon} className="icon_Search" />
                <input
                    onChange={e => {
                        setSearchBarValue(e.target.value)
                    }}
                    onFocus={() => {
                        setSearchBarActive(true)
                    }}
                    ref={searchRef}
                    type="text"
                    spellCheck="false"
                    value={searchBarValue}
                    placeholder="Zoek Medicijn"
                    className="input_searchbar"
                />
            </div>

            <div className="container_search-results">
                {/* conditional; if results > 1 - resultaten else resultaat */}
                <span className="search_results-text">Er zijn 3 resultaten gevonden</span>
            </div>
        </div>
    )
}
