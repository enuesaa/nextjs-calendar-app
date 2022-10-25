import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

type CalendarDate = {
  date: string
}

const MonthPage: NextPage = () => {
  const router = useRouter()
  const { month } = router.query
  const daysInMonth = dayjs(`${month}-01`).daysInMonth()
  const dates: CalendarDate[] = [] 
  for (let i = 0; i < daysInMonth; i++) {
    dates.push({
      date: dayjs(`${month}-01`).date(i).toISOString()
    })
  }

  return (
    <>
      {month}
      {dates.map(v => v.date)}
    </>
  )
}

export default MonthPage
