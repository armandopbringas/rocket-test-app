import { useState } from 'react';
import BirthDayData from '../components/bday-data';
import BirthDayFrom from '../components/birthday';
import ContactInfo from '../components/contact';
import ContactInfoData from '../components/contact-info-data';
import NameForm from '../components/name';
import NameData from '../components/name-data';
import './app.css';

const App = () => {
  const [ names, setNames ] = useState([]);
  const [ bDays, setDay ] = useState([]);
  const [ contactInfo, setContactInfo ] = useState([]);

  const addName = name => setNames( [...names, name] );
  const addBirthDay = bDay => setDay( [...bDays, bDay] );
  const addContactInfo = contactInf => setContactInfo( [...contactInfo, contactInf] );

  return (
    <div className='app'>
      <h3>Chat form app</h3>
      <NameForm addName={addName} />
      <NameData names={names} />
      <BirthDayFrom addBirthDay={addBirthDay} />
      <BirthDayData bDays={bDays} />
      <ContactInfo addContactInfo={addContactInfo} />
      <ContactInfoData contactInfo={contactInfo} />
      <button>Iniciar</button>
    </div>
  );
}

export default App;