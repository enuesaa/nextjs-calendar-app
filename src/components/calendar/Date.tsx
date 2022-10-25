
type Props = {
  month: number;
  day: number;
}
export const Date = ({ month, day }: Props) => {

  return (
    <div>
      <span>{month}</span>
      <b>{day}</b>
    </div>
  )
}