import { useState, useEffect } from 'react';
import { BoxButton } from '../../styles/boxes';
import { FormWrapper } from '../../styles/form-wrapper';

const avatarImg = 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80';

const getBdayValues = () => {
	const storedBdayData = localStorage.getItem('birthDay');
	if (!storedBdayData) return { day: '', month: '', year: '' }
	return JSON.parse(storedBdayData);
}

const BirthDayFrom = ({ addBirthDay }) => {
  const [ birthDay, setBirthDay ] = useState(getBdayValues);

  useEffect(() => {
		localStorage.setItem('birthDay', JSON.stringify(birthDay));
	}, [birthDay]);

  const handleSubmit = event => {
    event.preventDefault();
    addBirthDay(birthDay);
  };

  const handleChange = event => setBirthDay({ ...birthDay, [event.target.name]: event.target.value });

  return (
    <FormWrapper>
      <img
        src={avatarImg}
        className='avatar-img'
        alt='avatar'
      />
      <form className='form' onSubmit={handleSubmit}>
        <h2>¿Cúal es tu fecha de nacimeinto?</h2>
        <input
          type='number'
          name='day'
          placeholder='Día'
          value={birthDay.day}
          onChange={handleChange}
        />
        <input
          type='text'
          name='month'
          placeholder='Mes'
          value={birthDay.month}
          onChange={handleChange}
        />
        <input
          type='number'
          name='year'
          placeholder='Año'
          value={birthDay.year}
          onChange={handleChange}
        />
        <BoxButton>
          <button>Enviar</button>
        </BoxButton>
      </form>
    </FormWrapper>
  );
}

export default BirthDayFrom;