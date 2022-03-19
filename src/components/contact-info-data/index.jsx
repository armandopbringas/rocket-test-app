export default function ContactInfoData({ contactInfo }) {
  return (
    <div>
      {contactInfo.map(info => (
          <div>
            <span>{info.email}</span>
            <span>{info.phoneNumber}</span>
            <p>Si tus datos son correctos por favor continuemos</p>
          </div>
        ))}
    </div>
  );
}