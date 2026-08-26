import { NavLink } from 'react-router-dom'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import Outro from '@/components/Outro/Outro'
import Species from '@/components/Species/Species'

import { locales } from '@/global/translations'

import { SearchExampleOneImage, SearchExampleThreeImage, SearchExampleTwoImage, SearchIcon } from '@/assets'

import '@/styles/global.scss'
import './sections.scss'

export default function Sections() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    return (
        <div className="container_sections">
            <section className="section_hero">
                <div className="container_titles">
                    <h1 className="title_hero">{locale.sections.hero_title}</h1>

                    <p className="subtitle_hero">{locale.sections.hero_subtitle}</p>
                </div>

                <div className="container_preview">
                    <img alt="Zoekresultaat voor Isothesia in Vetly" src={SearchExampleOneImage} width="400" height="300" className="image_Preview" />

                    <img alt="Zoekresultaat voor Cyclavance in Vetly" src={SearchExampleTwoImage} width="400" height="300" className="image_Preview" />

                    <img alt="Zoekresultaat voor Aurizon in Vetly" src={SearchExampleThreeImage} width="400" height="250" className="image_Preview" />
                </div>
            </section>

            <section className="section">
                <Species />
            </section>

            <section className="section_outro">
                <div className="container_leaflets">
                    <div className="container_titles">
                        <h2 className="title_section">{locale.sections.leaflets_title}</h2>

                        <p className="text_section">{locale.sections.leaflets_text}</p>
                    </div>

                    <NavLink to={'/search'} className="link_search">
                        <SearchIcon className="icon_Search" />

                        {locale.sections.search_link}
                    </NavLink>
                </div>

                <Outro />
            </section>
        </div>
    )
}
