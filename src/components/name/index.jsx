import { useState } from 'react';

const NameForm = ({ addName }) => {

  const [ nameInfo, setNameInfo ] = useState({ firstName: '', secondName: '', lastName: '', mothersLastName: '' });

  const handleChange = event => setNameInfo({ ...nameInfo, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    addName(nameInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>¿Cúal es tu nombre?</h2>
        <input
          type='text'
          name='firstName'
          placeholder='Nombre'
          value={nameInfo.firstName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='secondName'
          placeholder='Segundo nombre'
          value={nameInfo.secondName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          placeholder='Apellido paterno'
          value={nameInfo.lastName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='mothersLastName'
          placeholder='Apellido materno'
          value={nameInfo.mothersLastName}
          onChange={handleChange}
        />
        <button>Submit Contact</button>
      </form>
    </div>
  );
}

export default NameForm;