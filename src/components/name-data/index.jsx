export default function NameData({ names }) {
  return (
    <div>
      {names.map(name => (
          <div>
            <span>{name.firstName}</span>
            <span>{name.secondName}</span>
            <span>{name.lastName}</span>
            <span>{name.mothersLastName}</span>
          </div>
        ))}
    </div>
  );
}