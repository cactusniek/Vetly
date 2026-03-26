import React from 'react'

import { useRef, useEffect, useState } from 'react'

import type { SearchProps } from '../global/types/types'

import { SearchIcon } from '../assets'

import '../styles/global/global.scss'
import '../styles/widget/search.scss'

export default function Search({ onSearch, isLoading, searchProgress, searchMessage }: SearchProps) {
    const [searchActive, setSearchActive] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')

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
            onSearch(searchValue)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchValue])

    return (
        <div className={`search ${!isLoading ? 'progress-hidden' : ''}`} style={{ '--search-progress': `${searchProgress}%` } as React.CSSProperties}>
            <div className="container_search">
                <img src={SearchIcon} className="icon_Search" />
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
                <span key={searchMessage} className="text_results">
                    {searchMessage}
                </span>
            </div>
        </div>
    )
}
