import { useState } from 'react';

const ContactInfo = ({ addContactInfo }) => {

  const [ contactData, setcontactData ] = useState({ email: '', phoneNumber: '' });

  const handleChange = event => setcontactData({ ...contactData, [event.target.name]: event.target.value });

  const handleSubmit = event => {
    event.preventDefault();
    addContactInfo(contactData);
    setcontactData({ email: '', phoneNumber: '' })
  };

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