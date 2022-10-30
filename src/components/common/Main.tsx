import { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
  children: ReactNode
}
export function Main({ children }: Props) {
  const Section = styled.section({
    width: '96%', // todo fix
    maxWidth: '1000px',
    margin: '0 auto',
    minHeight: '100vh',
    padding: '10px 0',
  })

  return (
    <>
      <Section>{children}</Section>
    </>
  )
}