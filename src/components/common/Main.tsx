import { ReactNode } from 'react'
import { css } from '@emotion/react'

const style = {
  section: css({
    width: '96%', // todo fix
    maxWidth: '1000px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '10px 0',
  })
}

type Props = {
  children: ReactNode
}
export function Main({ children }: Props) {
  return (
    <>
      <section css={style.section}>{children}</section>
    </>
  )
}