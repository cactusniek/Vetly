import type { MedicineResults } from './types'

export async function searchMedicines(query: string): Promise<MedicineResults[]> {
    if (!query) return []

    const response = await fetch(`URL HERE`)
    // `/api/medicines/search?q=${encodeURIComponent(query)}`

    if (!response.ok) throw new Error('Failed to fetch medicines')

    return response.json()
}
