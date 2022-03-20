import { useState, useEffect } from 'react';
import { BoxButton } from '../../styles/boxes';
import { FormWrapper } from '../../styles/form-wrapper';

const avatarImg = 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80';

const getContactValues = () => {
	const storedContactData = localStorage.getItem('contactData');
	if (!storedContactData) return { email: '', phoneNumber: '' }
	return JSON.parse(storedContactData);
}

const ContactInfo = ({ addContactInfo }) => {
  const [ contactData, setcontactData ] = useState(getContactValues);

  useEffect(() => {
		localStorage.setItem('contactData', JSON.stringify(contactData));
	}, [contactData]);

  const handleSubmit = event => {
    event.preventDefault();
    addContactInfo(contactData);
  };

  const handleChange = event => setcontactData({ ...contactData, [event.target.name]: event.target.value });

  return (
    <FormWrapper>
      <img
        src={avatarImg} 
        className='avatar-img'
        alt='avatar'
      />
      <form className='form' onSubmit={handleSubmit}>
        <h2>Datos de contacto</h2>
        <input
          type='email'
          name='email'
          placeholder='Correo electónico'
          value={contactData.email}
          onChange={handleChange}
        />
        <input
          type='number'
          name='phoneNumber'
          placeholder='Número de teléfono'
          value={contactData.phoneNumber}
          onChange={handleChange}
        />
        <BoxButton>
          <button>Enviar</button>
        </BoxButton>
      </form>
    </FormWrapper>
  );
}

export default ContactInfo;