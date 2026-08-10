import { type FunctionComponent, type SVGProps } from 'react'

export interface Route {
    label: string
    path: string
}

export interface HeaderProps {
    intro?: boolean
}

export type SearchCategory = 'all' | 'medicine' | 'owner' | 'animal'

export interface SearchCategoryOption {
    value: SearchCategory
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export interface SearchBarProps {
    onSearch: (query: string, category: SearchCategory) => void
    isLoading: boolean
    searchProgress: number
    searchMessage: string
    categories?: SearchCategoryOption[]
    dividerIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
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

// shape returned by the sync service, before it is mapped onto MedicineProps
export interface MedicineResponse {
    productnaam: string
    handelsvergunninghouder: string
    afleverstatus: string
    doeldieren: string
    wachttermijnen_doeldier_product_termijn: string
    registratienummer: string
    procedurenummer: string
}

export const supportedLanguages = ['nl', 'en'] as const

export type LocaleLanguage = (typeof supportedLanguages)[number]
