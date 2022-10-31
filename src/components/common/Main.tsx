import { ReactNode } from 'react'
import { css, useTheme } from '@emotion/react'

type Props = {
  children: ReactNode
}
export function Main({ children }: Props) {
  const theme = useTheme()

  const style = {
    section: css({
      width: '100vw',
      margin: '0 auto',
      minHeight: '100vh',
      padding: '10px 0',
      background: theme.color.main,
    }),
    sectionInner: css({
      width: '96%',
      margin: '0 auto',
    })
  }

  return (
    <section css={style.section}>
      <div css={style.sectionInner}>
        {children}
      </div>
    </section>
  )
}