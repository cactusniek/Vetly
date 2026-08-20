import { Helmet } from 'react-helmet-async'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import Header from '@/components/Header/Header'
import Sections from '@/components/Sections/Sections'

import { locales } from '@/global/translations'

import { BackgroundCats, BackgroundCatsMobile } from '@/assets'

import '@/styles/global.scss'
import './landing.scss'

export default function Landing() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    return (
        <>
            <Helmet>
                <title>{locale.landing.title}</title>
                <meta name="description" content={locale.landing.description} />

                <meta property="og:title" content={locale.landing.title} />
                <meta property="og:description" content={locale.landing.description} />

                <link rel="canonical" href="https://vetly.nl/" />
            </Helmet>

            <div className="container_landing">
                <Header />

                <BackgroundCatsMobile className="image_BackgroundMobile" />

                <BackgroundCats className="image_Background" />

                <Sections />
            </div>
        </>
    )
}
