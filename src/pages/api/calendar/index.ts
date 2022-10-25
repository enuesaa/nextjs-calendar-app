import { NextApiResponse, NextApiRequest } from 'next'

type CalendarDate = {
  date: string;
}
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CalendarDate[]>
) {
  const dates: CalendarDate[] = [{date: '2022-10-25T00:00:00T09:00'}]
  return res.status(200).json(dates)
}