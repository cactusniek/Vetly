export type MedicineResults = {
    registratienummer: string | undefined | null
    soort: string | undefined | null
    productnaam: string | undefined | null
    inschrijvingsdatum: string | undefined | null
    datum_uitgeschreven_ingetrokken: string | undefined | null
    handelsvergunninghouder: string | undefined | null
    afleverstatus: string | undefined | null
    farmaceutische_vorm: string | undefined | null
    procedurenummer: string | undefined | null
    toedieningsweg: string | undefined | null
    spc_etiket_en_bijsluiter: string | undefined | null
    spc_wijzig_datum: string | undefined | null
    public_assessment_report: string | undefined | null
    atcvet: string | undefined | null
    werkzame_stoffen: string | undefined | null
    webpagina_diergeneesmiddel: string | undefined | null
    doeldieren: string | undefined | null
    wachttermijnen_doeldier_product_termijn: string | undefined | null
    partijkeuringen_kenmerk_nummer_datum: string | undefined | null
    besluiten: string | undefined | null
}

export type SearchProps = {
    onSearch: (query: string) => void
    isLoading: boolean
    searchProgress: number
    searchMessage: string
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

export type Route = {
    label: string
    path: string
}
