import React from 'react'

import { useRef, useEffect, useState } from 'react'

import '../styles/result.scss'

// import animals here
import circleInfo from '../assets/circle-info.svg'

import { BeeIcon, CatIcon, ChickenIcon, CowIcon, DogIcon, DuckIcon, FishIcon, GoatIcon, GooseIcon, HorseIcon, ParrotIcon, PigIcon, PigeonIcon, RabbitIcon, SheepIcon, TurkeyIcon, TurtleIcon } from '../assets'
// ;<img src={circleInfo} className="medicine-info-icon" />

export default function Medicine() {
    return (
        <div className="component-medicine">
            <div className="container-medicine"></div>
        </div>
    )
}
