import { type FunctionComponent, type SVGProps } from 'react'

export interface Route {
    label: string
    path: string
}

export type SwarmGroup = 'birds' | 'cat' | 'duck' | 'fish' | 'turtle'

export interface SwarmAnimal {
    id: string
    group: SwarmGroup
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>
    left: number
    top: number
    width: number
}

export const supportedLanguages = ['nl', 'en'] as const

export type LocaleLanguage = (typeof supportedLanguages)[number]

export interface MedicineResponse {
    productnaam: string
    handelsvergunninghouder: string
    afleverstatus: string
    doeldieren: string
    wachttermijnen_doeldier_product_termijn: string
    registratienummer: string
    procedurenummer: string
}

export interface MedicineProps {
    productnaam: string
    handelsvergunninghouder: string
    afleverstatus: string
    bijsluiterUrl: string
    doeldieren: string
    wachttermijnen: string
    registratienummer: string
    procedurenummer: string
}
