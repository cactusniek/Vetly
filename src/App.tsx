import React from 'react'

import { useRef, useEffect, useState } from 'react'

import Search from './components/Search'
import Medicine from './components/Medicine'

import './styles/global.scss'

import { Background } from './assets'

type MedicineType = {
    productnaam: string
    doeldierenArray: string[]
    handelsvergunninghouder: string
    afleverstatus: string
    doeldieren: string
    wachttermijnen: string
    bijsluiterUrl: string
    registratienummer: string
    procedurenummer: string
}

function App() {
    const [medicines, setMedicines] = useState<MedicineType[]>([])

    const [isLoading, setIsLoading] = useState(false)
    const [searchProgress, setSearchProgress] = useState<number>(0)
    const [hasSearched, setHasSearched] = useState(false)
    const [searchMessage, setSearchMessage] = useState<string>('')

    async function handleSearch(query: string) {
        if (!query.trim()) return

        try {
            setHasSearched(true)
            setIsLoading(true)
            setSearchProgress(0)

            const res = await fetch(`http://localhost:3000/search?q=${encodeURIComponent(query)}&max=50`)

            setSearchProgress(25)

            if (!res.ok) {
                throw new Error(`Request failed: ${res.status}`)
            }

            setSearchProgress(60)

            const raw = await res.json()

            // Verwacht dat `raw` de array uit de CBG-API is:
            const mapped: MedicineType[] = raw.map((med: any) => ({
                productnaam: med.productnaam,
                handelsvergunninghouder: med.handelsvergunninghouder,
                afleverstatus: med.afleverstatus,
                doeldieren: med.doeldieren,
                wachttermijnen: med.wachttermijnen_doeldier_product_termijn,
                bijsluiterUrl: med.spc_etiket_en_bijsluiter,
                registratienummer: med.registratienummer,
                procedurenummer: med.procedurenummer,
                doeldierenArray: [],
            }))

            setMedicines(mapped)

            setSearchProgress(100)

            setTimeout(() => {
                setIsLoading(false)
            }, 300)
        } catch (err) {
            console.error('Error fetching medicines:', err)
            setSearchMessage('Fout met verbinding')
        } finally {
            setTimeout(() => {
                setSearchProgress(0)
            }, 500)
        }
    }

    useEffect(() => {
        const resultCount = medicines.length

        if (!hasSearched) return setSearchMessage('')

        if (isLoading) return setSearchMessage('Zoeken...')

        if (resultCount > 0) return setSearchMessage(`Er ${resultCount === 1 ? 'is' : 'zijn'} ${resultCount} ${resultCount === 1 ? 'resultaat' : 'resultaten'} gevonden`)

        if (resultCount <= 0) setSearchMessage('Geen resultaten gevonden')
    }, [isLoading, medicines.length, hasSearched])

    return (
        <div className="widget">
            <Search onSearch={handleSearch} isLoading={isLoading} searchProgress={searchProgress} searchMessage={searchMessage} />

            <div className="medicines">
                {medicines.map(med => (
                    <Medicine
                        key={med.registratienummer}
                        productnaam={med.productnaam}
                        handelsvergunninghouder={med.handelsvergunninghouder}
                        afleverstatus={med.afleverstatus}
                        doeldieren={med.doeldieren}
                        wachttermijnen={med.wachttermijnen}
                        bijsluiterUrl={med.bijsluiterUrl}
                        registratienummer={med.registratienummer}
                        procedurenummer={med.procedurenummer}
                    />
                ))}
            </div>

            <div className="background">
                <div className="container_background">
                    <img aria-hidden="true" alt="vector_Background" src={Background} className="vector_Background" />
                </div>
            </div>

            <div className="ToS">
                <div className="container_ToS">
                    <a href="#" className="anchor_ToS">
                        Algemene Voorwaarden
                    </a>

                    <a href="#" className="anchor_copyright">
                        Copyright
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App

// optional: use URL params to change colors when loading in
