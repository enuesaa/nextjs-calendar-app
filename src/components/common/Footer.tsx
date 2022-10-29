import styled from '@emotion/styled'

export const Footer = () => {
  const Footer = styled.footer({
    width: '100vw',
    padding: '10px 0',
    background: 'rgba(0, 0, 0, 0.4)',
  })
  const FooterInner = styled.div({
    padding: '10px 0',
    margin: '0 auto',
    width: '96%',
    color: 'rgba(148, 163, 184, 1)',
  })

  return (
    <Footer>
      <FooterInner>
      </FooterInner>
    </Footer>
  )
}