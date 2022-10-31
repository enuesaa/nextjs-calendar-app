import dayjs from 'dayjs'
import { css, useTheme } from '@emotion/react'
import { Date } from '@/components/calendar/Date'

type CalendarDate = {
  month: number;
  day: number;
}

type Props = {
  month: string;
}
export const Month = ({ month }: Props) => {
  const theme = useTheme()
  const style = {
    h3: css({
      width: '100%',
      fontSize: theme.fontSize.x2large,
      fontWeight: '600',
    }),
  }

  /** @todo refactor */
  const daysInMonth = dayjs(`${month}-01`).daysInMonth()
  const dates: CalendarDate[] = [] 
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      month: dayjs(`${month}-01`).date(i).month() + 1,
      day: dayjs(`${month}-01`).date(i).date(),
    })
  }

  return (
    <>
      <h3 css={style.h3}>{month}</h3>
      {dates.map(v => (
        <Date key={v.day} month={v.month} day={v.day} />
      ))}
    </>
  )
}