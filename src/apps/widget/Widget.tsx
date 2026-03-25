import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import { Api } from '../../global/api/api'

import Search from '../../components/Search'
import Medicine from '../../components/Medicine'

import type { MedicineProps } from '../../global/types/types'

import '../../styles/global.scss'

function Widget() {
    const [medicines, setMedicines] = useState<MedicineProps[]>([])

    const [isLoading, setIsLoading] = useState(false)
    const [searchProgress, setSearchProgress] = useState<number>(0)
    const [hasSearched, setHasSearched] = useState(false)
    const [searchMessage, setSearchMessage] = useState<string>('')

    // of zet alles onder /api
    const [serverUrl, setServerUrl] = useState<string>('http://localhost:3000/api')
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

            setSearchProgress(25)

            const response = await Api.searchMedicines(query)

            setSearchProgress(60)

            setMedicines(response)

            setSearchProgress(100)

            setTimeout(() => {
                setIsLoading(false)
            }, 300)
        } catch (err) {
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
        <>
            <Helmet>
                <title>Widget</title>
            </Helmet>

            <div className="widget">
                <Search onSearch={handleSearch} isLoading={isLoading} searchProgress={searchProgress} searchMessage={searchMessage} />

                <div className="medicines">
                    {medicines.map(med => (
                        <Medicine
                            key={med.registratienummer}
                            productnaam={med.productnaam}
                            handelsvergunninghouder={med.handelsvergunninghouder}
                            afleverstatus={med.afleverstatus}
                            bijsluiterUrl={med.bijsluiterUrl}
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

                        <a href="#" className="anchor_landing">
                            Animale.pet
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Widget
