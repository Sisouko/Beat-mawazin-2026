import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'

function Layout() {
const location = useLocation()

useEffect(() => {
    const titles = {
    '/': 'Beat — Mawazin 2026',
    '/programme': 'Programme — Beat Mawazin',
    '/planning': 'Mon Planning — Beat Mawazin',
    '/passeport': 'Mon Passeport — Beat Mawazin'
    }
    document.title = titles[location.pathname] || 'Beat-Mawazin 2026'
}, [location.pathname])

return (
    <div className="layout">
        <main className="main-content">
            <Outlet />
        </main>
    <Navbar />
    </div>
)
}export default Layout