import { css, useTheme } from '@emotion/react'

type Props = {
  name: string;
}
export const DateHeader = ({ name }: Props) => {
  const theme = useTheme()

  const style = {
    date: css({
      display: 'inline-block',
      width: '14%',
      height: '20px',
      margin: '0 auto',
      textAlign: 'center',
      background: theme.color.sub,
      userSelect: 'none',
      '&:hover': {
        background: theme.color.subHover,
      }
    })
  }  

  return (
    <div css={style.date}>
      {name}
    </div>
  )
}