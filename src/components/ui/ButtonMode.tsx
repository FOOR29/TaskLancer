'use client'
import { useTheme } from '@/utils/ThemeProvider'

export const ButtonMode = () => {
    const { toggleTheme, theme } = useTheme()
    return (
        <button
            className='cursor-pointer hover:text-black dark:hover:text-white hover:scale-105 transition-all duration-500 text-[#484848] dark:text-[#B0B0B0] min-h-[44px] min-w-[44px] flex items-center justify-center'
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}>
            {theme == 'light' ? 'Noche' : 'Dia'}
        </button>
    )
}
