import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HelmetProvider } from 'react-helmet-async'

import { AppRouter } from './global/router/router'

import './styles/global/global.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <AppRouter />
        </HelmetProvider>
    </StrictMode>,
)
