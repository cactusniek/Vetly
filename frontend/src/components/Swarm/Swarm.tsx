import { useState } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import { type SwarmAnimal, type SwarmGroup } from '@/global/types/types'

import { Cat, Chicken, Duck, Fish, Goose, Parrot, Pigeon, Turkey, Turtle } from '@/assets'

import '@/styles/global.scss'
import './swarm.scss'

const animals: SwarmAnimal[] = [
    { id: 'cat', group: 'cat', Icon: Cat, left: 3, top: 8, width: 15 },
    { id: 'chicken', group: 'birds', Icon: Chicken, left: 24, top: 3, width: 11 },
    { id: 'duck', group: 'duck', Icon: Duck, left: 42, top: 10, width: 14 },
    { id: 'parrot', group: 'birds', Icon: Parrot, left: 14, top: 30, width: 10 },
    { id: 'goose', group: 'birds', Icon: Goose, left: 33, top: 40, width: 13 },
    { id: 'pigeon', group: 'birds', Icon: Pigeon, left: 52, top: 26, width: 10 },
    { id: 'turtle', group: 'turtle', Icon: Turtle, left: 2, top: 52, width: 13 },
    { id: 'fish', group: 'fish', Icon: Fish, left: 18, top: 68, width: 12 },
    { id: 'turkey', group: 'birds', Icon: Turkey, left: 46, top: 58, width: 12 },
]

const medicines: Record<SwarmGroup, number> = {
    birds: 386,
    cat: 859,
    duck: 19,
    fish: 9,
    turtle: 16,
}

export default function Swarm() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    const [group, setGroup] = useState<SwarmGroup>('turtle')

    const species = locale.sections.swarm[group]

    return (
        <div className="container_swarm">
            <div className="container_animals">
                {animals.map(animal => (
                    <button
                        key={animal.id}
                        onClick={() => setGroup(animal.group)}
                        type="button"
                        className={`button_animal ${animal.group === group ? 'active' : ''}`}
                        style={{ left: `${animal.left}%`, top: `${animal.top}%`, width: `${animal.width}%` }}
                    >
                        <animal.Icon className="icon_Animal" />
                    </button>
                ))}
            </div>

            <div key={group} className="container_species">
                <h2 className="title_species">{species.title}</h2>

                <p className="text_species">{species.text}</p>

                <span className="text_medicines">
                    {medicines[group]} {locale.sections.swarm_medicines}
                </span>
            </div>
        </div>
    )
}
