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
  const [ showAllData, setshowAllData ] = useState(false);
  
  const addName = name => setNames( [...names, name] );
  const addBirthDay = bDay => setDay( [...bDays, bDay] );
  const addContactInfo = contactInf => setContactInfo( [...contactInfo, contactInf] );
  const onConditional = () => setshowAllData(!showAllData);

  // let searchedTodos = [];

  // if (!searchValue.length >= 1) {
  //   searchedTodos = todos;
  // } else {
  //   searchedTodos = todos.filter(todo => {
  //     const todoText = todo.text.toLowerCase();
  //     const searchText = searchValue.toLowerCase();
  //     return todoText.includes(searchText);
  //   });
  // }

  // const saveTodos = (newTodos) => {
  //   const stringifiedTodos = JSON.stringify(newTodos);
  //   localStorage.setItem('TODOS_V1', stringifiedTodos);
  //   setTodos(newTodos);
  // };

  return (
    <div className='app'>
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
    </div>
  );
}

export default App;