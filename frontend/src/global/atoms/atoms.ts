import { atom } from 'jotai'

import { type LocaleLanguage, supportedLanguages } from '@/global/types/types'

export const showNavAtom = atom(false)

export const socialsAtom = atom({
    LinkedIn: '#',
    Mail: '#',
    Github: 'https://github.com/cactusniek/Vetly',
})

export const languageAtom = atom<LocaleLanguage>('nl')

export { supportedLanguages }
