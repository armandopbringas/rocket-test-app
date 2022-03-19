import { useState } from 'react';
import NameForm from '../components/name';
import NameData from '../components/name-data';
import './app.css';

const App = () => {
  const [ names, setNames ] = useState([]);
  const addName = name => setNames( [...names, name] );

  return (
    <>
      <h3>Chat form app</h3>
      <NameForm addName={addName} />
      <NameData names={names} />
    </>
  );
}

export default App;