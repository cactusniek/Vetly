import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/search.scss'

import { SearchIcon } from '../assets'

type SearchProps = {
    onSearch: (query: string) => void
    isLoading: boolean
    searchProgress: number
    resultsCount: number
}

export default function Search({ onSearch, isLoading, searchProgress, resultsCount }: SearchProps) {
    const [searchActive, setSearchActive] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
    const [hideProgress, setHideProgress] = useState(false)

    const searchRef = useRef<HTMLInputElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        const input = searchRef.current
        if (!input) return

        const onEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSearchActive(false)
                input.blur()
            }
        }

        const onSlash = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === 'INPUT' || target.isContentEditable) return

            if (e.key === '/') {
                e.preventDefault()
                setSearchActive(true)
                input.focus()
            }
        }

        input.addEventListener('keydown', onEscape)
        window.addEventListener('keydown', onSlash)

        return () => {
            input.addEventListener('keydown', onEscape)
            window.addEventListener('keydown', onSlash)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            // eventueel resultaten leeg maken als input leeg is
            // setMedicines([])

            console.log(isLoading)
            console.log(searchProgress)

            onSearch(searchValue)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchValue])

    return (
        <div className={`search ${!isLoading ? 'progress-hidden' : ''}`} style={{ '--search-progress': `${searchProgress}%` } as React.CSSProperties}>
            <div className="container_search">
                <img aria-hidden="true" alt="icon_Search" src={SearchIcon} className="icon_Search" />
                <input
                    onChange={handleChange}
                    onFocus={() => {
                        setSearchActive(true)
                    }}
                    ref={searchRef}
                    value={searchValue}
                    type="text"
                    spellCheck="false"
                    placeholder="Zoek Medicijn"
                    className="input_search"
                />
            </div>

            <div className="container_results">
                {!isLoading && resultsCount > 0 && (
                    <span className="text_results">
                        Er {resultsCount === 1 ? 'is' : 'zijn'} {resultsCount} {resultsCount === 1 ? 'resultaat' : 'resultaten'} gevonden
                    </span>
                )}

                {isLoading && <span className="text_results">Zoeken…</span>}
            </div>
        </div>
    )
}
