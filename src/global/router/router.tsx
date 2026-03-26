import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Landing from '../../apps/site/Landing'
import Widget from '../../apps/widget/Widget'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/widget" element={<Widget />} />
            </Routes>
        </BrowserRouter>
    )
}
