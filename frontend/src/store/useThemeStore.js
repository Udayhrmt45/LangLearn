import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem('langLearn-theme') || 'coffee',
    setTheme: (theme) => {
        localStorage.setItem('langLearn-theme', theme),
        set({theme})
    },
}))