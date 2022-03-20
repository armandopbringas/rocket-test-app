import { BoxMessage } from "../../styles/boxes";

export default function BirthDayData({ bDays }) {
  return (
    <BoxMessage>
      {bDays.map(item => (
          <div key={bDays.day} className='message-wrapp'>
            <p>{item.day}</p>
            <p>{item.month}</p>
            <p>{item.year}</p>
          </div>
        ))}
    </BoxMessage>
  );
}