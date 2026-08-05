import { useEffect } from 'react'
import { useAtom } from 'jotai'

import { languageAtom, supportedLanguages } from '../atoms/atoms'

import type { LocaleLanguage } from '../types/types'

export function useLanguage() {
    const [, setLanguage] = useAtom(languageAtom)

    useEffect(() => {
        const saved = localStorage.getItem('language') as LocaleLanguage
        const browser = navigator.language.toLowerCase() as LocaleLanguage

        if (supportedLanguages.includes(saved)) setLanguage(saved)
        else if (supportedLanguages.includes(browser)) setLanguage(browser)
    }, [setLanguage])
}
