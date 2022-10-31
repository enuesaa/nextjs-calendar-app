import Link from 'next/link'
import { css, useTheme } from '@emotion/react'

export const Header = () => {
  const theme = useTheme()

  const style = {
    header: css({
      width: '100vw',
      color: theme.color.contrast,
      background: theme.color.sub,
    }),
    headerInner: css({
      margin: '0 auto',
      width: '96%',
      maxWidth: '1000px',
    }),
    topLink: css({
      display: 'inline-block',
      fontSize: theme.fontSize.normal,
      cursor: 'pointer',
    }),
    h1: css({
      fontSize: theme.fontSize.xlarge,
      margin: '0',
      lineHeight: '1.2',
      padding: '10px 16px',
      '&:hover': {
        background: theme.color.subHover,
      },
    }),
  } 

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