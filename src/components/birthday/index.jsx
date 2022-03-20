import { useState, useEffect } from 'react';
import { FormWrapper } from '../../styles/form-wrapper';

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
      <form onSubmit={handleSubmit}>
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
        <button> send </button>
      </form>
    </FormWrapper>
  );
}

export default BirthDayFrom;