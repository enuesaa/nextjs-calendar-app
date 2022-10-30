import Link from 'next/link'
import { css } from '@emotion/react'

const style = {
  header: css({
    width: '100vw',
    background: '#cccccc',
  }),
  headerInner: css({
    margin: '0 auto',
    width: '96%',
    maxWidth: '1000px',
    color: '#1a1a1a',
  }),
  topLink: css({
    display: 'inline-block',
    fontSize: '16px',
    cursor: 'pointer',
  }),
  h1: css({
    fontSize: '23px',
    margin: '0',
    lineHeight: '1.2',
    padding: '10px 16px',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.2)',
    },
  }),
} 

export const Header = () => {
  return (
    <header css={style.header}>
      <div css={style.headerInner}>
        <Link href={{ pathname: '/' }}>
          <a css={style.topLink}>
            <h1 css={style.h1}>calendar</h1>
          </a>
        </Link>
      </div>
    </header>
  )
}