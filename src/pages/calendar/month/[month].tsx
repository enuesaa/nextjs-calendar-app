import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { HtmlHead } from '@/components/common/HtmlHead'
import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Month } from '@/components/calendar/Month'

const MonthPage: NextPage = () => {
  const router = useRouter()
  const { month } = router.query // like 2022-10
  if (month === undefined || Array.isArray(month)) {
    return (<></>)
  }

  return (
    <>
      <HtmlHead />
      <Header />
      <Main>
        <Month month={month} />
      </Main>
    </>
  )
}

export default MonthPage
