import { Outlet } from 'react-router-dom'

import '@/styles/global.scss'
import './layout.scss'

export default function Layout() {
    return (
        <div className="layout">
            <Outlet />
        </div>
    )
}
