export default function BirthDayData({ bDays }) {
  return (
    <div>
      {bDays.map(item => (
          <div>
            <span>{item.day}</span>
            <span>{item.month}</span>
            <span>{item.year}</span>
          </div>
        ))}
    </div>
  );
}