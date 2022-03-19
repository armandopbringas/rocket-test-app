import { useState } from 'react';
import BirthDayData from '../components/bday-data';
import BirthDayFrom from '../components/birthday';
import NameForm from '../components/name';
import NameData from '../components/name-data';
import './app.css';

const App = () => {
  const [ names, setNames ] = useState([]);
  const [ bDays, setDay ] = useState([]);
  const addName = name => setNames( [...names, name] );
  const addBirthDay = bDay => setDay( [...bDays, bDay] );

  return (
    <>
      <h3>Chat form app</h3>
      <NameForm addName={addName} />
      <NameData names={names} />
      <BirthDayFrom addBirthDay={addBirthDay} />
      <BirthDayData bDays={bDays} />
    </>
  );
}

export default App;