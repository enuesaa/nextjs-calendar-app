import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/contexts/theme'
import { Global } from '@emotion/react'
import { globalCss } from '@/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
