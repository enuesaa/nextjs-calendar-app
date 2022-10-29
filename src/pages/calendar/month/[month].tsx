import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { Date } from '@/components/calendar/Date'

type CalendarDate = {
  month: number;
  day: number;
}

const MonthPage: NextPage = () => {
  const router = useRouter()
  const { month } = router.query // like 2022-10
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
      {month}
      {dates.map(v => (<Date month={v.month} day={v.day} />))}
    </>
  )
}

export default MonthPage
