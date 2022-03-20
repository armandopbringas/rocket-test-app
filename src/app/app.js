import { useState } from 'react';
import BirthDayData from '../components/bday-data';
import BirthDayFrom from '../components/birthday';
import ContactInfo from '../components/contact';
import ContactInfoData from '../components/contact-info-data';
import NameForm from '../components/name';
import NameData from '../components/name-data';
import { AppWrapper } from './app-styles';

const App = () => {
  const [ names, setNames ] = useState([]);
  const [ bDays, setDay ] = useState([]);
  const [ contactInfo, setContactInfo ] = useState([]);
  const [ showAllData, setshowAllData ] = useState(false);
  
  const addName = name => setNames( [...names, name] );
  const addBirthDay = bDay => setDay( [...bDays, bDay] );
  const addContactInfo = contactInf => setContactInfo( [...contactInfo, contactInf] );
  const onConditional = () => setshowAllData(!showAllData);

  return (
    <AppWrapper>
      <h3>Chat form app</h3>
      <NameForm addName={addName} />
      <NameData names={names} />
      <BirthDayFrom addBirthDay={addBirthDay} />
      <BirthDayData bDays={bDays} />
      <ContactInfo addContactInfo={addContactInfo} />
      <ContactInfoData contactInfo={contactInfo} />
      <p>Si tus datos son correctos por favor continuemos</p>
      <button onClick={onConditional}>Iniciar</button>
      {
        showAllData && 
        <div>
          <NameData names={names} />
          <BirthDayData bDays={bDays} />
          <ContactInfoData contactInfo={contactInfo} />
        </div>
      }
    </AppWrapper>
  );
}

export default App;