import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/search.scss'

import { SearchIcon } from '../assets'

type SearchProps = {
    onSearch: (query: string) => void
    isLoading: boolean
    resultsCount: number
}

export default function Search({ onSearch, isLoading, resultsCount }: SearchProps) {
    const [searchBarActive, setSearchBarActive] = useState<boolean>(false)
    const [searchBarValue, setSearchBarValue] = useState<string>('')
    const searchRef = useRef<HTMLInputElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchBarValue(value)

        // onSearch(value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSearch(searchBarValue)
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

    useEffect(() => {
        const input = searchRef.current
        if (!input) return

        const onSlash = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === 'INPUT' || target.isContentEditable) return
            if (e.key === '/') {
                e.preventDefault()
                setSearchBarActive(true)
                input.focus()
            }
        }

        window.addEventListener('keydown', onSlash)
        return () => window.removeEventListener('keydown', onSlash)
    }, [])

    return (
        <div className="search">
            <div className="container_searchbar">
                <img aria-hidden="true" alt="icon_Search" src={SearchIcon} className="icon_Search" />
                <input
                    onChange={handleChange}
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
                <span className="text_results">Er zijn 3 resultaten gevonden</span>

                {/* {!isLoading && resultsCount > 0 && (
                    <span className="text_results">
                        Er {resultsCount === 1 ? 'is' : 'zijn'} {resultsCount} {resultsCount === 1 ? 'resultaat' : 'resultaten'} gevonden
                    </span>
                )}

                {isLoading && <span className="text_results">Er zijn…</span>} */}
            </div>
        </div>
    )
}
