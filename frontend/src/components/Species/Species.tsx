import { useState } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { locales } from '@/global/translations'

import { type SpeciesAnimal, type SpeciesId } from '@/global/types/types'

import { Cat, Duck, Fish, Goose, Parrot, Pigeon, Turtle } from '@/assets'

import '@/styles/global.scss'
import './species.scss'

const animals: SpeciesAnimal[] = [
    { id: 'cat', Icon: Cat },
    { id: 'duck', Icon: Duck },
    { id: 'pigeon', Icon: Pigeon },
    { id: 'parrot', Icon: Parrot },
    { id: 'goose', Icon: Goose },
    { id: 'turtle', Icon: Turtle },
    { id: 'fish', Icon: Fish },
]

const medicines: Record<SpeciesId, number> = {
    cat: 859,
    duck: 18,
    fish: 8,
    goose: 0,
    parrot: 26,
    pigeon: 25,
    turtle: 14,
}

export default function Species() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    const [selected, setSelected] = useState<SpeciesId>('turtle')

    const details = locale.sections.species[selected]

    return (
        <div className="container_species">
            <div className="container_animals">
                {animals.map(animal => (
                    <button key={animal.id} onClick={() => setSelected(animal.id)} type="button" className={`button_animal button_${animal.id} ${animal.id === selected ? 'active' : ''}`}>
                        <animal.Icon className="icon_Animal" />
                    </button>
                ))}
            </div>

            <div key={selected} className="container_details">
                <h2 className="title_species">{details.title}</h2>

                <p className="text_species">{details.text}</p>

                <span className="text_medicines">
                    {medicines[selected]} {locale.sections.species_medicines}
                </span>
            </div>
        </div>
    )
}
