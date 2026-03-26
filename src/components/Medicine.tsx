import React from 'react'

import { useRef, useEffect, useState } from 'react'

import type { MedicineProps } from '../global/types/types'

import { doeldierenIconMap } from '../global/mappings/doeldieren'

import { CircleSmall, ArrowToggle } from '../assets'

import '../styles/global/global.scss'
import '../styles/widget/medicine.scss'

function parseDoeldieren(doeldieren: string) {
    const doeldierenArray = doeldieren
        .split('#')
        .map(d => d.trim())
        .filter(Boolean)

    const diersoorten = doeldierenArray.join(', ')

    const seen = new Set<string>()
    const uniqueIconEntries = doeldierenArray
        .map(doeldier => {
            const src = doeldierenIconMap[doeldier]
            if (!src || seen.has(src)) return null

            seen.add(src)
            return { doeldier, src }
        })
        .filter((item): item is { doeldier: string; src: string } => item !== null)

    const maxAnimalsVisible = 3
    const visibleIcons = uniqueIconEntries.slice(0, maxAnimalsVisible)
    const visibleIconAnimals = new Set(visibleIcons.map(entry => entry.doeldier))
    const remainingIcons = doeldierenArray.filter(doeldier => !visibleIconAnimals.has(doeldier)).length

    return {
        diersoorten,
        visibleIcons,
        remainingIcons,
    }
}

function parseWachttermijnen(wachttermijnen: string) {
    const wachttijdenArray = wachttermijnen
        .split('#')
        .map(d => d.trim())
        .filter(Boolean)
        .map(d => d.split('~').join(' - '))

    const wachttijden = wachttijdenArray.map((item, index) => (index === wachttijdenArray.length - 1 ? item : item + ','))

    return { wachttijden }
}

export default function Medicine(props: MedicineProps) {
    const [showMore, setShowMore] = useState<boolean>(false)

    const { diersoorten, visibleIcons, remainingIcons } = parseDoeldieren(props.doeldieren)
    const { wachttijden } = parseWachttermijnen(props.wachttermijnen)

    return (
        <div className="medicine">
            <div className="container_medicine" onClick={() => setShowMore(true)}>
                <div className="medicine_header">
                    <div className="medicine_titles">
                        <span className="medicine_productnaam">{props.productnaam}</span>

                        <div className={`medicine_doeldieren ${showMore ? 'open' : ''}`}>
                            {visibleIcons.map((entry, index) => {
                                let transform = 'translateX(0)'

                                if (showMore && visibleIcons.length > 1) {
                                    if (visibleIcons.length === 2) {
                                        transform = `translateX(-${index === 0 ? 0 : 1.5}rem)`
                                    } else if (visibleIcons.length === 3) {
                                        transform = `translateX(-${index === 0 ? 0 : index === 1 ? 1.5 : 3}rem)`
                                    }
                                }

                                return (
                                    <div
                                        key={entry.src}
                                        className="container_doeldier"
                                        style={{
                                            right: `${index * 1.5}rem`,
                                            zIndex: `${10 - index}`,
                                            transform,
                                            transition: 'transform 0.5s ease',
                                        }}
                                    >
                                        <img aria-hidden="true" alt={`impressie_${entry.doeldier}`} src={entry.src} className="image_Doeldier" />
                                        {index < visibleIcons.length - 1 && <div aria-hidden="true" className="fade_Doeldier" />}
                                    </div>
                                )
                            })}

                            {visibleIcons.length > 0 && remainingIcons > 0 && (
                                <div
                                    className="doeldieren_remaining"
                                    style={{
                                        right: `${visibleIcons.length * 1.5 + Math.max(0, remainingIcons - 10) * 0.5}rem`,
                                        zIndex: `${10 - visibleIcons.length}`,
                                        transform: (() => {
                                            if (!showMore || visibleIcons.length === 1) return 'translateX(0)'
                                            if (visibleIcons.length === 2) return 'translateX(-1.5rem)'
                                            if (visibleIcons.length === 3) return 'translateX(-3rem)'
                                            return 'translateX(0)'
                                        })(),
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
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="medicine_afleverstatus">{props.afleverstatus}</span>
                        </div>

                        <div className="medicine_info">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <a href={props.bijsluiterUrl} download target="_blank" rel="noopener noreferrer" className="medicine_spc-etiket-bijsluiter">
                                Download bijsluiter
                            </a>
                        </div>

                        {diersoorten.length > 1 && (
                            <div className="medicine_info">
                                <img src={CircleSmall} className="icon_CircleSmall" />
                                <span className="medicine_doeldieren">Diersoorten: {diersoorten}</span>
                            </div>
                        )}

                        {wachttijden.length > 1 && (
                            <div className="medicine_wachttermijnen">
                                <div className="container_wachttermijnen">
                                    <img src={CircleSmall} className="icon_CircleSmall" />
                                    <span className="title_wachttermijnen">Wachttermijnen:</span>
                                </div>

                                <div className="container_text">
                                    {wachttijden.map((entry, index) => (
                                        <span key={index} className="text_wachttermijnen">
                                            {entry}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="medicine_disclaimer">
                            <span className="text_disclaimer">Deze informatie is uitsluitend bedoeld als hulpmiddel en vervangt geen advies van een dierenarts.</span>
                        </div>

                        <div className="medicine_bronvermelding">
                            <span className="text_bronvermelding">Bronnen:</span>
                            <a href="https://diergeneesmiddeleninformatiebank.nl" target="_blank" rel="noopener noreferrer" className="anchor_bronvermelding">
                                diergeneesmiddeleninformatiebank.nl
                            </a>
                            <a href="https://www.ema.europa.eu/en/medicines" target="_blank" rel="noopener noreferrer" className="anchor_bronvermelding">
                                ema.europe.eu
                            </a>
                        </div>

                        <div className="medicine_references">
                            <span className="medicine_registratienummer">REG NL: {props.registratienummer}</span>
                            <span className="medicine_procedurenummer">{props.procedurenummer}</span>
                        </div>
                    </div>
                </div>

                <div
                    onClick={e => {
                        e.stopPropagation()
                        setShowMore(prev => !prev)
                    }}
                    className="medicine_toggle"
                >
                    <img src={ArrowToggle} className={`icon_ArrowToggle ${showMore ? 'rotate' : ''}`} />
                    <span className="text_toggle"> {showMore ? 'Laat minder informatie zien' : 'Laat meer informatie zien'}</span>
                </div>
            </div>
        </div>
    )
}
