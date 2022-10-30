import dayjs from 'dayjs'
import { css } from '@emotion/react'
import { Date } from '@/components/calendar/Date'

const style = {
  h3: css({
    width: '100%',
    fontSize: '30px',
    fontWeight: '600',
  }),
}

type CalendarDate = {
  month: number;
  day: number;
}

type Props = {
  month: string;
}
export const Month = ({ month }: Props) => {
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