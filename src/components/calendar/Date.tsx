import { css, useTheme } from '@emotion/react'

type Props = {
  month: number;
  day: number;
}
export const Date = ({ month, day }: Props) => {
  const theme = useTheme()

  const style = {
    date: css({
      display: 'inline-block',
      width: '14%',
      height: '100px',
      margin: '0 auto',
      background: theme.color.sub,
      userSelect: 'none',
      '&:hover': {
        background: theme.color.subHover,
      }
    })
  }  

  return (
    <div css={style.date}>
      {`${month}/${day}`}
    </div>
  )
}