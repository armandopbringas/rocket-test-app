import { useState, useEffect  } from 'react';
import { FormWrapper } from '../../styles/form-wrapper';
import { BoxButton } from '../../styles/boxes';

const avatarImg = 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80';

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
      <img
        src={avatarImg}
        className='avatar-img'
        alt='avatar'
      />
      <form className='form' onSubmit={handleSubmit}>
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
        <BoxButton>
          <button>Enviar</button>
        </BoxButton>
      </form>
    </FormWrapper>
  );
}

export default NameForm;