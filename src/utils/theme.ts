import { cookies } from 'next/headers'

export type Theme = 'light' | 'dark'

export async function getTheme(): Promise<Theme> {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value as Theme

  if (theme === 'light' || theme === 'dark') {
    return theme
  }
  return 'light'
}

export async function setThemeCookie(theme: Theme) {
  'use server'

  const cookieStore = await cookies()
  cookieStore.set('theme', theme, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: false, // Allow client-side access
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  })
}
