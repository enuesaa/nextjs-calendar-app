import type { NextPage } from 'next'
import { HtmlHead } from '@/components/common/HtmlHead'
import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Month } from '@/components/calendar/Month'

const TopPage: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <Header />
      <Main>
        <Month month='2022-10' />
      </Main>
    </>
  )
}

export default TopPage
