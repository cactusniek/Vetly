import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import '@/styles/global.scss'
import './disclaimer.scss'

export default function Disclaimer() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language].disclaimer

    return (
        <div className="disclaimer">
            <div className="container_disclaimer">
                <div className="disclaimer_header">
                    <span className="title_disclaimer">{locale.title}</span>

                    <span className="text_updated">{locale.updated}</span>
                </div>

                <div className="disclaimer_main">
                    {locale.sections.map((section, index) => (
                        <div key={section.title} className="disclaimer_section">
                            <span className="title_section">
                                {index + 1}. {section.title}
                            </span>

                            <span className="text_section">{section.body}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
