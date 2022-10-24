import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const DatePage: NextPage = () => {
  const router = useRouter()
  const { date } = router.query

  return (
    <>
      {date}
    </>
  )
}

export default DatePage
