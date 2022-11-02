import dayjs from 'dayjs'
import { css, useTheme } from '@emotion/react'
import { Date } from '@/components/calendar/Date'
import { DateHeader } from '@/components/calendar/DateHeader'

type CalendarDate = {
  month: number;
  date: number;
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

  const firstDate = dayjs(`${month}-01`)
  const lastMonthDatesInFirstWeek: CalendarDate[] = []
  for (let i = 0; i < firstDate.day(); i++) {
    const date = firstDate.date(i - firstDate.day())
    lastMonthDatesInFirstWeek.push({ month: date.month() + 1, date: date.date() })
  }
  const dates: CalendarDate[] = [] 
  for (let i = 0; i <= firstDate.daysInMonth(); i++) {
    const date = firstDate.date(i+1)
    dates.push({ month: date.month() + 1, date: date.date() })
  }

  return (
    <>
      <h3 css={style.h3}>{month}</h3>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(v => (
        <DateHeader key={v} name={v} />
      ))}
      {lastMonthDatesInFirstWeek.map(v => (
        <Date key={v.date} month={v.month} date={v.date} />
      ))}
      {dates.map(v => (
        <Date key={v.date} month={v.month} date={v.date} />
      ))}
    </>
  )
}