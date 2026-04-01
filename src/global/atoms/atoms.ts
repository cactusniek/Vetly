import { atom } from 'jotai'

import type { Route } from '../types/types'

export const routesAtom = atom<Route[]>([
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
    { label: 'ToS', path: '/ToS' },
    { label: 'Login', path: '/login' },
])

export const socialsAtom = atom({
    LinkedIn: '#',
    WhatsApp: '#',
    Mail: '#',
    Github: 'https://github.com/cactusniek',
})
