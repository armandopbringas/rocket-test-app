import { useState, useEffect } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>send</button>
      </form>
    </div>
  );
}

export default ContactInfo;