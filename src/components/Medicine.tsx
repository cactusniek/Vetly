import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/medicine.scss'

import { CircleSmall, ArrowToggle } from '../assets'

import { Bee, Cat, Chicken, Cow, Dog, Duck, Fish, Goat, Goose, Horse, Parrot, Pig, Pigeon, Rabbit, Sheep, Turkey, Turtle } from '../assets'

const doeldierenImagesMap: Record<string, string> = {
    Bijen: Bee,

    Katten: Cat,

    Kippen: Chicken,
    Legkippen: Chicken,
    'Niet eierleggende kippen': Chicken,

    Kalveren: Cow,
    Koeien: Cow,
    'Lacterende runderen': Cow,
    Melkkoeien: Cow,
    'Niet melkgevende runderen': Cow,
    Runderen: Cow,
    Stieren: Cow,

    Honden: Dog,

    Eenden: Duck,

    Aquariumvissen: Fish,
    Vissen: Fish,

    Geiten: Goat,

    Ganzen: Goose,

    Merries: Horse,
    Paarden: Horse,

    Kooivogels: Parrot,
    Siervogels: Parrot,

    Mestvarkens: Pig,
    Varkens: Pig,
    Vleesvarkens: Pig,
    Zeugen: Pig,

    Duiven: Pigeon,

    Gezelschapskonijnen: Rabbit,
    Konijnen: Rabbit,

    'Niet melkgevende schapen': Sheep,
    Schapen: Sheep,

    Kalkoenen: Turkey,

    Reptielen: Turtle,

    // Fazanten, Kuikens, Biggetjes, Lammetjes
}

type MedicineProps = {
    productnaam: string
    handelsvergunninghouder: string
    afleverstatus: string
    doeldieren: string
    bijsluiterUrl: string
    registratienummer: string
    procedurenummer: string
}

export default function Medicine({ productnaam, handelsvergunninghouder, afleverstatus, doeldieren, bijsluiterUrl, registratienummer, procedurenummer }: MedicineProps) {
    const [showMore, setShowMore] = useState<boolean>(false)
    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

    const doeldierenArray = doeldieren
        .split('#')
        .map(d => d.trim())
        .filter(Boolean)

    const diersoorten = doeldierenArray.join(', ')

    const uniqueIconEntries = Array.from(
        new Map(
            doeldierenArray
                .map(doeldier => {
                    const src = doeldierenImagesMap[doeldier]
                    if (!src) return null
                    return { doeldier, src }
                })
                .filter((item): item is { doeldier: string; src: string } => item !== null)
                .map(item => [item.src, item] as const),
        ).values(),
    )

    const maxAnimalsVisible = 3
    const visibleIcons = uniqueIconEntries.slice(0, maxAnimalsVisible)

    // welke doeldieren hebben een icoon én zijn zichtbaar?
    const visibleIconAnimals = new Set(visibleIcons.map(entry => entry.doeldier))

    // alles wat niet in de zichtbare iconen zit, telt als "remaining"
    const remainingIcons = doeldierenArray.filter(doeldier => !visibleIconAnimals.has(doeldier)).length

    useEffect(() => {
        const media = window.matchMedia('(max-width: 640px)')
        setIsOnMobile(media.matches)

        const listener = () => setIsOnMobile(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [])

    return (
        <div className="medicine">
            <div
                className="container_medicine"
                onClick={() => {
                    if (!showMore && window.innerWidth <= 640) {
                        setShowMore(true)
                    }
                }}
            >
                <div className="medicine_header">
                    <div className="medicine_titles">
                        <span className="medicine_productnaam">{productnaam}</span>

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
                                        <img src={entry.src} alt={`impressie_${entry.doeldier}`} className="image_Doeldier" />
                                        {index < visibleIcons.length - 1 && <div aria-hidden="true" className="fade_Doeldier" />}
                                    </div>
                                )
                            })}

                            {remainingIcons > 0 && (
                                <div
                                    className="doeldieren_remaining"
                                    style={{
                                        right: `${visibleIcons.length * 1.5}rem`,
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
                        <span className="medicine_handelsvergunninghouder">{handelsvergunninghouder}</span>
                    </div>
                </div>

                <div className={`medicine_main ${showMore ? 'show' : ''}`}>
                    <div className="container_main">
                        <div className="medicine_info">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="medicine_afleverstatus">{afleverstatus}</span>
                        </div>

                        <div className="medicine_info">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <a href="#" download target="_blank" rel="noopener noreferrer" className="medicine_spc-etiket-bijsluiter">
                                Download bijsluiter
                            </a>
                        </div>

                        <div className="medicine_info">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="medicine_doeldieren">Diersoorten: {diersoorten}</span>
                        </div>

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
                            <span className="medicine_registratienummer">REG NL: {registratienummer}</span>
                            <span className="medicine_procedurenummer">{procedurenummer}</span>
                        </div>
                    </div>
                </div>

                <div onClick={() => setShowMore(prev => !prev)} className="medicine_toggle">
                    <img src={ArrowToggle} className={`icon_ArrowToggle ${showMore ? 'rotate' : ''}`} />
                    <span className="text_toggle"> {showMore ? 'Laat minder informatie zien' : 'Laat meer informatie zien'}</span>
                </div>
            </div>
        </div>
    )
}
