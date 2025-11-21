import { useTheme as useNewTheme } from '@/utils/ThemeProvider'

export const useTheme = () => {
    const { theme, toggleTheme, setTheme } = useNewTheme()
    return { theme, toggleTheme, setTheme }
}
