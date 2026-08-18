import { useEffect } from 'react'

import { useAtom } from 'jotai'
import { languageAtom, supportedLanguages } from '@/global/atoms/atoms'

import { type LocaleLanguage } from '@/global/types/types'

function isSupported(value: string | null): value is LocaleLanguage {
    return supportedLanguages.includes(value as LocaleLanguage)
}

export function useLanguage() {
    const [, setLanguage] = useAtom(languageAtom)

    useEffect(() => {
        const saved = localStorage.getItem('language')
        const browser = navigator.language.toLowerCase()

        if (isSupported(saved)) setLanguage(saved)
        else if (isSupported(browser)) setLanguage(browser)
    }, [setLanguage])
}
