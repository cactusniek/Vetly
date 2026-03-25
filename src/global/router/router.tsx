import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Widget from '../../apps/widget/Widget'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/widget" element={<Widget />} />

                {/* <Route path="*" element={<Navigate to="/widget" replace />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
