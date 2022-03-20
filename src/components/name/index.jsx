import { useState, useEffect  } from 'react';
import { FormWrapper } from '../../styles/form-wrapper';

const getNameValues = () => {
	const storedNameData = localStorage.getItem('nameInfo');
	if (!storedNameData) return { firstName: '', secondName: '', lastName: '', mothersLastName: '' }
	return JSON.parse(storedNameData);
}

const NameForm = ({ addName }) => {
  const [ nameInfo, setNameInfo ] = useState(getNameValues);

  useEffect(() => {
		localStorage.setItem('nameInfo', JSON.stringify(nameInfo));
	}, [nameInfo]);

  const handleSubmit = event => {
    event.preventDefault();
    addName(nameInfo);
  }

  const handleChange = event => setNameInfo({ ...nameInfo, [event.target.name]: event.target.value });

  return (
    <FormWrapper>
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
        <button>Send</button>
      </form>
    </FormWrapper>
  );
}

export default NameForm;