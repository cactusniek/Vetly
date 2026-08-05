import { useEffect, useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { medicinesApi } from '@/global/api/api'

import { messages, locales } from '@/global/translations'

import type { MedicineProps } from '@/global/types/types'

import SearchBar from '@/components/SearchBar/SearchBar'
import Medicine from '@/components/Medicine/Medicine'
import Disclaimer from '@/components/Disclaimer/Disclaimer'

import { BackgroundSmall, BackgroundLarge } from '@/assets'

import '@/styles/global.scss'
import './search.scss'

function Search() {
    const [language] = useAtom(languageAtom)
    const locale = locales[language]

    const [medicines, setMedicines] = useState<MedicineProps[]>([])

    const [isLoading, setIsLoading] = useState(false)
    const [searchProgress, setSearchProgress] = useState<number>(0)
    const [hasSearched, setHasSearched] = useState(false)
    const [searchMessage, setSearchMessage] = useState<string>('')

    const [showDisclaimer, setShowDisclaimer] = useState(false)

    const handleSearch = useCallback(
        async (query: string) => {
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
                setShowDisclaimer(false)
                setHasSearched(true)
                setIsLoading(true)
                setSearchProgress(0)

                setSearchProgress(25)

                const response = await medicinesApi.searchMedicines(query)

                setSearchProgress(60)

                setMedicines(response)

                setSearchProgress(100)

                setTimeout(() => {
                    setIsLoading(false)
                }, 300)
            } catch (err) {
                console.error(err)
                setSearchMessage(messages[language].connection_error)
            } finally {
                setTimeout(() => {
                    setSearchProgress(0)
                }, 500)
            }
        },
        [language],
    )

    useEffect(() => {
        const resultCount = medicines.length

        if (showDisclaimer || !hasSearched) return setSearchMessage('')

        if (isLoading) return setSearchMessage(locale.search.searching)

        if (resultCount > 0) return setSearchMessage(resultCount === 1 ? locale.search.result_singular : locale.search.result_plural.replace('{count}', String(resultCount)))

        if (resultCount <= 0) setSearchMessage(locale.search.no_results)
    }, [isLoading, medicines.length, hasSearched, locale, showDisclaimer])

    function handleToggleDisclaimer() {
        setShowDisclaimer(prev => !prev)
    }

    return (
        <>
            <Helmet>
                <title>{locale.search.title}</title>
            </Helmet>

            <div className="container_search">
                <SearchBar onSearch={handleSearch} isLoading={isLoading} searchProgress={searchProgress} searchMessage={searchMessage} />

                {showDisclaimer ? (
                    <Disclaimer />
                ) : (
                    <>
                        <div className="results">
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

                        {medicines.length === 0 && (
                            <div className="background">
                                <BackgroundSmall className="image_BackgroundSmall" />

                                <BackgroundLarge className="image_BackgroundLarge" />
                            </div>
                        )}
                    </>
                )}

                <div className="container_bottom">
                    <div className="container_links">
                        <button onClick={handleToggleDisclaimer} type="button" className={`button_disclaimer ${showDisclaimer ? 'active' : ''}`}>
                            {locale.search.disclaimer_link}
                        </button>

                        <a href="#" className="anchor_landing">
                            {locale.search.landing_link}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
