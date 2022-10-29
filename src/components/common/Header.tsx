import Link from 'next/link'
import styled from '@emotion/styled'

export const Header = () => {
  const Header = styled.header({
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.3)',
  })
  const HeaderInner = styled.div({
    padding: '5px 0',
    margin: '0 auto',
    width: '96%',
    maxWidth: '1000px',
    color: '#cccccc',
  })
  const TopLink = styled.a({
    display: 'inline-block',
    fontSize: '16px',
    padding: '5px',
    cursor: 'pointer',
  })
  const H1 = styled.h1({
    fontSize: '23px',
    lineHeight: '1.2',
    padding: '10px 0',
  })

  return (
    <Header>
      <HeaderInner>
        <Link href={{ pathname: '/' }}>
          <TopLink>
            <H1>a</H1>
          </TopLink>
        </Link>
      </HeaderInner>
    </Header>
  )
}