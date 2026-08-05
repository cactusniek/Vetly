import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import type { SearchCategory, SearchBarProps } from '@/global/types/types'

import { SearchIcon } from '@/assets'

import '@/styles/global.scss'
import './searchbar.scss'

export default function SearchBar({ onSearch, isLoading, searchProgress, searchMessage, categories, dividerIcon: DividerIcon }: SearchBarProps) {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    const [searchActive, setSearchActive] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')

    const [searchCategory, setSearchCategory] = useState<SearchCategory>('all')

    const searchRef = useRef<HTMLInputElement>(null)

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
            input.removeEventListener('keydown', onEscape)
            window.removeEventListener('keydown', onSlash)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchValue, searchCategory)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchValue, searchCategory, onSearch])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value)
    }

    return (
        <div className={`searchbar ${!isLoading ? 'progress-hidden' : ''}`} style={{ '--search-progress': `${searchProgress}%` } as React.CSSProperties}>
            <div className={`container_searchbar ${categories && categories.length > 0 ? 'categories' : ''}`}>
                <SearchIcon className="icon_Search" />

                <input
                    onChange={handleChange}
                    onFocus={() => setSearchActive(true)}
                    ref={searchRef}
                    value={searchValue}
                    type="text"
                    spellCheck="false"
                    placeholder={locale.search.placeholder}
                    className="input_search"
                />

                {categories && categories.length > 0 && (
                    <div className="container_categories">
                        {DividerIcon && <DividerIcon className="icon_Divider" />}

                        <div className="container_buttons">
                            {categories.map(category => (
                                <button
                                    key={category.value}
                                    onClick={() => setSearchCategory(category.value)}
                                    type="button"
                                    className={`button_category ${searchCategory === category.value ? 'active' : ''}`}
                                >
                                    <category.icon className="icon_Category" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className={`container_results ${!searchMessage ? 'empty' : ''}`}>
                <span key={searchMessage} className="text_results">
                    {searchMessage}
                </span>
            </div>
        </div>
    )
}
