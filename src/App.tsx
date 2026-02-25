import React from 'react'

import { useRef, useEffect, useState } from 'react'

// import { useAtom } from 'jotai'
// import { searchBarActiveAtom } from './globals/atoms'

// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import './styles/global.scss'

import Search from './components/Search'
import Medicine from './components/Medicine'

type MedicineType = {
    productnaam: string
    doeldierenArray: string[]
    handelsvergunninghouder: string
    afleverstatus: string
    doeldieren: string
    bijsluiterUrl: string
    registratienummer: string
    procedurenummer: string
}

const medicinesMockup = [
    {
        productnaam: 'Tsefalen 1000 mg filmomhulde tabletten voor honden',
        handelsvergunninghouder: 'Nextmune Italy S.R.L.',
        afleverstatus: 'UDD - Uitsluitend door dierenartsen te gebruiken',
        doeldieren: 'Honden',
        bijsluiterUrl: '#',
        registratienummer: '110212',
        procedurenummer: 'IT/V/0125/002',
    },
    {
        productnaam: 'Nobilis Multriva REOm emulsie voor injectie voor kippen',
        handelsvergunninghouder: 'Intervet International B.V.',
        afleverstatus: 'UDA - Uitsluitend verkrijgbaar bij een dierenarts of op diergeneeskundig voorschrift [recept] van een dierenarts bij een apotheek',
        doeldieren: 'Kippen',
        bijsluiterUrl: '#',
        registratienummer: '133630',
        procedurenummer: 'EMEA/V/C/006501',
    },

    {
        productnaam: 'Vetflurane 1000 mg/g vloeistof voor inhalatiedamp',
        handelsvergunninghouder: 'VIRBAC SA',
        afleverstatus: 'UDD - Uitsluitend door dierenartsen te gebruiken',
        doeldieren: 'Fretten#Honden#Katten#Knaagdieren#Paarden#Reptielen#Siervogels',
        bijsluiterUrl: '#',
        registratienummer: '106479',
        procedurenummer: 'IE/V/0460/001',
    },

    {
        productnaam: 'Amoxy Active CTD 697 mg/g, poeder voor gebruik in drinkwater voor kippen, kalkoenen en eenden',
        handelsvergunninghouder: 'Dopharma Research B.V.',
        afleverstatus: 'UDD - Uitsluitend door dierenartsen te gebruiken',
        doeldieren: 'Eenden#Kalkoenen#imdsimd#kasmfkmf#jndjfndjf',
        bijsluiterUrl: '#',
        registratienummer: '122423',
        procedurenummer: 'NL/V/0308/001',
    },

    {
        productnaam: 'Formicpro 68,2 g strips voor in de bijenkorf voor honingbijen',
        handelsvergunninghouder: 'NOD Apiary Ireland Limited',
        afleverstatus: 'VRIJ - Vrij verkrijgbaar zonder diergeneeskundig voorschrift [recept]',
        doeldieren: 'Bijen#blabla#Fretten',
        bijsluiterUrl: '#',
        registratienummer: '126198',
        procedurenummer: 'IE/V/0515/001',
    },
]

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [medicines, setMedicines] = useState<MedicineType[]>([])

    async function handleSearch(query: string) {
        setIsLoading(true)

        try {
            // hier doe je je echte fetch op basis van `query`
            // const res = await fetch(`/api/medicines?query=${encodeURIComponent(query)}`)
            // const data = await res.json()
            // setMedicines(data)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="widget">
            <Search onSearch={handleSearch} isLoading={isLoading} resultsCount={medicines.length} />

            <div className="medicines">
                {!isLoading &&
                    medicinesMockup.map(med => (
                        <Medicine
                            key={med.registratienummer}
                            productnaam={med.productnaam}
                            handelsvergunninghouder={med.handelsvergunninghouder}
                            afleverstatus={med.afleverstatus}
                            doeldieren={med.doeldieren}
                            bijsluiterUrl={med.bijsluiterUrl}
                            registratienummer={med.registratienummer}
                            procedurenummer={med.procedurenummer}
                        />
                    ))}
            </div>

            {/* <div className="medicines"> */}
            {/* loading spinner: <DotLottieReact src="https://lottie.host/bb727232-fdd0-41c8-9590-4febb07ca6b6/kagK7Konq6.lottie" stateMachineId="StateMachine1" /> */}
            {/* als er gezocht wordt laat de loading spinner zien */}
            {/* <Medicine /> */}
            {/* <Medicine /> */}
            {/* <Medicine /> */}
            {/* <Medicine /> */}
            {/* <Medicine /> */}
            {/* </div> */}

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
