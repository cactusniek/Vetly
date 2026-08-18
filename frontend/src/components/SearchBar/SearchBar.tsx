import { type ChangeEvent, type CSSProperties, useEffect, useRef, useState } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import { type SearchBarProps } from '@/global/types/types'

import { SearchIcon } from '@/assets'

import '@/styles/global.scss'
import './searchbar.scss'

export default function SearchBar({ onSearch, isLoading, searchProgress, searchMessage }: SearchBarProps) {
    const [language] = useAtom(languageAtom)

    const [searchValue, setSearchValue] = useState<string>('')

    const searchRef = useRef<HTMLInputElement>(null)

    const locale = locales[language]

    useEffect(() => {
        const input = searchRef.current
        if (!input) return

        function onEscape(e: KeyboardEvent) {
            if (e.key !== 'Escape') return

            input?.blur()
        }

        function onSlash(e: KeyboardEvent) {
            const target = e.target as HTMLElement
            if (target.tagName === 'INPUT' || target.isContentEditable) return

            if (e.key === '/') {
                e.preventDefault()
                input?.focus()
            }
        }

        input.addEventListener('keydown', onEscape)
        window.addEventListener('keydown', onSlash)

        return () => {
            input.removeEventListener('keydown', onEscape)
            window.removeEventListener('keydown', onSlash)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchValue)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchValue, onSearch])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value)
    }

    return (
        <div className={`searchbar ${!isLoading ? 'progress-hidden' : ''}`} style={{ '--search-progress': `${searchProgress}%` } as CSSProperties}>
            <div className="container_searchbar">
                <SearchIcon className="icon_Search" />

                <input
                    onChange={handleChange}
                    ref={searchRef}
                    value={searchValue}
                    type="text"
                    spellCheck="false"
                    placeholder={locale.search.placeholder}
                    className="input_search"
                />
            </div>

            <div className={`container_results ${!searchMessage ? 'empty' : ''}`}>
                <span key={searchMessage} className="text_results">
                    {searchMessage}
                </span>
            </div>
        </div>
    )
}
