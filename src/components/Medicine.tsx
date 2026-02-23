import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/medicine.scss'

import { CircleSmall, ArrowToggle } from '../assets'

import { AnimalFade, Bee, Cat, Chicken, Cow, Dog, Duck, Fish, Goat, Goose, Horse, Parrot, Pig, Pigeon, Rabbit, Sheep, Turkey, Turtle } from '../assets'

//
// Verbeter dit allemaal.

const doeldierenArray: string[] = ['Katten', 'Reptielen', 'Siervogels', 'Varkens']

const doeldierenImagesMap: Record<string, string> = {
    // bijen
    Bijen: Bee,

    // katten
    Katten: Cat,

    // honden
    Honden: Dog,

    // rundvee
    Runderen: Cow,
    Koeien: Cow,
    Kalveren: Cow,
    Melkkoeien: Cow,
    'Lacterende runderen': Cow,
    'Niet melkgevende runderen': Cow,
    Stieren: Cow,

    // varkens
    Varkens: Pig,
    Biggen: Pig,
    Mestvarkens: Pig,
    Vleesvarkens: Pig,
    'Fok- en vermeerderingszeugen': Pig,
    Zeugen: Pig,

    // kippen / pluimvee
    Kippen: Chicken,
    Legkippen: Chicken,
    'Fok- en vermeerderingskippen': Chicken,
    Pluimvee: Chicken,
    Slachtpluimvee: Chicken,
    'Niet eierleggende kippen': Chicken,
    Eendagskuikens: Chicken,

    // overige vogels
    Duiven: Pigeon,
    Fazanten: Parrot,
    Kooivogels: Parrot,
    Siervogels: Parrot,
    'Overige pluimvee': Parrot,

    // paarden
    Paarden: Horse,
    Merries: Horse,
    Ponies: Horse,
    Eenhoevigen: Horse,

    // kleine herkauwers
    Schapen: Sheep,
    'Niet melkgevende schapen': Sheep,
    Lammeren: Sheep,
    Geiten: Goat,
    Herkauwers: Sheep,

    // kleine zoogdieren
    Konijnen: Rabbit,
    Gezelschapskonijnen: Rabbit,
    Knaagdieren: Rabbit,
    Nertsen: Rabbit,

    // vissen / reptielen
    Aquariumvissen: Fish,
    Vissen: Fish,
    Reptielen: Turtle,
    Terrariumdieren: Turtle,

    // fallback-achtige generieken (optioneel)
    Laboratoriumdieren: Rabbit,
}

export default function Medicine() {
    const [showMore, setShowMore] = useState<boolean>(false)
    const [isOnMobile, setIsOnMobile] = useState<boolean>(false)

    const maxAnimalsVisible = 3
    const visibleAnimals = doeldierenArray.slice(0, maxAnimalsVisible)
    const remainingAnimals = doeldierenArray.length - maxAnimalsVisible

    useEffect(() => {
        const media = window.matchMedia('(max-width: 540px)')
        setIsOnMobile(media.matches)

        const listener = () => setIsOnMobile(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [])

    return (
        <div className="medicine">
            <div
                className={`container_medicine ${showMore ? 'open' : ''}`}
                onClick={() => {
                    if (!showMore && window.innerWidth <= 640) {
                        setShowMore(true)
                    }
                }}
            >
                <div className="medicine_header">
                    <div className="medicine_titles">
                        <span className="medicine_productnaam">Milbemycin oxime Praziquantel Chew Alfamed 12.5 mg / 125 mg kauwtabletten voor honden</span>

                        <div className={`medicine_doeldieren ${showMore ? 'open' : ''}`}>
                            {visibleAnimals.map((doeldier, index) => {
                                const src = doeldierenImagesMap[doeldier]
                                if (!src) return null

                                return (
                                    <div key={doeldier} className="container_doeldier">
                                        <img aria-hidden="true" src={src} alt={`impressie_${doeldier}`} className="image_Doeldier" />
                                        {index < visibleAnimals.length - 1 && <div aria-hidden="true" className="fade_Doeldier" />}
                                    </div>
                                )
                            })}

                            {remainingAnimals > 0 && (
                                <div className="container_doeldier doeldieren_remaining">
                                    <span className="text_remaining">+{remainingAnimals}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="medicine_subtitles">
                        <span className="medicine_handelsvergunninghouder">B. Braun Melsungen AG (Melsungen)</span>
                    </div>
                </div>

                <div className={`medicine_main ${showMore ? 'show' : ''}`}>
                    <div className="container_main">
                        <div className="medicine_info">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="medicine_afleverstatus">UDA - Uitsluitend verkrijgbaar bij een dierenarts of op diergeneeskundig voorschrift [recept] van een dierenarts bij een apotheek</span>
                        </div>

                        <div className="medicine_info">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <a href="#" download target="_blank" rel="noopener noreferrer" className="medicine_spc-etiket-bijsluiter">
                                Download bijsluiter
                            </a>
                        </div>

                        <div className="medicine_info">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="medicine_doeldieren">Diersoorten: kippen, ganzen, konijnen, paarden, runderen, reptielen</span>
                        </div>

                        <div className="medicine_disclaimer">
                            <span className="text_disclaimer">Neem bij vragen altijd contact op met uw dierenarts.</span>
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
                            <span className="medicine_registratienummer">REG NL: 110212</span>
                            <span className="medicine_procedurenummer">IT/V/0125/002</span>
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
