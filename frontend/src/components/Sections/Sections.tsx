import { useRef } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import Outro from '@/components/Outro/Outro'
import Species from '@/components/Species/Species'

import { locales } from '@/global/translations'

import { SearchExampleOneImage, SearchExampleThreeImage, SearchExampleTwoImage } from '@/assets'

import '@/styles/global.scss'
import './sections.scss'

export default function Sections() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    const videoRef = useRef<HTMLVideoElement>(null)

    function toggleVideo() {
        const video = videoRef.current

        if (!video) return

        if (video.paused) video.play()
        else video.pause()
    }

    return (
        <div className="container_sections">
            <section className="section_hero">
                <div className="container_titles">
                    <h1 className="title_hero">{locale.sections.hero_title}</h1>

                    <h2 className="subtitle_hero">{locale.sections.hero_subtitle}</h2>
                </div>

                <div className="container_preview">
                    <img alt="image_SearchIsothesia" src={SearchExampleOneImage} className="image_Preview" />

                    <img alt="image_SearchCyclavance" src={SearchExampleTwoImage} className="image_Preview" />

                    <img alt="image_SearchAurizon" src={SearchExampleThreeImage} className="image_Preview" />
                </div>
            </section>

            <section className="section">
                <div className="container_titles">
                    <h2 className="title_section">{locale.sections.search_title}</h2>

                    <p className="text_section">{locale.sections.search_text}</p>
                </div>

                <video
                    onClick={toggleVideo}
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="video_section"
                >
                    <source src="https://mdn.github.io/shared-assets/videos/flower.mp4" type="video/mp4" />
                </video>
            </section>

            <section className="section">
                <Species />
            </section>

            <section className="section_outro">
                <div className="container_titles">
                    <h2 className="title_section">{locale.sections.leaflets_title}</h2>

                    <p className="text_section">{locale.sections.leaflets_text}</p>
                </div>

                <Outro />
            </section>
        </div>
    )
}
