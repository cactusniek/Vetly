import { Outlet } from 'react-router-dom'

import { useScreenTooSmall } from '@/global/hooks/useScreenTooSmall'

import ScreenWarning from '@/components/ScreenWarning/ScreenWarning'

import '@/styles/global.scss'
import './layout.scss'

export default function Layout() {
    const tooSmall = useScreenTooSmall()

    if (tooSmall) return <ScreenWarning />

    return (
        <div className="layout">
            <Outlet />
        </div>
    )
}
