import React from 'react'

import { useRef, useEffect, useState } from 'react'

import Search from './components/Search'
import Medicine from './components/Medicine'

import type { MedicineProps } from './global/types'

import './styles/global.scss'

function App() {
    const [medicines, setMedicines] = useState<MedicineProps[]>([])

    const [isLoading, setIsLoading] = useState(false)
    const [searchProgress, setSearchProgress] = useState<number>(0)
    const [hasSearched, setHasSearched] = useState(false)
    const [searchMessage, setSearchMessage] = useState<string>('')

    // of zet alles onder /api
    const [serverUrl, setServerUrl] = useState<string>('http://localhost:3000')
    // const [serverUrl, setServerUrl] = useState<string>('https://cbg-widget.bitsenbytes.net/api')

    async function handleSearch(query: string) {
        const trimmed = query.trim()

        if (trimmed.length === 0) {
            setHasSearched(false)
            setIsLoading(false)
            setSearchProgress(0)
            setMedicines([])
            setSearchMessage('')
            return
        }

        try {
            setHasSearched(true)
            setIsLoading(true)
            setSearchProgress(0)

            const res = await fetch(`${serverUrl}/search?q=${encodeURIComponent(query)}&max=50`)

            setSearchProgress(25)

            if (!res.ok) {
                setSearchProgress(0)

                throw new Error(`Request failed: ${res.status}`)
            }

            setSearchProgress(60)

            const raw = await res.json()

            const mapped: MedicineProps[] = raw.map((med: any) => ({
                productnaam: med.productnaam,
                handelsvergunninghouder: med.handelsvergunninghouder,
                afleverstatus: med.afleverstatus,
                doeldieren: med.doeldieren,
                wachttermijnen: med.wachttermijnen_doeldier_product_termijn,
                bijsluiterUrl: med.spc_etiket_en_bijsluiter,
                registratienummer: med.registratienummer,
                procedurenummer: med.procedurenummer,
            }))

            console.log(medicines)

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
                        registratienummer={med.registratienummer}
                        procedurenummer={med.procedurenummer}
                    />
                ))}
            </div>

            {medicines.length === 0 && <div className="background"></div>}

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
