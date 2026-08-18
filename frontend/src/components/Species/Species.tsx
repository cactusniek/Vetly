import { useEffect, useState } from 'react'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { medicinesApi } from '@/global/api/api'

import { locales } from '@/global/translations'

import { type SpeciesAnimal, type SpeciesId } from '@/global/types/types'

import { Cat, Duck, Fish, Parrot, Rabbit, Turtle } from '@/assets'

import '@/styles/global.scss'
import './species.scss'

const animals: SpeciesAnimal[] = [
    { id: 'cat', Icon: Cat },
    { id: 'duck', Icon: Duck },
    { id: 'parrot', Icon: Parrot },
    { id: 'rabbit', Icon: Rabbit },
    { id: 'turtle', Icon: Turtle },
    { id: 'fish', Icon: Fish },
]

export default function Species() {
    const [language] = useAtom(languageAtom)

    const [selected, setSelected] = useState<SpeciesId>('turtle')
    const [medicines, setMedicines] = useState<Record<string, number>>({})

    const locale = locales[language]
    const details = locale.sections.species[selected]

    useEffect(() => {
        async function load() {
            const counts = await medicinesApi.getDoeldieren()

            setMedicines(counts)
        }

        load()
    }, [])

    return (
        <div className="container_species">
            <div className="container_cluster">
                <div className="container_animals">
                    {animals.map(animal => (
                        <button key={animal.id} onClick={() => setSelected(animal.id)} type="button" className={`button_animal button_${animal.id} ${animal.id === selected ? 'active' : ''}`}>
                            <animal.Icon className="icon_Animal" />
                        </button>
                    ))}
                </div>
            </div>

            <div key={selected} className="container_details">
                <h2 className="title_species">{details.title}</h2>

                <p className="text_species">{details.text}</p>

                <span className="text_medicines">
                    {medicines[selected] ?? '—'} {locale.sections.species_medicines}
                </span>
            </div>
        </div>
    )
}
