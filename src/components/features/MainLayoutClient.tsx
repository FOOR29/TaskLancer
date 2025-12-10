'use client'
import { useState, ReactNode } from 'react'
import { HeaderSearch, Sidebar } from '@components'

interface MainLayoutClientProps {
    children: ReactNode
}

export const MainLayoutClient = ({ children }: MainLayoutClientProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen">
            {/* SIDEBAR */}
            <Sidebar
                isMobileOpen={isSidebarOpen}
                onMobileClose={() => setIsSidebarOpen(false)}
            />

            {/* CONTENIDO */}
            <main className="ml-60 max-md:ml-0">
                <HeaderSearch onMenuClick={() => setIsSidebarOpen(true)} />
                {children}
            </main>
        </div>
    )
}
