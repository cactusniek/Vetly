import { atom } from 'jotai'

import type { LocaleLanguage } from '../types/types'
import { supportedLanguages } from '../types/types'

export const showNavAtom = atom(false)

export const socialsAtom = atom({
    LinkedIn: '#',
    Mail: '#',
    Github: 'https://github.com/cactusniek',
})

export const languageAtom = atom<LocaleLanguage>('nl')

export { supportedLanguages }
