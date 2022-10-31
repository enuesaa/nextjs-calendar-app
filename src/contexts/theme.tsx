import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { white, dark } from '@/styles/theme'
import { useState, ReactNode, createContext } from 'react'

export const ToggleThemeContext = createContext<() => void>(() => {})

type Props = {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: Props) => {
  const [isWhiteTheme, setTheme] = useState(true)
  const toggleTheme = () => { setTheme(!isWhiteTheme) }

  return (
    <EmotionThemeProvider theme={isWhiteTheme ? white : dark}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </EmotionThemeProvider>
  )
}
