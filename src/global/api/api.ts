import type { MedicineProps } from '../types/types'

export class Api {
    private static serverUrl: string = 'http://localhost:3000/api'
    // private static serverUrl: string = 'https://cbg-widget.bitsenbytes.net/api'

    private static async fetchData(endpoint: string, method: string, body?: any): Promise<any> {
        try {
            const response = await fetch(this.serverUrl + endpoint, {
                method: method,
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                },
                // credentials: 'include',
                body: body ? JSON.stringify(body) : undefined,
            })

            if (!response.ok) {
                throw new Error(`${response.status}, ${response.statusText}`)
            }

            return response.json()
        } catch (err) {
            console.error(`Failed to fetch: error: ${err}, endpoint: ${endpoint}, method: (${method})`)
            throw err
        }
    }

    public static async searchMedicines(query: string): Promise<MedicineProps[]> {
        const endpoint = `/search?q=${encodeURIComponent(query)}`

        const raw = await this.fetchData(endpoint, 'GET')

        const mapped: MedicineProps[] = raw.map((med: any) => ({
            productnaam: med.productnaam,
            handelsvergunninghouder: med.handelsvergunninghouder,
            afleverstatus: med.afleverstatus,
            bijsluiterUrl: `${this.serverUrl}/files/${encodeURIComponent(String(med.registratienummer))}/bijsluiter.pdf`,
            doeldieren: med.doeldieren,
            wachttermijnen: med.wachttermijnen_doeldier_product_termijn,
            registratienummer: med.registratienummer,
            procedurenummer: med.procedurenummer,
        }))

        return mapped
    }
}
