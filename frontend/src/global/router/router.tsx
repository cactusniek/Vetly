import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useLanguage } from '@/global/hooks/useLanguage'

import Landing from '@/site/Landing/Landing'
import Search from '@/site/Search/Search'

export function AppRouter() {
    useLanguage()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}
