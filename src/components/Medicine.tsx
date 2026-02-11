import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/medicine.scss'

import { CircleSmall, ArrowToggle } from '../assets'

import { BeeIcon, CatIcon, ChickenIcon, CowIcon, DogIcon, DuckIcon, FishIcon, GoatIcon, GooseIcon, HorseIcon, ParrotIcon, PigIcon, PigeonIcon, RabbitIcon, SheepIcon, TurkeyIcon, TurtleIcon } from '../assets'

export default function Medicine() {
    const [showMore, setShowMore] = useState<boolean>(false)

    return (
        <div className="medicine">
            <div className="medicine_container_top">
                <div className="medicine_left">
                    <h1 className="medicine_productnaam">Metomotyl 5 ml oplossing voor injectie voor katten</h1>

                    <div className={`medicine_details ${showMore ? 'show' : ''}`}>
                        <div className="detail_afleverstatus">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="detail_text">Uitsluitend door dierenartsen te gebruiken</span>
                        </div>

                        <div className="detail_farmaceutische-vorm">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="detail_text">Oplossing voor injectie</span>
                        </div>

                        <div className="detail_toedieningsweg">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <span className="detail_text">Intramusculair gebruik, Subcutaan gebruik</span>
                        </div>

                        <div className="detail_spc-etiket-bijsluiter">
                            <img src={CircleSmall} className="icon_CircleSmall" />
                            <a href="#" className="detail_anchor" download target="_blank" rel="noopener noreferrer">
                                Download bijsluiter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="medicine_right">
                    <div className="medicine_meta">
                        <div className="medicine_doeldieren">
                            {/* if doeldieren > 5; display maximum of 5 animals + {number of animals left} */}
                            <img src={CatIcon} className="icon_Cat" />
                            <img src={TurtleIcon} className="icon_Turtle" />
                            <img src={FishIcon} className="icon_Fish" />
                        </div>

                        <div className="medicine_details">
                            <span className="medicine_handelsvergunninghouder">Chanelle Pharmaceuticals Manufacturing Ltd.</span>

                            <span className="medicine_registratienummer">113871</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* className={`container_searchbar ${searchBarActive || searchBarValue.length > 0 ? 'shift' : ''}`} */}
            <div className="medicine_container_bottom">
                <div onClick={() => setShowMore(prev => !prev)} className="medicine_toggle">
                    <img src={ArrowToggle} className={`icon_ArrowToggle ${showMore ? 'rotate' : ''}`} />
                    <span className="toggle_text"> {showMore ? 'Laat minder informatie zien' : 'Laat meer informatie zien'}</span>
                </div>
            </div>
        </div>
    )
}
