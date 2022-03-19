import { useState } from 'react';

const BirthDayFrom = ({ addBirthDay }) => {

  const [ birthDay, setBirthDay ] = useState({ day: '', month: '', year: '' });

  const handleChange = event => setBirthDay({ ...birthDay, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    addBirthDay(birthDay);
    setBirthDay({ day: '', month: '', year: '' })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>¿Cúal es tu nombre?</h2>
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
          placeholder='Mes'
          value={birthDay.year}
          onChange={handleChange}
        />
        <button> send </button>
      </form>
    </div>
  );
}

export default BirthDayFrom;