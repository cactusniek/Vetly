import { atom } from 'jotai'

import type { LocaleLanguage } from '../types/types'
import { supportedLanguages } from '../types/types'

export const languageAtom = atom<LocaleLanguage>('nl')

export { supportedLanguages }
