import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { useAtom } from 'jotai'
import { languageAtom } from '@/global/atoms/atoms'

import { useLanguage } from '@/global/hooks/useLanguage'

import Landing from '@/site/Landing/Landing'
import Search from '@/site/Search/Search'

export function AppRouter() {
    const [language] = useAtom(languageAtom)

    useLanguage()

    return (
        <BrowserRouter>
            <Helmet htmlAttributes={{ lang: language }} />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}
