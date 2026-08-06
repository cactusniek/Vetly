import { Helmet } from 'react-helmet-async'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import { BackgroundCats } from '@/assets'

import '@/styles/global.scss'
import './landing.scss'

export default function Landing() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    return (
        <>
            <Helmet>
                <title>{locale.landing.title}</title>
            </Helmet>

            <div className="container_landing">
                <BackgroundCats className="image_Background" />
            </div>
        </>
    )
}
