import { BoxMessage } from "../../styles/boxes";

export default function NameData({ names }) {
  return (
    <BoxMessage>
      {names.map(name => (
          <div key={names.firstName} className='message-wrapp'>
            <p>{name.firstName}</p>
            <p>{name.secondName}</p>
            <p>{name.lastName}</p>
            <p>{name.mothersLastName}</p>
          </div>
        ))}
    </BoxMessage>
  );
}