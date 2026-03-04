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
    // const [searchProgress, setSearchProgress] = useState<number>(60)

    const searchRef = useRef<HTMLInputElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value)

        console.log('Query in Search:', searchValue)

        onSearch(searchValue)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSearch(searchValue)
    }

    useEffect(() => {
        const input = searchRef.current
        if (!input) return

        const close = () => {
            setSearchActive(false)
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
                setSearchActive(true)
                input.focus()
            }
        }

        window.addEventListener('keydown', onSlash)
        return () => window.removeEventListener('keydown', onSlash)
    }, [])

    return (
        <div className="search" style={{ '--search-progress': `${searchProgress}%` } as React.CSSProperties}>
            <div className="container_search">
                <img aria-hidden="true" alt="icon_Search" src={SearchIcon} className="icon_Search" />
                <input
                    onChange={handleChange}
                    onFocus={() => {
                        setSearchActive(true)
                    }}
                    ref={searchRef}
                    type="text"
                    spellCheck="false"
                    value={searchValue}
                    placeholder="Zoek Medicijn"
                    className="input_search"
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
