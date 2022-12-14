import { css, useTheme } from '@emotion/react'

type Props = {
  month: number;
  date: number;
}
export const Date = ({ month, date }: Props) => {
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
      {`${month}/${date}`}
    </div>
  )
}