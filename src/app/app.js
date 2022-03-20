import { useState } from 'react';
import BirthDayData from '../components/bday-data';
import BirthDayFrom from '../components/birthday';
import ContactInfo from '../components/contact';
import ContactInfoData from '../components/contact-info-data';
import NameForm from '../components/name';
import NameData from '../components/name-data';
import { AppWrapper } from './app-styles';
import { GeneralBoxMessage } from '../styles/general-box-message';
import { FormsBox, BoxMessageWrapp } from '../styles/form-boxes';
import { StartBoxButton } from '../styles/boxes';
import { Header } from '../styles/form-wrapper';
import formLogo from '../assets/icons8-form-64.png';
import clockImage from '../assets/icons8-reloj-50.png';

const App = () => {
  const [ names, setNames ] = useState([]);
  const [ bDays, setDay ] = useState([]);
  const [ contactInfo, setContactInfo ] = useState([]);
  const [ showAllData, setshowAllData ] = useState(false);
  
  const addName = name => setNames( [...names, name] );
  const addBirthDay = bDay => setDay( [...bDays, bDay] );
  const addContactInfo = contactInf => setContactInfo( [...contactInfo, contactInf] );
  const displayData = () => setshowAllData(!showAllData);

  return (
    <AppWrapper>
      <Header>
        <div className='header-title-wrapper'>
          <h3>Chat Form App</h3>
          <img src={formLogo} alt='form logo'/>
        </div>
        <div className='header-text-wrapper'>
          <img src={clockImage} className='clock-logo' alt='clock'/>
          <p>En menos de 5 minutos</p>
        </div>
      </Header>
      <FormsBox>
        <NameForm addName={addName} />
        <BoxMessageWrapp>
          <NameData names={names} />
        </BoxMessageWrapp>
      </FormsBox>
      <FormsBox>
        <BirthDayFrom addBirthDay={addBirthDay} />
        <BoxMessageWrapp>
          <BirthDayData bDays={bDays} />
        </BoxMessageWrapp>
      </FormsBox>
      <FormsBox>
        <ContactInfo addContactInfo={addContactInfo} />
        <BoxMessageWrapp>
          <ContactInfoData contactInfo={contactInfo} />
        </BoxMessageWrapp>
      </FormsBox>
      <p>Si tus datos son correctos por favor continuemos</p>
      <StartBoxButton onClick= {displayData}>Iniciar</StartBoxButton>
      {
        showAllData && 
        <GeneralBoxMessage>
          <NameData names={names} />
          <BirthDayData bDays={bDays} />
          <ContactInfoData contactInfo={contactInfo} />
        </GeneralBoxMessage>
      }
    </AppWrapper>
  );
}

export default App;