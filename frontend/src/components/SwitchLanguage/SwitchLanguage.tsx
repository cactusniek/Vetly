import { useAtom } from 'jotai'
import { languageAtom, supportedLanguages } from '@/global/atoms/atoms'

import { type LocaleLanguage } from '@/global/types/types'

import { LanguageIcon } from '@/assets'

import '@/styles/global.scss'
import './switchlanguage.scss'

export default function SwitchLanguage() {
    const [language, setLanguage] = useAtom(languageAtom)

    const others = supportedLanguages.filter(locale => locale !== language)

    function handleLanguageChange(locale: LocaleLanguage) {
        setLanguage(locale)

        localStorage.setItem('language', locale)
    }

    return (
        <div className="switch_language">
            <div className="current_language">
                <span className="label_language">{language.toUpperCase()}</span>

                <LanguageIcon className="icon_Language" />
            </div>

            <div className="languages">
                {others.map(locale => (
                    <button onClick={() => handleLanguageChange(locale)} key={locale} type="button" className="language">
                        {locale.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    )
}
