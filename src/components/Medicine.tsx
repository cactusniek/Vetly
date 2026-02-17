import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/medicine.scss'

import { CircleSmall, ArrowToggle } from '../assets'

import { AnimalFade, Bee, Cat, Chicken, Cow, Dog, Duck, Fish, Goat, Goose, Horse, Parrot, Pig, Pigeon, Rabbit, Sheep, Turkey, Turtle } from '../assets'

const doeldierenArray: string[] = ['Katten', 'Siervogels', 'Reptielen']

const doeldierenImagesMap: Record<string, string> = {
    Bijen: Bee,
    Katten: Cat,
    Kippen: Chicken,
    Koeien: Cow,
    Runderen: Cow,
    Kalveren: Cow,
    Honden: Dog,
    Eenden: Duck,
    Vissen: Fish,
    Geiten: Goat,
    Ganzen: Goose,
    Paarden: Horse,
    Siervogels: Parrot,
    Varkens: Pig,
    Biggen: Pig,
    Duiven: Pigeon,
    Konijnen: Rabbit,
    Schapen: Sheep,
    Kalkoenen: Turkey,
    Reptielen: Turtle,
}

export default function Medicine() {
    const [showMoreAnimals, setShowMoreAnimals] = useState<boolean>(false)
    const [showMore, setShowMore] = useState<boolean>(false)

    return (
        <div className="medicine">
            <div className="container_medicine">
                <div className="medicine_header">
                    <div className="medicine_titles">
                        <span className="medicine_productnaam">Metomotyl 1000 mg tablet voor honden en katten</span>

                        <div
                            className={`medicine_doeldieren ${showMoreAnimals ? 'show' : ''}`}
                            onClick={() => setShowMoreAnimals(prev => !prev)} // toggle class
                        >
                            {doeldierenArray.map((animal, index) => {
                                const imgSrc = doeldierenImagesMap[animal]
                                if (!imgSrc) return null

                                return (
                                    <div key={animal} className="AnimalWrapper">
                                        <img src={imgSrc} alt={animal} className="Animal" />
                                        {/* only add fade if not the last animal */}
                                        {index < doeldierenArray.length - 1 && <img src={AnimalFade} alt="fade" className="AnimalFade" />}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="medicine_subtitles">
                        <span className="medicine_handelsvergunninghouder">Nextmune Italy S.R.L.</span>

                        <div className="medicine_references">
                            <span className="medicine_registratienummer">REG NL: 110212</span>
                            <span className="references_devider">|</span>
                            <span className="medicine_procedurenummer">IT/V/0125/002</span>
                        </div>
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

                        <div className="medicine_disclaimer">Neem bij vragen altijd contact op met uw dierenarts.</div>

                        <div className="medicine_bronvermelding">
                            <span className="text_bronvermelding">Bronnen:</span>
                            <a href="diergeneesmiddeleninformatiebank.nl" target="_blank" rel="noopener noreferrer" className="anchor_bronvermelding">
                                diergeneesmiddeleninformatiebank.nl
                            </a>
                            <a href="ema.europe.eu" target="_blank" rel="noopener noreferrer" className="anchor_bronvermelding">
                                ema.europe.eu
                            </a>
                        </div>

                        <div className="medicine_references">
                            <span className="medicine_registratienummer">REG NL: 110212</span>
                            <span className="references_devider">|</span>
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
