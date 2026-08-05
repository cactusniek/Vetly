import React, { useState } from 'react'
import type { FunctionComponent, SVGProps } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import type { MedicineProps } from '@/global/types/types'

import { doeldierenIconMap } from '@/global/mappings/doeldieren'

import { CircleSmall, ArrowToggle } from '@/assets'

import '@/styles/global.scss'
import './medicine.scss'

interface DoeldierIcon {
    doeldier: string
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

function parseDoeldieren(doeldieren: string): { diersoorten: string; visibleIcons: DoeldierIcon[]; remainingIcons: number } {
    const items = doeldieren
        .split('#')
        .map(d => d.trim())
        .filter(Boolean)

    const diersoorten = items.join(', ')

    const seen = new Set<FunctionComponent<SVGProps<SVGSVGElement>>>()
    const visibleIcons = items
        .map(doeldier => {
            const icon = doeldierenIconMap[doeldier]
            if (!icon || seen.has(icon)) return null
            seen.add(icon)
            return { doeldier, icon }
        })
        .filter((item): item is DoeldierIcon => item !== null)
        .slice(0, 3)

    const visibleAnimals = new Set(visibleIcons.map(e => e.doeldier))
    const remainingIcons = items.filter(d => !visibleAnimals.has(d)).length

    return { diersoorten, visibleIcons, remainingIcons }
}

function parseWachttermijnen(wachttermijnen: string): { wachttijden: string[] } {
    const items = wachttermijnen
        .split('#')
        .map(d => d.trim())
        .filter(Boolean)
        .map(d => d.split('~').join(' - '))

    const wachttijden = items.map((item, index) => (index === items.length - 1 ? item : item + ','))

    return { wachttijden }
}

export default function Medicine(props: MedicineProps) {
    const [language] = useAtom(languageAtom)
    const locale = locales[language].medicine

    const [showMore, setShowMore] = useState(false)

    const { diersoorten, visibleIcons, remainingIcons } = parseDoeldieren(props.doeldieren)
    const { wachttijden } = parseWachttermijnen(props.wachttermijnen)

    const iconOffsets = [0, 1.5, 3]

    function getIconTransform(index: number): string {
        if (!showMore || visibleIcons.length <= 1) return 'translateX(0)'
        return `translateX(-${iconOffsets[index] ?? 0}rem)`
    }

    function getRemainingTransform(): string {
        if (!showMore || visibleIcons.length <= 1) return 'translateX(0)'
        return `translateX(-${iconOffsets[visibleIcons.length - 1]}rem)`
    }

    function renderDoeldierIcon(entry: DoeldierIcon, index: number) {
        return (
            <div
                key={entry.doeldier}
                className="container_doeldier"
                style={{
                    right: `${index * 1.5}rem`,
                    zIndex: 10 - index,
                    transform: getIconTransform(index),
                    transition: 'transform 0.5s ease',
                }}
            >
                <entry.icon className="image_Doeldier" />

                {index < visibleIcons.length - 1 && <div aria-hidden="true" className="fade_Doeldier" />}
            </div>
        )
    }

    function handleExpand() {
        setShowMore(true)
    }

    function handleToggle(e: React.MouseEvent) {
        e.stopPropagation()
        setShowMore(prev => !prev)
    }

    return (
        <div className="medicine">
            <div onClick={handleExpand} className="container_medicine">
                <div className="medicine_header">
                    <div className="medicine_titles">
                        <span className="medicine_productnaam">{props.productnaam}</span>

                        <div className={`medicine_doeldieren ${showMore ? 'open' : ''}`}>
                            {visibleIcons.map((entry, index) => renderDoeldierIcon(entry, index))}

                            {visibleIcons.length > 0 && remainingIcons > 0 && (
                                <div
                                    className="doeldieren_remaining"
                                    style={{
                                        right: `${visibleIcons.length * 1.5 + Math.max(0, remainingIcons - 10) * 0.5}rem`,
                                        zIndex: 10 - visibleIcons.length,
                                        transform: getRemainingTransform(),
                                        transition: 'transform 0.5s ease',
                                    }}
                                >
                                    <span className="text_remaining">+{remainingIcons}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="medicine_subtitles">
                        <span className="medicine_handelsvergunninghouder">{props.handelsvergunninghouder}</span>
                    </div>
                </div>

                <div className={`medicine_main ${showMore ? 'show' : ''}`}>
                    <div className="container_main">
                        <div className="medicine_info">
                            <CircleSmall className="icon_CircleSmall" />

                            <span className="medicine_afleverstatus">{props.afleverstatus}</span>
                        </div>

                        <div className="medicine_info">
                            <CircleSmall className="icon_CircleSmall" />

                            <a
                                href={props.bijsluiterUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="medicine_spc-etiket-bijsluiter"
                            >
                                {locale.open_leaflet}
                            </a>
                        </div>

                        {diersoorten.length > 1 && (
                            <div className="medicine_info">
                                <CircleSmall className="icon_CircleSmall" />

                                <span className="medicine_doeldieren">
                                    {locale.species}: {diersoorten}
                                </span>
                            </div>
                        )}

                        {wachttijden.length > 1 && (
                            <div className="medicine_wachttermijnen">
                                <div className="container_wachttermijnen">
                                    <CircleSmall className="icon_CircleSmall" />

                                    <span className="title_wachttermijnen">{locale.withdrawal_periods}:</span>
                                </div>

                                <div className="container_text">
                                    {wachttijden.map(entry => (
                                        <span key={entry} className="text_wachttermijnen">
                                            {entry}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="medicine_disclaimer">
                            <span className="text_disclaimer">{locale.disclaimer}</span>
                        </div>

                        <div className="medicine_bronvermelding">
                            <span className="text_bronvermelding">{locale.sources}:</span>

                            <a
                                href="https://diergeneesmiddeleninformatiebank.nl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="anchor_bronvermelding"
                            >
                                diergeneesmiddeleninformatiebank.nl
                            </a>

                            <a
                                href="https://www.ema.europa.eu/en/medicines"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="anchor_bronvermelding"
                            >
                                ema.europe.eu
                            </a>
                        </div>

                        <div className="medicine_references">
                            <span className="medicine_registratienummer">
                                {locale.registration}: {props.registratienummer}
                            </span>

                            <span className="medicine_procedurenummer">{props.procedurenummer}</span>
                        </div>
                    </div>
                </div>

                <div onClick={handleToggle} className="medicine_toggle">
                    <ArrowToggle className={`icon_ArrowToggle ${showMore ? 'rotate' : ''}`} />

                    <span className="text_toggle">{showMore ? locale.show_less : locale.show_more}</span>
                </div>
            </div>
        </div>
    )
}
