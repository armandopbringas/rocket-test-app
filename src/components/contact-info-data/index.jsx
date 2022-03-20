import { BoxMessage } from "../../styles/boxes";

export default function ContactInfoData({ contactInfo }) {
  return (
    <BoxMessage>
      {contactInfo.map(info => (
          <div key={contactInfo.phoneNumber} className='message-wrapp-contact'>
            <div className='message-wrapp-email'>
              <p>Correo electrónico:</p>
              <p>{info.email}</p>
            </div>
            <div className='message-wrapp-phone'>
              <p>Teléfono celular:</p>
              <p>{info.phoneNumber}</p>
            </div>
          </div>
        ))}
    </BoxMessage>
  );
}