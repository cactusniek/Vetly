import { useRef } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import Outro from '@/components/Outro/Outro'

import { locales } from '@/global/translations'

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

                <video
                    onClick={toggleVideo}
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="video_hero"
                >
                    <source src="https://mdn.github.io/shared-assets/videos/flower.mp4" type="video/mp4" />
                </video>
            </section>

            <section className="section">
                <h2 className="title_section">{locale.sections.search_title}</h2>

                <p className="text_section">{locale.sections.search_text}</p>
            </section>

            <section className="section">
                <h2 className="title_section">{locale.sections.current_title}</h2>

                <p className="text_section">{locale.sections.current_text}</p>
            </section>

            <section className="section">
                <h2 className="title_section">{locale.sections.leaflets_title}</h2>

                <p className="text_section">{locale.sections.leaflets_text}</p>
            </section>

            <section className="section">
                <Outro />
            </section>
        </div>
    )
}
