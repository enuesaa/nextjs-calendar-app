import { css } from "@emotion/react"

const style = {
  date: css({
    display: 'inline-block',
    width: '14%',
    height: '100px',
    maegin: '0 auto',
    background: '#eeeeee',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.2)',
    }
  })
}

type Props = {
  month: number;
  day: number;
}
export const Date = ({ month, day }: Props) => {

  return (
    <div css={style.date}>
      {`${month}/${day}`}
    </div>
  )
}