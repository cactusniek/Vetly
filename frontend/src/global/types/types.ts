import { type FunctionComponent, type SVGProps } from 'react'

export type SearchCategory = 'all' | 'medicine' | 'owner' | 'animal'

export type SearchCategoryOption = {
    value: SearchCategory
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export type SearchBarProps = {
    onSearch: (query: string, category: SearchCategory) => void
    isLoading: boolean
    searchProgress: number
    searchMessage: string
    categories?: SearchCategoryOption[]
    dividerIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
}

export type MedicineProps = {
    productnaam: string
    handelsvergunninghouder: string
    afleverstatus: string
    bijsluiterUrl: string
    doeldieren: string
    wachttermijnen: string
    registratienummer: string
    procedurenummer: string
}

export const supportedLanguages = ['nl', 'en'] as const

export type LocaleLanguage = (typeof supportedLanguages)[number]
