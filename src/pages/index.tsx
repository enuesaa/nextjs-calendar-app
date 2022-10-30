import type { NextPage } from 'next'
import dayjs from 'dayjs'
import { Date } from '@/components/calendar/Date'
import { HtmlHead } from '@/components/common/HtmlHead'
import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Footer } from '@/components/common/Footer'

type CalendarDate = {
  month: number;
  day: number;
}
const TopPage: NextPage = () => {
  const daysInMonth = dayjs(`2022-10-01`).daysInMonth()
  const dates: CalendarDate[] = [] 
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      month: dayjs(`2022-10-01`).date(i).month() + 1,
      day: dayjs(`2022-10-01`).date(i).date(),
    })
  }

  return (
    <>
      <HtmlHead />
      <Header />
      <Main>
        2022-10
        {dates.map(v => (<Date month={v.month} day={v.day} />))}
      </Main>
      <Footer />
    </>
  )
}

export default TopPage
