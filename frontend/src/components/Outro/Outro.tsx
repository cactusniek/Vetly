import { useAtom } from 'jotai'
import { languageAtom, socialsAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import { CircleSmall, GithubIcon, LinkedInIcon, MailIcon } from '@/assets'

import '@/styles/global.scss'
import './outro.scss'

export default function Outro() {
    const [language] = useAtom(languageAtom)
    const [socials] = useAtom(socialsAtom)

    const locale = locales[language]
    const year = new Date().getFullYear()

    return (
        <div className="container_outro">
            <div className="container_footer">
                <div className="container_socials">
                    <a href={socials.LinkedIn} target="_blank" rel="noopener noreferrer" className="anchor_social">
                        <LinkedInIcon className="icon_Social" />
                    </a>

                    <a href={socials.Github} target="_blank" rel="noopener noreferrer" className="anchor_social">
                        <GithubIcon className="icon_Social" />
                    </a>

                    <a href={socials.Mail} target="_blank" rel="noopener noreferrer" className="anchor_social">
                        <MailIcon className="icon_Social" />
                    </a>
                </div>

                <div className="container_copyright">
                    <span className="text_copyright">&copy; {year}</span>

                    <CircleSmall className="icon_CircleSmall" />

                    <div className="container_credits">
                        <span className="text_credit">{locale.sections.credits}</span>

                        <a href={socials.Github} target="_blank" rel="noopener noreferrer" className="anchor_credit">
                            Niek
                        </a>
                    </div>
                </div>
            </div>

            <span className="text_wordmark">Vetly</span>
        </div>
    )
}
