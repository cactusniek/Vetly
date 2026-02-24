import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/search.scss'

import { SearchIcon } from '../assets'

export default function Search() {
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false)
    const [searchBarValue, setSearchBarValue] = useState<string>('')
    const searchRef = useRef<HTMLInputElement>(null)

    function searchBar(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchBarValue(e.target.value)

        // on each change start searching
    }

    useEffect(() => {
        const input = searchRef.current
        if (!input) return

        const close = () => {
            setSearchBarActive(false)
            input.blur()
        }

        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()

        input.addEventListener('keydown', onKey)
        return () => input.removeEventListener('keydown', onKey)
    }, [])

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

            <div className="container_results">
                {/* conditional; if results > 1 - resultaten else resultaat */}
                <span className="text_results">Er zijn 3 resultaten gevonden</span>
            </div>
        </div>
    )
}
