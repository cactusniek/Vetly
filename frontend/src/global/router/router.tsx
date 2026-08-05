import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useLanguage } from '@/global/hooks/useLanguage'

import Search from '@/site/Search/Search'

export function AppRouter() {
    useLanguage()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}
