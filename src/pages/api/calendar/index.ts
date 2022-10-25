import { NextApiResponse, NextApiRequest } from 'next'
import dayjs from 'dayjs'

const startDate = dayjs('2020-11-25')
const endDate = dayjs('2020-12-05')

for(let date=startDate; date<=endDate; date=date.add(1, 'day')){
  console.log(date.format('YYYY-MM-DD'))
}
type CalendarDate = {
  date: string;
}
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CalendarDate[]>
) {
  const daysInMonth = dayjs().daysInMonth()
  const dates: CalendarDate[] = [] 
  for (let i = 0; i < daysInMonth; i++) {
    dates.push({
      date: dayjs().date(i).toISOString()
    })
  }
  return res.status(200).json(dates)
}