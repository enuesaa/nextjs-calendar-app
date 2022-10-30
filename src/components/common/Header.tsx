import Link from 'next/link'
import styled from '@emotion/styled'

export const Header = () => {
  const Header = styled.header({
    width: '100vw',
    background: '#cccccc',
  })
  const HeaderInner = styled.div({
    margin: '0 auto',
    width: '96%',
    maxWidth: '1000px',
    color: '#1a1a1a',
  })
  const TopLink = styled.a({
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
  })
  const H1 = styled.h1({
    fontSize: '23px',
    margin: '0',
    lineHeight: '1.2',
    padding: '10px 16px',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.2)',
    },
  })

  return (
    <Header>
      <HeaderInner>
        <Link href={{ pathname: '/' }}>
          <TopLink>
            <H1>calendar</H1>
          </TopLink>
        </Link>
      </HeaderInner>
    </Header>
  )
}