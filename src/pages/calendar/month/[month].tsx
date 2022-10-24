import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const MonthPage: NextPage = () => {
  const router = useRouter()
  const { month } = router.query

  return (
    <>
      {month}
    </>
  )
}

export default MonthPage
